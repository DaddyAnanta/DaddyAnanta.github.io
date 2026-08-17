+++
title = "Load Calculation Penyelamat Struktur & Sistem dari Bahaya Salah Hitung"
date = 2026-08-17T20:12:49+07:00
draft = false
description = "Jangan biarkan proyek gagal karena asal tebak! Pahami Load Calculation untuk struktur, kelistrikan, dan HVAC guna mencegah keruntuhan & pemborosan."
image = "load-calculation.webp"
images = ["/posts/electrical-engineering/load-calculation/load-calculation.webp"]
categories = ["Electrical Engineering"]
tags = ["Force Equilibrium", "Power Distribution Architecture"]
socialshare = true
concept = "Load Calculation"
slug = "load-calculation"
+++



Di balik kenyamanan fasilitas listrik dan udara sejuk di dalam gedung, terdapat perhitungan matematis penting yang dinamakan Perhitungan Beban (_Load Calculation_). Tanpa proses ini, suhu gedung dapat menjadi tidak terkendali atau mengalami korsleting listrik. Langkah ini krusial untuk mencegah kerusakan infrastruktur dan kerugian finansial.

## Apa itu Load Calculation?

Perhitungan Beban (_Load Calculation_) adalah metode untuk memastikan material dan daya perlengkapan gedung sesuai dengan standar ASCE. Mengandalkan sekadar perkiraan kapasitas dapat memicu bahaya besar. Perhitungan pasti sangat diwajibkan untuk fasilitas kritis seperti rumah sakit sesuai dengan standar IEEE.

Sebagai analogi, pertimbangkan persiapan logistik saat mendaki gunung. Membawa persediaan terlalu sedikit akan membahayakan keselamatan, sedangkan membawa beban berlebih akan sangat menguras tenaga. Dalam ranah Mekanikal, Elektrikal, dan Plambing (_Mechanical, Electrical, and Plumbing_), mesin yang berukuran kurang (_Undersized_) berisiko memicu kebakaran. Sebaliknya, mesin berukuran lebih (_Oversized_) akan memboroskan energi.

Ketika paparan sinar matahari memanaskan gedung, terjadilah Penambahan Panas (_Heat Gain_). Sistem kelistrikan harus merespons dengan mengaktifkan Mesin Pendingin (_Chiller_). Saat ini, teknologi komputasi mampu menyimulasikan cuaca, paparan sinar matahari, hingga suhu tubuh penghuni secara otomatis melalui sistem BIM.

Pada masa lalu, estimasi beban sering kali hanya berdasarkan perkiraan kasar. Perubahan signifikan terjadi saat Willis Carrier menemukan Peta Psikrometrik (_Psychrometric Chart_) pada [tahun 1911](https://en.wikipedia.org/wiki/Willis_Carrier). Inovasi tersebut mengubah metode perkiraan menjadi pendekatan ilmiah yang presisi.

Salah satu rumusan dasar untuk menentukan beban pendinginan ruangan menggunakan persamaan transmisi panas konduksi berikut:

$$Q = U \cdot A \cdot \Delta T$$

*   **Q (Beban Panas / _Heat Load_):** Jumlah energi panas (dalam satuan Watt atau BTU) yang menyusup ke dalam ruangan. Semakin besar nilainya, semakin besar kapasitas pendingin yang diperlukan.
*   **U (Nilai U / _U-Value_):** Tingkat kebocoran suhu pada material dinding atau kaca. Kaca lapis ganda lebih efektif menahan panas dari luar dibandingkan dinding beton konvensional.
*   **A (Luas / _Area_):** Total luas ($m^2$) dinding atau jendela yang berbatasan langsung dengan udara luar.
*   **ΔT (Selisih Suhu / _Delta T_):** Perbedaan angka antara suhu luar ruangan dan dalam ruangan. Semakin ekstrem perbedaannya, semakin berat beban kerja sistem.

Sebagai catatan, sistem pendingin tidak memproduksi udara dingin ke dalam ruangan. Sistem tersebut bekerja dengan menyerap panas dari dalam ruangan dan membuangnya ke luar.


## Klasifikasi Utama Load Calculation

Makna dan batasan perhitungan beban berbeda-beda di setiap bidang rekayasa. Berikut adalah penerapan perhitungan beban secara ilmiah pada tiga disiplin teknik utama.

### Rekayasa Struktural dan Sipil

Bidang ini menghitung gaya fisik dan gravitasi agar bangunan tetap kokoh. Beberapa elemen struktural utama meliputi:

- **Beban Mati:** Ini adalah berat tetap dari elemen penyusun struktur itu sendiri. Contohnya seperti blok beton, balok baja, dan komponen atap bangunan.
- **Beban Hidup:** Kategori ini merujuk pada beban dinamis dan sementara yang bisa berubah-ubah. Sumber utamanya berasal dari pergerakan manusia, penempatan furnitur, atau penggunaan mesin.
- **Beban Lingkungan:** Kategori ini muncul akibat tekanan eksternal dari faktor alam. Cakupannya meliputi beban angin, beban salju, serta tarikan akibat gempa bumi.

Perancangan struktur terhadap berbagai beban tersebut mengacu pada [aturan ASCE](https://www.asce.org/publications-and-news/codes-and-standards/asce-sei-7-22), yang menetapkan kriteria beban minimum untuk desain bangunan dan struktur lainnya.

### Desain Sistem Elektrikal

Bidang ini menghitung arus dan tegangan untuk menentukan ukuran kabel dan pengaman listrik. Komponen perhitungan listrik berdasarkan standar meliputi:

- **Beban Terhubung vs Beban Permintaan (_Connected Load vs Demand Load_):** Ini adalah perbedaan antara total daya saat semua alat menyala dengan kemungkinan nyata penggunaan daya. 
	- Beban Terhubung (_Connected Load_) - menghitung total daya dari seluruh perangkat yang terpasang.
	- Beban Permintaan (_Demand Load_) memperhitungkan kemungkinan penggunaan daya secara bersamaan berdasarkan faktor permintaan (_demand factor_) yang ditetapkan dalam [standar NEC](https://www.ecmweb.com/national-electrical-code/article/55269591/ensuring-accuracy-in-demand-factors-with-the-nec).
- **Distribusi Fase (_Phase Distribution_):** Proses membagi beban listrik secara merata di antara tiga fase pada sistem tiga fase. Langkah ini bertujuan mengurangi ketidakseimbangan arus (_phase unbalance_) yang dapat memengaruhi kinerja peralatan listrik, termasuk [transformator](https://pepuru.com/posts/electrical-engineering/transformer/) daya.
- **Proteksi Sirkuit (_Circuit Protection_):** Spesifikasi pemutus sirkuit (_circuit breaker_) perlu mempertimbangkan batas keamanan sesuai dengan jenis dan karakteristik beban. Untuk beban terus-menerus (_continuous load_), kapasitas sirkuit umumnya dihitung sebesar 125% dari beban tersebut untuk membantu mencegah pemanasan berlebih akibat arus yang terus mengalir.

Standar instalasi kelistrikan di Indonesia wajib mengikuti PUIL 2020 untuk mencegah risiko kegagalan listrik.

Untuk menghemat biaya tanpa mengabaikan kebutuhan daya, insinyur menggunakan Faktor Keberagaman (_Diversity Factor_). Karena tidak semua perangkat biasanya beroperasi secara bersamaan, faktor ini membantu memperkirakan beban aktual sehingga kapasitas kabel dan transformator dapat ditentukan secara lebih efisien.

Namun, efisiensi ini dapat dipengaruhi oleh Beban Siluman (_Vampire Power_). Perangkat elektronik dalam Mode Siaga (_Standby_) tetap mengonsumsi sejumlah kecil listrik meskipun tidak sedang digunakan, sehingga dapat menghasilkan konsumsi energi dan panas dalam jumlah tertentu.

Di sisi lain, sistem elevator dapat memanfaatkan energi saat proses pengereman. Ketika lift turun dengan beban berat, motor dapat bekerja sebagai generator dan mengubah sebagian energi gerak menjadi energi listrik yang dapat dimanfaatkan kembali oleh sistem kelistrikan gedung.

### Sistem Tata Udara dan Mekanikal

Analisis termodinamika menghitung Beban Pendinginan dan Pemanasan (_Cooling or Heating Load_) untuk menentukan kapasitas sistem Tata Udara (_HVAC_) yang sesuai. Parameternya mencakup:

- **Panas Sensibel dan Panas Laten (_Sensible and Latent Heat_)**   
  Panas sensibel menyebabkan perubahan suhu udara yang dapat dirasakan, sedangkan panas laten berkaitan dengan perubahan kelembapan dan proses pengembunan.
- **Selubung Bangunan (_Building Envelope_)**  
  Analisis ini menilai perpindahan panas melalui bagian luar bangunan, seperti dinding, atap, dan jendela. Faktor yang diperhitungkan meliputi perbandingan luas jendela dengan dinding (Window-to-Wall Ratio) serta arah hadap bangunan terhadap radiasi matahari.
- **Penambahan Panas Internal (_Internal Heat Gains_)**  
  Panas yang dihasilkan oleh aktivitas di dalam bangunan, seperti tubuh manusia, peralatan elektronik, dan lampu. Panas ini turut menambah beban pendinginan yang harus ditangani oleh sistem HVAC.

Panduan teknis perhitungan ini bersumber pada literatur ASHRAE dan [standar ACCA](https://www.acca.org/standards/technical-manuals).

Dalam praktiknya, insinyur Tata Udara (_HVAC_) juga perlu memperhitungkan Beban Laten (_Latent Load_) dari penguapan keringat untuk mengendalikan kelembapan dan menjaga kenyamanan ruangan. Setiap orang juga menghasilkan panas tubuh sekitar **100 W**, sehingga area dengan banyak penghuni dapat memiliki beban pendinginan yang lebih tinggi.

Di sisi lain, dinding kaca pada gedung pencakar langit dapat meningkatkan Penambahan Panas Matahari (_Solar Heat Gain_) karena radiasi matahari lebih banyak masuk melalui fasad kaca. Pada kondisi tertentu, beban dari radiasi matahari dapat menyumbang hingga **60%** beban pendinginan _chiller_, sehingga meningkatkan konsumsi energi dan biaya operasional.

## Parameter dan Faktor Pengali

Insinyur menggunakan faktor penyesuaian untuk mengoptimalkan rancangan instalasi bangunan. Tujuannya adalah menghindari penggunaan material dan kapasitas yang berlebihan sehingga anggaran tidak terbuang (_over-design_), sekaligus mencegah kapasitas yang terlalu kecil yang dapat meningkatkan risiko kerusakan (_under-design_).

Berikut adalah beberapa faktor perhitungan beserta penjelasannya:

- **Faktor Permintaan (_Demand Factor_)**  
  Rasio antara beban puncak (_Peak Load_) dengan total Beban Terhubung (_Connected Load_). Nilainya umumnya **≤ 1** karena beban puncak tidak melebihi total kapasitas beban yang terpasang.  
  **Contoh:** Sebuah gedung memiliki total Beban Terhubung (Connected Load) 100 kW, tetapi beban puncak yang tercatat hanya 80 kW. Maka, Faktor Permintaannya adalah 80 ÷ 100 = 0,8 atau 80%.
- **Faktor Keberagaman (_Diversity Factor_)**  
  Menggambarkan kondisi ketika beberapa sistem atau beban tidak mencapai puncaknya secara bersamaan. Nilainya umumnya ≥ 1 dan diperoleh dari perbandingan jumlah beban puncak masing-masing subsistem dengan beban puncak keseluruhan sistem.  
  **Contoh:** Tiga kelompok beban memiliki beban puncak masing-masing 50 kW, 40 kW, dan 30 kW, tetapi beban puncak keseluruhan gedung hanya 100 kW. Maka, Faktor Keberagamannya adalah (50 + 40 + 30) ÷ 100 = 1,2.
- **Faktor Beban (_Load Factor_)**  
  Angka ini membandingkan riwayat penggunaan energi rata-rata dengan beban puncak selama waktu pemantauan tertentu. Insinyur menggunakan rasio ini untuk menganalisis efisiensi tagihan utilitas listrik bulanan. Penyedia jaringan listrik juga sering memakai metrik ini untuk menghitung total jam pemakaian energi dalam satu periode.  
  **Contoh:** Jika sebuah gedung memiliki beban rata-rata 60 kW dan beban puncak 100 kW selama periode tertentu, Faktor Bebannya adalah 60 ÷ 100 = 0,6 atau 60%.
- **Margin Keamanan (_Safety Margin_)**  
  Insinyur sengaja menambahkan persentase kapasitas cadangan ke dalam hasil perhitungan akhir. Tujuannya untuk berjaga-jaga jika terjadi lonjakan arus listrik yang tidak biasa. Cadangan kapasitas menurut [buku pedoman](https://archive.org/stream/ElectricPowerDistributionForIndustrialPlants/Electric+Power+distribution+For+Industrial+Plants_djvu.txt#4) ini juga berguna untuk memenuhi rencana perluasan fasilitas di masa depan.  
  **Contoh:** Jika hasil perhitungan kebutuhan daya adalah 100 kW dan insinyur menetapkan cadangan 20%, kapasitas yang dirancang menjadi 100 × 1,2 = 120 kW.

Untuk menentukan kapasitas operasional listrik, insinyur menggunakan perbandingan antara Beban Puncak (_Peak Load_) dan Beban Tersambung (_Connected Load_) untuk mendapatkan nilai Faktor Permintaan (_Demand Factor_):

$$DF = \frac{P_{peak}}{P_{connected}}$$

- **DF**: - Faktor Permintaan (_Demand Factor_) dalam bentuk desimal atau persentase.
- **$P_{peak}$**: Beban Puncak (_Peak Load_) dalam satuan kilowatt (kW) atau watt (W).
- **$P_{connected}$**:  Beban Tersambung (_Connected Load_) dalam satuan kilowatt (kW) atau watt (W).

Strategi estimasi ini membantu insinyur mengoptimalkan penggunaan material tanpa mengabaikan standar keselamatan penghuni. Namun, karena perhitungannya didasarkan pada probabilitas dan data historis, hasilnya dapat meleset ketika terjadi kondisi ekstrem atau kejadian langka (_Black Swan Event_) yang berada di luar asumsi desain. Kegagalan asumsi tersebut dapat meningkatkan risiko gangguan dan masalah operasional pada bangunan.

## Alur Kerja Standar Operasional Perhitungan

Konsultan desain mengikuti langkah sistematis sejak tahap awal proyek hingga validasi spesifikasi akhir. Secara umum, prosedur perhitungan dalam industri konstruksi dapat dilakukan melalui tahapan berikut.

- **Identifikasi Parameter Bangunan**  
  Proses ini berfokus pada pengumpulan data awal bangunan yang akurat, seperti denah, karakteristik material, Pembagian Zona Ruang (Space Zoning), dan klasifikasi iklim. Data tersebut digunakan untuk memahami bentuk, fungsi, dan kondisi bangunan sebelum menghitung kebutuhan sistem Tata Udara (HVAC).
- **Inventarisasi Komponen Beban**  
  Langkah ini mengidentifikasi seluruh sumber beban (_Load Point_) dalam bangunan secara sistematis. Insinyur mencatat daya peralatan mekanis, berat elemen penyangga, serta kebutuhan daya lampu sebelum data tersebut dimasukkan ke perangkat lunak untuk perhitungan.
- **Penerapan Faktor Koreksi**  
  Proses perhitungan ini menggunakan Beban Tersambung (_Connected Load_) bersama Faktor Permintaan (_Demand Factor_) dan Faktor Keberagaman (_Diversity Factor_) untuk memperkirakan kebutuhan daya. Faktor Permintaan umumnya bernilai **≤ 1**, sedangkan Faktor Keberagaman umumnya bernilai **≥ 1**, dengan metode perhitungan yang harus mengikuti standar kelistrikan yang berlaku.
- **Kalkulasi Kombinasi Beban**  
  Insinyur menghitung berbagai kombinasi beban untuk memperkirakan kondisi paling kritis yang mungkin terjadi pada bangunan. Salah satu contohnya adalah menggabungkan beban struktur untuk memastikan fondasi tetap mampu menahan beban dalam batas aman sesuai standar keselamatan bangunan yang berlaku.
- **Dokumentasi dan Tinjauan Silang**  
  Langkah ini mencakup tinjauan sejawat (peer review) terhadap hasil perhitungan perangkat lunak. Pihak independen memeriksa kembali parameter beban dan asumsi desain, kemudian insinyur menyusun laporan teknis sebagai bagian dari dokumen perizinan bangunan atau tender setelah hasil dinyatakan sesuai.

Saat ini, banyak perhitungan tersebut dapat dilakukan secara otomatis menggunakan perangkat lunak komputer. Sistem digital ini dapat membuat simulasi bangunan dengan memperhitungkan berbagai faktor, seperti arah paparan sinar matahari dan pola pergerakan penghuni.

## Perangkat Lunak dan Standar Regulasi Industri

Hasil Perhitungan Beban (_Load Calculation_) harus mengacu pada standar yang berlaku untuk memastikan keamanan dan keandalan bangunan. Untuk menangani perhitungan yang kompleks secara cepat dan akurat, insinyur menggunakan perangkat lunak khusus. Berikut adalah beberapa standar dan aplikasi yang umum digunakan dalam industri konstruksi:

| **Disiplin Rekayasa** | **Standar Regulasi** | **Perangkat Lunak Populer** |
|---|---|---|
| **Struktural** | ASCE 7, ACI (American Concrete Institute), AISC | SAP2000, ETABS, STAAD.Pro |
| **Elektrikal** | NEC (NFPA 70), IEEE, PUIL (Standar Nasional Indonesia) | ETAP, SKM PowerTools, AutoCAD Electrical |
| **Mekanikal / HVAC** | ASHRAE Standard, ACCA Manual J / Manual N | Carrier HAP, Trane TRACE, Elite Software |

Setiap disiplin ilmu memiliki pedoman yang ketat. Standar struktural seperti ASCE, ACI, dan AISC menjadi acuan untuk memastikan bangunan mampu menahan beban fisik, gempa bumi, dan angin, sedangkan NEC menjadi acuan keselamatan instalasi kelistrikan. Sementara itu, standar ASHRAE dan ACCA membantu memastikan kapasitas sistem pendingin dan pemanas dihitung secara tepat.

Perangkat lunak modern juga dapat menyimulasikan berbagai kondisi lingkungan, seperti pergerakan bayangan dan perubahan suhu radiasi. Teknologi ini membuat perhitungan lebih akurat dibandingkan metode perkiraan sederhana, tetapi hasil desain tetap perlu diverifikasi oleh insinyur dan disesuaikan dengan standar serta peraturan yang berlaku.

## Dampak Kesalahan Perhitungan dan Strategi Mitigasi

Kesalahan kecil dalam tahapan perhitungan dapat memicu efek domino yang merusak peralatan dan merugikan keuangan. Berikut adalah skenario kegagalan perhitungan beserta dampaknya:

### Dampak Kapasitas Kurang (_Undersizing_)

Sistem dengan Kapasitas Kurang (_Undersized_) memaksa peralatan bekerja lebih keras saat menghadapi beban puncak. Kondisi ini dapat menyebabkan Pemutus Sirkuit ([_Circuit Breaker_](https://pepuru.com/posts/electrical-engineering/miniature-circuit-breaker/)) terputus akibat arus berlebih dan mempercepat kerusakan komponen.

Pada sistem Tata Udara (_HVAC_), beban berlebih dapat menyebabkan [kompresor](https://pepuru.com/posts/mechanical/compressor/) bekerja lebih berat dan mengalami panas berlebih. Pada struktur bangunan, kapasitas yang tidak memadai dapat meningkatkan risiko deformasi material hingga kegagalan struktur.
    
### Dampak Kapasitas Berlebih (_Oversizing_):

Perangkat pendingin yang terlalu besar dapat memicu fenomena Siklus Pendek (_Short-cycling_), yaitu kondisi ketika mesin terlalu sering menyala dan mati. Siklus yang terlalu singkat dapat mengurangi kemampuan sistem dalam mengendalikan kelembapan atau Panas Laten (_Latent Heat_) di dalam ruangan.

Kapasitas Berlebih (_Oversized_) juga dapat meningkatkan biaya investasi dan konsumsi listrik akibat siklus operasi yang tidak optimal. Selain itu, peralatan berkapasitas besar membutuhkan ruang instalasi dan peralatan pendukung yang lebih luas.

Membeli pendingin dengan kapasitas jauh di atas hasil Perhitungan Beban (_Load Calculation_) tidak selalu membuat ruangan lebih efisien atau nyaman. Mesin memang dapat menurunkan suhu lebih cepat, tetapi jika terlalu cepat mencapai suhu target lalu mati, waktu operasi untuk mengurangi kelembapan menjadi lebih pendek.

Akibatnya, ruangan dapat terasa dingin tetapi tetap memiliki kelembapan yang tinggi. Kondisi lembap yang berlangsung terus-menerus dapat meningkatkan risiko pertumbuhan jamur di area bangunan yang lembap.

### Fakta, Anomali, dan Bahaya di Lapangan:

Perhitungan beban di atas kertas dapat terlihat ideal, tetapi kondisi nyata di lapangan sering menghadirkan faktor yang sulit diprediksi. Beberapa fakta dan anomali berikut menunjukkan mengapa setiap sumber beban perlu diperhitungkan dengan cermat.

 - **Manusia berfungsi layaknya radiator 100 watt** 
   Panas tubuh manusia menjadi salah satu sumber Penambahan Panas Internal (_Internal Heat Gains_) di dalam ruangan. Faktor ini perlu diperhitungkan sesuai [panduan ASHRAE](https://www.ashrae.org/File%20Library/Technical%20Resources/Technical%20FAQs/TC-04.01-FAQ-77.pdf#1#1), terutama pada ruangan dengan banyak penghuni.
 - **Beban Siluman (_Vampire Power_) mengacaukan perhitungan**  
   Perangkat elektronik dalam mode siaga tetap menggunakan sejumlah kecil listrik dan menghasilkan panas. Jika terakumulasi dalam jumlah besar, konsumsi ini dapat memengaruhi efisiensi energi bangunan.
 - **Kejadian tak terduga akibat gelombang panas ekstrem**  
   Perhitungan Beban (Load Calculation) menggunakan kondisi desain berdasarkan data iklim dan asumsi tertentu. Ketika terjadi gelombang panas ekstrem di luar kondisi desain, banyak sistem pendingin dapat beroperasi mendekati kapasitas maksimumnya secara bersamaan sehingga beban pada jaringan listrik meningkat dan Faktor Keberagaman (Diversity Factor) yang digunakan dalam kondisi normal dapat menjadi kurang representatif.
 - **Beban beralih fungsi menjadi pembangkit energi**  
   Sistem kelistrikan gedung modern dapat memanfaatkan elevator regeneratif yang mengubah sebagian energi gerak dan gravitasi saat pengereman menjadi energi listrik. Dengan demikian, peralatan yang biasanya mengonsumsi energi juga dapat menghasilkan energi pada kondisi operasi tertentu.
 - **Mitigasi Proaktif**  
   Pemilik gedung perlu memeriksa kondisi struktur dan sistem energi secara berkala, terutama setelah terjadi perubahan fungsi atau penggunaan ruangan. Perhitungan kapasitas sebaiknya menggunakan metode teknik dan simulasi yang sesuai, bukan sekadar perkiraan kasar.

Perhitungan Beban (Load Calculation) bukan sekadar persyaratan administratif. Perhitungan ini menjadi dasar penting untuk memastikan kapasitas struktur dan sistem bangunan sesuai dengan kebutuhan, sehingga bangunan dapat beroperasi secara aman, andal, dan efisien.


## FAQ

1. **Apakah perhitungan beban perlu diulang jika bangunan mengalami renovasi atau penambahan ruangan?**  
   Ya, perhitungan beban perlu ditinjau kembali ketika terjadi perubahan struktur, alih fungsi ruangan, atau perluasan bangunan. Langkah ini memastikan kapasitas struktur dan sistem mekanikal maupun kelistrikan tetap sesuai dengan kebutuhan dan kondisi bangunan setelah perubahan.

2. **Apakah rumah tinggal biasa juga membutuhkan perhitungan beban atau hanya untuk gedung komersial?**  
   Rumah tinggal juga memerlukan perhitungan beban dasar, misalnya untuk menentukan kebutuhan daya listrik, kapasitas pendingin, dan kapasitas struktur. Perhitungan ini membantu mencegah kapasitas yang terlalu kecil maupun terlalu besar sehingga sistem tetap aman dan efisien.

3. **Siapa pihak yang berwenang untuk membuat dan mengesahkan dokumen perhitungan beban proyek?**  
   Pihak yang berwenang menyusun dan mengesahkan dokumen perhitungan beban adalah insinyur profesional berlisensi dari disiplin ilmu struktur, mekanikal, atau kelistrikan. Sebagai prasyarat pengajuan izin Persetujuan Bangunan Gedung (PBG), insinyur tersebut diwajibkan memiliki Sertifikat Keahlian Ahli (SKA) dan Surat Tanda Registrasi Insinyur (STRI) yang diterbitkan oleh Persatuan Insinyur Indonesia.