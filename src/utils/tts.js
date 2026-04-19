/**
 * Text-to-Speech untuk Mandarin — Web Speech API (built-in browser, gratis)
 * Fallback: tidak ada audio jika browser tidak support
 */

let _voice = null
let _ready = false

// Cari voice Mandarin terbaik yang tersedia
function findMandarinVoice() {
  const voices = window.speechSynthesis?.getVoices() || []
  // Priority: zh-CN > zh-TW > zh
  const priority = ['zh-CN', 'zh-TW', 'zh']
  for (const lang of priority) {
    const v = voices.find(v => v.lang.startsWith(lang))
    if (v) return v
  }
  return voices.find(v => v.lang.includes('zh')) || null
}

// Init: tunggu voices tersedia (Chrome butuh event)
export function initTTS() {
  if (!window.speechSynthesis) return
  const tryFind = () => {
    _voice = findMandarinVoice()
    _ready = !!_voice
  }
  tryFind()
  if (!_ready && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      tryFind()
    }
  }
}

/**
 * Ucapkan teks Mandarin
 * @param {string} text  - teks yang diucapkan (hanzi atau pinyin)
 * @param {number} rate  - kecepatan (0.5–2.0, default 0.85 biar jelas)
 * @param {number} pitch - nada suara (0–2, default 1)
 * @returns {boolean} - true jika berhasil
 */
export function speak(text, rate = 0.85, pitch = 1) {
  if (!window.speechSynthesis) return false
  // Stop jika sedang ngomong
  window.speechSynthesis.cancel()

  const utter  = new SpeechSynthesisUtterance(text)
  utter.lang   = 'zh-CN'
  utter.rate   = rate
  utter.pitch  = pitch

  const voice = _voice || findMandarinVoice()
  if (voice) utter.voice = voice

  window.speechSynthesis.speak(utter)
  return true
}

/**
 * Ucapkan sebuah kata vocab (hanzi)
 */
export function speakWord(kata, rate = 0.85) {
  return speak(kata.hanzi, rate)
}

/**
 * Ucapkan contoh kalimat (lebih pelan)
 */
export function speakSentence(kata, rate = 0.75) {
  if (!kata.contoh) return false
  return speak(kata.contoh, rate)
}

/**
 * Cek apakah TTS tersedia
 */
export function isTTSAvailable() {
  return !!window.speechSynthesis
}

/**
 * Cek apakah voice Mandarin tersedia
 */
export function isMandarinVoiceAvailable() {
  if (!window.speechSynthesis) return false
  const voices = window.speechSynthesis.getVoices()
  return voices.some(v => v.lang.includes('zh'))
}