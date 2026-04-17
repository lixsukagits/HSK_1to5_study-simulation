// HSK 3.0 Level 1 — 150 kata representatif (dari total 500)
// Struktur: { id, hanzi, pinyin, arti, contoh, terjemahan, level }

export const hsk1 = [
  // ── Sapaan & Orang ─────────────────────────────────────────
  { id: '1-001', hanzi: '你好', pinyin: 'nǐ hǎo', arti: 'halo', contoh: '你好，我叫小明。', terjemahan: 'Halo, namaku Xiaoming.', level: 1 },
  { id: '1-002', hanzi: '你', pinyin: 'nǐ', arti: 'kamu', contoh: '你是学生吗？', terjemahan: 'Apakah kamu seorang pelajar?', level: 1 },
  { id: '1-003', hanzi: '我', pinyin: 'wǒ', arti: 'saya / aku', contoh: '我是中国人。', terjemahan: 'Saya orang Tiongkok.', level: 1 },
  { id: '1-004', hanzi: '他', pinyin: 'tā', arti: 'dia (laki-laki)', contoh: '他是我的朋友。', terjemahan: 'Dia adalah temanku.', level: 1 },
  { id: '1-005', hanzi: '她', pinyin: 'tā', arti: 'dia (perempuan)', contoh: '她很漂亮。', terjemahan: 'Dia sangat cantik.', level: 1 },
  { id: '1-006', hanzi: '我们', pinyin: 'wǒmen', arti: 'kami / kita', contoh: '我们是同学。', terjemahan: 'Kami adalah teman sekelas.', level: 1 },
  { id: '1-007', hanzi: '你们', pinyin: 'nǐmen', arti: 'kalian', contoh: '你们好！', terjemahan: 'Halo semuanya!', level: 1 },
  { id: '1-008', hanzi: '他们', pinyin: 'tāmen', arti: 'mereka', contoh: '他们都是老师。', terjemahan: 'Mereka semua adalah guru.', level: 1 },
  { id: '1-009', hanzi: '朋友', pinyin: 'péngyou', arti: 'teman', contoh: '他是我的好朋友。', terjemahan: 'Dia adalah teman baik saya.', level: 1 },
  { id: '1-010', hanzi: '老师', pinyin: 'lǎoshī', arti: 'guru', contoh: '我的老师很好。', terjemahan: 'Guru saya sangat baik.', level: 1 },
  { id: '1-011', hanzi: '学生', pinyin: 'xuésheng', arti: 'pelajar / siswa', contoh: '我是学生。', terjemahan: 'Saya adalah pelajar.', level: 1 },
  { id: '1-012', hanzi: '爸爸', pinyin: 'bàba', arti: 'ayah', contoh: '我爸爸是医生。', terjemahan: 'Ayah saya adalah dokter.', level: 1 },
  { id: '1-013', hanzi: '妈妈', pinyin: 'māma', arti: 'ibu', contoh: '妈妈做的饭很好吃。', terjemahan: 'Masakan ibu sangat enak.', level: 1 },
  { id: '1-014', hanzi: '哥哥', pinyin: 'gēge', arti: 'kakak laki-laki', contoh: '我哥哥很高。', terjemahan: 'Kakak laki-laki saya sangat tinggi.', level: 1 },
  { id: '1-015', hanzi: '姐姐', pinyin: 'jiějie', arti: 'kakak perempuan', contoh: '姐姐在北京工作。', terjemahan: 'Kakak perempuan saya bekerja di Beijing.', level: 1 },
  { id: '1-016', hanzi: '弟弟', pinyin: 'dìdi', arti: 'adik laki-laki', contoh: '我弟弟七岁了。', terjemahan: 'Adik laki-laki saya sudah tujuh tahun.', level: 1 },
  { id: '1-017', hanzi: '妹妹', pinyin: 'mèimei', arti: 'adik perempuan', contoh: '妹妹喜欢唱歌。', terjemahan: 'Adik perempuan saya suka bernyanyi.', level: 1 },

  // ── Kata Tanya ──────────────────────────────────────────────
  { id: '1-018', hanzi: '什么', pinyin: 'shénme', arti: 'apa', contoh: '这是什么？', terjemahan: 'Ini apa?', level: 1 },
  { id: '1-019', hanzi: '谁', pinyin: 'shéi', arti: 'siapa', contoh: '他是谁？', terjemahan: 'Dia siapa?', level: 1 },
  { id: '1-020', hanzi: '哪', pinyin: 'nǎ', arti: 'yang mana', contoh: '你是哪国人？', terjemahan: 'Kamu orang negara mana?', level: 1 },
  { id: '1-021', hanzi: '哪里', pinyin: 'nǎlǐ', arti: 'di mana', contoh: '你住在哪里？', terjemahan: 'Kamu tinggal di mana?', level: 1 },
  { id: '1-022', hanzi: '多少', pinyin: 'duōshao', arti: 'berapa', contoh: '这个多少钱？', terjemahan: 'Ini berapa harganya?', level: 1 },
  { id: '1-023', hanzi: '怎么', pinyin: 'zěnme', arti: 'bagaimana', contoh: '你怎么去学校？', terjemahan: 'Kamu pergi ke sekolah dengan apa?', level: 1 },
  { id: '1-024', hanzi: '为什么', pinyin: 'wèishéme', arti: 'mengapa', contoh: '你为什么哭？', terjemahan: 'Mengapa kamu menangis?', level: 1 },
  { id: '1-025', hanzi: '几', pinyin: 'jǐ', arti: 'berapa (kecil)', contoh: '你几岁了？', terjemahan: 'Kamu berapa tahun?', level: 1 },

  // ── Angka ───────────────────────────────────────────────────
  { id: '1-026', hanzi: '一', pinyin: 'yī', arti: 'satu', contoh: '我有一个姐姐。', terjemahan: 'Saya punya satu kakak perempuan.', level: 1 },
  { id: '1-027', hanzi: '二', pinyin: 'èr', arti: 'dua', contoh: '我有两个弟弟。', terjemahan: 'Saya punya dua adik laki-laki.', level: 1 },
  { id: '1-028', hanzi: '三', pinyin: 'sān', arti: 'tiga', contoh: '三个苹果。', terjemahan: 'Tiga buah apel.', level: 1 },
  { id: '1-029', hanzi: '四', pinyin: 'sì', arti: 'empat', contoh: '四月是春天。', terjemahan: 'Bulan April adalah musim semi.', level: 1 },
  { id: '1-030', hanzi: '五', pinyin: 'wǔ', arti: 'lima', contoh: '我家有五口人。', terjemahan: 'Keluarga saya ada lima orang.', level: 1 },
  { id: '1-031', hanzi: '六', pinyin: 'liù', arti: 'enam', contoh: '六点钟起床。', terjemahan: 'Bangun jam enam.', level: 1 },
  { id: '1-032', hanzi: '七', pinyin: 'qī', arti: 'tujuh', contoh: '一个星期有七天。', terjemahan: 'Satu minggu ada tujuh hari.', level: 1 },
  { id: '1-033', hanzi: '八', pinyin: 'bā', arti: 'delapan', contoh: '我八岁开始学汉语。', terjemahan: 'Saya mulai belajar bahasa Mandarin saat delapan tahun.', level: 1 },
  { id: '1-034', hanzi: '九', pinyin: 'jiǔ', arti: 'sembilan', contoh: '九月开学。', terjemahan: 'Sekolah mulai bulan September.', level: 1 },
  { id: '1-035', hanzi: '十', pinyin: 'shí', arti: 'sepuluh', contoh: '十分钟后见。', terjemahan: 'Sampai jumpa sepuluh menit lagi.', level: 1 },
  { id: '1-036', hanzi: '百', pinyin: 'bǎi', arti: 'seratus', contoh: '一百块钱。', terjemahan: 'Seratus yuan.', level: 1 },
  { id: '1-037', hanzi: '两', pinyin: 'liǎng', arti: 'dua (sebelum kata ukuran)', contoh: '两个苹果。', terjemahan: 'Dua buah apel.', level: 1 },

  // ── Waktu ────────────────────────────────────────────────────
  { id: '1-038', hanzi: '今天', pinyin: 'jīntiān', arti: 'hari ini', contoh: '今天天气很好。', terjemahan: 'Cuaca hari ini sangat bagus.', level: 1 },
  { id: '1-039', hanzi: '明天', pinyin: 'míngtiān', arti: 'besok', contoh: '明天我去北京。', terjemahan: 'Besok saya pergi ke Beijing.', level: 1 },
  { id: '1-040', hanzi: '昨天', pinyin: 'zuótiān', arti: 'kemarin', contoh: '昨天下雨了。', terjemahan: 'Kemarin hujan.', level: 1 },
  { id: '1-041', hanzi: '现在', pinyin: 'xiànzài', arti: 'sekarang', contoh: '现在几点了？', terjemahan: 'Sekarang jam berapa?', level: 1 },
  { id: '1-042', hanzi: '年', pinyin: 'nián', arti: 'tahun', contoh: '今年是2025年。', terjemahan: 'Tahun ini adalah 2025.', level: 1 },
  { id: '1-043', hanzi: '月', pinyin: 'yuè', arti: 'bulan', contoh: '这个月很忙。', terjemahan: 'Bulan ini sangat sibuk.', level: 1 },
  { id: '1-044', hanzi: '日', pinyin: 'rì', arti: 'tanggal / hari', contoh: '今天是一号。', terjemahan: 'Hari ini tanggal satu.', level: 1 },
  { id: '1-045', hanzi: '星期', pinyin: 'xīngqī', arti: 'minggu / hari dalam seminggu', contoh: '这个星期我很忙。', terjemahan: 'Minggu ini saya sangat sibuk.', level: 1 },
  { id: '1-046', hanzi: '上午', pinyin: 'shàngwǔ', arti: 'pagi hari (sebelum tengah hari)', contoh: '上午我去上课。', terjemahan: 'Pagi hari saya pergi kuliah.', level: 1 },
  { id: '1-047', hanzi: '下午', pinyin: 'xiàwǔ', arti: 'sore hari', contoh: '下午两点开会。', terjemahan: 'Rapat jam dua sore.', level: 1 },
  { id: '1-048', hanzi: '晚上', pinyin: 'wǎnshang', arti: 'malam hari', contoh: '晚上我看电视。', terjemahan: 'Malam hari saya nonton TV.', level: 1 },

  // ── Tempat & Arah ───────────────────────────────────────────
  { id: '1-049', hanzi: '中国', pinyin: 'Zhōngguó', arti: 'Tiongkok / China', contoh: '我来自中国。', terjemahan: 'Saya berasal dari Tiongkok.', level: 1 },
  { id: '1-050', hanzi: '北京', pinyin: 'Běijīng', arti: 'Beijing', contoh: '北京是中国的首都。', terjemahan: 'Beijing adalah ibu kota Tiongkok.', level: 1 },
  { id: '1-051', hanzi: '学校', pinyin: 'xuéxiào', arti: 'sekolah', contoh: '我去学校上课。', terjemahan: 'Saya pergi ke sekolah untuk belajar.', level: 1 },
  { id: '1-052', hanzi: '家', pinyin: 'jiā', arti: 'rumah / keluarga', contoh: '我回家了。', terjemahan: 'Saya pulang ke rumah.', level: 1 },
  { id: '1-053', hanzi: '上', pinyin: 'shàng', arti: 'di atas / naik', contoh: '书在桌子上。', terjemahan: 'Buku ada di atas meja.', level: 1 },
  { id: '1-054', hanzi: '下', pinyin: 'xià', arti: 'di bawah / turun', contoh: '猫在桌子下。', terjemahan: 'Kucing ada di bawah meja.', level: 1 },
  { id: '1-055', hanzi: '里', pinyin: 'lǐ', arti: 'di dalam', contoh: '书包里有很多书。', terjemahan: 'Di dalam tas ada banyak buku.', level: 1 },
  { id: '1-056', hanzi: '前面', pinyin: 'qiánmiàn', arti: 'di depan', contoh: '前面是银行。', terjemahan: 'Di depan adalah bank.', level: 1 },

  // ── Kata Sifat Dasar ────────────────────────────────────────
  { id: '1-057', hanzi: '好', pinyin: 'hǎo', arti: 'baik / bagus', contoh: '今天天气很好。', terjemahan: 'Cuaca hari ini sangat bagus.', level: 1 },
  { id: '1-058', hanzi: '大', pinyin: 'dà', arti: 'besar', contoh: '这个房间很大。', terjemahan: 'Ruangan ini sangat besar.', level: 1 },
  { id: '1-059', hanzi: '小', pinyin: 'xiǎo', arti: 'kecil', contoh: '这只猫很小。', terjemahan: 'Kucing ini sangat kecil.', level: 1 },
  { id: '1-060', hanzi: '多', pinyin: 'duō', arti: 'banyak', contoh: '这里有很多人。', terjemahan: 'Di sini ada banyak orang.', level: 1 },
  { id: '1-061', hanzi: '少', pinyin: 'shǎo', arti: 'sedikit', contoh: '今天人很少。', terjemahan: 'Hari ini orangnya sedikit.', level: 1 },
  { id: '1-062', hanzi: '高', pinyin: 'gāo', arti: 'tinggi', contoh: '他很高。', terjemahan: 'Dia sangat tinggi.', level: 1 },
  { id: '1-063', hanzi: '热', pinyin: 'rè', arti: 'panas', contoh: '今天很热。', terjemahan: 'Hari ini sangat panas.', level: 1 },
  { id: '1-064', hanzi: '冷', pinyin: 'lěng', arti: 'dingin', contoh: '冬天很冷。', terjemahan: 'Musim dingin sangat dingin.', level: 1 },
  { id: '1-065', hanzi: '漂亮', pinyin: 'piàoliang', arti: 'cantik / indah', contoh: '她很漂亮。', terjemahan: 'Dia sangat cantik.', level: 1 },
  { id: '1-066', hanzi: '高兴', pinyin: 'gāoxìng', arti: 'senang / gembira', contoh: '见到你很高兴。', terjemahan: 'Senang bertemu denganmu.', level: 1 },
  { id: '1-067', hanzi: '累', pinyin: 'lèi', arti: 'lelah / capek', contoh: '我今天很累。', terjemahan: 'Saya sangat lelah hari ini.', level: 1 },
  { id: '1-068', hanzi: '忙', pinyin: 'máng', arti: 'sibuk', contoh: '我最近很忙。', terjemahan: 'Belakangan ini saya sangat sibuk.', level: 1 },

  // ── Kata Kerja Dasar ────────────────────────────────────────
  { id: '1-069', hanzi: '是', pinyin: 'shì', arti: 'adalah / merupakan', contoh: '我是老师。', terjemahan: 'Saya adalah guru.', level: 1 },
  { id: '1-070', hanzi: '有', pinyin: 'yǒu', arti: 'ada / punya', contoh: '我有一本书。', terjemahan: 'Saya punya satu buku.', level: 1 },
  { id: '1-071', hanzi: '去', pinyin: 'qù', arti: 'pergi', contoh: '我去学校。', terjemahan: 'Saya pergi ke sekolah.', level: 1 },
  { id: '1-072', hanzi: '来', pinyin: 'lái', arti: 'datang', contoh: '他来了。', terjemahan: 'Dia sudah datang.', level: 1 },
  { id: '1-073', hanzi: '吃', pinyin: 'chī', arti: 'makan', contoh: '我们一起吃饭吧。', terjemahan: 'Mari kita makan bersama.', level: 1 },
  { id: '1-074', hanzi: '喝', pinyin: 'hē', arti: 'minum', contoh: '我喜欢喝茶。', terjemahan: 'Saya suka minum teh.', level: 1 },
  { id: '1-075', hanzi: '看', pinyin: 'kàn', arti: 'melihat / menonton', contoh: '我喜欢看书。', terjemahan: 'Saya suka membaca buku.', level: 1 },
  { id: '1-076', hanzi: '听', pinyin: 'tīng', arti: 'mendengarkan', contoh: '我听音乐。', terjemahan: 'Saya mendengarkan musik.', level: 1 },
  { id: '1-077', hanzi: '说', pinyin: 'shuō', arti: 'berbicara / berkata', contoh: '请你说中文。', terjemahan: 'Tolong berbicara dalam bahasa Mandarin.', level: 1 },
  { id: '1-078', hanzi: '写', pinyin: 'xiě', arti: 'menulis', contoh: '我在写作业。', terjemahan: 'Saya sedang mengerjakan PR.', level: 1 },
  { id: '1-079', hanzi: '读', pinyin: 'dú', arti: 'membaca / belajar', contoh: '他在读大学。', terjemahan: 'Dia sedang kuliah.', level: 1 },
  { id: '1-080', hanzi: '学', pinyin: 'xué', arti: 'belajar / mempelajari', contoh: '我在学汉语。', terjemahan: 'Saya sedang belajar bahasa Mandarin.', level: 1 },
  { id: '1-081', hanzi: '工作', pinyin: 'gōngzuò', arti: 'bekerja / pekerjaan', contoh: '我在北京工作。', terjemahan: 'Saya bekerja di Beijing.', level: 1 },
  { id: '1-082', hanzi: '住', pinyin: 'zhù', arti: 'tinggal / berdomisili', contoh: '我住在上海。', terjemahan: 'Saya tinggal di Shanghai.', level: 1 },
  { id: '1-083', hanzi: '喜欢', pinyin: 'xǐhuan', arti: 'suka / menyukai', contoh: '我喜欢吃苹果。', terjemahan: 'Saya suka makan apel.', level: 1 },
  { id: '1-084', hanzi: '想', pinyin: 'xiǎng', arti: 'ingin / memikirkan', contoh: '我想去中国。', terjemahan: 'Saya ingin pergi ke Tiongkok.', level: 1 },
  { id: '1-085', hanzi: '知道', pinyin: 'zhīdao', arti: 'mengetahui / tahu', contoh: '我不知道。', terjemahan: 'Saya tidak tahu.', level: 1 },
  { id: '1-086', hanzi: '叫', pinyin: 'jiào', arti: 'bernama / memanggil', contoh: '我叫小明。', terjemahan: 'Nama saya Xiaoming.', level: 1 },
  { id: '1-087', hanzi: '坐', pinyin: 'zuò', arti: 'duduk / naik (kendaraan)', contoh: '请坐！', terjemahan: 'Silakan duduk!', level: 1 },
  { id: '1-088', hanzi: '走', pinyin: 'zǒu', arti: 'berjalan / pergi', contoh: '我们走吧。', terjemahan: 'Ayo kita pergi.', level: 1 },
  { id: '1-089', hanzi: '买', pinyin: 'mǎi', arti: 'membeli', contoh: '我去买东西。', terjemahan: 'Saya pergi membeli sesuatu.', level: 1 },
  { id: '1-090', hanzi: '开', pinyin: 'kāi', arti: 'membuka / mengemudikan', contoh: '他会开车。', terjemahan: 'Dia bisa mengemudi.', level: 1 },

  // ── Makanan & Minuman ────────────────────────────────────────
  { id: '1-091', hanzi: '饭', pinyin: 'fàn', arti: 'nasi / makanan', contoh: '我们去吃饭吧。', terjemahan: 'Mari kita makan.', level: 1 },
  { id: '1-092', hanzi: '水', pinyin: 'shuǐ', arti: 'air', contoh: '我要一杯水。', terjemahan: 'Saya mau segelas air.', level: 1 },
  { id: '1-093', hanzi: '茶', pinyin: 'chá', arti: 'teh', contoh: '中国茶很好喝。', terjemahan: 'Teh Tiongkok sangat enak.', level: 1 },
  { id: '1-094', hanzi: '苹果', pinyin: 'píngguǒ', arti: 'apel', contoh: '我喜欢吃苹果。', terjemahan: 'Saya suka makan apel.', level: 1 },
  { id: '1-095', hanzi: '米饭', pinyin: 'mǐfàn', arti: 'nasi putih', contoh: '我喜欢吃米饭。', terjemahan: 'Saya suka makan nasi.', level: 1 },

  // ── Benda Sehari-hari ───────────────────────────────────────
  { id: '1-096', hanzi: '书', pinyin: 'shū', arti: 'buku', contoh: '这本书很好看。', terjemahan: 'Buku ini sangat menarik.', level: 1 },
  { id: '1-097', hanzi: '电脑', pinyin: 'diànnǎo', arti: 'komputer', contoh: '我用电脑工作。', terjemahan: 'Saya bekerja menggunakan komputer.', level: 1 },
  { id: '1-098', hanzi: '手机', pinyin: 'shǒujī', arti: 'ponsel / HP', contoh: '我的手机没电了。', terjemahan: 'HP saya sudah kehabisan baterai.', level: 1 },
  { id: '1-099', hanzi: '钱', pinyin: 'qián', arti: 'uang', contoh: '这个多少钱？', terjemahan: 'Ini berapa harganya?', level: 1 },
  { id: '1-100', hanzi: '车', pinyin: 'chē', arti: 'kendaraan / mobil', contoh: '我坐车去学校。', terjemahan: 'Saya naik kendaraan ke sekolah.', level: 1 },

  // ── Bahasa & Komunikasi ─────────────────────────────────────
  { id: '1-101', hanzi: '汉语', pinyin: 'Hànyǔ', arti: 'bahasa Mandarin', contoh: '我在学汉语。', terjemahan: 'Saya sedang belajar bahasa Mandarin.', level: 1 },
  { id: '1-102', hanzi: '中文', pinyin: 'Zhōngwén', arti: 'bahasa/tulisan Tiongkok', contoh: '他的中文很好。', terjemahan: 'Bahasa Mandarinnya sangat bagus.', level: 1 },
  { id: '1-103', hanzi: '英语', pinyin: 'Yīngyǔ', arti: 'bahasa Inggris', contoh: '我学习英语三年了。', terjemahan: 'Saya sudah belajar bahasa Inggris selama tiga tahun.', level: 1 },
  { id: '1-104', hanzi: '谢谢', pinyin: 'xièxie', arti: 'terima kasih', contoh: '谢谢你的帮助。', terjemahan: 'Terima kasih atas bantuanmu.', level: 1 },
  { id: '1-105', hanzi: '不客气', pinyin: 'bú kèqi', arti: 'sama-sama / jangan sungkan', contoh: '谢谢！不客气。', terjemahan: 'Terima kasih! Sama-sama.', level: 1 },
  { id: '1-106', hanzi: '对不起', pinyin: 'duìbuqǐ', arti: 'maaf', contoh: '对不起，我来晚了。', terjemahan: 'Maaf, saya datang terlambat.', level: 1 },
  { id: '1-107', hanzi: '没关系', pinyin: 'méi guānxi', arti: 'tidak apa-apa', contoh: '没关系，没事的。', terjemahan: 'Tidak apa-apa, tidak masalah.', level: 1 },
  { id: '1-108', hanzi: '请', pinyin: 'qǐng', arti: 'silakan / tolong', contoh: '请进！', terjemahan: 'Silakan masuk!', level: 1 },
  { id: '1-109', hanzi: '再见', pinyin: 'zàijiàn', arti: 'sampai jumpa', contoh: '明天见，再见！', terjemahan: 'Sampai jumpa besok, selamat tinggal!', level: 1 },

  // ── Kata Keterangan & Penghubung ────────────────────────────
  { id: '1-110', hanzi: '很', pinyin: 'hěn', arti: 'sangat', contoh: '他很高。', terjemahan: 'Dia sangat tinggi.', level: 1 },
  { id: '1-111', hanzi: '不', pinyin: 'bù', arti: 'tidak', contoh: '我不喝酒。', terjemahan: 'Saya tidak minum alkohol.', level: 1 },
  { id: '1-112', hanzi: '没', pinyin: 'méi', arti: 'tidak ada / belum', contoh: '我没有钱。', terjemahan: 'Saya tidak punya uang.', level: 1 },
  { id: '1-113', hanzi: '也', pinyin: 'yě', arti: 'juga', contoh: '我也是学生。', terjemahan: 'Saya juga adalah pelajar.', level: 1 },
  { id: '1-114', hanzi: '都', pinyin: 'dōu', arti: 'semua / semuanya', contoh: '他们都来了。', terjemahan: 'Mereka semua sudah datang.', level: 1 },
  { id: '1-115', hanzi: '还', pinyin: 'hái', arti: 'masih / lagi', contoh: '我还想吃。', terjemahan: 'Saya masih mau makan.', level: 1 },
  { id: '1-116', hanzi: '就', pinyin: 'jiù', arti: 'segera / justru', contoh: '我就来。', terjemahan: 'Saya segera datang.', level: 1 },
  { id: '1-117', hanzi: '再', pinyin: 'zài', arti: 'lagi / kembali', contoh: '请再说一遍。', terjemahan: 'Tolong katakan sekali lagi.', level: 1 },
  { id: '1-118', hanzi: '吗', pinyin: 'ma', arti: 'partikel tanya', contoh: '你是学生吗？', terjemahan: 'Apakah kamu seorang pelajar?', level: 1 },
  { id: '1-119', hanzi: '呢', pinyin: 'ne', arti: 'partikel tanya (bagaimana dengan...)', contoh: '你呢？', terjemahan: 'Kalau kamu?', level: 1 },
  { id: '1-120', hanzi: '了', pinyin: 'le', arti: 'partikel aspek (selesai/perubahan)', contoh: '他来了。', terjemahan: 'Dia sudah datang.', level: 1 },
  { id: '1-121', hanzi: '的', pinyin: 'de', arti: 'partikel kepemilikan', contoh: '这是我的书。', terjemahan: 'Ini adalah buku saya.', level: 1 },
  { id: '1-122', hanzi: '和', pinyin: 'hé', arti: 'dan', contoh: '我和他是朋友。', terjemahan: 'Saya dan dia adalah teman.', level: 1 },
  { id: '1-123', hanzi: '在', pinyin: 'zài', arti: 'di / sedang (ada di)', contoh: '我在家。', terjemahan: 'Saya ada di rumah.', level: 1 },
  { id: '1-124', hanzi: '太', pinyin: 'tài', arti: 'terlalu / sangat sekali', contoh: '太好了！', terjemahan: 'Bagus sekali!', level: 1 },
  { id: '1-125', hanzi: '非常', pinyin: 'fēicháng', arti: 'sangat / luar biasa', contoh: '这道菜非常好吃。', terjemahan: 'Masakan ini sangat enak.', level: 1 },

  // ── Transportasi & Arah ─────────────────────────────────────
  { id: '1-126', hanzi: '飞机', pinyin: 'fēijī', arti: 'pesawat', contoh: '我坐飞机来北京。', terjemahan: 'Saya naik pesawat ke Beijing.', level: 1 },
  { id: '1-127', hanzi: '出租车', pinyin: 'chūzūchē', arti: 'taksi', contoh: '我打出租车去机场。', terjemahan: 'Saya naik taksi ke bandara.', level: 1 },
  { id: '1-128', hanzi: '火车', pinyin: 'huǒchē', arti: 'kereta api', contoh: '坐火车去上海。', terjemahan: 'Naik kereta ke Shanghai.', level: 1 },
  { id: '1-129', hanzi: '公共汽车', pinyin: 'gōnggòng qìchē', arti: 'bus umum', contoh: '我坐公共汽车上班。', terjemahan: 'Saya naik bus ke tempat kerja.', level: 1 },

  // ── Cuaca ───────────────────────────────────────────────────
  { id: '1-130', hanzi: '天气', pinyin: 'tiānqì', arti: 'cuaca', contoh: '今天天气怎么样？', terjemahan: 'Bagaimana cuaca hari ini?', level: 1 },
  { id: '1-131', hanzi: '下雨', pinyin: 'xià yǔ', arti: 'hujan', contoh: '今天下雨了。', terjemahan: 'Hari ini hujan.', level: 1 },
  { id: '1-132', hanzi: '下雪', pinyin: 'xià xuě', arti: 'turun salju', contoh: '北京冬天会下雪。', terjemahan: 'Beijing musim dingin turun salju.', level: 1 },

  // ── Warna ───────────────────────────────────────────────────
  { id: '1-133', hanzi: '红色', pinyin: 'hóngsè', arti: 'merah', contoh: '我喜欢红色。', terjemahan: 'Saya suka warna merah.', level: 1 },
  { id: '1-134', hanzi: '白色', pinyin: 'báisè', arti: 'putih', contoh: '她穿白色衣服。', terjemahan: 'Dia memakai baju putih.', level: 1 },
  { id: '1-135', hanzi: '黑色', pinyin: 'hēisè', arti: 'hitam', contoh: '这只猫是黑色的。', terjemahan: 'Kucing ini berwarna hitam.', level: 1 },

  // ── Tubuh & Kesehatan ────────────────────────────────────────
  { id: '1-136', hanzi: '医生', pinyin: 'yīshēng', arti: 'dokter', contoh: '我去看医生。', terjemahan: 'Saya pergi ke dokter.', level: 1 },
  { id: '1-137', hanzi: '医院', pinyin: 'yīyuàn', arti: 'rumah sakit', contoh: '他在医院工作。', terjemahan: 'Dia bekerja di rumah sakit.', level: 1 },
  { id: '1-138', hanzi: '头', pinyin: 'tóu', arti: 'kepala', contoh: '我头很痛。', terjemahan: 'Kepala saya sangat sakit.', level: 1 },
  { id: '1-139', hanzi: '眼睛', pinyin: 'yǎnjing', arti: 'mata', contoh: '她的眼睛很漂亮。', terjemahan: 'Matanya sangat indah.', level: 1 },

  // ── Hobi & Hiburan ───────────────────────────────────────────
  { id: '1-140', hanzi: '音乐', pinyin: 'yīnyuè', arti: 'musik', contoh: '我喜欢听音乐。', terjemahan: 'Saya suka mendengarkan musik.', level: 1 },
  { id: '1-141', hanzi: '电影', pinyin: 'diànyǐng', arti: 'film', contoh: '我们去看电影吧。', terjemahan: 'Ayo kita nonton film.', level: 1 },
  { id: '1-142', hanzi: '电视', pinyin: 'diànshì', arti: 'televisi', contoh: '我晚上看电视。', terjemahan: 'Saya nonton TV di malam hari.', level: 1 },
  { id: '1-143', hanzi: '足球', pinyin: 'zúqiú', arti: 'sepak bola', contoh: '他喜欢踢足球。', terjemahan: 'Dia suka bermain sepak bola.', level: 1 },
  { id: '1-144', hanzi: '运动', pinyin: 'yùndòng', arti: 'olahraga', contoh: '运动对身体好。', terjemahan: 'Olahraga baik untuk tubuh.', level: 1 },

  // ── Kata Tambahan ────────────────────────────────────────────
  { id: '1-145', hanzi: '一起', pinyin: 'yīqǐ', arti: 'bersama-sama', contoh: '我们一起去吧。', terjemahan: 'Mari kita pergi bersama.', level: 1 },
  { id: '1-146', hanzi: '可以', pinyin: 'kěyǐ', arti: 'boleh / bisa', contoh: '我可以进来吗？', terjemahan: 'Boleh saya masuk?', level: 1 },
  { id: '1-147', hanzi: '会', pinyin: 'huì', arti: 'bisa / akan', contoh: '我会说汉语。', terjemahan: 'Saya bisa berbicara bahasa Mandarin.', level: 1 },
  { id: '1-148', hanzi: '要', pinyin: 'yào', arti: 'ingin / perlu / harus', contoh: '我要一杯咖啡。', terjemahan: 'Saya mau secangkir kopi.', level: 1 },
  { id: '1-149', hanzi: '能', pinyin: 'néng', arti: 'mampu / dapat', contoh: '你能帮我吗？', terjemahan: 'Bisakah kamu membantuku?', level: 1 },
  { id: '1-150', hanzi: '应该', pinyin: 'yīnggāi', arti: 'seharusnya / sebaiknya', contoh: '你应该多休息。', terjemahan: 'Kamu seharusnya lebih banyak istirahat.', level: 1 },
]