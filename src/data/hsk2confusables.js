// HSK 3.0 Level 2 — Kata-kata yang Gampang Ketuker (Confusables)
// 10 grup, diprioritaskan pada pasangan/klaster yang benar-benar sering jadi sumber kesalahan
// pemula HSK2: 2 pasang homograf murni (过, 花 — satu hanzi, dua vocabId/fungsi berbeda,
// pola sama seperti了¹/了² di HSK1), lalu pasangan bunyi/bentuk mirip (进/近), klaster imbuhan
// (快/快乐/快要, 意思/有意思/没意思/不好意思), dan klaster kata posisi/arah (那么/这么/那样/这样,
// 左/右/左边/右边, 里面/外面/上面/下面/前面/后面), plus 从/从小 dan 一起/一会儿.
// Setiap vocabId sudah divalidasi ada di hsk2.js (lihat laporan validasi akhir).
// Struktur: { id, title, items: [{hanzi, vocabId, note}], explanation, examples: [{zh,pinyin,id}], level }

export const hsk2Confusables = [
  {
    id: '2-conf-01',
    title: '过 (guo) sebagai partikel vs 过 (guò) sebagai kata kerja',
    items: [
      { hanzi: '过', vocabId: '2-047', note: 'Partikel pengalaman (setelah kata kerja): menyatakan tindakan pernah dilakukan, mis. 去过 = pernah pergi.' },
      { hanzi: '过', vocabId: '2-048', note: 'Kata kerja utuh: merayakan (过年/过生日) atau melewati suatu tempat/waktu.' },
    ],
    explanation: 'Satu hanzi yang sama, 过, punya dua fungsi gramatikal berbeda. Sebagai PARTIKEL (选 setelah kata kerja lain, nada ringan \'guo\'), ia menandai pengalaman: \'V + 过\' = pernah melakukan V. Sebagai KATA KERJA UTAMA (nada penuh \'guò\'), 过 berarti merayakan atau melewati. Pemula sering bingung karena bentuk tulisannya identik.',
    examples: [
      { zh: '我去过北京。', pinyin: 'Wǒ qù guo Běijīng.', id: 'Saya pernah pergi ke Beijing. (过 = partikel pengalaman)' },
      { zh: '我们在中国过年。', pinyin: 'Wǒmen zài Zhōngguó guònián.', id: 'Kami merayakan Tahun Baru di Tiongkok. (过 = kata kerja \'merayakan\')' },
      { zh: '时间过得很快。', pinyin: 'Shíjiān guò de hěn kuài.', id: 'Waktu berlalu dengan sangat cepat. (过 = kata kerja \'berlalu/lewat\')' },
    ],
    level: 2,
  },
  {
    id: '2-conf-02',
    title: '花 (huā) bunga vs 花 (huā) menghabiskan',
    items: [
      { hanzi: '花', vocabId: '2-058', note: 'Kata benda: bunga/tanaman berbunga.' },
      { hanzi: '花', vocabId: '2-200', note: 'Kata kerja: menghabiskan uang atau waktu.' },
    ],
    explanation: '花 sebagai KATA BENDA berarti bunga (objek alam), sedangkan 花 sebagai KATA KERJA berarti menghabiskan/memakai (uang, waktu). Bunyinya identik (huā), jadi harus dilihat dari konteks kalimat: apakah 花 diikuti kata benda seperti uang/waktu (berarti kata kerja) atau berdiri sendiri sebagai objek (berarti bunga).',
    examples: [
      { zh: '桌子上有一朵花。', pinyin: 'Zhuōzi shàng yǒu yī duǒ huā.', id: 'Di atas meja ada sekuntum bunga. (花 = bunga)' },
      { zh: '他花了很多钱买衣服。', pinyin: 'Tā huā le hěn duō qián mǎi yīfu.', id: 'Dia menghabiskan banyak uang untuk membeli baju. (花 = menghabiskan)' },
    ],
    level: 2,
  },
  {
    id: '2-conf-03',
    title: '那么/这么 vs 那样/这样',
    items: [
      { hanzi: '那么', vocabId: '2-107', note: 'Menunjuk derajat/sifat sesuatu yang jauh dari pembicara (seperti itu), biasanya diikuti kata sifat.' },
      { hanzi: '这么', vocabId: '2-188', note: 'Menunjuk derajat/sifat sesuatu yang dekat dengan pembicara (seperti ini), biasanya diikuti kata sifat.' },
      { hanzi: '那样', vocabId: '2-109', note: 'Menunjuk cara/model yang jauh dari pembicara (dengan cara itu), biasanya diikuti kata kerja.' },
      { hanzi: '这样', vocabId: '2-190', note: 'Menunjuk cara/model yang dekat dengan pembicara (dengan cara ini), biasanya diikuti kata kerja.' },
    ],
    explanation: '那么/这么 dan 那样/这样 terlihat sangat mirip karena sama-sama pasangan jauh(那)/dekat(这). Bedanya: 那么/这么 lebih sering mendahului KATA SIFAT untuk menunjukkan derajat (\'sebegitu/sebegini [sifat]\'), sedangkan 那样/这样 lebih sering mendahului atau menggambarkan KATA KERJA/CARA (\'dengan cara itu/ini\'). Pemula sering menukar keduanya karena artinya sama-sama \'seperti itu/ini\' dalam terjemahan bebas.',
    examples: [
      { zh: '你哥哥有你那么高吗？', pinyin: 'Nǐ gēge yǒu nǐ nàme gāo ma?', id: 'Apakah kakakmu setinggi kamu? (那么 + kata sifat 高)' },
      { zh: '我没想到今天这么冷。', pinyin: 'Wǒ méi xiǎngdào jīntiān zhème lěng.', id: 'Saya tidak menyangka hari ini sedingin ini. (这么 + kata sifat 冷)' },
      { zh: '筷子不能那样拿。', pinyin: 'Kuàizi bù néng nàyàng ná.', id: 'Sumpit tidak bisa dipegang dengan cara itu. (那样 + kata kerja 拿)' },
      { zh: '这个字这样写。', pinyin: 'Zhège zì zhèyàng xiě.', id: 'Karakter ini ditulis dengan cara ini. (这样 + kata kerja 写)' },
    ],
    level: 2,
  },
  {
    id: '2-conf-04',
    title: '左/右 vs 左边/右边',
    items: [
      { hanzi: '左', vocabId: '2-197', note: 'Arah kiri (bentuk dasar, sering sebagai atribut, mis. 左手 = tangan kiri).' },
      { hanzi: '右', vocabId: '2-177', note: 'Arah kanan (bentuk dasar, sering sebagai atribut, mis. 右手 = tangan kanan).' },
      { hanzi: '左边', vocabId: '2-198', note: 'Kata benda lokasi: sisi/bagian kiri (tempat berdiri sendiri sebagai objek kalimat).' },
      { hanzi: '右边', vocabId: '2-179', note: 'Kata benda lokasi: sisi/bagian kanan (tempat berdiri sendiri sebagai objek kalimat).' },
    ],
    explanation: '左 dan 右 gampang tertukar karena berlawanan arah dan sering dipakai berdampingan saat memberi petunjuk arah. Selain itu, bentuk dasar (左/右) vs bentuk lokasi (左边/右边) juga sering disamakan — padahal 左/右 lebih sering jadi ATRIBUT (左手, 右手), sedangkan 左边/右边 berdiri sebagai KATA BENDA LOKASI utuh (\'di sebelah kiri/kanan\').',
    examples: [
      { zh: '你往左走，就能看见洗手间。', pinyin: 'Nǐ wǎng zuǒ zǒu, jiù néng kànjiàn xǐshǒujiān.', id: 'Kamu jalan ke kiri, nanti bisa melihat toilet.' },
      { zh: '银行在超市的右边。', pinyin: 'Yínháng zài chāoshì de yòubian.', id: 'Bank ada di sebelah kanan supermarket.' },
    ],
    level: 2,
  },
  {
    id: '2-conf-05',
    title: '进 (jìn, masuk) vs 近 (jìn, dekat)',
    items: [
      { hanzi: '进', vocabId: '2-068', note: 'Kata kerja: masuk (bergerak ke dalam suatu tempat).' },
      { hanzi: '近', vocabId: '2-069', note: 'Kata sifat: dekat (jarak yang pendek).' },
    ],
    explanation: '进 dan 近 punya pelafalan yang SAMA PERSIS (jìn, nada ke-4) dan bentuk tulisan yang mirip (sama-sama berkomponen kiri 辶), sehingga sangat sering tertukar oleh pemula — baik saat mendengar maupun menulis. Bedanya cukup jelas dari makna: 进 adalah kata kerja gerak (masuk), sedangkan 近 adalah kata sifat jarak (dekat).',
    examples: [
      { zh: '请进！', pinyin: 'Qǐng jìn!', id: 'Silakan masuk!' },
      { zh: '我家离学校很近。', pinyin: 'Wǒ jiā lí xuéxiào hěn jìn.', id: 'Rumah saya dekat dari sekolah.' },
    ],
    level: 2,
  },
  {
    id: '2-conf-06',
    title: '快 vs 快乐 vs 快要',
    items: [
      { hanzi: '快', vocabId: '2-082', note: 'Kata sifat/keterangan: cepat.' },
      { hanzi: '快乐', vocabId: '2-083', note: 'Kata sifat: bahagia/gembira.' },
      { hanzi: '快要', vocabId: '2-084', note: 'Kata keterangan: hampir/akan segera (dipakai dengan pola 快要……了).' },
    ],
    explanation: 'Ketiga kata ini berbagi karakter awal yang sama (快) tapi fungsinya sangat berbeda: 快 sendiri berarti \'cepat\', 快乐 (dengan 乐) berarti \'bahagia\' (bukan \'cepat-cepat\'), dan 快要 (dengan 要) berarti \'akan segera terjadi\' (bukan \'cepat mau\'). Pemula sering salah menebak arti 快乐/快要 hanya dari mengenali karakter 快 saja.',
    examples: [
      { zh: '他跑得很快。', pinyin: 'Tā pǎo de hěn kuài.', id: 'Dia berlari sangat cepat. (快 = cepat)' },
      { zh: '生日快乐！', pinyin: 'Shēngrì kuàilè!', id: 'Selamat ulang tahun! (快乐 = bahagia, bukan \'cepat\')' },
      { zh: '电影快要开始了。', pinyin: 'Diànyǐng kuàiyào kāishǐ le.', id: 'Film hampir mulai. (快要...了 = akan segera)' },
    ],
    level: 2,
  },
  {
    id: '2-conf-07',
    title: '从 (dari) vs 从小 (sejak kecil)',
    items: [
      { hanzi: '从', vocabId: '2-024', note: 'Preposisi: dari (titik awal waktu/tempat), diikuti tempat/waktu lalu kata kerja.' },
      { hanzi: '从小', vocabId: '2-025', note: 'Kata keterangan tetap: sejak kecil/sejak masa kanak-kanak (bukan \'dari yang kecil\').' },
    ],
    explanation: '从 sendiri berarti \'dari\' dan butuh objek tempat/waktu setelahnya (从北京, 从明天). Tapi 从小 adalah satu kesatuan kata keterangan waktu yang berarti \'sejak kecil\' — bukan \'dari (barang) yang kecil\' seperti yang sering disalahartikan pemula karena menerjemahkan kata per kata.',
    examples: [
      { zh: '你从哪儿来？', pinyin: 'Nǐ cóng nǎr lái?', id: 'Kamu berasal dari mana? (从 + tempat)' },
      { zh: '他从小就喜欢画画。', pinyin: 'Tā cóngxiǎo jiù xǐhuan huà huà.', id: 'Dia sudah suka menggambar sejak kecil. (从小 = sejak kecil, satu kesatuan)' },
    ],
    level: 2,
  },
  {
    id: '2-conf-08',
    title: '一起 (bersama) vs 一会儿 (sebentar)',
    items: [
      { hanzi: '一起', vocabId: '2-174', note: 'Kata keterangan cakupan: bersama-sama (melakukan sesuatu dengan orang lain).' },
      { hanzi: '一会儿', vocabId: '2-170', note: 'Kata keterangan/kuantitas waktu: sebentar/sesaat (durasi singkat, tidak ada unsur \'bersama\').' },
    ],
    explanation: 'Keduanya sama-sama diawali angka 一 dan sering muncul di kalimat sehari-hari, sehingga pemula kadang menebak artinya mirip padahal sama sekali berbeda konsep: 一起 tentang KEBERSAMAAN (dengan siapa), sedangkan 一会儿 tentang DURASI WAKTU (berapa lama).',
    examples: [
      { zh: '我们一起去看电影吧。', pinyin: 'Wǒmen yīqǐ qù kàn diànyǐng ba.', id: 'Ayo kita nonton film bersama. (一起 = bersama)' },
      { zh: '请等一会儿。', pinyin: 'Qǐng děng yíhuìr.', id: 'Tolong tunggu sebentar. (一会儿 = durasi singkat)' },
    ],
    level: 2,
  },
  {
    id: '2-conf-09',
    title: '意思 vs 有意思 vs 没意思 vs 不好意思',
    items: [
      { hanzi: '意思', vocabId: '2-175', note: 'Kata benda netral: arti/makna sesuatu.' },
      { hanzi: '有意思', vocabId: '2-178', note: 'Frasa evaluatif: menarik/seru (secara harfiah \'punya makna/rasa\').' },
      { hanzi: '没意思', vocabId: '2-098', note: 'Frasa evaluatif: membosankan/tidak menarik (kebalikan dari 有意思).' },
      { hanzi: '不好意思', vocabId: '2-012', note: 'Ungkapan sosial: maaf/malu/sungkan (SAMA SEKALI tidak berhubungan dengan \'arti yang tidak bagus\').' },
    ],
    explanation: 'Keempat frasa ini berbagi kata inti 意思 (\'arti/makna\'), tapi begitu ditambah awalan (有/没/不好) artinya berubah total dan tidak bisa ditebak dari terjemahan kata-per-kata. Ini adalah salah satu cluster paling sering bikin bingung pelajar HSK2, terutama 不好意思 yang SAMA SEKALI bukan berarti \'artinya tidak bagus\', melainkan ungkapan sosial untuk rasa malu/minta maaf.',
    examples: [
      { zh: '这个词是什么意思？', pinyin: 'Zhège cí shì shénme yìsi?', id: 'Kata ini artinya apa? (意思 = arti/makna, netral)' },
      { zh: '这个电影很有意思。', pinyin: 'Zhège diànyǐng hěn yǒu yìsi.', id: 'Film ini sangat menarik. (有意思 = menarik)' },
      { zh: '这本书没意思。', pinyin: 'Zhè běn shū méi yìsi.', id: 'Buku ini membosankan. (没意思 = membosankan)' },
      { zh: '对不起，让你久等了，真不好意思。', pinyin: 'Duìbuqǐ, ràng nǐ jiǔ děng le, zhēn bù hǎoyìsi.', id: 'Maaf, membuatmu menunggu lama, saya jadi sungkan. (不好意思 = ungkapan sosial, bukan soal \'arti\')' },
    ],
    level: 2,
  },
  {
    id: '2-conf-10',
    title: '里面/外面/上面/下面/前面/后面',
    items: [
      { hanzi: '里面', vocabId: '2-089', note: 'Di dalam (lawan dari 外面).' },
      { hanzi: '外面', vocabId: '2-146', note: 'Di luar (lawan dari 里面).' },
      { hanzi: '上面', vocabId: '2-125', note: 'Di atas (lawan dari 下面).' },
      { hanzi: '下面', vocabId: '2-156', note: 'Di bawah (lawan dari 上面).' },
      { hanzi: '前面', vocabId: '2-116', note: 'Di depan (lawan dari 后面).' },
      { hanzi: '后面', vocabId: '2-056', note: 'Di belakang (lawan dari 前面).' },
    ],
    explanation: 'Keenam kata posisi ini punya pola pembentukan yang identik (kata arah + 面), sehingga pemula sering hafal polanya tapi tertukar pasangannya (mis. bilang 上面 padahal maksudnya 下面, atau 里面 vs 外面). Latihan paling efektif adalah selalu menghafalkannya berpasangan sebagai lawan kata, bukan satu per satu.',
    examples: [
      { zh: '书在桌子里面。', pinyin: 'Shū zài zhuōzi lǐmiàn.', id: 'Buku ada di dalam meja.' },
      { zh: '猫在房子外面。', pinyin: 'Māo zài fángzi wàimiàn.', id: 'Kucing ada di luar rumah.' },
      { zh: '杯子在书的上面。', pinyin: 'Bēizi zài shū de shàngmiàn.', id: 'Gelas ada di atas buku.' },
      { zh: '鞋在床的下面。', pinyin: 'Xié zài chuáng de xiàmiàn.', id: 'Sepatu ada di bawah tempat tidur.' },
    ],
    level: 2,
  },
];