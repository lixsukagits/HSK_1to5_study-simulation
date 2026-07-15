// HSK 3.0 Level 4 — Kata yang Mudah Tertukar (Confusables)
// 11 grup, dipilih berdasarkan kata-kata yang benar-benar sering menjadi sumber kesalahan pelajar HSK4
// (kemiripan bunyi/ejaan, makna berdekatan, atau satu karakter dengan >1 fungsi)
// Setiap vocabId divalidasi merujuk ke id yang benar-benar ada di hsk4.js
// Format: { id, title, items: [{ hanzi, vocabId, note }], explanation, examples: [{ zh, pinyin, id }], level }

export const hsk4Confusables = [
  {
    id: 'conf4-01',
    title: '尽管 vs 即使 vs 不管：Konsesi yang Berbeda',
    items: [
      { hanzi: '尽管', vocabId: '4-391', note: '尽管+fakta yang sudah terjadi, tapi tetap ada kontras (mirip "meskipun")' },
      { hanzi: '即使', vocabId: '4-403', note: '即使+andaian hipotetis (belum tentu terjadi), tetap ada hasil yang sama (mirip "seandainya pun")' },
      { hanzi: '不管', vocabId: '4-051', note: '不管+pertanyaan terbuka (apa/siapa/bagaimana), hasil tidak berubah (mirip "tidak peduli...")' },
    ],
    explanation: '尽管 dipakai untuk fakta yang SUDAH terjadi/benar (尽管很忙，他还是来了 = meskipun sangat sibuk, dia tetap datang). 即使 dipakai untuk pengandaian yang BELUM TENTU terjadi (即使很忙，他也会来 = seandainya sibuk sekalipun, dia akan tetap datang). 不管 dipakai dengan pilihan/pertanyaan terbuka, bukan satu fakta tunggal (不管你忙不忙，都要来 = tidak peduli kamu sibuk atau tidak, harus tetap datang).',
    examples: [
      { zh: '尽管下雨，我们还是出发了。', pinyin: 'Jǐnguǎn xià yǔ, wǒmen háishì chūfā le.', id: 'Meskipun hujan, kami tetap berangkat.' },
      { zh: '即使下雨，我们也要出发。', pinyin: 'Jíshǐ xià yǔ, wǒmen yě yào chūfā.', id: 'Seandainya hujan sekalipun, kami tetap harus berangkat.' },
      { zh: '不管下不下雨，我们都要出发。', pinyin: 'Bùguǎn xià bù xià yǔ, wǒmen dōu yào chūfā.', id: 'Tidak peduli hujan atau tidak, kami tetap harus berangkat.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-02',
    title: '由于 vs 因此：Sebab vs Akibat',
    items: [
      { hanzi: '由于', vocabId: '4-893', note: '由于+SEBAB, dipakai di awal klausa sebab (formal, = "karena")' },
      { hanzi: '因此', vocabId: '4-867', note: '因此+AKIBAT, dipakai di awal klausa akibat/kesimpulan (formal, = "oleh karena itu")' },
    ],
    explanation: '由于 dan 因此 sering muncul bersamaan dalam satu kalimat sebab-akibat, tapi posisinya berbeda: 由于 memperkenalkan SEBAB (di klausa pertama), sedangkan 因此 memperkenalkan AKIBAT/kesimpulan (di klausa kedua). Jangan tertukar posisinya.',
    examples: [
      { zh: '由于交通堵塞，因此他迟到了。', pinyin: 'Yóuyú jiāotōng dǔsè, yīncǐ tā chídào le.', id: 'Karena macet, oleh karena itu dia terlambat.' },
      { zh: '由于准备不足，比赛因此失败了。', pinyin: 'Yóuyú zhǔnbèi bùzú, bǐsài yīncǐ shībài le.', id: 'Karena persiapan kurang, pertandingan pun berakhir dengan kekalahan.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-03',
    title: '恐怕 vs 也许：Dua Jenis "Mungkin"',
    items: [
      { hanzi: '恐怕', vocabId: '4-438', note: 'mungkin, dengan nada KHAWATIR - biasanya untuk hal yang kurang diinginkan' },
      { hanzi: '也许', vocabId: '4-863', note: 'mungkin, secara NETRAL - bisa untuk hal baik maupun buruk' },
    ],
    explanation: '恐怕 dan 也许 sama-sama berarti "mungkin", tapi 恐怕 membawa nada kekhawatiran/pesimis terhadap sesuatu yang tidak diinginkan (恐怕要下雨了 = sepertinya (khawatir) akan hujan), sedangkan 也许 bersifat netral tanpa nada emosional (也许他会来 = mungkin saja dia akan datang, bisa positif/negatif/netral).',
    examples: [
      { zh: '天这么黑，恐怕要下雨了。', pinyin: 'Tiān zhème hēi, kǒngpà yào xià yǔ le.', id: 'Langitnya gelap begini, sepertinya (khawatir) akan hujan.' },
      { zh: '他也许还不知道这个好消息。', pinyin: 'Tā yěxǔ hái bù zhīdào zhège hǎo xiāoxi.', id: 'Dia mungkin belum tahu kabar baik ini.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-04',
    title: '目的 vs 目标：Tujuan yang Berbeda Sifat',
    items: [
      { hanzi: '目的', vocabId: '4-515', note: 'tujuan/maksud di balik suatu tindakan (abstrak, "demi apa")' },
      { hanzi: '目标', vocabId: '4-514', note: 'target/sasaran konkret yang ingin dicapai (terukur, "capaian apa")' },
    ],
    explanation: '目的 menjawab pertanyaan "untuk apa/demi apa" suatu tindakan dilakukan (lebih abstrak), sedangkan 目标 menjawab "capaian konkret apa yang dituju" (biasanya bisa diukur, misalnya angka atau posisi tertentu).',
    examples: [
      { zh: '他学习汉语的目的是了解中国文化。', pinyin: 'Tā xuéxí Hànyǔ de mùdì shì liǎojiě Zhōngguó wénhuà.', id: 'Tujuan dia belajar bahasa Mandarin adalah memahami budaya Tiongkok.' },
      { zh: '今年公司的销售目标是一千万元。', pinyin: 'Jīnnián gōngsī de xiāoshòu mùbiāo shì yīqiānwàn yuán.', id: 'Target penjualan perusahaan tahun ini adalah sepuluh juta yuan.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-05',
    title: '此外 vs 另外：Selain Itu',
    items: [
      { hanzi: '此外', vocabId: '4-100', note: '"selain itu" - lebih formal, biasa dipakai di awal kalimat/klausa tertulis' },
      { hanzi: '另外', vocabId: '4-477', note: '"selain itu/lagipula" - bisa formal maupun lisan, lebih fleksibel posisinya' },
    ],
    explanation: '此外 dan 另外 sama-sama berarti "selain itu", tapi 此外 terasa lebih formal dan hanya muncul di awal kalimat, sedangkan 另外 lebih fleksibel dan umum dipakai baik lisan maupun tulisan, bahkan bisa berfungsi sebagai kata sifat penunjuk (另外一个 = yang lain).',
    examples: [
      { zh: '这个方案很好，此外，成本也不高。', pinyin: 'Zhège fāng’àn hěn hǎo, cǐwài, chéngběn yě bù gāo.', id: 'Rencana ini bagus, selain itu, biayanya juga tidak tinggi.' },
      { zh: '我要买一件衣服，另外还要买一双鞋。', pinyin: 'Wǒ yào mǎi yī jiàn yīfu, lìngwài hái yào mǎi yī shuāng xié.', id: 'Saya mau beli satu baju, selain itu juga mau beli sepasang sepatu.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-06',
    title: '经历 vs 经济 vs 经验：Mirip Bunyi, Beda Makna',
    items: [
      { hanzi: '经历', vocabId: '4-387', note: 'jinglì - pengalaman/menjalani sesuatu (bisa jadi kata kerja maupun kata benda)' },
      { hanzi: '经济', vocabId: '4-385', note: 'jingjì - ekonomi (bidang/kondisi ekonomi suatu negara/perusahaan)' },
      { hanzi: '经验', vocabId: '4-392', note: 'jīngyàn - pengalaman/keahlian yang terkumpul dari waktu ke waktu (pelajaran yang didapat), berbeda dari 经历 (menjalani suatu kejadian) dan 经济 (bidang ekonomi)' },
    ],
    explanation: '经历, 经济, dan 经验 memiliki suku kata awal yang mirip (jing-) sehingga sering tertukar oleh pemula. 经历 = pengalaman menjalani sesuatu secara langsung; 经济 = bidang ekonomi; 经验 = pengalaman/keahlian yang terkumpul dari waktu ke waktu (lebih ke arah "pelajaran yang didapat").',
    examples: [
      { zh: '这是我难忘的一次经历。', pinyin: 'Zhè shì wǒ nánwàng de yī cì jīnglì.', id: 'Ini adalah pengalaman yang tidak terlupakan bagi saya.' },
      { zh: '这个国家的经济发展很快。', pinyin: 'Zhège guójiā de jīngjì fāzhǎn hěn kuài.', id: 'Perekonomian negara ini berkembang sangat cepat.' },
      { zh: '他在这个行业很有经验。', pinyin: 'Tā zài zhège hángyè hěn yǒu jīngyàn.', id: 'Dia sangat berpengalaman di bidang ini.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-07',
    title: '风景 vs 景色：Dua Kata untuk "Pemandangan"',
    items: [
      { hanzi: '风景', vocabId: '4-203', note: 'pemandangan sebagai objek wisata/lanskap secara umum' },
      { hanzi: '景色', vocabId: '4-390', note: 'pemandangan yang dilihat pada momen/sudut tertentu, lebih deskriptif' },
    ],
    explanation: '风景 dan 景色 sama-sama berarti "pemandangan", dan dalam banyak konteks bisa saling menggantikan. 风景 lebih sering dipakai sebagai istilah umum/objek wisata (风景区 = kawasan wisata), sedangkan 景色 lebih menekankan kesan visual pada momen tertentu (景色很美 = pemandangannya indah sekali saat itu).',
    examples: [
      { zh: '这个地方的风景很有名。', pinyin: 'Zhège dìfang de fēngjǐng hěn yǒumíng.', id: 'Pemandangan tempat ini sangat terkenal.' },
      { zh: '山上的景色美极了。', pinyin: 'Shān shàng de jǐngsè měi jí le.', id: 'Pemandangan di atas gunung indah sekali.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-08',
    title: '抱歉 vs 道歉：Kata Sifat vs Kata Kerja',
    items: [
      { hanzi: '抱歉', vocabId: '4-018', note: 'kata sifat - merasa menyesal/tidak enak hati (langsung diikuti alasan)' },
      { hanzi: '道歉', vocabId: '4-133', note: 'kata kerja - tindakan meminta maaf secara resmi kepada seseorang' },
    ],
    explanation: '抱歉 adalah kata SIFAT yang menyatakan perasaan menyesal/tidak enak hati, sering dipakai sebagai ungkapan singkat (很抱歉 = mohon maaf). 道歉 adalah kata KERJA yang menyatakan tindakan meminta maaf secara aktif kepada seseorang (道歉+向+orang, atau 向...道歉).',
    examples: [
      { zh: '对不起，我来晚了，真抱歉。', pinyin: 'Duìbuqǐ, wǒ lái wǎn le, zhēn bàoqiàn.', id: 'Maaf, saya datang terlambat, sungguh menyesal.' },
      { zh: '他向老师道歉了。', pinyin: 'Tā xiàng lǎoshī dàoqiàn le.', id: 'Dia meminta maaf kepada gurunya.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-09',
    title: '此次 vs 从来 vs 原来：Kali Ini bukan Selalu atau Awalnya',
    items: [
      { hanzi: '此次', vocabId: '4-099', note: '"kali ini/saat ini" - menunjuk pada satu kejadian tertentu' },
      { hanzi: '从来', vocabId: '4-103', note: '"sejak dulu/selalu" - menyatakan sesuatu yang konsisten dari dulu (sering dengan negasi 从来不/从来没)' },
      { hanzi: '原来', vocabId: '4-896', note: '"pada awalnya/ternyata" - mengungkap fakta yang baru disadari atau kondisi semula' },
    ],
    explanation: 'Tiga kata ini sekilas terlihat berhubungan dengan "waktu" tapi maknanya sangat berbeda: 此次 menunjuk PERISTIWA SPESIFIK saat ini; 从来 menyatakan KONSISTENSI dari dulu hingga sekarang; 原来 mengungkap KONDISI AWAL atau KESADARAN BARU (原来是你 = ternyata kamu toh!).',
    examples: [
      { zh: '此次比赛非常精彩。', pinyin: 'Cǐ cì bǐsài fēicháng jīngcǎi.', id: 'Pertandingan kali ini sangat seru.' },
      { zh: '他从来不迟到。', pinyin: 'Tā cónglái bù chídào.', id: 'Dia tidak pernah terlambat sama sekali.' },
      { zh: '原来他就是新来的老师。', pinyin: 'Yuánlái tā jiùshì xīn lái de lǎoshī.', id: 'Ternyata dia adalah guru baru itu.' },
    ],
    level: 4,
  },
  {
    id: 'conf4-10',
    title: '干 (gan) - Satu Karakter Dua Makna: Kering vs Bekerja',
    items: [
      { hanzi: '干', vocabId: '4-223', note: 'dua makna: gan = kering; juga dipakai informal untuk "melakukan/bekerja" (mirip 做/干活儿)' },
    ],
    explanation: '干 adalah karakter yang sama namun memiliki dua makna terkait pelafalan berbeda dalam bahasa sehari-hari: sebagai adjektiva berarti "kering" (天气很干 = cuacanya kering), dan secara informal (terutama dalam 干活儿, 你在干什么) berarti "melakukan/bekerja". Perhatikan konteks kalimat untuk membedakannya.',
    examples: [
      { zh: '这里的天气很干，要多喝水。', pinyin: 'Zhèlǐ de tiānqì hěn gān, yào duō hē shuǐ.', id: 'Cuaca di sini sangat kering, harus banyak minum air.' },
      { zh: '你在干什么呢？', pinyin: 'Nǐ zài gàn shénme ne?', id: 'Kamu sedang melakukan apa?' },
    ],
    level: 4,
  },
  {
    id: 'conf4-11',
    title: '将要 vs 继续：Akan Terjadi vs Sedang Berlanjut',
    items: [
      { hanzi: '将要', vocabId: '4-338', note: '"akan/hendak" - menyatakan sesuatu yang BELUM terjadi, di masa depan dekat' },
      { hanzi: '继续', vocabId: '4-407', note: '"melanjutkan/terus" - menyatakan tindakan yang SUDAH berjalan dan berlanjut' },
    ],
    explanation: '将要 dipakai untuk peristiwa yang BELUM terjadi tapi akan segera terjadi (mirip "akan" dalam bahasa Indonesia), sedangkan 继续 dipakai untuk tindakan yang SUDAH berjalan dan akan terus dilakukan tanpa henti - dua konsep waktu yang berbeda meski sama-sama terasa "berorientasi ke depan".',
    examples: [
      { zh: '会议将要在下周举行。', pinyin: 'Huìyì jiāngyào zài xiàzhōu jǔxíng.', id: 'Rapat akan diadakan minggu depan.' },
      { zh: '请大家继续努力工作。', pinyin: 'Qǐng dàjiā jìxù nǔlì gōngzuò.', id: 'Mohon semua terus bekerja keras.' },
    ],
    level: 4,
  },
];