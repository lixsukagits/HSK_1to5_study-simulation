// Format tanggal ke 'YYYY-MM-DD'
export const toDateKey = (date = new Date()) => {
  return date.toISOString().split('T')[0]
}

// Cek apakah dua tanggal adalah hari berurutan
export const isConsecutiveDays = (dateStr1, dateStr2) => {
  const d1 = new Date(dateStr1)
  const d2 = new Date(dateStr2)
  const diff = Math.abs(d1 - d2)
  return diff === 86400000 // 24 jam dalam ms
}

// Format tanggal ke tampilan manusia: "Senin, 17 Apr 2026"
export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Hitung berapa hari lagi ke target
export const daysUntil = (targetDateStr) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(targetDateStr)
  const diff = target - today
  return Math.max(0, Math.ceil(diff / 86400000))
}

// Hitung persentase waktu yang sudah berlalu
export const timelineProgress = (startDateStr, endDateStr) => {
  const start  = new Date(startDateStr).getTime()
  const end    = new Date(endDateStr).getTime()
  const now    = Date.now()
  const total  = end - start
  const passed = now - start
  return Math.min(100, Math.max(0, Math.round((passed / total) * 100)))
}

// Sisa hari belajar hingga Desember 2025
export const TARGET_DATE = '2025-12-01'