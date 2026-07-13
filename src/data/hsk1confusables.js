// HSK 1 — Confusable Words (Kata yang Gampang Ketuker)
// Kurasi manual berdasarkan pola kesalahan umum pemula HSK 1.
// Setiap grup berisi kata-kata yang mirip pengucapan/makna/fungsi, plus
// penjelasan pembeda & contoh kontras berdampingan.
//
// Struktur: { id, title, items: [{ hanzi, pinyin, vocabId, note }],
//            explanation, examples: [{ zh, pinyin, id }] }

export const hsk1Confusables = [
  {
    id: 'cf-01',
    title: '那 vs 哪 — "itu" vs "yang mana"',
    items: [
      { hanzi: '那', vocabId: '1-131', note: 'penunjuk pasti: itu' },
      { hanzi: '哪', vocabId: '1-132', note: 'kata tanya: yang mana' },
    ],
    explanation: '那 dipakai untuk menunjuk sesuatu yang sudah pasti/diketahui (itu). 哪 dipakai untuk bertanya, selalu butuh jawaban pilihan. Keduanya punya turunan sama: 那个/哪个, 那些/哪些, 那里/哪里, 那儿/哪儿 — pola turunannya identik, hanya beda 那/哪 di depan.',
    examples: [
      { zh: '那是我的书。', pinyin: 'Nà shì wǒ de shū.', id: 'Itu buku saya. (pernyataan pasti)' },
      { zh: '哪个是你的书？', pinyin: 'Nǎge shì nǐ de shū?', id: 'Yang mana buku kamu? (pertanyaan)' },
    ],
    level: 1,
  },
  {
    id: 'cf-02',
    title: '在 vs 再 — homofon zài, beda total fungsi',
    items: [
      { hanzi: '在', vocabId: '1-271', note: 'preposisi/kata kerja: di, berada di' },
      { hanzi: '再', vocabId: '1-270', note: 'kata keterangan: lagi, sekali lagi' },
    ],
    explanation: 'Pengucapan SAMA PERSIS (zài), inilah sumber utama kebingungan. 在 selalu berhubungan dengan LOKASI (di mana). 再 selalu berhubungan dengan PENGULANGAN tindakan di masa depan (lakukan lagi).',
    examples: [
      { zh: '我在家。', pinyin: 'Wǒ zài jiā.', id: 'Saya di rumah. (在 = lokasi)' },
      { zh: '请再说一遍。', pinyin: 'Qǐng zài shuō yí biàn.', id: 'Tolong katakan sekali lagi. (再 = pengulangan)' },
    ],
    level: 1,
  },
  {
    id: 'cf-03',
    title: '会 vs 能 vs 可以 — tiga-tiganya berarti "bisa/boleh"',
    items: [
      { hanzi: '会', vocabId: '1-082', note: 'bisa karena sudah belajar/berlatih (skill)' },
      { hanzi: '能', vocabId: '1-145', note: 'bisa karena mampu/kondisi memungkinkan' },
      { hanzi: '可以', vocabId: '1-103', note: 'boleh karena diizinkan' },
    ],
    explanation: '会 = kemampuan hasil belajar (会说汉语 = bisa bahasa Mandarin krn belajar). 能 = kemampuan fisik/situasional (今天能来 = bisa datang hari ini krn kondisi memungkinkan). 可以 = izin (可以进来吗 = boleh masuk?). Sering tertukar karena ketiganya diterjemahkan "bisa" dalam bahasa Indonesia.',
    examples: [
      { zh: '我会说汉语。', pinyin: 'Wǒ huì shuō Hànyǔ.', id: 'Saya bisa bicara bahasa Mandarin. (skill)' },
      { zh: '我今天不能去。', pinyin: 'Wǒ jīntiān bù néng qù.', id: 'Saya hari ini tidak bisa pergi. (kondisi)' },
      { zh: '我可以坐这儿吗？', pinyin: 'Wǒ kěyǐ zuò zhèr ma?', id: 'Boleh saya duduk di sini? (izin)' },
    ],
    level: 1,
  },
  {
    id: 'cf-04',
    title: '了 (satu tulisan, dua fungsi berbeda)',
    items: [
      { hanzi: '了¹', vocabId: '1-108', note: 'partikel setelah kata kerja: menandai tindakan SELESAI' },
      { hanzi: '了²', vocabId: '1-108', note: 'partikel di akhir kalimat: menandai PERUBAHAN keadaan' },
    ],
    explanation: 'Sama-sama ditulis 了, tapi posisi & fungsinya beda. 了¹ nempel langsung setelah kata kerja (吃了 = sudah makan). 了² di akhir kalimat menandai sesuatu yang baru berubah/terjadi (下雨了 = sekarang jadi hujan, tadinya tidak).',
    examples: [
      { zh: '我吃了早饭。', pinyin: 'Wǒ chī le zǎofàn.', id: 'Saya sudah makan sarapan. (了¹ = selesai)' },
      { zh: '下雨了！', pinyin: 'Xià yǔ le!', id: 'Hujan turun (nih)! (了² = perubahan keadaan)' },
    ],
    level: 1,
  },
  {
    id: 'cf-05',
    title: '还 vs 也 — dua-duanya sering diartikan "juga"',
    items: [
      { hanzi: '还', vocabId: '1-067', note: 'masih/lagi/selain itu (menambahkan info baru)' },
      { hanzi: '也', vocabId: '1-253', note: 'juga (menyatakan kesamaan)' },
    ],
    explanation: '也 dipakai kalau dua hal SETARA/sama (saya suka, dia juga suka). 还 dipakai untuk menambahkan info ekstra yang belum disebut (selain X, masih ada Y juga).',
    examples: [
      { zh: '我喜欢茶，他也喜欢。', pinyin: 'Wǒ xǐhuan chá, tā yě xǐhuan.', id: 'Saya suka teh, dia juga suka. (也 = kesamaan)' },
      { zh: '他会说汉语，还会说英语。', pinyin: 'Tā huì shuō Hànyǔ, hái huì shuō Yīngyǔ.', id: 'Dia bisa bahasa Mandarin, dan juga bahasa Inggris. (还 = tambahan info)' },
    ],
    level: 1,
  },
  {
    id: 'cf-06',
    title: '几 vs 多少 — dua-duanya "berapa"',
    items: [
      { hanzi: '几', vocabId: '1-084', note: 'tanya jumlah KECIL yang diperkirakan (< 10), WAJIB pakai kata ukuran' },
      { hanzi: '多少', vocabId: '1-046', note: 'tanya jumlah berapa saja (kecil/besar), TIDAK perlu kata ukuran' },
    ],
    explanation: '几 dipakai kalau kamu perkirakan jumlahnya kecil (几个人 = berapa orang, nebak sedikit) dan selalu diikuti kata ukuran (个/本/岁). 多少 netral untuk jumlah berapa pun, kata ukuran opsional (多少钱 = berapa harganya).',
    examples: [
      { zh: '你家有几个人？', pinyin: 'Nǐ jiā yǒu jǐ gè rén?', id: 'Keluargamu ada berapa orang?' },
      { zh: '这个多少钱？', pinyin: 'Zhège duōshao qián?', id: 'Ini harganya berapa?' },
    ],
    level: 1,
  },
  {
    id: 'cf-07',
    title: '一点儿 vs 有（一）点儿 — posisi beda, makna beda nuansa',
    items: [
      { hanzi: '一点儿', vocabId: '1-256', note: 'setelah kata sifat/kerja: sedikit (netral)' },
      { hanzi: '有（一）点儿', vocabId: null, note: 'sebelum kata sifat: agak (nuansa negatif/keluhan)' },
    ],
    explanation: '一点儿 diletakkan SETELAH kata sifat/kerja, nuansa netral (给我一点儿水 = kasih saya sedikit air). 有点儿 diletakkan SEBELUM kata sifat, biasanya nuansa keluhan/kurang enak (今天有点儿冷 = hari ini agak dingin, nadanya mengeluh).',
    examples: [
      { zh: '请给我一点儿水。', pinyin: 'Qǐng gěi wǒ yìdiǎnr shuǐ.', id: 'Tolong kasih saya sedikit air. (netral)' },
      { zh: '今天有点儿冷。', pinyin: 'Jīntiān yǒudiǎnr lěng.', id: 'Hari ini agak dingin. (nuansa keluhan)' },
    ],
    level: 1,
  },
  {
    id: 'cf-08',
    title: '你 vs 您 — level kesopanan berbeda',
    items: [
      { hanzi: '你', vocabId: '1-146', note: 'kamu (netral/santai, ke teman sebaya)' },
      { hanzi: '您', vocabId: '1-150', note: 'Anda (sopan, ke orang lebih tua/dihormati)' },
    ],
    explanation: '您 adalah bentuk sopan dari 你, dipakai ke orang yang lebih tua, atasan, atau situasi formal. Tidak punya bentuk jamak sendiri (jamaknya tetap 你们, bukan "您们").',
    examples: [
      { zh: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', id: 'Namamu siapa? (ke teman)' },
      { zh: '您好，请问您贵姓？', pinyin: 'Nín hǎo, qǐngwèn nín guìxìng?', id: 'Halo, boleh tahu marga Anda? (sopan, ke orang lebih tua)' },
    ],
    level: 1,
  },
  {
    id: 'cf-09',
    title: '是 vs 有 — "adalah" vs "punya/ada"',
    items: [
      { hanzi: '是', vocabId: '1-186', note: 'menyatakan identitas/kesetaraan: adalah' },
      { hanzi: '有', vocabId: '1-263', note: 'menyatakan kepemilikan/keberadaan: punya, ada' },
    ],
    explanation: '是 dipakai untuk menyamakan dua hal (A adalah B). 有 dipakai untuk kepemilikan (punya sesuatu) atau keberadaan (ada sesuatu di suatu tempat). Pemula sering salah pakai 是 padahal maksudnya "ada/punya".',
    examples: [
      { zh: '他是我哥哥。', pinyin: 'Tā shì wǒ gēge.', id: 'Dia adalah kakak laki-laki saya. (是 = identitas)' },
      { zh: '我有一个哥哥。', pinyin: 'Wǒ yǒu yí gè gēge.', id: 'Saya punya seorang kakak laki-laki. (有 = kepemilikan)' },
    ],
    level: 1,
  },
  {
    id: 'cf-10',
    title: '这/那/哪 + turunannya (个/些/里/儿) — satu pola, tiga makna',
    items: [
      { hanzi: '这...', vocabId: null, note: 'ini, dekat pembicara' },
      { hanzi: '那...', vocabId: null, note: 'itu, jauh dari pembicara' },
      { hanzi: '哪...', vocabId: null, note: 'yang mana, pertanyaan' },
    ],
    explanation: 'Ketiganya membentuk pola turunan identik: 这个/那个/哪个 (yang ini/itu/mana), 这些/那些/哪些 (ini/itu/mana-jamak), 这里(这儿)/那里(那儿)/哪里(哪儿) (di sini/situ/mana). Kalau sudah hafal pola 这, tinggal ganti awalan buat dapat semua variasi 那 dan 哪.',
    examples: [
      { zh: '这个是我的，那个是你的。', pinyin: 'Zhège shì wǒ de, nàge shì nǐ de.', id: 'Yang ini punya saya, yang itu punya kamu.' },
      { zh: '你在哪里？', pinyin: 'Nǐ zài nǎlǐ?', id: 'Kamu di mana?' },
    ],
    level: 1,
  },
]