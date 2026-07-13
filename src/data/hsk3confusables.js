// HSK 3.0 Level 3 — Kata Mudah Tertukar (Confusables)
// 10 grup kata yang paling sering jadi sumber kesalahan pemula di HSK Level 3.
// Setiap vocabId merujuk ke id yang ada di hsk3.js (divalidasi, lihat laporan akhir).
//
// Struktur: { id, title, items: [{ hanzi, vocabId, note }], explanation, examples: [{ zh, pinyin, id }], level }

export const hsk3Confusables = [
  {
    id: 'cf3-01',
    title: '把 vs 被 — Konstruksi Disposal vs Pasif',
    items: [
      { hanzi: '把', vocabId: '3-006', note: 'memindahkan objek ke depan predikat untuk menekankan "apa yang dilakukan terhadapnya"; subjek = pelaku' },
      { hanzi: '被', vocabId: '3-017', note: 'menandai subjek sebagai penderita tindakan (pasif); pelaku (kalau disebut) muncul setelah 被' },
    ],
    explanation: '把 dan 被 sama-sama memindahkan objek ke posisi sebelum kata kerja, tapi arah perannya berlawanan: dalam kalimat 把, subjek adalah PELAKU yang melakukan sesuatu pada objek; dalam kalimat 被, subjek adalah PENDERITA yang dikenai tindakan oleh pelaku (setelah 被). Pemula sering tertukar arah "siapa melakukan apa pada siapa".',
    examples: [
      { zh: '我把杯子打破了。', pinyin: 'Wǒ bǎ bēizi dǎpò le.', id: 'Saya memecahkan gelas itu. (saya = pelaku)' },
      { zh: '杯子被我打破了。', pinyin: 'Bēizi bèi wǒ dǎpò le.', id: 'Gelas itu dipecahkan oleh saya. (gelas = penderita)' },
    ],
    level: 3,
  },

  {
    id: 'cf3-02',
    title: '刚 vs 刚才 vs 刚刚 — Trio "Baru Saja"',
    items: [
      { hanzi: '刚', vocabId: '3-139', note: 'adverb, WAJIB langsung diikuti kata kerja, tidak bisa berdiri sendiri di awal kalimat' },
      { hanzi: '刚才', vocabId: '3-140', note: 'nomina waktu, bisa berdiri sendiri di awal kalimat sebagai keterangan waktu' },
      { hanzi: '刚刚', vocabId: '3-141', note: 'adverb, bentuk penekanan dari 刚, juga langsung diikuti kata kerja' },
    ],
    explanation: 'Ketiganya berarti "baru saja", tapi posisinya dalam kalimat berbeda: 刚才 adalah NOMINA WAKTU sehingga bisa berdiri sendiri di depan kalimat ("刚才我在睡觉" = "Tadi saya sedang tidur"); 刚 dan 刚刚 adalah ADVERB yang harus langsung menempel sebelum kata kerja, tidak bisa dipakai sendirian di awal kalimat.',
    examples: [
      { zh: '刚才他给我打电话了。', pinyin: 'Gāngcái tā gěi wǒ dǎ diànhuà le.', id: 'Tadi dia menelepon saya.' },
      { zh: '他刚出去，你去追一下。', pinyin: 'Tā gāng chūqù, nǐ qù zhuī yíxià.', id: 'Dia baru saja keluar, kamu kejar sebentar.' },
    ],
    level: 3,
  },

  {
    id: 'cf3-03',
    title: '关于 vs 关心 vs 关注 — Kata Turunan dari 关',
    items: [
      { hanzi: '关于', vocabId: '3-155', note: 'preposisi topik, "mengenai/tentang" (mis. 关于这个问题)' },
      { hanzi: '关心', vocabId: '3-154', note: 'kata kerja, "peduli/memperhatikan (secara personal/emosional)" — biasa untuk orang' },
      { hanzi: '关注', vocabId: '3-156', note: 'kata kerja, "mengikuti perkembangan/memberi perhatian" — biasa untuk isu, berita, perkembangan' },
    ],
    explanation: 'Ketiganya memakai karakter 关 tapi kelas kata dan fungsinya berbeda total. 关于 adalah preposisi yang memperkenalkan topik pembicaraan. 关心 adalah kata kerja yang menyatakan kepedulian personal terhadap seseorang. 关注 adalah kata kerja yang menyatakan perhatian/pengamatan berkelanjutan terhadap suatu isu atau perkembangan.',
    examples: [
      { zh: '关于这个问题，我们再讨论一下。', pinyin: 'Guānyú zhège wèntí, wǒmen zài tǎolùn yíxià.', id: 'Mengenai masalah ini, mari kita diskusikan lagi.' },
      { zh: '妈妈很关心我的健康。', pinyin: 'Māma hěn guānxīn wǒ de jiànkāng.', id: 'Ibu sangat peduli dengan kesehatan saya.' },
      { zh: '很多人都在关注这条新闻。', pinyin: 'Hěn duō rén dōu zài guānzhù zhè tiáo xīnwén.', id: 'Banyak orang sedang mengikuti berita ini.' },
    ],
    level: 3,
  },

  {
    id: 'cf3-04',
    title: '别的 vs 其他 — "Yang Lain"',
    items: [
      { hanzi: '别的', vocabId: '3-025', note: 'lebih umum dipakai lisan/santai' },
      { hanzi: '其他', vocabId: '3-309', note: 'sedikit lebih formal, sering dipakai tulisan' },
    ],
    explanation: 'Keduanya bisa saling menggantikan dalam banyak kalimat karena maknanya sama ("yang lain"), tapi register-nya sedikit berbeda: 别的 terasa lebih santai/lisan, 其他 terasa sedikit lebih formal/tertulis.',
    examples: [
      { zh: '有别的问题吗？', pinyin: 'Yǒu biéde wèntí ma?', id: 'Ada pertanyaan lain?' },
      { zh: '除了汉语，他还会说其他语言。', pinyin: 'Chúle Hànyǔ, tā hái huì shuō qítā yǔyán.', id: 'Selain bahasa Mandarin, dia juga bisa bahasa lain.' },
    ],
    level: 3,
  },

  {
    id: 'cf3-05',
    title: '为 vs 为了 — Sebab vs Tujuan',
    items: [
      { hanzi: '为', vocabId: '3-375', note: 'menyatakan SEBAB perasaan/tindakan, "karena/untuk (demi seseorang)"' },
      { hanzi: '为了', vocabId: '3-376', note: 'menyatakan TUJUAN suatu tindakan, "demi mencapai...", selalu di awal klausa tujuan' },
    ],
    explanation: '为 lebih menekankan sebab atau demi siapa suatu perasaan/tindakan terjadi (mis. 为他高兴 = senang untuknya). 为了 secara spesifik menyatakan tujuan yang ingin dicapai lewat suatu tindakan, dan selalu diletakkan di depan klausa tujuan.',
    examples: [
      { zh: '大家都为他感到高兴。', pinyin: 'Dàjiā dōu wèi tā gǎndào gāoxìng.', id: 'Semua orang merasa senang untuknya.' },
      { zh: '为了保持健康，他每天坚持运动。', pinyin: 'Wèile bǎochí jiànkāng, tā měitiān jiānchí yùndòng.', id: 'Demi menjaga kesehatan, dia tekun berolahraga setiap hari.' },
    ],
    level: 3,
  },

  {
    id: 'cf3-06',
    title: '只要 vs 只有 — Syarat Cukup vs Syarat Mutlak',
    items: [
      { hanzi: '只要', vocabId: '3-479', note: 'syarat CUKUP (tidak harus satu-satunya cara); berpasangan dengan 就' },
      { hanzi: '只有', vocabId: '3-480', note: 'syarat MUTLAK/satu-satunya cara; berpasangan dengan 才' },
    ],
    explanation: '只要……就…… berarti "asalkan..., maka..." — syaratnya cukup, bisa saja ada cara lain juga. 只有……才…… berarti "hanya dengan..., baru..." — syaratnya mutlak, tidak ada cara lain. Pemula sering tertukar karena bentuknya mirip, padahal maknanya cukup berbeda (dan pasangannya beda: 只要+就, 只有+才).',
    examples: [
      { zh: '只要你愿意，就一定能做到。', pinyin: 'Zhǐyào nǐ yuànyì, jiù yídìng néng zuòdào.', id: 'Asalkan kamu mau, pasti bisa melakukannya.' },
      { zh: '只有努力，才能成功。', pinyin: 'Zhǐyǒu nǔlì, cáinéng chénggōng.', id: 'Hanya dengan berusaha keras, baru bisa berhasil.' },
    ],
    level: 3,
  },

  {
    id: 'cf3-07',
    title: '以为 vs 相信 vs 认为 — "Percaya/Menganggap"',
    items: [
      { hanzi: '以为', vocabId: '3-437', note: 'menganggap sesuatu benar padahal TERNYATA SALAH (anggapan keliru)' },
      { hanzi: '相信', vocabId: '3-387', note: 'percaya bahwa sesuatu benar/dapat dipercaya, tanpa konotasi salah' },
      { hanzi: '认为', vocabId: '3-315', note: 'berpendapat/menganggap (netral, menyatakan opini)' },
    ],
    explanation: '以为 KHUSUS dipakai ketika anggapan itu ternyata keliru (mis. "我以为他是老师" menyiratkan ternyata dia bukan guru). 相信 menyatakan kepercayaan terhadap kebenaran/kredibilitas sesuatu. 认为 adalah kata netral untuk menyampaikan pendapat, tanpa menyiratkan benar atau salah.',
    examples: [
      { zh: '我以为今天是星期五，原来是星期六。', pinyin: 'Wǒ yǐwéi jīntiān shì xīngqīwǔ, yuánlái shì xīngqīliù.', id: 'Saya kira hari ini Jumat, ternyata Sabtu.' },
      { zh: '我相信他说的是真的。', pinyin: 'Wǒ xiāngxìn tā shuō de shì zhēn de.', id: 'Saya percaya apa yang dia katakan itu benar.' },
      { zh: '我认为这个办法更好。', pinyin: 'Wǒ rènwéi zhège bànfǎ gèng hǎo.', id: 'Menurut saya cara ini lebih baik.' },
    ],
    level: 3,
  },

  {
    id: 'cf3-08',
    title: '决定 vs 解决 — Memutuskan vs Menyelesaikan',
    items: [
      { hanzi: '决定', vocabId: '3-223', note: 'membuat KEPUTUSAN (memilih di antara opsi)' },
      { hanzi: '解决', vocabId: '3-208', note: 'MENYELESAIKAN/memecahkan suatu masalah' },
    ],
    explanation: 'Bentuk tulisan dan bunyinya agak mirip (sama-sama ada karakter yang berpola serupa), sehingga pemula sering tertukar. 决定 artinya membuat keputusan/memilih, objeknya biasanya sebuah rencana/pilihan. 解决 artinya menyelesaikan atau memecahkan, objeknya biasanya sebuah masalah (问题).',
    examples: [
      { zh: '我决定明天去北京。', pinyin: 'Wǒ juédìng míngtiān qù Běijīng.', id: 'Saya memutuskan besok pergi ke Beijing.' },
      { zh: '这个问题很难解决。', pinyin: 'Zhège wèntí hěn nán jiějué.', id: 'Masalah ini sulit diselesaikan.' },
    ],
    level: 3,
  },

  {
    id: 'cf3-09',
    title: '受到 vs 收到 — Hampir Sama Bunyi, Beda Makna',
    items: [
      { hanzi: '受到', vocabId: '3-339', note: 'shòudào (nada 4) — MENGALAMI sesuatu (biasanya abstrak: pengaruh, pujian, kritik, kerugian)' },
      { hanzi: '收到', vocabId: '3-340', note: 'shōudào (nada 1) — MENERIMA sesuatu secara fisik (surat, hadiah, pesan)' },
    ],
    explanation: '受到 dan 收到 hanya beda di nada suku kata pertama (shòu nada 4 vs shōu nada 1), sehingga sangat mudah tertukar saat didengar maupun ditulis. 受到 dipakai untuk hal abstrak yang "dialami" seseorang (受到影响 = terpengaruh, 受到批评 = dikritik). 收到 dipakai untuk barang/pesan konkret yang "diterima" (收到礼物 = menerima hadiah, 收到邮件 = menerima email).',
    examples: [
      { zh: '他的想法受到了大家的欢迎。', pinyin: 'Tā de xiǎngfǎ shòudàole dàjiā de huānyíng.', id: 'Idenya diterima dengan baik oleh semua orang (mendapat sambutan).' },
      { zh: '我收到了他的邮件。', pinyin: 'Wǒ shōudàole tā de yóujiàn.', id: 'Saya menerima emailnya.' },
    ],
    level: 3,
  },

  {
    id: 'cf3-10',
    title: '变 vs 变成 vs 变化 — Keluarga Kata "Berubah"',
    items: [
      { hanzi: '变', vocabId: '3-020', note: 'kata kerja dasar, "berubah" (bisa berdiri sendiri atau diikuti pelengkap)' },
      { hanzi: '变成', vocabId: '3-022', note: 'kata kerja, "berubah MENJADI (sesuatu yang spesifik)" — wajib diikuti hasil perubahan' },
      { hanzi: '变化', vocabId: '3-023', note: 'bisa nomina ("perubahan") maupun kata kerja; lebih menekankan proses/hasil perubahan secara umum' },
    ],
    explanation: '变 adalah bentuk paling dasar. 变成 secara spesifik menyebutkan HASIL AKHIR perubahan itu (harus diikuti objek hasil, mis. 变成冰 = berubah menjadi es). 变化 lebih sering dipakai sebagai kata benda untuk membicarakan perubahan itu sendiri secara umum (mis. 天气的变化 = perubahan cuaca), meski bisa juga jadi kata kerja.',
    examples: [
      { zh: '这几年，城市变了很多。', pinyin: 'Zhè jǐ nián, chéngshì biànle hěn duō.', id: 'Beberapa tahun ini, kota berubah banyak.' },
      { zh: '水变成了冰。', pinyin: 'Shuǐ biànchéngle bīng.', id: 'Air berubah menjadi es.' },
      { zh: '最近天气变化很大。', pinyin: 'Zuìjìn tiānqì biànhuà hěn dà.', id: 'Belakangan ini perubahan cuaca sangat besar.' },
    ],
    level: 3,
  },
];

export default hsk3Confusables;