// Map angka nada ke huruf bertanda nada (tone marks)
const TONE_MAP = {
  a: ['ā', 'á', 'ǎ', 'à', 'a'],
  e: ['ē', 'é', 'ě', 'è', 'e'],
  i: ['ī', 'í', 'ǐ', 'ì', 'i'],
  o: ['ō', 'ó', 'ǒ', 'ò', 'o'],
  u: ['ū', 'ú', 'ǔ', 'ù', 'u'],
  ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'],
}

// Konversi "ni3 hao3" → "nǐ hǎo" (pinyin angka ke tone marks)
export const numberToTone = (pinyin) => {
  return pinyin
    .split(' ')
    .map((syllable) => {
      const match = syllable.match(/([a-züü]+)([1-5]?)/)
      if (!match) return syllable
      const [, letters, tone] = match
      if (!tone || tone === '5') return letters // nada 5 = netral

      const toneNum = parseInt(tone) - 1
      for (const vowel of ['ü', 'u', 'o', 'a', 'e', 'i']) {
        if (letters.includes(vowel) && TONE_MAP[vowel]) {
          return letters.replace(vowel, TONE_MAP[vowel][toneNum])
        }
      }
      return letters
    })
    .join(' ')
}

// Cek apakah string mengandung karakter China
export const hasHanzi = (str) => /[\u4e00-\u9fff]/.test(str)

// Ambil warna nada (untuk tampilan visual)
export const toneColor = (toneNum) => {
  const colors = {
    1: '#ef4444', // merah — nada datar
    2: '#f59e0b', // amber — nada naik
    3: '#4ade80', // hijau — nada turun-naik
    4: '#60a5fa', // biru — nada turun
    5: '#9ca3af', // abu — nada netral
  }
  return colors[toneNum] || colors[5]
}

// Pisahkan suku kata pinyin menjadi array
export const splitPinyin = (pinyin) =>
  pinyin.trim().split(/\s+/).filter(Boolean)