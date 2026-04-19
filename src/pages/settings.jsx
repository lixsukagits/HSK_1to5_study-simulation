import { Link } from 'react-router-dom'
import { useSettings } from '../hooks/usesettings'
import { storage, STORAGE_KEYS } from '../utils/storage'
import { HSK_LEVELS } from '../constants/hsklevels'
import { QUIZ_TYPES, QUIZ_TYPE_LABELS, QUIZ_LENGTHS } from '../constants/quiztypes'
import { useAuthContext } from '../context/authcontext'

function Toggle({ checked, onChange, label }) {
  return (
    <button onClick={() => onChange(!checked)} aria-label={label}
      className="relative flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-300"
      style={{ background: checked ? '#ed1515' : 'rgba(127,127,127,0.2)' }}>
      <span className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300"
        style={{ transform: checked ? 'translateX(20px)' : 'translateX(0)' }} />
    </button>
  )
}

function Row({ label, desc, children }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-surface-border last:border-0 gap-6">
      <div className="min-w-0">
        <div className="text-sm font-medium" style={{ color: 'inherit' }}>{label}</div>
        {desc && <div className="text-white/30 text-xs mt-0.5 leading-relaxed">{desc}</div>}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  )
}

function Stepper({ value, min, max, step = 1, onChange, suffix = '' }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => onChange(Math.max(min, value - step))} className="btn-ghost px-2.5 py-1 text-sm">−</button>
      <span className="font-bold w-12 text-center text-sm">{value}{suffix}</span>
      <button onClick={() => onChange(Math.min(max, value + step))} className="btn-ghost px-2.5 py-1 text-sm">+</button>
    </div>
  )
}

function exportData() {
  const keys = Object.values(STORAGE_KEYS)
  const data = {}
  const prefix = 'hsk_'
  keys.forEach(k => {
    const raw = localStorage.getItem(prefix + k)
    if (raw) data[k] = JSON.parse(raw)
  })
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url; a.download = `hsk-backup-${new Date().toISOString().slice(0,10)}.json`; a.click()
  URL.revokeObjectURL(url)
}

function importData(file, onDone) {
  const reader = new FileReader()
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result)
      const prefix = 'hsk_'
      Object.entries(data).forEach(([k, v]) => localStorage.setItem(prefix + k, JSON.stringify(v)))
      onDone(true)
    } catch { onDone(false) }
  }
  reader.readAsText(file)
}

export function Settings() {
  const { userId } = useAuthContext()
  const { settings, updateSetting, resetSettings } = useSettings(userId)

  function clearAllData() {
    if (window.confirm('Hapus SEMUA data progress, streak, SRS, dan log belajar?\n\nTindakan ini tidak bisa dibatalkan.')) {
      storage.clear()
      window.location.reload()
    }
  }

  function resetSRS() {
    if (window.confirm('Reset data SRS?\nProgress dan kata yang dikuasai tidak akan terhapus.')) {
      storage.remove(STORAGE_KEYS.SRS)
      alert('Data SRS berhasil direset.')
    }
  }

  function handleImport(e) {
    const file = e.target.files?.[0]
    if (!file) return
    importData(file, ok => {
      if (ok) { alert('Backup berhasil diimpor! Halaman akan dimuat ulang.'); window.location.reload() }
      else alert('Gagal mengimpor — pastikan file backup valid.')
    })
    e.target.value = ''
  }

  const hanziSizes = [
    { key: 'sm', label: 'Kecil',   preview: 'text-xl' },
    { key: 'md', label: 'Normal',  preview: 'text-2xl' },
    { key: 'lg', label: 'Besar',   preview: 'text-3xl' },
    { key: 'xl', label: 'Sangat Besar', preview: 'text-4xl' },
  ]

  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto animate-fade-in">
      <Link to="/" className="btn-ghost mb-6 inline-flex text-sm px-3 py-1.5">← Kembali</Link>
      <h1 className="font-display text-3xl font-extrabold mb-8">Pengaturan</h1>

      {/* ── Tampilan ── */}
      <section className="card p-5 mb-4">
        <p className="section-label mb-0.5">Tampilan</p>

        <Row label="Mode Tampilan" desc="Pilih tema terang atau gelap">
          <div className="flex gap-2">
            {[
              { key: 'dark',  label: '🌙 Gelap' },
              { key: 'light', label: '☀️ Terang' },
            ].map(t => (
              <button key={t.key} onClick={() => updateSetting('theme', t.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  settings.theme === t.key ? 'bg-primary-600 text-white' : 'btn-ghost py-1.5 px-3'
                }`}>
                {t.label}
              </button>
            ))}
          </div>
        </Row>

        <Row label="Ukuran Hanzi" desc="Ukuran karakter Mandarin di kartu dan kosakata">
          <div className="flex gap-1.5 items-center">
            {hanziSizes.map(s => (
              <button key={s.key} onClick={() => updateSetting('hanziSize', s.key)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  settings.hanziSize === s.key ? 'bg-primary-600 text-white' : 'btn-ghost py-1 px-2.5'
                }`}>
                {s.label}
              </button>
            ))}
          </div>
        </Row>

        {/* Preview hanzi size */}
        <div className="mt-3 py-3 border-t border-surface-border text-center">
          <span className="font-hanzi font-bold hanzi-char" style={{ color:'#ed1515' }}>汉语</span>
          <span className="text-white/30 text-xs ml-3">Preview ukuran Hanzi</span>
        </div>
      </section>

      {/* ── Belajar ── */}
      <section className="card p-5 mb-4">
        <p className="section-label mb-0.5">Belajar</p>
        <Row label="Target harian" desc="Kata yang ingin dipelajari setiap hari">
          <Stepper value={settings.dailyTarget} min={5} max={100} step={5} onChange={v => updateSetting('dailyTarget', v)} />
        </Row>
        <Row label="Level favorit" desc="Level default saat membuka app">
          <select value={settings.preferredLevel} onChange={e => updateSetting('preferredLevel', Number(e.target.value))} className="input py-1.5 text-sm w-auto">
            {HSK_LEVELS.map(l => <option key={l.level} value={l.level}>{l.name}</option>)}
          </select>
        </Row>
      </section>

      {/* ── Flash Card ── */}
      <section className="card p-5 mb-4">
        <p className="section-label mb-0.5">Flash Card</p>
        <Row label="Tampilkan Pinyin" desc="Pinyin di sisi depan kartu">
          <Toggle checked={settings.showPinyin} onChange={v => updateSetting('showPinyin', v)} label="Toggle pinyin" />
        </Row>
        <Row label="Tampilkan Contoh" desc="Kalimat contoh saat kartu dibalik">
          <Toggle checked={settings.showContoh} onChange={v => updateSetting('showContoh', v)} label="Toggle contoh" />
        </Row>
        <Row label="Auto-flip" desc="Kartu dibalik otomatis">
          <Toggle checked={settings.autoFlip} onChange={v => updateSetting('autoFlip', v)} label="Toggle auto-flip" />
        </Row>
        {settings.autoFlip && (
          <Row label="Delay auto-flip">
            <Stepper value={settings.autoFlipDelay} min={1} max={10} step={1} suffix="s" onChange={v => updateSetting('autoFlipDelay', v)} />
          </Row>
        )}
      </section>

      {/* ── Kuis ── */}
      <section className="card p-5 mb-4">
        <p className="section-label mb-0.5">Kuis</p>
        <Row label="Jumlah soal default">
          <div className="flex gap-1.5">
            {QUIZ_LENGTHS.map(n => (
              <button key={n} onClick={() => updateSetting('quizSize', n)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${settings.quizSize === n ? 'bg-primary-600 text-white' : 'bg-white/5 text-white/35 hover:text-white hover:bg-white/10'}`}>
                {n}
              </button>
            ))}
          </div>
        </Row>
        <Row label="Tipe soal default">
          <select value={settings.quizType} onChange={e => updateSetting('quizType', e.target.value)} className="input py-1.5 text-sm w-auto">
            {Object.entries(QUIZ_TYPE_LABELS).map(([k,v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </Row>
      </section>

      {/* ── Data & Backup ── */}
      <section className="card p-5 mb-4">
        <p className="section-label mb-0.5">Data & Backup</p>
        <Row label="Export backup" desc="Unduh semua data progress ke file JSON">
          <button onClick={exportData} className="btn-ghost text-xs px-3 py-1.5">📥 Export</button>
        </Row>
        <Row label="Import backup" desc="Pulihkan data dari file backup JSON">
          <label className="btn-ghost text-xs px-3 py-1.5 cursor-pointer">
            📤 Import
            <input type="file" accept=".json" className="hidden" onChange={handleImport} />
          </label>
        </Row>
        <Row label="Reset SRS" desc="Reset jadwal review SRS saja (bukan progress)">
          <button onClick={resetSRS} className="btn-ghost text-xs px-3 py-1.5">Reset SRS</button>
        </Row>
      </section>

      {/* ── Danger Zone ── */}
      <section className="card p-5" style={{ borderColor:'rgba(185,28,28,0.2)', background:'rgba(185,28,28,0.02)' }}>
        <p className="section-label text-red-500/60 mb-0.5">Zona Berbahaya</p>
        <Row label="Reset pengaturan" desc="Kembalikan pengaturan ke nilai awal">
          <button onClick={resetSettings} className="btn-ghost text-xs px-3 py-1.5">Reset</button>
        </Row>
        <Row label="Hapus semua data" desc="Hapus seluruh progress, streak, SRS, XP — tidak bisa dikembalikan">
          <button onClick={clearAllData}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-900/30 text-red-400 border border-red-900/40 hover:bg-red-900/50 transition-colors">
            Hapus Data
          </button>
        </Row>
      </section>
    </div>
  )
}