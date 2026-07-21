import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HSK_LEVELS } from '../constants/hsklevels'
import { QUIZ_TYPES, QUIZ_TYPE_LABELS, QUIZ_LENGTHS } from '../constants/quiztypes'
import { hskData, topicLabelsByLevel, getConfusablesByLevel } from '../data'
import { getUsableConfusableGroups, sample, shuffle } from '../utils/quizgenerator'
import { useQuiz } from '../hooks/usequiz'
import { useProgress } from '../hooks/useprogress'
import { useStreak } from '../hooks/usestreak'
import { useSettings } from '../hooks/usesettings'
import { useSRS } from '../hooks/usesrs'
import { useAuthContext } from '../context/authcontext'
import { storage, STORAGE_KEYS, upsertData } from '../utils/storage'
import { AudioButton } from '../components/ui/audiobutton'
import { QuizCard } from '../components/quiz/quizcard'
import { ConfusableQuiz } from '../components/quiz/confusablequiz'
import { checkAchievements, ACHIEVEMENT_MAP, XP_REWARDS } from '../utils/achievements'
import { initTTS } from '../utils/tts'

initTTS()

function _addXP(amount, userId) {
  const xp   = storage.get(STORAGE_KEYS.XP, { total: 0 })
  const next = { ...xp, total: (xp.total || 0) + amount }
  storage.set(STORAGE_KEYS.XP, next)
  if (userId) {
    upsertData('user_xp', { user_id: userId, total: next.total })
      .catch(e => console.warn('[xp quiz] sync:', e))
  }
}

function _saveQuizHistory(entry) {
  const hist = storage.get(STORAGE_KEYS.QUIZ_HISTORY, [])
  const next = [entry, ...hist].slice(0, 100)
  storage.set(STORAGE_KEYS.QUIZ_HISTORY, next)
  return next
}

// Cek & unlock achievement, mirror pola yang sama di useprogress.js/usestreak.js/dst
function _checkAndUnlock(state, userId) {
  const current    = storage.get(STORAGE_KEYS.ACHIEVEMENTS, {})
  const currentIds = new Set(Object.keys(current))
  const newIds     = checkAchievements({ ...state, unlockedIds: currentIds })
  if (newIds.length === 0) return

  const now  = Date.now()
  const next = { ...current }
  let totalXp = 0
  const newAchs = []

  for (const id of newIds) {
    next[id] = { unlockedAt: now }
    const ach = ACHIEVEMENT_MAP[id]
    if (ach) { totalXp += ach.xp || 0; newAchs.push(ach) }
  }

  storage.set(STORAGE_KEYS.ACHIEVEMENTS, next)
  if (totalXp > 0) _addXP(totalXp, userId)

  if (userId) {
    const rows = newIds.map(id => ({
      user_id: userId,
      achievement_id: id,
      unlocked_at: new Date(now).toISOString(),
    }))
    upsertData('user_achievements', rows, 'user_id,achievement_id').catch(e => console.warn('[ach quiz] sync:', e))
  }

  window.dispatchEvent(new CustomEvent('hsk:achievement', { detail: newAchs }))
}

// Susun kataList kuis: kata yang "due" untuk SRS ditaruh duluan (dijamin
// kepakai selama cukup slot), sisanya diisi random dari sisa vocab supaya
// tetap genap sejumlah `count`. Kalau tidak ada kata due sama sekali, atau
// prioritas SRS dimatikan, ya balik ke seluruh vocab biasa (random polos).
function buildPrioritizedKataList(vocab, dueWords, count) {
  if (!dueWords || dueWords.length === 0) return vocab
  const priorityCount = Math.min(dueWords.length, count)
  const prioritySelected = sample(dueWords, priorityCount)
  const dueIds = new Set(prioritySelected.map((w) => w.id))
  const rest = vocab.filter((w) => !dueIds.has(w.id))
  const remainingCount = Math.max(count - prioritySelected.length, 0)
  const fillSelected = sample(rest, Math.min(remainingCount, rest.length))
  return shuffle([...prioritySelected, ...fillSelected])
}

const LEVEL_EMOJIS = ['🌱','🌿','🌳','🎋','🎍']

export function Quiz() {
  const { settings }   = useSettings()
  const { userId } = useAuthContext()
  const { logActivity, reviewSRS, progress, unmarkMastered } = useProgress(userId)
  const { recordActivity } = useStreak(userId)
  const { getDue, GRADE } = useSRS(userId)

  const [selectedLevel, setSelectedLevel] = useState(settings.preferredLevel || 1)
  const [selectedType,  setSelectedType]  = useState(settings.quizType || QUIZ_TYPES.HANZI_TO_INDO)
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [selectedCount, setSelectedCount] = useState(settings.quizSize || 20)
  const [prioritizeSRS, setPrioritizeSRS] = useState(false)
  const [answered,      setAnswered]      = useState(null)

  const vocab = hskData[selectedLevel] || []
  const lvl   = HSK_LEVELS.find(l => l.level === selectedLevel) || HSK_LEVELS[0]

  // Topik tersedia untuk level ini (kosong kalau levelnya belum punya field `topic`)
  const topicLabels  = topicLabelsByLevel[selectedLevel] || {}
  const hasTopics     = Object.keys(topicLabels).length > 0

  // Kata yang jadi SUMBER SOAL: difilter topik kalau ada filter aktif.
  // Distraktor tetap diambil dari seluruh `vocab` level ini (pool) supaya tetap variatif.
  const topicFilteredVocab = (hasTopics && selectedTopic !== 'all')
    ? vocab.filter(w => w.topic === selectedTopic)
    : vocab

  // Grup Kata Ketuker untuk level ini
  const confusableGroups       = getConfusablesByLevel(selectedLevel)
  const usableConfusableGroups = getUsableConfusableGroups(confusableGroups)

  const isConfusable = selectedType === QUIZ_TYPES.CONFUSABLE

  // Kata yang due untuk direview (SRS) dalam cakupan topik yang aktif —
  // hanya relevan untuk tipe soal MC biasa, bukan Kata Ketuker.
  const dueWords = (!isConfusable && prioritizeSRS) ? getDue(topicFilteredVocab) : []

  // kataList final yang dipakai untuk generate soal (sumber soal, BUKAN sumber distraktor)
  const filteredVocab = (!isConfusable && prioritizeSRS)
    ? buildPrioritizedKataList(topicFilteredVocab, dueWords, selectedCount)
    : topicFilteredVocab

  // Reset topik kalau ganti level (kategori topic beda per level)
  useEffect(() => {
    setSelectedTopic('all')
  }, [selectedLevel])

  // Kalau pindah ke level yang confusable-nya belum ada, jangan biarkan
  // tipe soal "Kata Ketuker" masih terpilih tanpa data
  useEffect(() => {
    if (selectedType === QUIZ_TYPES.CONFUSABLE && usableConfusableGroups.length === 0) {
      setSelectedType(QUIZ_TYPES.HANZI_TO_INDO)
    }
  }, [selectedLevel]) // eslint-disable-line react-hooks/exhaustive-deps

  const { started, finished, currentQuestion, total, score, current, answers, start, answer, reset } =
    useQuiz({
      vocab: filteredVocab,
      pool: vocab,
      groups: confusableGroups,
      type: selectedType,
      count: selectedCount,
    })

  const canStart = isConfusable
    ? usableConfusableGroups.length >= 1
    : filteredVocab.length >= 1 && vocab.length >= 4

  // Guard supaya history/XP/achievement cuma disimpan SEKALI per sesi kuis yang
  // selesai. Direset manual tiap kali kuis (di)mulai — bukan lewat effect [started]
  // karena 'started' tetap true saat "Ulangi" (cuma start() dipanggil ulang),
  // jadi effect ber-dependency [started] gak akan re-fire di kasus itu.
  const savedRef = useRef(false)

  function beginQuiz() {
    savedRef.current = false
    start()
  }

  // Otomatis simpan hasil kuis + cek achievement begitu kuis selesai — TIDAK
  // menunggu user klik "Ulangi"/"Ganti Pengaturan" lagi (bug lama: kalau user
  // klik "Beranda" atau nutup tab abis kuis kelar, hasilnya dulu gak pernah
  // kesimpen sama sekali).
  useEffect(() => {
    if (!finished || savedRef.current || total === 0) return
    savedRef.current = true

    const pct = Math.round((score / total) * 100)
    if (pct === 100) _addXP(XP_REWARDS.QUIZ_PERFECT, userId)

    const newHistory = _saveQuizHistory({ score, total, type: selectedType, level: selectedLevel, pct, date: Date.now() })

    const progress       = storage.get(STORAGE_KEYS.PROGRESS, {})
    const streak          = storage.get(STORAGE_KEYS.STREAK, { count: 0 })
    const dailyLog        = storage.get(STORAGE_KEYS.DAILY_LOG, {})
    const bookmarks       = storage.get(STORAGE_KEYS.BOOKMARKS, [])
    const grammar         = storage.get(STORAGE_KEYS.GRAMMAR, {})
    const tasks           = storage.get(STORAGE_KEYS.TASKS, {})
    const confusables      = storage.get(STORAGE_KEYS.CONFUSABLES, {})
    const dailyTarget     = storage.get(STORAGE_KEYS.SETTINGS, {})?.dailyTarget || 20
    const srsReviewCount  = Object.keys(storage.get(STORAGE_KEYS.SRS, {})).length
    _checkAndUnlock({ progress, streak, dailyLog, bookmarks, quizHistory: newHistory, grammar, tasks, confusables, dailyTarget, srsReviewCount }, userId)
  }, [finished]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleStart() {
    beginQuiz()
  }

  function handleAnswer(selected) {
    if (answered !== null) return
    setAnswered({ selected })
    const correct = selected === currentQuestion.jawaban
    // ID kata untuk update kartu SRS — soal MC biasa punya `kata.id`,
    // soal Kata Ketuker punya `vocabId` (bisa null kalau item confusable-nya
    // tidak terhubung ke satu entri vocab spesifik, mis. gabungan beberapa kata).
    const wordId = currentQuestion.kata?.id || currentQuestion.vocabId || null
    setTimeout(() => {
      answer(selected)
      setAnswered(null)
      logActivity(1, correct ? 1 : 0)

      if (correct) {
        recordActivity()
        if (wordId) reviewSRS(wordId, GRADE.GOOD)
      } else if (wordId) {
        // Kalau kata ini sebelumnya sudah ditandai "mastered" tapi dijawab
        // salah di kuis, otomatis unmark. unmarkMastered() di useprogress.js
        // sudah menangani update kartu SRS (grade WRONG) + clawback XP sendiri,
        // jadi JANGAN panggil reviewSRS() lagi di sini — kalau dobel, kartu SRS
        // kata ini bakal ke-update dua kali untuk satu jawaban yang sama.
        const lvlPrg      = progress[selectedLevel] || { mastered: [] }
        const wasMastered = lvlPrg.mastered?.includes(wordId)
        if (wasMastered) {
          unmarkMastered(selectedLevel, wordId)
        } else {
          reviewSRS(wordId, GRADE.WRONG)
        }
      }
    }, 900)
  }

  // ── Setup ──
  if (!started) {
    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
        <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
        <h1 className="font-display text-3xl font-extrabold mb-1">Kuis</h1>
        <p className="text-white/35 text-sm mb-8">Pilih level, tipe soal, dan jumlah soal</p>

        <p className="section-label mb-3">Level</p>
        <div className="grid grid-cols-5 gap-2 mb-7">
          {HSK_LEVELS.map((l, i) => (
            <button key={l.level} onClick={() => setSelectedLevel(l.level)}
              className={`card p-3 text-center transition-all duration-200 ${selectedLevel === l.level ? 'border-white/25 bg-white/5' : 'hover:border-white/15'}`}>
              <div className="text-xl mb-1">{LEVEL_EMOJIS[i]}</div>
              <div className="text-xs font-bold" style={{ color: l.warnaHex }}>{l.name}</div>
            </button>
          ))}
        </div>

        {hasTopics && (
          <div className="mb-7">
            <p className="section-label mb-3">Topik (opsional)</p>
            <select
              className="input w-full"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              <option value="all">Semua Topik</option>
              {Object.entries(topicLabels).map(([key, label]) => (
                <option key={key} value={key}>{label.id}</option>
              ))}
            </select>
          </div>
        )}

        <p className="section-label mb-3">Tipe Soal</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          {Object.entries(QUIZ_TYPE_LABELS).map(([key, label]) => {
            const isConfusableTile = key === QUIZ_TYPES.CONFUSABLE
            const tileDisabled = isConfusableTile && usableConfusableGroups.length === 0
            return (
              <button
                key={key}
                onClick={() => !tileDisabled && setSelectedType(key)}
                disabled={tileDisabled}
                className={`card p-3.5 text-left text-sm flex items-center gap-3 transition-all duration-200 ${
                  tileDisabled ? 'opacity-30 cursor-not-allowed' :
                  selectedType === key ? 'border-primary-600/50 bg-primary-600/8' : 'hover:border-white/15'
                }`}
              >
                <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${selectedType === key ? 'border-primary-500 bg-primary-500' : 'border-white/20'}`} />
                <span className="text-white/70">
                  {label}
                  {tileDisabled && <span className="text-white/25 text-xs ml-1.5">(belum tersedia)</span>}
                </span>
              </button>
            )
          })}
        </div>

        {!isConfusable && (
          <div className="mb-7">
            <label className={`card p-3.5 flex items-center gap-3 text-sm transition-all duration-200 ${topicFilteredVocab.length === 0 ? 'opacity-40' : 'cursor-pointer hover:border-white/15'}`}>
              <input
                type="checkbox"
                checked={prioritizeSRS}
                onChange={(e) => setPrioritizeSRS(e.target.checked)}
                className="w-4 h-4 accent-primary-600 flex-shrink-0"
              />
              <span className="text-white/70 flex-1">
                Prioritaskan kata yang perlu direview
                <span className="text-white/30 text-xs block mt-0.5">Berdasarkan jadwal Spaced Repetition (SRS)</span>
              </span>
              {prioritizeSRS && (
                <span className="badge badge-level-1 flex-shrink-0">
                  {dueWords.length} due
                </span>
              )}
            </label>
          </div>
        )}

        <p className="section-label mb-3">Jumlah Soal</p>
        <div className="flex gap-2 mb-8">
          {QUIZ_LENGTHS.map(n => (
            <button key={n} onClick={() => setSelectedCount(n)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedCount === n ? 'bg-primary-600 text-white' : 'card text-white/40 hover:text-white hover:border-white/20'}`}>
              {n}
            </button>
          ))}
        </div>

        <button onClick={handleStart} disabled={!canStart} className="btn-primary w-full py-3 text-base">
          Mulai Kuis →
        </button>
      </div>
    )
  }

  // ── Results ──
  if (finished) {
    const pct   = Math.round((score / total) * 100)
    const grade = pct >= 90 ? '🏆' : pct >= 70 ? '🎯' : pct >= 50 ? '📖' : '💪'
    const msg   = pct >= 90 ? 'Luar Biasa!' : pct >= 70 ? 'Bagus Sekali!' : pct >= 50 ? 'Terus Semangat!' : 'Ayo Latihan Lagi!'

    return (
      <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-bounce-in">
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">{grade}</div>
          <h2 className="font-display text-3xl font-extrabold mb-1">{msg}</h2>
          <p className="text-white/35 text-sm">{QUIZ_TYPE_LABELS[selectedType]}</p>
          {pct === 100 && <p className="text-gold-400 text-sm mt-1 font-semibold">+{XP_REWARDS.QUIZ_PERFECT} XP bonus sempurna! 🎉</p>}
        </div>

        <div className="card p-6 text-center mb-6">
          <div className="font-display text-7xl font-extrabold text-gradient-red mb-1">{pct}%</div>
          <div className="text-white/35 text-sm">{score} benar dari {total} soal</div>
          <div className="progress-track mt-4">
            <div className="progress-fill transition-all duration-1000" style={{ width:`${pct}%` }} />
          </div>
        </div>

        <div className="mb-6">
          <p className="section-label mb-3">Review Jawaban</p>
          <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
            {answers.map((a, i) => {
              const isConfusableAnswer = a.question.type === QUIZ_TYPES.CONFUSABLE
              return (
                <div key={i} className={`card p-3 flex items-center gap-3 text-sm ${a.correct ? 'border-green-400/20 bg-green-400/5' : 'border-red-400/20 bg-red-400/5'}`}>
                  <span className={`text-sm font-bold ${a.correct ? 'text-green-400' : 'text-red-400'}`}>{a.correct ? '✓' : '✗'}</span>
                  {isConfusableAnswer ? (
                    <>
                      <span className="font-hanzi text-xl text-white/80">{a.question.jawaban}</span>
                      <span className="text-white/35 flex-1 truncate text-xs">{a.question.groupTitle}</span>
                    </>
                  ) : (
                    <>
                      <span className="font-hanzi text-xl text-white/80">{a.question.kata?.hanzi}</span>
                      <span className="text-white/35 flex-1 truncate text-xs">{a.question.kata?.arti}</span>
                      <AudioButton text={a.question.kata?.hanzi || ''} size="sm" ghost />
                    </>
                  )}
                  {!a.correct && <span className="text-red-400/50 text-xs truncate max-w-20">{a.selectedJawaban}</span>}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <button onClick={() => beginQuiz()} className="btn-primary">🔄 Ulangi</button>
          <button onClick={() => reset()} className="btn-ghost">Ganti Pengaturan</button>
          <Link to="/" className="btn-ghost">Beranda</Link>
        </div>
      </div>
    )
  }

  // ── Active Quiz ──
  const q = currentQuestion
  if (!q) return null

  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <button onClick={reset} className="btn-ghost text-sm px-3 py-1.5">← Berhenti</button>
        <div className="flex items-center gap-3">
          <span className="text-white/35 text-sm">{current + 1} / {total}</span>
          <span className="text-green-400 text-sm font-bold">{answers.filter(a => a.correct).length} ✓</span>
        </div>
      </div>

      <div className="h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500"
          style={{ width:`${(current/total)*100}%`, background:'linear-gradient(90deg,#ed1515,#f59e0b)' }} />
      </div>

      {isConfusable ? (
        <ConfusableQuiz question={q} onAnswer={handleAnswer} answered={answered} />
      ) : (
        <QuizCard
          question={q}
          onAnswer={handleAnswer}
          answered={answered}
          typeLabel={QUIZ_TYPE_LABELS[selectedType]}
          levelColor={lvl.warnaHex}
        />
      )}
    </div>
  )
}