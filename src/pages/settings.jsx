import { Link } from 'react-router-dom'
import { useSettings } from '../hooks/usesettings'
import { storage } from '../utils/storage'
import { HSK_LEVELS } from '../constants/hsklevels'
import { QUIZ_TYPES, QUIZ_TYPE_LABELS, QUIZ_LENGTHS } from '../constants/quiztypes'

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${
        checked ? 'bg-primary-600' : 'bg-white/10'
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? 'translate-x-5' : ''
        }`}
      />
    </button>
  )
}

function Row({ label, desc, children }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-surface-border last:border-0 gap-4">
      <div className="min-w-0">
        <div className="text-white/80 text-sm font-medium">{label}</div>
        {desc && <div className="text-white/30 text-xs mt-0.5">{desc}</div>}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  )
}

function Stepper({ value, min, max, step = 1, onChange, suffix = '' }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(min, value - step))}
        className="btn-ghost px-2 py-1 text-sm"
      >−</button>
      <span className="text-white font-semibold w-12 text-center text-sm">{value}{suffix}</span>
      <button
        onClick={() => onChange(Math.min(max, value + step))}
        className="btn-ghost px-2 py-1 text-sm"
      >+</button>
    </div>
  )
}

export function Settings() {
  const { settings, updateSetting, resetSettings } = useSettings()

  function clearAllData() {
    if (window.confirm('Hapus SEMUA data progress, streak, dan log? Tindakan ini tidak bisa dibatalkan.')) {
      storage.clear()
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
      <h1 className="font-display text-3xl font-extrabold mb-8">Pengaturan</h1>

      {/* ── Belajar ── */}
      <section className="card p-5 mb-5">
        <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-1">Belajar</h2>

        <Row label="Target harian" desc="Kata yang ingin dipelajari setiap hari">
          <Stepper
            value={settings.dailyTarget}
            min={5} max={100} step={5}
            onChange={(v) => updateSetting('dailyTarget', v)}
          />
        </Row>

        <Row label="Level favorit" desc="Level default saat membuka flash card atau kuis">
          <select
            value={settings.preferredLevel}
            onChange={(e) => updateSetting('preferredLevel', Number(e.target.value))}
            className="input py-1.5 text-sm w-auto"
          >
            {HSK_LEVELS.map((l) => (
              <option key={l.level} value={l.level}>{l.name}</option>
            ))}
          </select>
        </Row>
      </section>

      {/* ── Flash Card ── */}
      <section className="card p-5 mb-5">
        <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-1">Flash Card</h2>

        <Row label="Tampilkan Pinyin" desc="Pinyin muncul di sisi depan kartu">
          <Toggle checked={settings.showPinyin} onChange={(v) => updateSetting('showPinyin', v)} />
        </Row>

        <Row label="Tampilkan Contoh" desc="Contoh kalimat ditampilkan saat kartu dibalik">
          <Toggle checked={settings.showContoh} onChange={(v) => updateSetting('showContoh', v)} />
        </Row>

        <Row label="Auto-flip" desc="Kartu dibalik otomatis setelah beberapa detik">
          <Toggle checked={settings.autoFlip} onChange={(v) => updateSetting('autoFlip', v)} />
        </Row>

        {settings.autoFlip && (
          <Row label="Delay auto-flip" desc="Berapa detik sebelum kartu dibalik">
            <Stepper
              value={settings.autoFlipDelay}
              min={1} max={10} step={1}
              suffix="s"
              onChange={(v) => updateSetting('autoFlipDelay', v)}
            />
          </Row>
        )}
      </section>

      {/* ── Kuis ── */}
      <section className="card p-5 mb-5">
        <h2 className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-1">Kuis</h2>

        <Row label="Jumlah soal default" desc="Soal per sesi kuis">
          <div className="flex gap-1.5">
            {QUIZ_LENGTHS.map((n) => (
              <button
                key={n}
                onClick={() => updateSetting('quizSize', n)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  settings.quizSize === n
                    ? 'bg-primary-600 text-white'
                    : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </Row>

        <Row label="Tipe soal default">
          <select
            value={settings.quizType}
            onChange={(e) => updateSetting('quizType', e.target.value)}
            className="input py-1.5 text-sm w-auto"
          >
            {Object.entries(QUIZ_TYPE_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </Row>
      </section>

      {/* ── Danger Zone ── */}
      <section className="card p-5 border-red-900/30">
        <h2 className="text-red-400/60 text-[10px] font-semibold tracking-widest uppercase mb-1">Zona Berbahaya</h2>

        <Row label="Reset pengaturan" desc="Kembalikan semua pengaturan ke nilai default">
          <button onClick={resetSettings} className="btn-ghost text-xs px-3 py-1.5">Reset</button>
        </Row>

        <Row label="Hapus semua data" desc="Hapus seluruh progress, streak, dan log belajar">
          <button
            onClick={clearAllData}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-900/30 text-red-400 border border-red-900/40 hover:bg-red-900/50 transition-colors"
          >
            Hapus Data
          </button>
        </Row>
      </section>
    </div>
  )
}
