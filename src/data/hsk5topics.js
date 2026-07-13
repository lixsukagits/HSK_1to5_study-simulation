// HSK 5 - Topik (话题大纲)
// Total resmi dari PDF: 7 tier1 / 29 tier2 / 72 tier3 (hal. 66-68 PDF resmi HSK 5-6)
// Struktur & urutan mengikuti tabel PDF persis, tidak di-reorder.

const hsk5Topics = [
  // 1. 日常生活 Kehidupan Sehari-hari
  { id: '5-001', code: '1.1.1', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '日常事务', id: 'Urusan Sehari-hari' }, tier3: { zh: '业务办理', id: 'Pengurusan Urusan/Bisnis' }, level: 5 },
  { id: '5-002', code: '1.1.2', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '日常事务', id: 'Urusan Sehari-hari' }, tier3: { zh: '困难求助', id: 'Meminta Bantuan saat Kesulitan' }, level: 5 },
  { id: '5-003', code: '1.2.1', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '饮食', id: 'Makanan dan Minuman' }, tier3: { zh: '就餐', id: 'Makan/Bersantap' }, level: 5 },
  { id: '5-004', code: '1.2.2', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '饮食', id: 'Makanan dan Minuman' }, tier3: { zh: '餐饮体验', id: 'Pengalaman Bersantap' }, level: 5 },
  { id: '5-005', code: '1.3.1', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '交通出行', id: 'Transportasi dan Perjalanan' }, tier3: { zh: '交通运输', id: 'Transportasi dan Pengangkutan' }, level: 5 },
  { id: '5-006', code: '1.3.2', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '交通出行', id: 'Transportasi dan Perjalanan' }, tier3: { zh: '出行体验', id: 'Pengalaman Bepergian' }, level: 5 },
  { id: '5-007', code: '1.4.1', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '购物', id: 'Belanja' }, tier3: { zh: '商品选购', id: 'Memilih dan Membeli Barang' }, level: 5 },
  { id: '5-008', code: '1.4.2', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '购物', id: 'Belanja' }, tier3: { zh: '消费活动', id: 'Aktivitas Konsumsi' }, level: 5 },
  { id: '5-009', code: '1.5.1', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '医疗健康', id: 'Kesehatan dan Pengobatan' }, tier3: { zh: '就医', id: 'Berobat ke Dokter' }, level: 5 },
  { id: '5-010', code: '1.5.2', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '医疗健康', id: 'Kesehatan dan Pengobatan' }, tier3: { zh: '心理健康', id: 'Kesehatan Mental' }, level: 5 },
  { id: '5-011', code: '1.5.3', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '医疗健康', id: 'Kesehatan dan Pengobatan' }, tier3: { zh: '健康生活', id: 'Gaya Hidup Sehat' }, level: 5 },
  { id: '5-012', code: '1.6.1', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '休闲', id: 'Waktu Luang' }, tier3: { zh: '休闲活动', id: 'Kegiatan Santai' }, level: 5 },
  { id: '5-013', code: '1.6.2', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '休闲', id: 'Waktu Luang' }, tier3: { zh: '活动感受、生活随感、人生感悟等', id: 'Kesan Kegiatan, Renungan Hidup, dan Refleksi tentang Kehidupan' }, level: 5 },
  { id: '5-014', code: '1.7.1', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '社区', id: 'Komunitas/Lingkungan Tempat Tinggal' }, tier3: { zh: '居住情况', id: 'Kondisi Tempat Tinggal' }, level: 5 },
  { id: '5-015', code: '1.7.2', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '社区', id: 'Komunitas/Lingkungan Tempat Tinggal' }, tier3: { zh: '社区管理', id: 'Manajemen Komunitas' }, level: 5 },
  { id: '5-016', code: '1.7.3', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '社区', id: 'Komunitas/Lingkungan Tempat Tinggal' }, tier3: { zh: '社区生活', id: 'Kehidupan Komunitas' }, level: 5 },
  { id: '5-017', code: '1.8.1', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '家庭生活', id: 'Kehidupan Keluarga' }, tier3: { zh: '居家生活', id: 'Kehidupan Rumah Tangga' }, level: 5 },
  { id: '5-018', code: '1.8.2', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '家庭生活', id: 'Kehidupan Keluarga' }, tier3: { zh: '家庭活动', id: 'Kegiatan Keluarga' }, level: 5 },
  { id: '5-019', code: '1.8.3', tier1: { zh: '日常生活', id: 'Kehidupan Sehari-hari' }, tier2: { zh: '家庭生活', id: 'Kehidupan Keluarga' }, tier3: { zh: '家庭问题', id: 'Masalah Keluarga' }, level: 5 },

  // 2. 教育情况 Kondisi Pendidikan
  { id: '5-020', code: '2.1.1', tier1: { zh: '教育情况', id: 'Kondisi Pendidikan' }, tier2: { zh: '学习情况', id: 'Kondisi Belajar' }, tier3: { zh: '课程情况', id: 'Kondisi Perkuliahan/Mata Kuliah' }, level: 5 },
  { id: '5-021', code: '2.1.2', tier1: { zh: '教育情况', id: 'Kondisi Pendidikan' }, tier2: { zh: '学习情况', id: 'Kondisi Belajar' }, tier3: { zh: '教学情况', id: 'Kondisi Pengajaran' }, level: 5 },
  { id: '5-022', code: '2.1.3', tier1: { zh: '教育情况', id: 'Kondisi Pendidikan' }, tier2: { zh: '学习情况', id: 'Kondisi Belajar' }, tier3: { zh: '学习经历', id: 'Pengalaman Belajar' }, level: 5 },
  { id: '5-023', code: '2.1.4', tier1: { zh: '教育情况', id: 'Kondisi Pendidikan' }, tier2: { zh: '学习情况', id: 'Kondisi Belajar' }, tier3: { zh: '学习心得', id: 'Kesan dan Pelajaran dari Belajar' }, level: 5 },
  { id: '5-024', code: '2.2.1', tier1: { zh: '教育情况', id: 'Kondisi Pendidikan' }, tier2: { zh: '校园生活', id: 'Kehidupan Kampus' }, tier3: { zh: '校园活动', id: 'Kegiatan Kampus' }, level: 5 },
  { id: '5-025', code: '2.2.2', tier1: { zh: '教育情况', id: 'Kondisi Pendidikan' }, tier2: { zh: '校园生活', id: 'Kehidupan Kampus' }, tier3: { zh: '学校情况', id: 'Kondisi Sekolah' }, level: 5 },
  { id: '5-026', code: '2.3.1', tier1: { zh: '教育情况', id: 'Kondisi Pendidikan' }, tier2: { zh: '教育问题', id: 'Masalah Pendidikan' }, tier3: { zh: '家庭教育', id: 'Pendidikan Keluarga' }, level: 5 },
  { id: '5-027', code: '2.3.2', tier1: { zh: '教育情况', id: 'Kondisi Pendidikan' }, tier2: { zh: '教育问题', id: 'Masalah Pendidikan' }, tier3: { zh: '学校教育、社会教育、职业教育等', id: 'Pendidikan Sekolah, Sosial, dan Vokasi' }, level: 5 },

  // 3. 职场生活 Kehidupan Kerja
  { id: '5-028', code: '3.1.1', tier1: { zh: '职场生活', id: 'Kehidupan Kerja' }, tier2: { zh: '职业与经历', id: 'Pekerjaan dan Pengalaman Kerja' }, tier3: { zh: '工作内容', id: 'Isi Pekerjaan' }, level: 5 },
  { id: '5-029', code: '3.1.2', tier1: { zh: '职场生活', id: 'Kehidupan Kerja' }, tier2: { zh: '职业与经历', id: 'Pekerjaan dan Pengalaman Kerja' }, tier3: { zh: '工作经历', id: 'Pengalaman Kerja' }, level: 5 },
  { id: '5-030', code: '3.2.1', tier1: { zh: '职场生活', id: 'Kehidupan Kerja' }, tier2: { zh: '经营与管理', id: 'Pengelolaan dan Manajemen' }, tier3: { zh: '团队合作', id: 'Kerja Sama Tim' }, level: 5 },
  { id: '5-031', code: '3.2.2', tier1: { zh: '职场生活', id: 'Kehidupan Kerja' }, tier2: { zh: '经营与管理', id: 'Pengelolaan dan Manajemen' }, tier3: { zh: '人员管理', id: 'Manajemen Karyawan' }, level: 5 },
  { id: '5-032', code: '3.2.3', tier1: { zh: '职场生活', id: 'Kehidupan Kerja' }, tier2: { zh: '经营与管理', id: 'Pengelolaan dan Manajemen' }, tier3: { zh: '企业发展', id: 'Perkembangan Perusahaan' }, level: 5 },

  // 4. 自然与环境 Alam dan Lingkungan
  { id: '5-033', code: '4.1.1', tier1: { zh: '自然与环境', id: 'Alam dan Lingkungan' }, tier2: { zh: '自然', id: 'Alam' }, tier3: { zh: '自然资源', id: 'Sumber Daya Alam' }, level: 5 },
  { id: '5-034', code: '4.1.2', tier1: { zh: '自然与环境', id: 'Alam dan Lingkungan' }, tier2: { zh: '自然', id: 'Alam' }, tier3: { zh: '地形地貌', id: 'Bentang Alam' }, level: 5 },
  { id: '5-035', code: '4.1.3', tier1: { zh: '自然与环境', id: 'Alam dan Lingkungan' }, tier2: { zh: '自然', id: 'Alam' }, tier3: { zh: '自然现象、自然规律', id: 'Fenomena dan Hukum Alam' }, level: 5 },
  { id: '5-036', code: '4.1.4', tier1: { zh: '自然与环境', id: 'Alam dan Lingkungan' }, tier2: { zh: '自然', id: 'Alam' }, tier3: { zh: '动植物', id: 'Hewan dan Tumbuhan' }, level: 5 },
  { id: '5-037', code: '4.2.1', tier1: { zh: '自然与环境', id: 'Alam dan Lingkungan' }, tier2: { zh: '环境', id: 'Lingkungan' }, tier3: { zh: '生态平衡', id: 'Keseimbangan Ekosistem' }, level: 5 },
  { id: '5-038', code: '4.2.2', tier1: { zh: '自然与环境', id: 'Alam dan Lingkungan' }, tier2: { zh: '环境', id: 'Lingkungan' }, tier3: { zh: '城市与乡村', id: 'Kota dan Desa' }, level: 5 },
  { id: '5-039', code: '4.2.3', tier1: { zh: '自然与环境', id: 'Alam dan Lingkungan' }, tier2: { zh: '环境', id: 'Lingkungan' }, tier3: { zh: '环境保护', id: 'Pelestarian Lingkungan' }, level: 5 },

  // 5. 科学技术 Sains dan Teknologi
  { id: '5-040', code: '5.1.1', tier1: { zh: '科学技术', id: 'Sains dan Teknologi' }, tier2: { zh: '科技发展', id: 'Perkembangan Teknologi' }, tier3: { zh: '产品介绍与应用', id: 'Pengenalan dan Penerapan Produk' }, level: 5 },
  { id: '5-041', code: '5.2.1', tier1: { zh: '科学技术', id: 'Sains dan Teknologi' }, tier2: { zh: '科学知识', id: 'Pengetahuan Ilmiah' }, tier3: { zh: '科普知识', id: 'Pengetahuan Sains Populer' }, level: 5 },
  { id: '5-042', code: '5.2.2', tier1: { zh: '科学技术', id: 'Sains dan Teknologi' }, tier2: { zh: '科学知识', id: 'Pengetahuan Ilmiah' }, tier3: { zh: '科研成果', id: 'Hasil Penelitian Ilmiah' }, level: 5 },

  // 6. 当代社会 Masyarakat Kontemporer
  { id: '5-043', code: '6.1.1', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '概况', id: 'Gambaran Umum' }, tier3: { zh: '行政区划', id: 'Pembagian Administratif' }, level: 5 },
  { id: '5-044', code: '6.1.2', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '概况', id: 'Gambaran Umum' }, tier3: { zh: '人口情况', id: 'Kondisi Kependudukan' }, level: 5 },
  { id: '5-045', code: '6.1.3', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '概况', id: 'Gambaran Umum' }, tier3: { zh: '时代特征', id: 'Ciri Khas Zaman' }, level: 5 },
  { id: '5-046', code: '6.2.1', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '经济现象', id: 'Fenomena Ekonomi' }, tier3: { zh: '进出口贸易', id: 'Perdagangan Ekspor-Impor' }, level: 5 },
  { id: '5-047', code: '6.2.2', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '经济现象', id: 'Fenomena Ekonomi' }, tier3: { zh: '商业活动', id: 'Aktivitas Bisnis' }, level: 5 },
  { id: '5-048', code: '6.2.3', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '经济现象', id: 'Fenomena Ekonomi' }, tier3: { zh: '经济发展', id: 'Perkembangan Ekonomi' }, level: 5 },
  { id: '5-049', code: '6.3.1', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '社会现象', id: 'Fenomena Sosial' }, tier3: { zh: '民生发展', id: 'Perkembangan Kesejahteraan Rakyat' }, level: 5 },
  { id: '5-050', code: '6.3.2', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '社会现象', id: 'Fenomena Sosial' }, tier3: { zh: '新兴事物', id: 'Hal-hal Baru yang Muncul' }, level: 5 },
  { id: '5-051', code: '6.3.3', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '社会现象', id: 'Fenomena Sosial' }, tier3: { zh: '社会观念', id: 'Pandangan Sosial' }, level: 5 },
  { id: '5-052', code: '6.3.4', tier1: { zh: '当代社会', id: 'Masyarakat Kontemporer' }, tier2: { zh: '社会现象', id: 'Fenomena Sosial' }, tier3: { zh: '基础设施', id: 'Infrastruktur' }, level: 5 },

  // 7. 文化与传统 Budaya dan Tradisi
  { id: '5-053', code: '7.1.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '文艺', id: 'Seni dan Sastra' }, tier3: { zh: '文艺形式', id: 'Bentuk Seni dan Sastra' }, level: 5 },
  { id: '5-054', code: '7.1.2', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '文艺', id: 'Seni dan Sastra' }, tier3: { zh: '文艺常识', id: 'Pengetahuan Umum Seni dan Sastra' }, level: 5 },
  { id: '5-055', code: '7.1.3', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '文艺', id: 'Seni dan Sastra' }, tier3: { zh: '创作者及其作品', id: 'Pencipta dan Karyanya' }, level: 5 },
  { id: '5-056', code: '7.1.4', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '文艺', id: 'Seni dan Sastra' }, tier3: { zh: '文艺活动', id: 'Kegiatan Seni dan Sastra' }, level: 5 },
  { id: '5-057', code: '7.2.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '体育', id: 'Olahraga' }, tier3: { zh: '运动项目', id: 'Cabang Olahraga' }, level: 5 },
  { id: '5-058', code: '7.2.2', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '体育', id: 'Olahraga' }, tier3: { zh: '体育赛事', id: 'Ajang Olahraga' }, level: 5 },
  { id: '5-059', code: '7.2.3', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '体育', id: 'Olahraga' }, tier3: { zh: '体育名人、体育故事', id: 'Tokoh dan Kisah Olahraga' }, level: 5 },
  { id: '5-060', code: '7.3.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '中外交流', id: 'Pertukaran Tiongkok-Luar Negeri' }, tier3: { zh: '交往故事、友好访问、国际合作等', id: 'Kisah Pertukaran, Kunjungan Persahabatan, dan Kerja Sama Internasional' }, level: 5 },
  { id: '5-061', code: '7.4.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '语言文字', id: 'Bahasa dan Aksara' }, tier3: { zh: '俗语、成语、名言名句等', id: 'Peribahasa, Idiom, dan Kata Mutiara' }, level: 5 },
  { id: '5-062', code: '7.4.2', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '语言文字', id: 'Bahasa dan Aksara' }, tier3: { zh: '语言现象', id: 'Fenomena Bahasa' }, level: 5 },
  { id: '5-063', code: '7.5.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '民俗传统', id: 'Adat dan Tradisi Rakyat' }, tier3: { zh: '地方饮食及差异等', id: 'Kuliner Daerah dan Perbedaannya' }, level: 5 },
  { id: '5-064', code: '7.5.2', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '民俗传统', id: 'Adat dan Tradisi Rakyat' }, tier3: { zh: '传统节日与习俗', id: 'Hari Raya dan Adat Tradisional' }, level: 5 },
  { id: '5-065', code: '7.5.3', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '民俗传统', id: 'Adat dan Tradisi Rakyat' }, tier3: { zh: '民间传说', id: 'Legenda Rakyat' }, level: 5 },
  { id: '5-066', code: '7.5.4', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '民俗传统', id: 'Adat dan Tradisi Rakyat' }, tier3: { zh: '古代生活', id: 'Kehidupan Zaman Kuno' }, level: 5 },
  { id: '5-067', code: '7.6.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '人文景观', id: 'Lanskap Budaya' }, tier3: { zh: '名胜古迹、传统民居、建筑等', id: 'Tempat Bersejarah, Rumah Tradisional, dan Arsitektur' }, level: 5 },
  { id: '5-068', code: '7.7.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '传统思想与艺术', id: 'Pemikiran dan Seni Tradisional' }, tier3: { zh: '哲学思想', id: 'Pemikiran Filsafat' }, level: 5 },
  { id: '5-069', code: '7.7.2', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '传统思想与艺术', id: 'Pemikiran dan Seni Tradisional' }, tier3: { zh: '传统艺术', id: 'Seni Tradisional' }, level: 5 },
  { id: '5-070', code: '7.8.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '历史', id: 'Sejarah' }, tier3: { zh: '历史人物、历史事件', id: 'Tokoh dan Peristiwa Sejarah' }, level: 5 },
  { id: '5-071', code: '7.9.1', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '古代科技', id: 'Teknologi Kuno' }, tier3: { zh: '古代科技成就', id: 'Pencapaian Teknologi Kuno' }, level: 5 },
  { id: '5-072', code: '7.9.2', tier1: { zh: '文化与传统', id: 'Budaya dan Tradisi' }, tier2: { zh: '古代科技', id: 'Teknologi Kuno' }, tier3: { zh: '古人科学观念、古代科学家事迹', id: 'Pandangan Ilmiah dan Kisah Ilmuwan Kuno' }, level: 5 },
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { hsk5Topics };
}