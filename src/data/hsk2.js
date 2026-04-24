// HSK 3.0 Level 2 — 200 kata resmi
// Sumber: HSK 3.0 Test Standard (汉考国际)
// Divalidasi terhadap: IndoPanda HSK2 PDF + hskmokctest.com syllabus + GF 0025-2021
// Struktur: { id, hanzi, pinyin, arti, contoh, terjemahan, level }
//
// Perubahan dari versi sebelumnya (hasil cross-check 3 sumber):
// - 2-004 班: tambah "(kata ukuran)" sesuai IndoPanda word class
// - 2-027 打: tambah "menelepon" per IndoPanda "to hit; to call"
// - 2-035 点: tambah "memesan" per IndoPanda 点2 "a little; to choose/order"
// - 2-051 过去: tambah "pergi ke sana" per IndoPanda "The past; to go over"
// - 2-052 还是: tambah "lebih baik" per GF 0025 & IndoPanda "or; still; had better"
// - 2-058 花: pisah jadi 花1 (bunga saja), 花2 di 2-200 (menghabiskan)
// - 2-079 考: perbaiki ke "mengujikan; mengikuti ujian" per IndoPanda
// - 2-136 送: tambah "mengirimkan" per IndoPanda "to give; to send; to see off"
// - Semua arti: diperlengkap dan diselaraskan dengan 3 sumber

export const hsk2 = [

  // ── A ─────────────────────────────────────────────────────────────
  { id: '2-001', hanzi: '啊', pinyin: 'a', arti: 'ah; oh (partikel ekspresi kejutan/realisasi)', contoh: '啊，真漂亮！', terjemahan: 'Ah, sungguh cantik!', level: 2 },
  { id: '2-002', hanzi: '爱好', pinyin: 'àihào', arti: 'hobi; kegemaran; minat', contoh: '你的爱好是什么？', terjemahan: 'Apa hobimu?', level: 2 },

  // ── B ─────────────────────────────────────────────────────────────
  { id: '2-003', hanzi: '白色', pinyin: 'báisè', arti: 'warna putih', contoh: '她穿白色衣服。', terjemahan: 'Dia memakai baju putih.', level: 2 },
  { id: '2-004', hanzi: '班', pinyin: 'bān', arti: 'kelas; regu; shift; (kata ukuran untuk regu/shift)', contoh: '我们班有三十人。', terjemahan: 'Kelas kami ada tiga puluh orang.', level: 2 },
  { id: '2-005', hanzi: '帮', pinyin: 'bāng', arti: 'membantu; menolong', contoh: '他帮我搬东西。', terjemahan: 'Dia membantu saya memindahkan barang.', level: 2 },
  { id: '2-006', hanzi: '帮忙', pinyin: 'bāngmáng', arti: 'membantu; memberikan bantuan', contoh: '请帮我一个忙。', terjemahan: 'Tolong bantu saya.', level: 2 },
  { id: '2-007', hanzi: '包', pinyin: 'bāo', arti: 'tas; bungkusan; membungkus; melingkupi', contoh: '她背着一个大包。', terjemahan: 'Dia membawa tas besar di punggung.', level: 2 },
  { id: '2-008', hanzi: '本子', pinyin: 'běnzi', arti: 'buku catatan; notebook', contoh: '我买了一本新本子。', terjemahan: 'Saya membeli buku catatan baru.', level: 2 },
  { id: '2-009', hanzi: '比', pinyin: 'bǐ', arti: 'membandingkan; daripada; lebih dari', contoh: '他比我高。', terjemahan: 'Dia lebih tinggi daripada saya.', level: 2 },
  { id: '2-010', hanzi: '笔', pinyin: 'bǐ', arti: 'pena; pensil; alat tulis', contoh: '你有笔吗？', terjemahan: 'Apakah kamu punya pena?', level: 2 },
  { id: '2-011', hanzi: '别', pinyin: 'bié', arti: 'jangan; lain; yang lain', contoh: '别担心。', terjemahan: 'Jangan khawatir.', level: 2 },
  { id: '2-012', hanzi: '不好意思', pinyin: 'bù hǎoyìsi', arti: 'maaf; sungkan; tidak enak hati; malu', contoh: '不好意思，打扰你了。', terjemahan: 'Maaf, saya mengganggu kamu.', level: 2 },
  { id: '2-013', hanzi: '不错', pinyin: 'búcuò', arti: 'tidak buruk; cukup bagus; lumayan', contoh: '你的汉语不错！', terjemahan: 'Bahasa Mandarinmu cukup bagus!', level: 2 },

  // ── C ─────────────────────────────────────────────────────────────
  { id: '2-014', hanzi: '长', pinyin: 'cháng', arti: 'panjang', contoh: '这条路很长。', terjemahan: 'Jalan ini sangat panjang.', level: 2 },
  { id: '2-015', hanzi: '车站', pinyin: 'chēzhàn', arti: 'halte bus; stasiun (kereta/bus)', contoh: '车站在哪里？', terjemahan: 'Halte ada di mana?', level: 2 },
  { id: '2-016', hanzi: '出', pinyin: 'chū', arti: 'keluar; muncul; mengeluarkan', contoh: '他出去了。', terjemahan: 'Dia sudah keluar.', level: 2 },
  { id: '2-017', hanzi: '床', pinyin: 'chuáng', arti: 'tempat tidur; ranjang', contoh: '这张床很舒服。', terjemahan: 'Tempat tidur ini sangat nyaman.', level: 2 },
  { id: '2-018', hanzi: '出国', pinyin: 'chūguó', arti: 'pergi ke luar negeri; ke luar negeri', contoh: '他去年出国了。', terjemahan: 'Dia pergi ke luar negeri tahun lalu.', level: 2 },
  { id: '2-019', hanzi: '出来', pinyin: 'chūlái', arti: 'keluar (ke arah pembicara); muncul ke sini', contoh: '他从房间出来了。', terjemahan: 'Dia keluar dari kamar.', level: 2 },
  { id: '2-020', hanzi: '出门', pinyin: 'chūmén', arti: 'keluar rumah; pergi keluar pintu', contoh: '我出门去买东西。', terjemahan: 'Saya keluar rumah untuk berbelanja.', level: 2 },
  { id: '2-021', hanzi: '出去', pinyin: 'chūqù', arti: 'pergi keluar (menjauhi pembicara)', contoh: '我想出去走走。', terjemahan: 'Saya ingin keluar jalan-jalan.', level: 2 },
  { id: '2-022', hanzi: '词', pinyin: 'cí', arti: 'kata; kosakata', contoh: '今天学了新词。', terjemahan: 'Hari ini belajar kata baru.', level: 2 },
  { id: '2-023', hanzi: '次', pinyin: 'cì', arti: 'kali; kali (kata ukuran frekuensi); urutan', contoh: '我去过三次北京。', terjemahan: 'Saya sudah pergi ke Beijing tiga kali.', level: 2 },
  { id: '2-024', hanzi: '从', pinyin: 'cóng', arti: 'dari; sejak; mengikuti; berasal dari', contoh: '我从中国来。', terjemahan: 'Saya datang dari Tiongkok.', level: 2 },
  { id: '2-025', hanzi: '从小', pinyin: 'cóngxiǎo', arti: 'sejak kecil; dari kecil', contoh: '他从小学汉语。', terjemahan: 'Dia belajar bahasa Mandarin sejak kecil.', level: 2 },
  { id: '2-026', hanzi: '错', pinyin: 'cuò', arti: 'salah; keliru; kesalahan', contoh: '这个答案错了。', terjemahan: 'Jawaban ini salah.', level: 2 },

  // ── D ─────────────────────────────────────────────────────────────
  { id: '2-027', hanzi: '打', pinyin: 'dǎ', arti: 'memukul; bermain (olahraga); menelepon; melakukan (berbagai tindakan)', contoh: '他喜欢打篮球。', terjemahan: 'Dia suka bermain basket.', level: 2 },
  { id: '2-028', hanzi: '打车', pinyin: 'dǎchē', arti: 'naik taksi; memanggil taksi', contoh: '我打车去机场。', terjemahan: 'Saya naik taksi ke bandara.', level: 2 },
  { id: '2-029', hanzi: '打开', pinyin: 'dǎkāi', arti: 'membuka; menyalakan; mengaktifkan', contoh: '请打开门。', terjemahan: 'Tolong buka pintunya.', level: 2 },
  { id: '2-030', hanzi: '但', pinyin: 'dàn', arti: 'tetapi; namun (konjungsi formal)', contoh: '他很聪明，但很懒。', terjemahan: 'Dia sangat cerdas, tetapi sangat malas.', level: 2 },
  { id: '2-031', hanzi: '但是', pinyin: 'dànshì', arti: 'tetapi; akan tetapi; namun', contoh: '我想去，但是没时间。', terjemahan: 'Saya ingin pergi, tetapi tidak punya waktu.', level: 2 },
  { id: '2-032', hanzi: '得', pinyin: 'de', arti: '(partikel struktural: V + 得 + komplemen derajat)', contoh: '他跑得很快。', terjemahan: 'Dia berlari sangat cepat.', level: 2 },
  { id: '2-033', hanzi: '地', pinyin: 'de', arti: '(partikel struktural: Adj/Adv + 地 + V)', contoh: '他高兴地笑了。', terjemahan: 'Dia tersenyum dengan gembira.', level: 2 },
  { id: '2-034', hanzi: '等', pinyin: 'děng', arti: 'menunggu; menantikan; dan lain-lain (di akhir daftar)', contoh: '请等一下。', terjemahan: 'Tolong tunggu sebentar.', level: 2 },
  { id: '2-035', hanzi: '点', pinyin: 'diǎn', arti: 'sedikit; agak; memesan (makanan/minuman)', contoh: '再等一点。', terjemahan: 'Tunggu sedikit lagi.', level: 2 },
  { id: '2-036', hanzi: '地铁', pinyin: 'dìtiě', arti: 'kereta bawah tanah; metro; MRT', contoh: '我坐地铁上班。', terjemahan: 'Saya naik MRT ke kantor.', level: 2 },
  { id: '2-037', hanzi: '动', pinyin: 'dòng', arti: 'bergerak; menggerakkan; menggoyangkan', contoh: '别动！', terjemahan: 'Jangan bergerak!', level: 2 },
  { id: '2-038', hanzi: '懂', pinyin: 'dǒng', arti: 'mengerti; memahami; paham', contoh: '你懂汉语吗？', terjemahan: 'Apakah kamu mengerti bahasa Mandarin?', level: 2 },

  // ── F ─────────────────────────────────────────────────────────────
  { id: '2-039', hanzi: '饭馆', pinyin: 'fànguǎn', arti: 'restoran; warung makan', contoh: '我们去饭馆吃饭吧。', terjemahan: 'Mari kita pergi makan di restoran.', level: 2 },
  { id: '2-040', hanzi: '飞', pinyin: 'fēi', arti: 'terbang; melayang di udara', contoh: '鸟在天空飞。', terjemahan: 'Burung terbang di langit.', level: 2 },

  // ── G ─────────────────────────────────────────────────────────────
  { id: '2-041', hanzi: '高', pinyin: 'gāo', arti: 'tinggi; tinggi badan', contoh: '他很高。', terjemahan: 'Dia sangat tinggi.', level: 2 },
  { id: '2-042', hanzi: '告诉', pinyin: 'gàosu', arti: 'memberitahu; menginformasikan; mengabari', contoh: '请告诉我答案。', terjemahan: 'Tolong beritahu saya jawabannya.', level: 2 },
  { id: '2-043', hanzi: '高中', pinyin: 'gāozhōng', arti: 'SMA; sekolah menengah atas', contoh: '他在高中学习。', terjemahan: 'Dia belajar di SMA.', level: 2 },
  { id: '2-044', hanzi: '跟', pinyin: 'gēn', arti: 'dengan; dan; mengikuti; dibandingkan dengan', contoh: '我跟他一起去。', terjemahan: 'Saya pergi bersama dia.', level: 2 },
  { id: '2-045', hanzi: '个子', pinyin: 'gèzi', arti: 'tinggi badan; postur tubuh', contoh: '他个子很高。', terjemahan: 'Tinggi badannya sangat tinggi.', level: 2 },
  { id: '2-046', hanzi: '公交车', pinyin: 'gōngjiāochē', arti: 'bus kota; angkutan umum', contoh: '我坐公交车去学校。', terjemahan: 'Saya naik bus kota ke sekolah.', level: 2 },
  { id: '2-047', hanzi: '过', pinyin: 'guo', arti: '(partikel aspek pengalaman: pernah melakukan)', contoh: '我去过中国。', terjemahan: 'Saya pernah pergi ke Tiongkok.', level: 2 },
  { id: '2-048', hanzi: '过', pinyin: 'guò', arti: 'melewati; melalui; merayakan; menghabiskan (waktu)', contoh: '我们过节了。', terjemahan: 'Kita merayakan hari raya.', level: 2 },
  { id: '2-049', hanzi: '过来', pinyin: 'guòlái', arti: 'datang ke sini; mendekat ke pembicara', contoh: '请过来一下。', terjemahan: 'Tolong ke sini sebentar.', level: 2 },
  { id: '2-050', hanzi: '过年', pinyin: 'guònián', arti: 'merayakan Tahun Baru Imlek', contoh: '过年快乐！', terjemahan: 'Selamat Tahun Baru Imlek!', level: 2 },
  { id: '2-051', hanzi: '过去', pinyin: 'guòqù', arti: 'masa lalu; dahulu; pergi ke sana', contoh: '过去的事不要想了。', terjemahan: 'Jangan dipikirkan hal-hal masa lalu.', level: 2 },

  // ── H ─────────────────────────────────────────────────────────────
  { id: '2-052', hanzi: '还是', pinyin: 'háishi', arti: 'atau (pilihan); masih saja; lebih baik', contoh: '你要茶还是咖啡？', terjemahan: 'Kamu mau teh atau kopi?', level: 2 },
  { id: '2-053', hanzi: '黑色', pinyin: 'hēisè', arti: 'warna hitam', contoh: '这只猫是黑色的。', terjemahan: 'Kucing ini berwarna hitam.', level: 2 },
  { id: '2-054', hanzi: '红茶', pinyin: 'hóngchá', arti: 'teh hitam (red tea)', contoh: '我喜欢喝红茶。', terjemahan: 'Saya suka minum teh hitam.', level: 2 },
  { id: '2-055', hanzi: '红色', pinyin: 'hóngsè', arti: 'warna merah', contoh: '我喜欢红色。', terjemahan: 'Saya suka warna merah.', level: 2 },
  { id: '2-056', hanzi: '后面', pinyin: 'hòumiàn', arti: 'di belakang; bagian belakang', contoh: '他在我后面。', terjemahan: 'Dia ada di belakang saya.', level: 2 },
  { id: '2-057', hanzi: '画', pinyin: 'huà', arti: 'menggambar; melukis; lukisan; gambar', contoh: '她喜欢画画。', terjemahan: 'Dia suka melukis.', level: 2 },
  { id: '2-058', hanzi: '花', pinyin: 'huā', arti: 'bunga; tanaman berbunga (花1)', contoh: '桌上有一瓶花。', terjemahan: 'Di atas meja ada satu vas bunga.', level: 2 },
  { id: '2-059', hanzi: '坏', pinyin: 'huài', arti: 'buruk; rusak; jahat; tidak baik', contoh: '这个东西坏了。', terjemahan: 'Benda ini rusak.', level: 2 },
  { id: '2-060', hanzi: '回来', pinyin: 'huílái', arti: 'kembali ke sini; pulang (ke arah pembicara)', contoh: '他什么时候回来？', terjemahan: 'Kapan dia kembali?', level: 2 },
  { id: '2-061', hanzi: '回去', pinyin: 'huíqù', arti: 'kembali ke sana; pulang (menjauhi pembicara)', contoh: '我要回去了。', terjemahan: 'Saya harus kembali.', level: 2 },

  // ── J ─────────────────────────────────────────────────────────────
  { id: '2-062', hanzi: '间', pinyin: 'jiān', arti: '(kata ukuran untuk kamar); di antara', contoh: '这间房间很大。', terjemahan: 'Kamar ini sangat besar.', level: 2 },
  { id: '2-063', hanzi: '教', pinyin: 'jiāo', arti: 'mengajar; mengajari; mendidik', contoh: '他教我汉语。', terjemahan: 'Dia mengajar saya bahasa Mandarin.', level: 2 },
  { id: '2-064', hanzi: '教室', pinyin: 'jiàoshì', arti: 'ruang kelas; kelas', contoh: '同学们在教室上课。', terjemahan: 'Para siswa belajar di ruang kelas.', level: 2 },
  { id: '2-065', hanzi: '机场', pinyin: 'jīchǎng', arti: 'bandara; lapangan terbang', contoh: '我去机场接他。', terjemahan: 'Saya pergi ke bandara menjemputnya.', level: 2 },
  { id: '2-066', hanzi: '记得', pinyin: 'jìde', arti: 'mengingat; masih ingat; tidak lupa', contoh: '你记得他的名字吗？', terjemahan: 'Kamu masih ingat namanya?', level: 2 },
  { id: '2-067', hanzi: '介绍', pinyin: 'jièshào', arti: 'memperkenalkan; memperkenalkan diri; memediasi', contoh: '请介绍一下你自己。', terjemahan: 'Tolong perkenalkan dirimu.', level: 2 },
  { id: '2-068', hanzi: '进', pinyin: 'jìn', arti: 'masuk; memasuki; maju', contoh: '请进！', terjemahan: 'Silakan masuk!', level: 2 },
  { id: '2-069', hanzi: '近', pinyin: 'jìn', arti: 'dekat; berjarak dekat', contoh: '学校离这里很近。', terjemahan: 'Sekolah sangat dekat dari sini.', level: 2 },
  { id: '2-070', hanzi: '经常', pinyin: 'jīngcháng', arti: 'sering; kerap; selalu', contoh: '他经常迟到。', terjemahan: 'Dia sering terlambat.', level: 2 },
  { id: '2-071', hanzi: '进来', pinyin: 'jìnlái', arti: 'masuk ke sini (ke arah pembicara)', contoh: '请进来！', terjemahan: 'Silakan masuk!', level: 2 },
  { id: '2-072', hanzi: '进去', pinyin: 'jìnqù', arti: 'masuk ke sana (menjauhi pembicara)', contoh: '他进去了。', terjemahan: 'Dia sudah masuk.', level: 2 },
  { id: '2-073', hanzi: '机票', pinyin: 'jīpiào', arti: 'tiket pesawat', contoh: '我买了一张机票。', terjemahan: 'Saya membeli satu tiket pesawat.', level: 2 },
  { id: '2-074', hanzi: '就', pinyin: 'jiù', arti: 'segera; justru; tepat; kalau begitu; hanya', contoh: '我就来。', terjemahan: 'Saya segera datang.', level: 2 },
  { id: '2-075', hanzi: '酒店', pinyin: 'jiǔdiàn', arti: 'hotel', contoh: '我住在酒店。', terjemahan: 'Saya menginap di hotel.', level: 2 },

  // ── K ─────────────────────────────────────────────────────────────
  { id: '2-076', hanzi: '咖啡', pinyin: 'kāfēi', arti: 'kopi', contoh: '我每天喝一杯咖啡。', terjemahan: 'Saya minum secangkir kopi setiap hari.', level: 2 },
  { id: '2-077', hanzi: '开始', pinyin: 'kāishǐ', arti: 'mulai; memulai; awal; permulaan', contoh: '我们开始上课吧。', terjemahan: 'Mari kita mulai pelajaran.', level: 2 },
  { id: '2-078', hanzi: '开学', pinyin: 'kāixué', arti: 'sekolah dimulai; tahun ajaran baru dibuka', contoh: '下个月开学。', terjemahan: 'Bulan depan sekolah dimulai.', level: 2 },
  { id: '2-079', hanzi: '考', pinyin: 'kǎo', arti: 'mengujikan; mengikuti ujian; memeriksa', contoh: '明天考试。', terjemahan: 'Besok ada ujian.', level: 2 },
  { id: '2-080', hanzi: '考试', pinyin: 'kǎoshì', arti: 'ujian; tes; mengikuti ujian', contoh: '下周有考试。', terjemahan: 'Minggu depan ada ujian.', level: 2 },
  { id: '2-081', hanzi: '可能', pinyin: 'kěnéng', arti: 'mungkin; bisa jadi; kemungkinan', contoh: '他可能来晚了。', terjemahan: 'Dia mungkin datang terlambat.', level: 2 },
  { id: '2-082', hanzi: '快', pinyin: 'kuài', arti: 'cepat; lekas; segera', contoh: '他跑得很快。', terjemahan: 'Dia berlari sangat cepat.', level: 2 },
  { id: '2-083', hanzi: '快乐', pinyin: 'kuàilè', arti: 'bahagia; gembira; senang', contoh: '祝你生日快乐！', terjemahan: 'Selamat ulang tahun!', level: 2 },
  { id: '2-084', hanzi: '快要', pinyin: 'kuàiyào', arti: 'hampir; sebentar lagi akan', contoh: '快要下课了。', terjemahan: 'Sebentar lagi selesai pelajaran.', level: 2 },
  { id: '2-085', hanzi: '裤子', pinyin: 'kùzi', arti: 'celana panjang; celana', contoh: '他穿蓝色裤子。', terjemahan: 'Dia memakai celana biru.', level: 2 },

  // ── L ─────────────────────────────────────────────────────────────
  { id: '2-086', hanzi: '篮球', pinyin: 'lánqiú', arti: 'bola basket; olahraga basket', contoh: '他喜欢打篮球。', terjemahan: 'Dia suka bermain basket.', level: 2 },
  { id: '2-087', hanzi: '累', pinyin: 'lèi', arti: 'lelah; capek; melelahkan', contoh: '我今天很累。', terjemahan: 'Saya sangat lelah hari ini.', level: 2 },
  { id: '2-088', hanzi: '离', pinyin: 'lí', arti: 'dari; berjarak dari; meninggalkan', contoh: '学校离这里很近。', terjemahan: 'Sekolah sangat dekat dari sini.', level: 2 },
  { id: '2-089', hanzi: '里面', pinyin: 'lǐmiàn', arti: 'di dalam; bagian dalam; interior', contoh: '里面有什么？', terjemahan: 'Di dalam ada apa?', level: 2 },
  { id: '2-090', hanzi: '楼', pinyin: 'lóu', arti: 'gedung bertingkat; lantai; tingkat', contoh: '他住在五楼。', terjemahan: 'Dia tinggal di lantai lima.', level: 2 },
  { id: '2-091', hanzi: '路', pinyin: 'lù', arti: 'jalan; rute; jalur; cara', contoh: '这条路很长。', terjemahan: 'Jalan ini sangat panjang.', level: 2 },
  { id: '2-092', hanzi: '绿茶', pinyin: 'lǜchá', arti: 'teh hijau', contoh: '我喜欢喝绿茶。', terjemahan: 'Saya suka minum teh hijau.', level: 2 },
  { id: '2-093', hanzi: '绿色', pinyin: 'lǜsè', arti: 'warna hijau', contoh: '草地是绿色的。', terjemahan: 'Rumput berwarna hijau.', level: 2 },
  { id: '2-094', hanzi: '路上', pinyin: 'lùshang', arti: 'di jalan; dalam perjalanan; di tengah jalan', contoh: '路上小心！', terjemahan: 'Hati-hati di jalan!', level: 2 },
  { id: '2-095', hanzi: '旅游', pinyin: 'lǚyóu', arti: 'berwisata; pariwisata; melakukan perjalanan', contoh: '我喜欢旅游。', terjemahan: 'Saya suka berwisata.', level: 2 },

  // ── M ─────────────────────────────────────────────────────────────
  { id: '2-096', hanzi: '慢', pinyin: 'màn', arti: 'lambat; pelan', contoh: '请说慢一点。', terjemahan: 'Tolong berbicara lebih pelan.', level: 2 },
  { id: '2-097', hanzi: '每', pinyin: 'měi', arti: 'setiap; tiap-tiap; masing-masing', contoh: '我每天学习。', terjemahan: 'Saya belajar setiap hari.', level: 2 },
  { id: '2-098', hanzi: '没意思', pinyin: 'méi yìsi', arti: 'membosankan; tidak menarik; tidak seru', contoh: '这部电影没意思。', terjemahan: 'Film ini membosankan.', level: 2 },
  { id: '2-099', hanzi: '门', pinyin: 'mén', arti: 'pintu; gerbang', contoh: '请关门。', terjemahan: 'Tolong tutup pintunya.', level: 2 },
  { id: '2-100', hanzi: '门口', pinyin: 'ménkǒu', arti: 'pintu masuk; depan pintu; ambang pintu', contoh: '他在门口等我。', terjemahan: 'Dia menungguku di depan pintu.', level: 2 },
  { id: '2-101', hanzi: '门票', pinyin: 'ménpiào', arti: 'tiket masuk; karcis masuk', contoh: '这里的门票多少钱？', terjemahan: 'Berapa harga tiket masuk di sini?', level: 2 },
  { id: '2-102', hanzi: '面', pinyin: 'miàn', arti: 'wajah; permukaan; sisi; mie (dalam konteks makanan)', contoh: '我喜欢吃面。', terjemahan: 'Saya suka makan mie.', level: 2 },
  { id: '2-103', hanzi: '名', pinyin: 'míng', arti: 'nama; terkenal; (kata ukuran hormat untuk orang)', contoh: '班里有三十名学生。', terjemahan: 'Di kelas ada tiga puluh siswa.', level: 2 },

  // ── N ─────────────────────────────────────────────────────────────
  { id: '2-104', hanzi: '拿', pinyin: 'ná', arti: 'mengambil; memegang; membawa', contoh: '你拿着这个。', terjemahan: 'Kamu pegang ini.', level: 2 },
  { id: '2-105', hanzi: '奶茶', pinyin: 'nǎichá', arti: 'teh susu; milk tea', contoh: '我要一杯奶茶。', terjemahan: 'Saya mau segelas teh susu.', level: 2 },
  { id: '2-106', hanzi: '奶奶', pinyin: 'nǎinai', arti: 'nenek dari pihak ayah', contoh: '奶奶会做饺子。', terjemahan: 'Nenek bisa membuat pangsit.', level: 2 },
  { id: '2-107', hanzi: '那么', pinyin: 'nàme', arti: 'begitu; seperti itu; kalau begitu; sebegitu', contoh: '他那么努力。', terjemahan: 'Dia begitu giat.', level: 2 },
  { id: '2-108', hanzi: '男孩儿', pinyin: 'nánháir', arti: 'anak laki-laki; bocah lelaki', contoh: '那个男孩儿很可爱。', terjemahan: 'Anak laki-laki itu sangat lucu.', level: 2 },
  { id: '2-109', hanzi: '那样', pinyin: 'nàyàng', arti: 'seperti itu; begitu; dengan cara itu', contoh: '不要那样做。', terjemahan: 'Jangan melakukannya seperti itu.', level: 2 },
  { id: '2-110', hanzi: '鸟', pinyin: 'niǎo', arti: 'burung', contoh: '树上有很多鸟。', terjemahan: 'Di atas pohon ada banyak burung.', level: 2 },
  { id: '2-111', hanzi: '女孩儿', pinyin: 'nǚháir', arti: 'anak perempuan; bocah perempuan', contoh: '那个女孩儿很漂亮。', terjemahan: 'Anak perempuan itu sangat cantik.', level: 2 },

  // ── P ─────────────────────────────────────────────────────────────
  { id: '2-112', hanzi: '旁边', pinyin: 'pángbiān', arti: 'di samping; di sebelah; berdekatan', contoh: '银行在学校旁边。', terjemahan: 'Bank ada di sebelah sekolah.', level: 2 },
  { id: '2-113', hanzi: '跑', pinyin: 'pǎo', arti: 'berlari; lari', contoh: '他每天早上跑步。', terjemahan: 'Dia lari setiap pagi.', level: 2 },
  { id: '2-114', hanzi: '跑步', pinyin: 'pǎobù', arti: 'berlari; jogging; lari olahraga', contoh: '我喜欢跑步。', terjemahan: 'Saya suka jogging.', level: 2 },
  { id: '2-115', hanzi: '票', pinyin: 'piào', arti: 'tiket; karcis', contoh: '我买了两张票。', terjemahan: 'Saya membeli dua tiket.', level: 2 },

  // ── Q ─────────────────────────────────────────────────────────────
  { id: '2-116', hanzi: '前面', pinyin: 'qiánmiàn', arti: 'di depan; bagian depan; ke depan', contoh: '前面是银行。', terjemahan: 'Di depan adalah bank.', level: 2 },
  { id: '2-117', hanzi: '起来', pinyin: 'qǐlái', arti: 'bangun; berdiri; mulai (komplemen arah ke atas/memulai)', contoh: '请站起来。', terjemahan: 'Tolong berdiri.', level: 2 },
  { id: '2-118', hanzi: '晴', pinyin: 'qíng', arti: 'cerah; tidak mendung; cuaca bagus', contoh: '今天天气晴。', terjemahan: 'Hari ini cuaca cerah.', level: 2 },
  { id: '2-119', hanzi: '球', pinyin: 'qiú', arti: 'bola; olahraga bola', contoh: '踢球很有意思。', terjemahan: 'Menendang bola sangat menyenangkan.', level: 2 },
  { id: '2-120', hanzi: '妻子', pinyin: 'qīzi', arti: 'istri; pasangan perempuan', contoh: '他的妻子很漂亮。', terjemahan: 'Istrinya sangat cantik.', level: 2 },

  // ── R ─────────────────────────────────────────────────────────────
  { id: '2-121', hanzi: '让', pinyin: 'ràng', arti: 'membiarkan; menyuruh; memberi; mengalah kepada', contoh: '请让我看看。', terjemahan: 'Tolong biarkan saya melihat.', level: 2 },
  { id: '2-122', hanzi: '肉', pinyin: 'ròu', arti: 'daging', contoh: '我不吃肉。', terjemahan: 'Saya tidak makan daging.', level: 2 },

  // ── S ─────────────────────────────────────────────────────────────
  { id: '2-123', hanzi: '商场', pinyin: 'shāngchǎng', arti: 'mal; pusat perbelanjaan', contoh: '我们去商场购物吧。', terjemahan: 'Ayo kita pergi belanja di mal.', level: 2 },
  { id: '2-124', hanzi: '上来', pinyin: 'shànglái', arti: 'naik ke sini; datang ke atas', contoh: '请上来。', terjemahan: 'Tolong naik ke sini.', level: 2 },
  { id: '2-125', hanzi: '上面', pinyin: 'shàngmiàn', arti: 'di atas; bagian atas; di permukaan atas', contoh: '书在桌子上面。', terjemahan: 'Buku ada di atas meja.', level: 2 },
  { id: '2-126', hanzi: '上去', pinyin: 'shàngqù', arti: 'naik ke sana; pergi ke atas', contoh: '他上去了。', terjemahan: 'Dia sudah naik ke atas.', level: 2 },
  { id: '2-127', hanzi: '上网', pinyin: 'shàngwǎng', arti: 'mengakses internet; berselancar di internet', contoh: '我每天上网。', terjemahan: 'Saya online setiap hari.', level: 2 },
  { id: '2-128', hanzi: '生日', pinyin: 'shēngrì', arti: 'ulang tahun; hari lahir', contoh: '今天是我的生日。', terjemahan: 'Hari ini adalah ulang tahun saya.', level: 2 },
  { id: '2-129', hanzi: '身体', pinyin: 'shēntǐ', arti: 'tubuh; badan; kesehatan fisik', contoh: '他的身体很好。', terjemahan: 'Kesehatannya sangat baik.', level: 2 },
  { id: '2-130', hanzi: '时', pinyin: 'shí', arti: 'waktu; saat; ketika', contoh: '吃饭时不说话。', terjemahan: 'Tidak berbicara saat makan.', level: 2 },
  { id: '2-131', hanzi: '事情', pinyin: 'shìqing', arti: 'hal; urusan; perkara; kejadian; masalah', contoh: '你有什么事情？', terjemahan: 'Ada hal apa?', level: 2 },
  { id: '2-132', hanzi: '手', pinyin: 'shǒu', arti: 'tangan', contoh: '洗手再吃饭。', terjemahan: 'Cuci tangan sebelum makan.', level: 2 },
  { id: '2-133', hanzi: '手表', pinyin: 'shǒubiǎo', arti: 'jam tangan', contoh: '他戴了一块手表。', terjemahan: 'Dia mengenakan jam tangan.', level: 2 },
  { id: '2-134', hanzi: '书包', pinyin: 'shūbāo', arti: 'tas sekolah; ransel; tas buku', contoh: '书包里有很多书。', terjemahan: 'Di dalam tas sekolah ada banyak buku.', level: 2 },
  { id: '2-135', hanzi: '舒服', pinyin: 'shūfu', arti: 'nyaman; enak; merasa tidak enak badan', contoh: '这张椅子很舒服。', terjemahan: 'Kursi ini sangat nyaman.', level: 2 },
  { id: '2-136', hanzi: '送', pinyin: 'sòng', arti: 'memberi (hadiah); mengantar; mengirimkan', contoh: '他送我一本书。', terjemahan: 'Dia memberi saya sebuah buku.', level: 2 },
  { id: '2-137', hanzi: '虽然', pinyin: 'suīrán', arti: 'meskipun; walaupun; biarpun', contoh: '虽然很难，但我会努力。', terjemahan: 'Meskipun sulit, saya akan berusaha.', level: 2 },
  { id: '2-138', hanzi: '所以', pinyin: 'suǒyǐ', arti: 'oleh karena itu; jadi; maka dari itu', contoh: '我累了，所以想休息。', terjemahan: 'Saya lelah, jadi ingin istirahat.', level: 2 },

  // ── T ─────────────────────────────────────────────────────────────
  { id: '2-139', hanzi: '疼', pinyin: 'téng', arti: 'sakit; nyeri; terasa nyeri', contoh: '我头疼。', terjemahan: 'Kepala saya sakit.', level: 2 },
  { id: '2-140', hanzi: '题', pinyin: 'tí', arti: 'soal; pertanyaan; topik; judul', contoh: '这道题很难。', terjemahan: 'Soal ini sangat sulit.', level: 2 },
  { id: '2-141', hanzi: '踢', pinyin: 'tī', arti: 'menendang; menyepak', contoh: '他喜欢踢足球。', terjemahan: 'Dia suka bermain sepak bola.', level: 2 },
  { id: '2-142', hanzi: '条', pinyin: 'tiáo', arti: '(kata ukuran benda panjang/tipis: ikan, celana, sungai, dll)', contoh: '一条鱼。', terjemahan: 'Seekor ikan.', level: 2 },
  { id: '2-143', hanzi: '跳舞', pinyin: 'tiàowǔ', arti: 'menari; berdansa', contoh: '她喜欢跳舞。', terjemahan: 'Dia suka menari.', level: 2 },
  { id: '2-144', hanzi: '头', pinyin: 'tóu', arti: 'kepala; ujung; awal; (kata ukuran hewan besar)', contoh: '我头很痛。', terjemahan: 'Kepala saya sangat sakit.', level: 2 },

  // ── W ─────────────────────────────────────────────────────────────
  { id: '2-145', hanzi: '外国', pinyin: 'wàiguó', arti: 'negara asing; luar negeri', contoh: '他去外国了。', terjemahan: 'Dia pergi ke luar negeri.', level: 2 },
  { id: '2-146', hanzi: '外面', pinyin: 'wàimiàn', arti: 'di luar; bagian luar; eksterior', contoh: '外面在下雨。', terjemahan: 'Di luar sedang hujan.', level: 2 },
  { id: '2-147', hanzi: '完', pinyin: 'wán', arti: 'selesai; habis; tuntas', contoh: '作业做完了。', terjemahan: 'PR sudah selesai dikerjakan.', level: 2 },
  { id: '2-148', hanzi: '万', pinyin: 'wàn', arti: 'sepuluh ribu (10.000)', contoh: '这件衣服一万块。', terjemahan: 'Baju ini sepuluh ribu yuan.', level: 2 },
  { id: '2-149', hanzi: '忘', pinyin: 'wàng', arti: 'lupa; melupakan; tidak ingat', contoh: '我忘了带钥匙。', terjemahan: 'Saya lupa membawa kunci.', level: 2 },
  { id: '2-150', hanzi: '往', pinyin: 'wǎng', arti: 'menuju; ke arah; pergi ke', contoh: '往前走。', terjemahan: 'Jalan ke depan.', level: 2 },
  { id: '2-151', hanzi: '网上', pinyin: 'wǎngshang', arti: 'di internet; secara online', contoh: '我在网上买东西。', terjemahan: 'Saya berbelanja di internet.', level: 2 },
  { id: '2-152', hanzi: '位', pinyin: 'wèi', arti: '(kata ukuran hormat untuk orang)', contoh: '这位是我的老师。', terjemahan: 'Ini adalah guru saya.', level: 2 },
  { id: '2-153', hanzi: '为什么', pinyin: 'wèi shénme', arti: 'mengapa; kenapa; untuk alasan apa', contoh: '你为什么哭？', terjemahan: 'Mengapa kamu menangis?', level: 2 },

  // ── X ─────────────────────────────────────────────────────────────
  { id: '2-154', hanzi: '洗', pinyin: 'xǐ', arti: 'mencuci; membasuh; membersihkan', contoh: '我在洗碗。', terjemahan: 'Saya sedang mencuci piring.', level: 2 },
  { id: '2-155', hanzi: '下来', pinyin: 'xiàlái', arti: 'turun ke sini; datang ke bawah', contoh: '请下来。', terjemahan: 'Tolong turun ke sini.', level: 2 },
  { id: '2-156', hanzi: '下面', pinyin: 'xiàmiàn', arti: 'di bawah; bagian bawah; berikut ini', contoh: '猫在椅子下面。', terjemahan: 'Kucing ada di bawah kursi.', level: 2 },
  { id: '2-157', hanzi: '笑', pinyin: 'xiào', arti: 'tertawa; tersenyum; menertawakan', contoh: '他笑了。', terjemahan: 'Dia tersenyum.', level: 2 },
  { id: '2-158', hanzi: '小孩儿', pinyin: 'xiǎoháir', arti: 'anak kecil; anak-anak', contoh: '小孩儿很可爱。', terjemahan: 'Anak kecil itu sangat lucu.', level: 2 },
  { id: '2-159', hanzi: '小时候', pinyin: 'xiǎoshíhou', arti: 'waktu kecil; masa kecil; ketika masih kecil', contoh: '小时候我很瘦。', terjemahan: 'Waktu kecil saya sangat kurus.', level: 2 },
  { id: '2-160', hanzi: '下去', pinyin: 'xiàqù', arti: 'turun ke sana; pergi ke bawah; melanjutkan', contoh: '他下去了。', terjemahan: 'Dia sudah turun.', level: 2 },
  { id: '2-161', hanzi: '姓', pinyin: 'xìng', arti: 'marga; nama keluarga; bermarga', contoh: '你姓什么？', terjemahan: 'Apa margamu?', level: 2 },
  { id: '2-162', hanzi: '姓名', pinyin: 'xìngmíng', arti: 'nama lengkap (marga + nama)', contoh: '请写上你的姓名。', terjemahan: 'Tolong tuliskan nama lengkapmu.', level: 2 },
  { id: '2-163', hanzi: '洗手间', pinyin: 'xǐshǒujiān', arti: 'kamar kecil; toilet; kamar mandi', contoh: '洗手间在哪里？', terjemahan: 'Kamar kecil ada di mana?', level: 2 },
  { id: '2-164', hanzi: '希望', pinyin: 'xīwàng', arti: 'berharap; mengharapkan; harapan', contoh: '我希望你快乐。', terjemahan: 'Saya berharap kamu bahagia.', level: 2 },

  // ── Y ─────────────────────────────────────────────────────────────
  { id: '2-165', hanzi: '眼睛', pinyin: 'yǎnjing', arti: 'mata; bola mata', contoh: '她的眼睛很漂亮。', terjemahan: 'Matanya sangat indah.', level: 2 },
  { id: '2-166', hanzi: '颜色', pinyin: 'yánsè', arti: 'warna; rona warna', contoh: '你喜欢什么颜色？', terjemahan: 'Kamu suka warna apa?', level: 2 },
  { id: '2-167', hanzi: '药', pinyin: 'yào', arti: 'obat; obat-obatan', contoh: '你要吃药了。', terjemahan: 'Kamu harus minum obat.', level: 2 },
  { id: '2-168', hanzi: '药店', pinyin: 'yàodiàn', arti: 'apotek; toko obat', contoh: '药店在银行旁边。', terjemahan: 'Apotek ada di sebelah bank.', level: 2 },
  { id: '2-169', hanzi: '爷爷', pinyin: 'yéye', arti: 'kakek dari pihak ayah', contoh: '爷爷喜欢下棋。', terjemahan: 'Kakek suka bermain catur.', level: 2 },
  { id: '2-170', hanzi: '一会儿', pinyin: 'yíhuìr', arti: 'sebentar; sesaat; sejenak', contoh: '我一会儿就来。', terjemahan: 'Saya segera datang sebentar lagi.', level: 2 },
  { id: '2-171', hanzi: '已经', pinyin: 'yǐjīng', arti: 'sudah; telah', contoh: '他已经走了。', terjemahan: 'Dia sudah pergi.', level: 2 },
  { id: '2-172', hanzi: '阴', pinyin: 'yīn', arti: 'mendung; berawan; cuaca gelap', contoh: '今天天气阴。', terjemahan: 'Hari ini cuaca mendung.', level: 2 },
  { id: '2-173', hanzi: '因为', pinyin: 'yīnwèi', arti: 'karena; sebab; disebabkan oleh', contoh: '因为下雨，我没出门。', terjemahan: 'Karena hujan, saya tidak keluar.', level: 2 },
  { id: '2-174', hanzi: '一起', pinyin: 'yìqǐ', arti: 'bersama-sama; bersama; serentak', contoh: '我们一起去吧。', terjemahan: 'Ayo kita pergi bersama.', level: 2 },
  { id: '2-175', hanzi: '意思', pinyin: 'yìsi', arti: 'arti; makna; maksud; niat; ide', contoh: '这个字是什么意思？', terjemahan: 'Apa arti karakter ini?', level: 2 },
  { id: '2-176', hanzi: '游', pinyin: 'yóu', arti: 'berenang; berwisata; berjalan-jalan', contoh: '我会游泳。', terjemahan: 'Saya bisa berenang.', level: 2 },
  { id: '2-177', hanzi: '右', pinyin: 'yòu', arti: 'kanan; sisi kanan', contoh: '往右走。', terjemahan: 'Jalan ke kanan.', level: 2 },
  { id: '2-178', hanzi: '有意思', pinyin: 'yǒu yìsi', arti: 'menarik; seru; menyenangkan; ada artinya', contoh: '这本书很有意思。', terjemahan: 'Buku ini sangat menarik.', level: 2 },
  { id: '2-179', hanzi: '右边', pinyin: 'yòubian', arti: 'sisi kanan; bagian kanan', contoh: '银行在右边。', terjemahan: 'Bank ada di sisi kanan.', level: 2 },
  { id: '2-180', hanzi: '有时候', pinyin: 'yǒushíhou', arti: 'kadang-kadang; terkadang; sewaktu-waktu', contoh: '有时候我去图书馆。', terjemahan: 'Kadang-kadang saya pergi ke perpustakaan.', level: 2 },
  { id: '2-181', hanzi: '游泳', pinyin: 'yóuyǒng', arti: 'berenang', contoh: '我喜欢游泳。', terjemahan: 'Saya suka berenang.', level: 2 },
  { id: '2-182', hanzi: '鱼', pinyin: 'yú', arti: 'ikan', contoh: '我喜欢吃鱼。', terjemahan: 'Saya suka makan ikan.', level: 2 },
  { id: '2-183', hanzi: '远', pinyin: 'yuǎn', arti: 'jauh; berjarak jauh', contoh: '学校离这里很远。', terjemahan: 'Sekolah sangat jauh dari sini.', level: 2 },
  { id: '2-184', hanzi: '运动', pinyin: 'yùndòng', arti: 'olahraga; berolahraga; gerakan (fisik)', contoh: '运动对身体好。', terjemahan: 'Olahraga baik untuk tubuh.', level: 2 },

  // ── Z ─────────────────────────────────────────────────────────────
  { id: '2-185', hanzi: '站', pinyin: 'zhàn', arti: 'berdiri; stasiun; halte; pemberhentian', contoh: '请站起来。', terjemahan: 'Tolong berdiri.', level: 2 },
  { id: '2-186', hanzi: '丈夫', pinyin: 'zhàngfu', arti: 'suami; pasangan lelaki', contoh: '她的丈夫是医生。', terjemahan: 'Suaminya adalah dokter.', level: 2 },
  { id: '2-187', hanzi: '着', pinyin: 'zhe', arti: '(partikel aspek: keadaan berlanjut/aksi persisten)', contoh: '他笑着说话。', terjemahan: 'Dia berbicara sambil tersenyum.', level: 2 },
  { id: '2-188', hanzi: '这么', pinyin: 'zhème', arti: 'begini; seperti ini; sebegini; sangat', contoh: '你怎么这么晚来？', terjemahan: 'Kenapa kamu datang terlambat sekali?', level: 2 },
  { id: '2-189', hanzi: '正', pinyin: 'zhèng', arti: 'tepat; persis; sedang; benar; lurus', contoh: '他正在睡觉。', terjemahan: 'Dia sedang tidur.', level: 2 },
  { id: '2-190', hanzi: '这样', pinyin: 'zhèyàng', arti: 'begini; seperti ini; dengan cara ini; demikian', contoh: '不要这样说。', terjemahan: 'Jangan berkata seperti ini.', level: 2 },
  { id: '2-191', hanzi: '周', pinyin: 'zhōu', arti: 'minggu; pekan', contoh: '这周我很忙。', terjemahan: 'Minggu ini saya sangat sibuk.', level: 2 },
  { id: '2-192', hanzi: '准备', pinyin: 'zhǔnbèi', arti: 'mempersiapkan; bersiap; persiapan', contoh: '你准备好了吗？', terjemahan: 'Apakah kamu sudah siap?', level: 2 },
  { id: '2-193', hanzi: '自己', pinyin: 'zìjǐ', arti: 'diri sendiri; sendiri', contoh: '我自己来。', terjemahan: 'Saya datang sendiri.', level: 2 },
  { id: '2-194', hanzi: '走', pinyin: 'zǒu', arti: 'berjalan; pergi; meninggalkan; berangkat', contoh: '我们走吧。', terjemahan: 'Ayo kita pergi.', level: 2 },
  { id: '2-195', hanzi: '走路', pinyin: 'zǒulù', arti: 'berjalan kaki; berjalan', contoh: '我走路去学校。', terjemahan: 'Saya berjalan kaki ke sekolah.', level: 2 },
  { id: '2-196', hanzi: '最', pinyin: 'zuì', arti: 'paling; ter- (superlatif)', contoh: '他是班里最高的。', terjemahan: 'Dia adalah yang paling tinggi di kelas.', level: 2 },
  { id: '2-197', hanzi: '左', pinyin: 'zuǒ', arti: 'kiri; sisi kiri', contoh: '往左走。', terjemahan: 'Jalan ke kiri.', level: 2 },
  { id: '2-198', hanzi: '左边', pinyin: 'zuǒbian', arti: 'sisi kiri; bagian kiri', contoh: '银行在左边。', terjemahan: 'Bank ada di sisi kiri.', level: 2 },
  { id: '2-199', hanzi: '足球', pinyin: 'zúqiú', arti: 'sepak bola', contoh: '他喜欢踢足球。', terjemahan: 'Dia suka bermain sepak bola.', level: 2 },
  // 花2: menghabiskan uang/waktu — dipisah dari 花1 (bunga) di 2-058
  // Sesuai IndoPanda entry 359: 花2 (huā) = "To spend (money/time)"
  { id: '2-200', hanzi: '花', pinyin: 'huā', arti: 'menghabiskan (uang atau waktu) (花2)', contoh: '他花了很多钱。', terjemahan: 'Dia menghabiskan banyak uang.', level: 2 },

]