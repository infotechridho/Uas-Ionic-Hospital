-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2018 at 02:47 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbhospital`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_apo`
--

CREATE TABLE `tb_apo` (
  `idUser` varchar(3) NOT NULL,
  `idDokter` varchar(3) NOT NULL,
  `tanggal` varchar(34) NOT NULL,
  `keluhan` longtext NOT NULL,
  `status` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_apo`
--

INSERT INTO `tb_apo` (`idUser`, `idDokter`, `tanggal`, `keluhan`, `status`) VALUES
('', '', '2018-12-02T02:06:37Z', 'sefsefsegseg', ''),
('1', '1', '2018-12-15T02:20:49Z', 'asdw', '1'),
('1', '6', '2018-12-16T12:12:42Z', 'sakit pala', '1');

-- --------------------------------------------------------

--
-- Table structure for table `tb_artikel`
--

CREATE TABLE `tb_artikel` (
  `id` int(5) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `artikel` longtext NOT NULL,
  `kategori` varchar(10) NOT NULL,
  `image` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_artikel`
--

INSERT INTO `tb_artikel` (`id`, `nama`, `artikel`, `kategori`, `image`) VALUES
(1, 'Kenali Penyakit Tangan, Kaki dan Mulut', 'Penyakit Tangan Kaki dan Mulut  (Hand, Foot and Mouth Disease) adalah penyakit yg disebabkan oleh infeksi virus. Biasanya terjadi pada bayi dan anak umumnya di bawah usia 10 tahun. Ditandai dengan gejala khas timbulnya lesi/ruam kulit di daerah kaki, tangan dan sekitar mulut, termasuk sariawan pada daerah mulut (lidah, bibir dan jaringan lunak mulut). Dr. Robert Soetandio, Sp.A – Dokter Spesialis Anak dari Rumah Sakit Awal Bros Tangerang menjelaskan bahwa yang menonjol dari penyakit ini bukan gejala flu melainkan kelainan kulit dan mulut.', 'Anak', 'http://awalbros.com/wp-content/uploads/2018/09/photo-1514994257608-1088c33e891c-300x200.jpg'),
(2, 'Pahami Cara Merawat Rambut Bayi', 'Kecepatan pertumbuhan rambut berbeda-beda berdasarkan umur dan jenis kelamin serta dipengaruhi oleh hormon, kecukupan nutrisi, dan faktor genetik. Fase pertumbuhan rambut terdiri dari fase tumbuh, fase istirahat, dan fase lepas. Dalam kandungan, pertumbuhan rambut pada janin dimulai sekitar usia 8-12 minggu kehamilan. Rambut tumbuh di semua bagian tubuh kecuali di bibir, telapak tangan dan telapak kaki, dengan panjang dan ketebalan yang berbeda-beda. Dr. Robert Soetandio, Sp.A – Dokter Spesialis Anak dari Rumah Sakit Awal Bros Tangerang menjelaskan mengenai cara merawat rambut bayi agar para orang tua mengerti dalam merawat rambut bayi. Dalam kandungan siklus ini telah berlangsung dan bayi lahir umumnya dengan rambut di kepala yang banyak dan tebal. Rambut yang terbentuk dalam kandungan ini umumnya akan gugur dalam enam bulan pertama. Setelah rambut yang terbentuk dalam kandungan gugur, akan tumbuh rambut baru yang sifatnya permanen dan mengikuti siklus pertumbuhan rambut secara alamiah. Pada awalnya rambut terlihat tipis setelah gugur, karena beberapa bayi tidak langsung memasuki fase tumbuh yang baru. Umumnya pada usia 1.5 – 2 tahun telah tumbuh rambut baru permanen. Kadang kala rambut yang gugur pada bayi membentuk pola tertentu atau hanya di bagian tertentu saja, misalnya di belakang kepala. Hal ini masih dapat dianggap normal pada bayi berusia kurang dari 6 bulan. “Apabila bayi anda mengalami hal ini, perhatikan pada sisi mana ia lebih banyak tidur atau apakah ada kebiasaan tertentu seperti menarik rambut atau membenturkan kepala,” ujar dokter spesialis anak tersebut. Hal ini dapat mempercepat gugurnya rambut. “Anda dapat mengurangi kecepatan gugurnya rambut dengan merubah posisi tidurnya bayi,” tandas dokter Robert Soetandio. Namun demikian, tidak ada obat khusus yang akan mempercepat tumbuhnya rambut baru.', 'Anak', 'http://awalbros.com/wp-content/uploads/2018/09/photo-1522851218354-5e9aae29eae8-300x180.jpg'),
(3, 'Menjalin Kedekatan Orang Tua dan Anak', 'Ikatan adalah tindakan yang indah dari seorang bayi dan orang tua yang benar-benar saling jatuh cinta. Tidak hanya ikatan menyenangkan, tetapi juga penting untuk kesehatan psikologis bayi Anda,”ujar psikolog Dani. Lingkungan yang penuh kasih menghasilkan kepercayaan diri, kepercayaan, dan keterampilan relasional pada bayi Anda. Kurangnya ikatan dapat menyebabkan masalah psikologis yang serius bagi anak Anda di masa depan.', 'Anak', 'http://awalbros.com/wp-content/uploads/2018/08/psikologi-300x214.jpg'),
(4, 'Saatnya Anak bebas bermain & beraktivitas di Dunia Nyata', 'Merangsang Panca Indera Anak. Mungkin Orang tua belum menyadari sepenuhnya bahwa bermain di alam bebas akan merangsang seluruh panca indera anak. Mata anak akan lebih sejuk dengan suguhan pemandangan alam yang kehijauan. Serunya lagi, ia mendengarkan suara-suara alam dan makhluk hidup lainnya, seperti suara burung dan air yang mengalir. Bermain di alam bebas juga akan memberikan si Kecil kenangan yang indah. Di sini, Orang tua dapat mengenalkan berbagai hal baru pada anak, misalnya aneka tumbuhan atau hewan yang belum pernah ia lihat sebelumnya.', 'Anak', 'http://awalbros.com/wp-content/uploads/2018/08/anak-bermain-300x199.jpg'),
(5, 'Karies Gigi Akibat Kebiasaan Buruk', 'Gigi berlubang yang disebabkan sebuah infeksi pada struktur gigi (karies gigi) hampir menyerang setiap orang tanpa pandang usia. Jika sudah demikian, rasa sakit yang diderita juga tak karuan. Penting untuk mengenal karies gigi. Salah satu dokter spesialis gigi di Rumah Sakit Awal Bros Batam, drg. Dinda Dewi Artini, Sp.KG mengatakan, banyak pasien yang mengetahui terjadi karies gigi setelah rasa nyeri yang menyerang. ”Saat pasien melakukan pemeriksaan, baru tahu adanya gigi berlubang,” ujar dokter spesialis konservasi gigi itu. Ia menjelaskan, karies gigi disebabkan oleh sisa-sisa makanan dan gula yang menempel pada permukaan gigi yang berubah menjadi asam karena bakteri, sehingga merusak struktur gigi menjadi berlubang. Kebiasaan buruk yang mengabaikan sisa-sisa makanan itulah yang kerap memicu karies gigi. “Mengkonsumsi makanan asam, manis, maupun asin secara bersamaan namun tidak langsung disikat, adalah sifat kebanyakan masyarakat kita. Selalu mengabaikan dengan menunda-nunda untuk menyikat gigi,” terangnya. Dinda yang merupakan lulusan spesialis konservasi gigi di Universitas Airlangga Surabaya itu memaparkan, gigi memiliki tiga lapisan. Lapisan terluar yang keras disebut enamel. Di dalamnya bagian tengah terdapat lapisan lagi yang disebut dentin. Lalu bagian dalam terdapat pulpa berisi pembuluh darah dan saraf. “Makin dalam lapisan yang terinfeksi bakteri, maka akan makin parah menimbulkan kerusakan gigi,” tegas dokter gigi tersebut.', 'Gigi', 'http://awalbros.com/wp-content/uploads/2018/08/photo-1525678642543-94522bc9fdb2-300x218.jpg'),
(6, 'Bahaya Gigi Berlubang', 'Gigi berlubang adalah gigi yang ada lubang hitam atau tanda hitam di bagian permukaan gigi, di samping gigi atau di bagian depan gigi. Penyebab gigi menjadi berlubang adalah sisa makanan yang tertimbun dan tidak disikat dengan bersih akhirnya menyebabkan karies. Bila sudah sampai ke bagian saraf gigi maka akan sakit dan tidak bisa tidur selama 2 malam. Hal itu harus dilakukan perawatan saraf gigi serta dilakukan 3 kali kunjungan untuk pengobatannya. Setelah dirawat itu akan diisi lagi, saraf giginya untuk kembali normal menjadi ke gigi yang sehat. Kemudian bila gigi sudah berlubang, lubangnya dibagian email itu akan ditambal permanen. Tapi kalau sudah mulai bagian saraf itu harus dilakukan perawatan saraf. Untuk pencegahannya adalah menyikat gigi pada pagi dan malam dan berkunjung ke dokter gigi 6 bulan sekali meskipun sedang tidak sakit gigi. Bagi orang yang merokok sebaiknya dibersihkan karang giginya setiap 6 bulan sekali sehingga gigi tidak cepat berlubang ataupun goyang. Serta janganlah makan yang manis-manis seperti coklat, gula-gula, ataupun makanan snack yang cepat membuat gigi berlubang. Untuk para anak-anak jangan meminum susu botol (dot) karena bisa menyebabkan gigi berlubang bila tidak rajin pula untuk menggosok giginya pagi dan malam.', 'Gigi', 'http://awalbros.com/wp-content/uploads/2018/04/artikel_Gigi-300x234.jpg'),
(7, 'Apa Beda Perilaku Kompulsif dan Impulsif?', 'Perilaku kompulsif dan impulsif adalah istilah yang menggambarkan dua bentuk perilaku, dan memiliki perbedaan di antara keduanya. Menjadi kompulsif adalah ketika seseorang memiliki dorongan yang tak tertahankan untuk melakukan sesuatu. Menjadi impulsif adalah ketika seseorang bertindak berdasarkan instingnya. Perbedaan utama antara perilaku impulsif dan perilaku kompulsif adalah bahwa sementara perilaku kompulsif terencana, perilaku impulsif tidak direncanakan. “Contoh dari perilaku impulsif diantaranya adalah Ketidakmampuan untuk melawan agresi, kleptomania, pyromania, trichotillomania (menarik rambut seseorang),” terang Dani Tri Astuti, M.Psi., Cht., Psi – psikolog dari Rumah Sakit Awal Bros Tangerang.', 'Kejiwaan', 'http://awalbros.com/wp-content/uploads/2018/09/photo-1528739065092-ffa27b33ef2d-300x200.jpg'),
(8, 'Jangan Sampai Pekerjaan Membuat Kesehatan Jiwa Terganggu', 'Bekerja di bawah tekanan hampir setiap hari tentu saja sudah menjadi makanan sehari hari seorang karyawan atau pegawai. Di balik itu, tempat kerja harus bertanggung jawab atas kesehatan jiwa para pekerjanya. Jangan sampai karyawan mengalami depresi kerja. Tepat 10 Oktober ini WHO mengusung tema kesehatan jiwa di tempat kerja (Mental Health in the Workplace) yang bertujuan adanya consensus baik di tingkat global, regional dan nasional untuk mendukung kesehatan jiwa di tempat kerja. Sehingga memudahkan bagi pekerja yang memiliki masalah kesehatan jiwa mencari pertolongan serta untuk membangun lingkungan kerja yang baik bagi kesehatan jiwa pekerja, dimana hal ini sering terabaikan sebagai salah satu aspek – aspek penting kesehatan pekerja secara keseluruhan. Psikiater Rumah Sakit Awal Bros Batam, dr. Ratna Istiastuti, SpKJ, MKes mengatakan banyak faktor resiko kesehatan jiwa yang dapat terjadi di lingkungan tempat kerja. Mulai dari interaksi antar jenis pekerjaan, lingkungan organisasi dan manajemen, tugas yang tidak sesuai untuk kompetensi seseorang, jenjang karir pegawai yang tidak jelas, beban kerja yang tinggi dan jam kerja yang tidak fleksibel. Risiko kesehatan jiwa dapat terkait dengan kebijakan kesehatan dan keselamatan kerja yang tidak memadai, praktek komunikasi dan manajemen yang buruk, partisipasi terbatas dalam pengambilan keputusan. “Risiko ini dapat mengingkat dimana adanya tim yang tidak solid serta kurangnya dukungan sosial di lingkungan kerja tersebut,” kata dokter Ratna, Spesialis Kesehatan Jiwa, tersebut. Penindasan, intimidasi, pelecehan atau bullying baik fisik atau psikologis sering dilaporkan sebagai penyebab stress terkait pekerjaan dan menimbulkan resiko terhadap pekerja. Risiko pekerjaan terkait dengan masalah fisik dan psikologis ini dapat menyebabkan tingginya biaya perusahaan atau tempat kerja karena tingginya klaim asuransi kesehatan. Menurutnya produktivitas dan sering terjadi peningkatan pergantian staf. “Risiko pekerjaan ini juga dapat memiliki dampak negatif pada keluarga, seperti tingginya angka perceraian, kekerasan dalam rumah tangga serta interaksi social para pekerja tersebut,” kata dr. Ratna. Untuk lingkungan kerja yang buruk, juga dapat menyebabkan masalah pada kesehatan fisik seperti hipertensi, diabetes, gangguan pola makan dan lainnya. “Kemudian pada kesehatan jiwa seperti kecemasan, depresi, gangguan panik, penggunaan zat atau alcohol yang berbahaya. Lalu, perilaku seperti agresif, mudah marah dan tersinggung,” kata dokter spesialis kesehatan jiwa tersebut.', 'Kejiwaan', 'http://awalbros.com/wp-content/uploads/2018/09/agency-young-adult-profession-stressed-black_1134-1279-300x212.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tb_dokter`
--

CREATE TABLE `tb_dokter` (
  `id` int(2) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `poli` varchar(50) NOT NULL,
  `jk` enum('L','P') NOT NULL,
  `phone` varchar(12) NOT NULL,
  `kategori` varchar(10) NOT NULL,
  `image` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_dokter`
--

INSERT INTO `tb_dokter` (`id`, `nama`, `poli`, `jk`, `phone`, `kategori`, `image`) VALUES
(1, 'Airina, Drg. Sp Perio', 'Gigi', 'P', '416-486-1956', 'Gigi', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531269902/image_doctor/drg.%20Airina%2C%20SpPerio%202.jpg.jpg'),
(2, 'Ilna Mulyawati, drg', 'Gigi', 'P', '416-486-1956', 'Gigi', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531212782/image_doctor/drg.%20Ilna%20Mulyawati%203.jpg.jpg'),
(3, 'Irene Kurniawati, drg', 'Gigi', 'P', '416-486-1956', 'Gigi', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531213087/image_doctor/drg.%20Irene%20Kurniawati%201.jpg.jpg'),
(4, 'Lisa Indra, drg', 'Gigi', 'P', '416-486-1956', 'Gigi', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531212334/image_doctor/drg%20Lisa.png.png'),
(5, 'Luvi Christiani, drg', 'Gigi', 'P', '416-486-1956', 'Gigi', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531266376/image_doctor/drg.%20Luvi%20Christiani%202.jpg.jpg'),
(6, 'Dewi Metta, Dr. SPA, MKes', 'Anak', 'P', '416-486-1956', 'Anak', 'https://i2.wp.com/batam.takoplaza.com/wp-content/uploads/sites/4/2016/09/dr-Dewi-Metta-SpA.jpg?w=342'),
(7, 'Hernofialdi, SpA', 'Anak', 'L', '416-486-1956', 'Anak', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531267627/image_doctor/dr.%20Hernofialdi%2C%20SpA%202.jpg.jpg'),
(8, 'Erman, Dr. SpA', 'Anak', 'L', '416-486-1956', 'Anak', 'https://i1.wp.com/batam.takoplaza.com/wp-content/uploads/sites/4/2016/09/dr-Erman-SpA.jpg?w=467'),
(9, 'Indrayanti, Dr. SpA', 'Anak', 'P', '416-486-1956', 'Anak', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531199988/image_doctor/dr%20Indrayanti%20SpA.png.png'),
(10, 'Nenden, Dr. MKes', 'Anak', 'P', '416-486-1956', 'Anak', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531268052/image_doctor/dr.%20Nenden%20Ismawaty%2C%20SpA%2C%20M.%20Kes%202.jpg.jpg'),
(11, 'Afdhalun H, Dr. SpJP. FIHA', 'Jantung', 'L', '416-486-1956', 'Jantung', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531210020/image_doctor/dr.%20Afdhalun%20Hakim%2C%20SpJP%2C%20FiHA%2C%20FAsCC.JPG.jpg'),
(12, 'Stanley T Panggabean, Dr .SpJP, FiHA, FASCC', 'Jantung', 'L', '416-486-1956', 'Jantung', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531269633/image_doctor/dr.%20Stanley%20Panggabean%2C%20SpJP%2C%20FiHA%2C%20FAsCC%202.jpg.jpg'),
(13, 'Laila Sylvia Sari, Dr. SpKJ', 'Kejiwaan', 'P', '416-486-1956', 'Kejiwaan', 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1531207299/image_doctor/dr.%20Laila%20Sylvia%20Sari%2C%20SpKJ%202.jpg.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tb_obat`
--

CREATE TABLE `tb_obat` (
  `id` int(5) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `harga` int(15) NOT NULL,
  `golongan` varchar(20) NOT NULL,
  `kemasan` varchar(30) NOT NULL,
  `kategori` varchar(10) NOT NULL,
  `image` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_obat`
--

INSERT INTO `tb_obat` (`id`, `nama`, `deskripsi`, `harga`, `golongan`, `kemasan`, `kategori`, `image`) VALUES
(1, 'ALEGYSAL TETES MATA 5 ML', 'Untuk pengobatan konjungtivitis alergi dan konjungtivitis vernal', 100000, 'Obat Keras', 'Botol, 5 mL tetes mata', 'Mata', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/alegysal_tetes_mata_5_ml_1.jpg'),
(2, 'ALLETROL COMPOSITUM TETES MATA 5 ML', 'Alletrol Compositum digunakan untuk mengobati peradangan pada mata yang disertai dengan infeksi bakteri.', 10000, 'Obat Keras', 'Box, Botol 5 ml', 'Mata', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ALLETROL-COMPOSITUM-TETES-MATA-5-ML-1.jpg'),
(3, 'ARTEOPTIC LA 2% 2.5 ML TETES MATA', 'Digunakan untuk mengobati glaukoma sudut terbuka kronik dan hipertensi okular.', 177177, 'Obat Keras', 'Botol, 2.5 mL tetes mata', 'Mata', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/arteoptic_la_2_2.5_ml_tetes_mata_1.jpg'),
(4, 'AZARGA TETES MATA 5 ML', 'Azarga merupakan tetes mata mengandung brinzolamid dan timolol yang dapat mengobati glaukoma.', 35198, 'Obat Keras', 'Botol 5 ml', 'Mata', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/AZARGA-TETES-MATA-5-ML-1.jpg'),
(5, 'AZOPT 1% TETES MATA 5 ML', 'Azopt mengandung Brinzolamide yang dapat berfungsi untuk mengobati glaukoma', 258400, 'Obat Keras', 'Botol 5 ml', 'Mata', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/azopt_1_5_ml_eye_drops_1_2.jpg'),
(6, 'ACILAZ 30 MG KAPSUL', 'Digunakan untuk pengobatan tukak duodeunum dan tukak lambung jinak serta refluks esofagitis.', 18437, 'Obat Keras', '1 kapsul', 'Lambung', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACILAZ-30-MG-KAPSUL-1.jpg'),
(7, 'ACITRAL STRIP 4 TABLET', 'Merupakan obat yang digunakan untuk menetralkan asam lambung atau mengikatnya , dipakai untuk mengobati penyakit pada saluran pencernaan yang diakibatkan oleh asam lambung, seperti tukak lambung pada oesofagus, lambung atau usus dengan gejala seprti nyeri lambung , mual dan muntah', 4800, 'Obat Bebas', 'Strip, 4 Pcs', 'Lambung', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACITRAL%20STRIP%204%20TABLET%201.jpg'),
(8, 'ACRAN 150 MG TABLET', 'Mengandung ranitidine/ranitidin digunakan untuk menghilangkan gejala dan penyakit yang disebabkan meningkatnya produksi asam lambung seperti tukak lambung, tukak usus 12 jari, sakit maag, nyeri ulu hati serta gangguan pencernaan. Wanita hamil, wanita yang sedang merencanakan kehamilan dan menyusui sebaiknya diskusikan dengan dokter jika ingin menggunakan obat ini.', 5460, 'Obat Keras', '1 Tablet', 'Lambung', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/252_ACRAN_150_MG_TABLET_1.jpg'),
(9, 'ACRAN 2 ML INJEKSI', 'Mengandung ranitidine/ranitidin digunakan untuk menghilangkan gejala dan penyakit yang disebabkan meningkatnya produksi asam lambung seperti tukak lambung, tukak usus 12 jari, sakit maag, nyeri ulu hati serta gangguan pencernaan. Wanita hamil, wanita yang sedang merencanakan kehamilan dan menyusui sebaiknya diskusikan dengan dokter jika ingin menggunakan obat ini.', 25000, 'Obat Keras', 'Ampul 2 mL injeksi', 'Lambung', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACRAN%202%20ML%20INJEKSI%201.jpg'),
(10, 'ALUMY SUSPENSI 100 ML', 'Merupakan obat dengan bentuk larutan yang berfungsi untuk membantu meringankan rasa tidak nyaman di lambung karena asam lambung yang berlebih', 9721, 'Obat Bebas', 'Botol, 100 ml', 'Lambung', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ALUMY-100-ML-SUSPENSI-1.jpg'),
(11, 'AKNIL BOX 100 KAPLET', 'Merupakan obat dengan kandungan paracetamol dan ibuprofen yang berfungsi untuk menangani sakit kepala, migren, nyeri saat haid,cabut gigi dan kondisi demam', 9999, 'Obat Bebas Terbatas', 'Box, 100 Pcs', 'Demam', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/AKNIL-BOX-100-KAPLET-1.jpg'),
(12, 'ANADEX 60 ML SYRUP', 'Merupakan obat berbentu sirup dengan kandungan paracetamol yang berfungsi untuk membantu meringankan batuk, pilek, demam dan gejala flu', 13585, 'Obat Bebas Terbatas', 'Botol, 60 ml', 'Demam', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ANADEX-60-ML-SYRUP-1.jpg'),
(13, 'ACETIN 600 MG 10 TABLET', 'Digunakan untuk mengobati ganguan pada saluran pernapasan yang dicirikan dengan adanya hipersekresi yang kental dan lengket, seperti bronkitis akut atau kronik dan eksaserbasinya, emfisema paru, mukovisidosis, dan bronkiektasis.', 101761, 'Obat Keras', 'Tube, 10 tablet efferfescent', 'Demam', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACETIN%20600%20MG%2010%20TABLET%201.jpg'),
(14, 'ACETYLCYSTEINE NOVELL 200 MG TABLET', 'Digunakan untuk mengobati ganguan pada saluran pernapasan yang dicirikan dengan adanya hipersekresi yang kental dan lengket, seperti bronkitis akut atau kronik dan eksaserbasinya, emfisema paru, mukovisidosis, dan bronkiektasis.', 1180, 'Obat Keras', '1 pcs', 'Demam', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/ACETYLCYSTEINE-NOVELL-200-MG-TABLET-1.jpg'),
(15, 'ACTIFED PLUS COUGH SUPRESSANT SIRUP 60 ML', 'Untuk meredakan selesma dan rinitis alergi', 35700, 'Obat Bebas Terbatas', 'Botol 60 mL sirup', 'Demam', 'https://goapotik.oss-ap-southeast-5.aliyuncs.com/mediums/actifed_60_ml_sirup_merah_1_1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tb_pembelian`
--

CREATE TABLE `tb_pembelian` (
  `idUser` varchar(4) NOT NULL,
  `idObat` varchar(4) NOT NULL,
  `jumlah` varchar(5) NOT NULL,
  `tanggal` varchar(34) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_pembelian`
--

INSERT INTO `tb_pembelian` (`idUser`, `idObat`, `jumlah`, `tanggal`) VALUES
('1', '1', '1', '2018-12-16T21:18:45Z');

-- --------------------------------------------------------

--
-- Table structure for table `tb_teknologi`
--

CREATE TABLE `tb_teknologi` (
  `id` int(5) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `artikel` longtext NOT NULL,
  `kategori` varchar(15) NOT NULL,
  `image` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_teknologi`
--

INSERT INTO `tb_teknologi` (`id`, `nama`, `artikel`, `kategori`, `image`) VALUES
(1, 'ELEKTROKARDIOGRAM (EKG), PEMERIKSAAN JANTUNG', 'Pemeriksaan Jantung EKG (Pemeriksaan Elektrokardiogram adalah pemeriksaan jantung untuk mendeteksi kelainan dengan mengukur aktivitas listrik yang dihasilkan oleh jantung, sebagaimana jantung berkontraksi. Pemeriksaan Jantung EKG dapat membantu mendiagnosis berbagai kondisi penyakit jantung seperti aritmia jantung, pembesaran jantung, peradangan jantung (perikarditis atau miokarditis) dan penyakit jantung koroner. Tindakan EKG jantung dapat dilakukan di Rumah Sakit Awal Bros dan ditangani oleh dokter spesialis jantung dan pembuluh darah serta didukung peralatan medis yang canggih, sehingga kami dapat memberikan kepuasan pasien atas pelayanan dan tindakan yang kami berikan. Pemeriksaan EKG dilakukan oleh pasien yang memiliki kesulitan bernapas, nyeri dada, atau detak jantung yang tidak normal. Pemeriksaan jantung ini juga dilakukan untuk melihat kondisi kesehatan jantung pada pasien yang berisiko mengalami serangan jantung. Untuk beberapa kasus, dokter jantung meminta pasiennya untuk melakukan cek EKG secara rutin. Dokter jantung juga akan meminta pasien untuk cek EKG sebelum melakukan operasi jantung atau bedah jantung.', 'Jantung', 'http://awalbros.com/wp-content/uploads/2018/04/Facility_EKG.jpg'),
(2, 'ELEKTROFISIOLOGI, PEMERIKSAAN JANTUNG', 'Pemeriksaan Elektrofisiologi jantung adalah tindakan invasif minimal untuk menilai sistem konduksi listrik di jantung, baik aktivitas listrik maupun jalur konduksinya. Apabila gangguan irama disebabkan oleh kelainan jaringan, elektrofisiologi dapat menghancurkan jaringan tersebut dengan menggunakan gelombang radio (ablasi radiofrekuensi), atau menggunakan alat pendingin (krioablasi). Pemeriksaan ini termasuk dalam pelayanan Pusat Layanan Jantung dan Pembuluh Darah Rumah Sakit Awal Bros.', 'Jantung', 'http://awalbros.com/wp-content/uploads/2018/05/cabg.jpg'),
(3, 'CABG, OPERASI JANTUNG', 'Rumah Sakit Awal Bros menyediakan layanan Coronary Artery Bypass Graft (CABG) sebagai salah satu bagian dari Pusat Layanan Jantung dan Pembuluh Darah RS Awal Bros. Operasi CABG adalah tindakan by pass/tindakan operasi jantung dengan menggunakan fasilitas termuktahir yaitu dengan heart lung machine di mana dengan alat tersebut dapat menggantikan fungsi jantung disaat jantung tersebut dioperasi.', 'Jantung', 'http://awalbros.com/wp-content/uploads/2018/05/ep.jpg'),
(4, 'TES TREADMILL, PEMERIKSAAN FISIK JANTUNG', 'Tes Treadmill (Exercise Stress Test) adalah pemeriksaan fisik jantung yang memberikan informasi apakah jantung memiliki asupan darah dan oksigen dari sirkulasi saat terjadi stress fisik. Tes treadmill juga dilakukan untuk memperoleh informasi penting apabila ada kelainan dari irama jantung dan tekanan darah. Namun treadmill sebaiknya tidak dilakukan pada pasien yang baru saja mengalami serangan jantung, atau pada saat baru mengalami nyeri dada, maka sebaiknya lakukan uji treadmill sesuai anjuran/konsultasi dokter sebelumnya. Pemeriksaan fisik jantung ini adalah salah satu layanan dari Pusat Layanan Jantung dan Pembuluh Darah Rumah Sakit Awal Bros. Pemeriksaan fisik jantung treadmill dilakukan jika Anda ingin mengetahui apakah Anda memiliki penyakit jantung koroner atau tidak. Jika dicurigai memiliki penyakit jantung koroner, meskipun tidak muncul saat pemeriksaan EKG, dokter mungkin tetap menyarankan Anda melakukan tes treadmill jantung. Namun, jika pasien baru mengalami serangan jantung, sebaiknya tidak dilakukan tes treadmill sebab pemeriksaan fisik jantung ini berat untuk dilakukan. Selain pasien yang baru mengalami serangan jantung, pemeriksaan treadmill jantung juga tidak disarankan pada pasien yang mengalami nyeri dada dengan kecurigaan karena penyakit jantung, tekanan darah tinggi (hipertensi) yang tidak terkontrol, serta penyakit jantung lainnya seperti gagal jantung atau aritmia (gangguan irama jantung) yang tidak terkendali.', 'Jantung', 'http://awalbros.com/wp-content/uploads/2018/04/tes-treadmill.jpg'),
(5, 'CATH LAB: KATETERISASI JANTUNG', 'Kateterisasi Jantung & Angiografi (Cath Lab) adalah suatu tindakan medis/prosedur diagnostik invasif yang berfungsi untuk mendeteksi penyempitan atau sumbatan pembuluh darah jantung/koroner. Melalui prosedur ini, dapat diketahui jenis tindakan yang sesuai bagi pasien. Sehingga dokter dapat merekomendasikan tindak lanjut pengobatan yang mana tergantung dari hasil angiografi. Tindakan termasuk pasang ring jantung, intervensi dengan balon, atau tindakan operasi bypass. Kateterisasi di Rumah Sakit Awal Bros dilakukan dengan dukungan fasilitas yang mumpuni dan dokter spesialis jantung yang berpengalaman, sehingga deteksi jantung koroner dapat dilakukan dengan tingkat keakuratan yang tinggi. Pasang ring jantung dapat dilakukan di Pusat Layanan Jantung dan Pembuluh Darah Rumah Sakit Awal Bros.', 'Jantung', 'http://awalbros.com/wp-content/uploads/2018/04/cathlab.jpg'),
(6, 'UJI BERA, PEMERIKSAAN PENDENGARAN', 'Brain Evoked Response Auditory (BERA) adalah pemeriksaan pendengaran yang dilakukan pada anak umur 1-3 tahun. Pada anak dengan usia yang lebih kecil, dapat dilakukan pemeriksaan OAE. Bila hasil uji BERA baik, maka dapat disimpulkan fungsi pendengaran dalam batas normal dan tidak perlu tindak lanjut. Namun bila hasilnya abnormal, maka dilanjutkan dengan pemeriksaan estimasi atau prediksi ambang dengar. Harus segera dilakukan rehabilitasi pendengaran sedini mungkin dengan menggunakan alat bantu dengar (ABD). Uji BERA kurang lebih menghabiskan waktu selama satu jam.', 'Pendengaran', 'http://awalbros.com/wp-content/uploads/2018/04/Fasilitas-BERA-Rumah-Sakit-Awal-Bros.jpg'),
(7, 'OTO ACCOUSTIC EMISSION (OAE)', 'Oto Accoustic Emission (OAE) adalah skrining (deteksi dini) atau tes pendengaran bayi baru lahir yang menangkap emisi pada koklea. Bila uji OAE menyatakan PASS dan bayi tidak memiliki faktor risiko, maka dilakukan diagnostik pendengaran lanjutan pada umur 1-3 tahun. Bila dari hasil OAE diketahui adanya tuli saraf, maka harus segera dilakukan rehabilitasi pendengaran. Hal ini dilakukan sedini mungkin dengan menggunakan alat bantu dengar (ABD) paling lambat umur 6 bulan, atau melakukan implan koklea. Penyebab gangguan pendengaran bayi baru lahir bervariasi, mulai dari infeksi TORCHS pada masa hamil hingga riwayat keluarga dengan tuli saraf sejak lahir. Bisa juga karena kelainan anatomi atau infeksi otak.', 'Pendengaran', 'http://awalbros.com/wp-content/uploads/2018/04/Fasilitas-OAE-Rumah-Sakit-Awal-Bros.jpg'),
(8, 'PEMERIKSAAN KEHAMILAN USG 3D', 'Pemeriksaan Kehamilan USG 3D membuat calon ibu bisa melihat janinnya dalam gambar 3 dimensi. Dengan USG 3 Dimensi, dokter operator bisa melihat bayi lebih detil seperti untuk mencari tahu apakah bayi mengalami bibir sumbing, bagian-bagian jantung dan organ dalam lainnya. Waktu terbaik untuk melakukan pemeriksaan kehamilan USG 3 dimensi adalah pada usia kehamilan ke-26 hingga ke-30. Mengenai keamanan pemeriksaan kehamilan, sampai saat ini belum ada bukti ilmiah yang menunjukkan bahwa USG berbahaya bagi janin yang sedang berkembang. Namun begitu, pemeriksaan USG selayaknya menurut saran dokter/ada alasan medis. Tidak seperti pemeriksaan kehamilan USG 2D, USG 3D akan memberikan dokter spesialis kebidanan dan kandungan Anda untuk melihat lebar, tinggi, serta kedalaman dari janin. Pemeriksaan ultrasound ini akan sangat bermanfaat untuk menegakkan diagnosis masalah kesehatan janin pada saat kehamilan. Pada saat pemeriksaan kehamilan USG 3D, ibu akan berbaring di tempat tidur pemeriksaan. Dokter spesialis kebidanan dan kandungan akan mengoleskan gel ke perut dan panggul ibu. Gel ini berbasiskan air, maka tidak akan meninggalkan bekas pada pakaian ataupun kulit dari ibu. Gel ini akan membantu gelombang suara berjalan dengan baik sehingga memperlancar pemeriksaan kehamilan USG 3D yang dilakukan. Selanjutnya pemeriksa akan menggunakan gagang periksa USG (transducer) pada perut. Gagang ini akan digerakkan di atas permukaan kulit perut ibu. Pemeriksa mungkin akan meminta ibu untuk menahan napas atau bergeser pada saat menggunakan transducer. Hal ini dilakukan untuk mengambil gambar dalam perut agar muncul pada monitor.', 'Kehamilan', 'http://awalbros.com/wp-content/uploads/2018/04/usg.jpg'),
(9, 'PEMERIKSAAN KEHAMILAN USG 4D', 'Pemeriksaan Kehamilan USG 4D adalah penggambaran medis yang dilakukan pada masa kehamilan untuk mendapatkan video bayi yang bergerak di dalam rahim. Prosedur ini dapat dilakukan untuk mendeteksi cacat lahir yang tidak terlihat pada USG 2D dan 3D, atau dilakukan atas dasar keinginan pasien.  Pemeriksaan kehamilan ini cukup banyak dilakukan dan menjadi favorit banyak ibu hamil sebab pemeriksaan kehamilan USG 4D menampilkan pergerakan janin di dalam perut. Namun sebelum melakukan USG 4D, sebaiknya ibu memahami tujuan, proses, serta risikonya.', 'Kehamilan', 'http://awalbros.com/wp-content/uploads/2018/04/facility_USG-4D.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `nama` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `pw` varchar(15) NOT NULL,
  `telp` int(12) NOT NULL,
  `alamat` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id`, `nama`, `email`, `pw`, `telp`, `alamat`) VALUES
(1, 'shendy', 'shendy@gmail.com', 'admin', 2147483647, 'jln aviari garden'),
(2, 'user', 'user@sigma.com', 'user', 2147483647, 'aviari garden');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_artikel`
--
ALTER TABLE `tb_artikel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_dokter`
--
ALTER TABLE `tb_dokter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_obat`
--
ALTER TABLE `tb_obat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_teknologi`
--
ALTER TABLE `tb_teknologi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_artikel`
--
ALTER TABLE `tb_artikel`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tb_dokter`
--
ALTER TABLE `tb_dokter`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tb_obat`
--
ALTER TABLE `tb_obat`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tb_teknologi`
--
ALTER TABLE `tb_teknologi`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
