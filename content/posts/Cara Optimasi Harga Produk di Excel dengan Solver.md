+++
title = 'Cara Optimasi Harga Produk di Excel dengan Solver'
date = 2025-04-24T21:37:16+07:00
draft = false
description = "Price optimization merupakan pendekatan strategis dan analitis untuk menetapkan harga jual produk atau layanan yang paling efektif guna mencapai tujuan bisnis spesifik, umumnya memaksimalkan profitabilitas atau total pendapatan. Berbeda dengan penetapan harga berdasarkan intuisi atau sekadar mengikuti pasar, optimisasi harga secara sistematis menganalisis berbagai faktor kunci—termasuk data historis penjualan, elastisitas permintaan (bagaimana volume penjualan merespons perubahan harga), biaya produksi atau akuisisi, harga pesaing, dan persepsi nilai pelanggan—dengan memanfaatkan model matematika dan analisis data untuk menemukan titik harga 'optimal' yang menyeimbangkan permintaan pasar dengan tujuan finansial perusahaan."
image = "/images/18.Excel_price_optimization/12.png"
imageBig= "/images/18.Excel_price_optimization/12.png"
categories= ["Analisis Data"]
tags = ["Excel"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++




Melanjutkan pembahasan kita mengenai _price optimization_, seperti yang telah diulas dalam tulisan sebelumnya tentang [Price Optimization: Menentukan Harga Optimal dari Kurva Permintaan](https://daddyananta.github.io/posts/price-optimization-menentukan-harga-optimal-dari-kurva-permintaan/), kali ini kita akan mencoba pendekatan yang lebih praktis dengan menggunakan Microsoft Excel. Berbeda dengan metode konseptual sebelumnya, di sini kita akan memanfaatkan sebuah _add-ins_ atau fitur tambahan bawaan Excel yang sangat powerful untuk analisis optimisasi, yaitu Solver.

Solver merupakan sebuah _add-ins_ pada Microsoft Excel yang dirancang khusus untuk melakukan analisis 'what-if' dan mencari solusi optimal terhadap suatu masalah. Secara teknis, Solver bekerja dengan cara menemukan nilai maksimum, minimum, atau nilai spesifik tertentu untuk sebuah formula dalam satu sel (disebut _objective cell_ atau sel tujuan) dengan mengubah nilai-nilai dalam sel-sel lain (disebut _variable cells_ atau sel variabel), sambil memastikan bahwa serangkaian batasan atau kondisi (disebut _constraints_) terpenuhi. 

Dalam konteks optimisasi harga, Solver dapat membantu kita menentukan harga jual produk yang akan memaksimalkan keuntungan atau pendapatan, dengan mempertimbangkan fungsi permintaan dan batasan-batasan lain seperti biaya produksi atau kapasitas.

# **Optimisasi Harga Sederhana dengan Excel Solver: Memaksimalkan Profit**

Dalam dunia bisnis, menentukan harga jual yang tepat adalah kunci untuk memaksimalkan keuntungan. Terkadang, kita hanya memiliki data penjualan historis terbatas. Bagaimana cara memanfaatkannya untuk menentukan harga yang lebih optimal? Di artikel ini, kita akan memandu Anda langkah demi langkah menggunakan fitur **Solver** di Microsoft Excel untuk melakukan optimisasi harga sederhana berdasarkan dua titik data historis.

**Skenario:** Misalkan kita memiliki data penjualan sebelumnya:

- Saat harga (Price) Rp 4.000, penjualan (Demand) adalah 20 unit.
- Saat harga Rp 4.500, penjualan turun menjadi 16 unit.
- Biaya per unit produk (COGS - Cost of Goods Sold) kita adalah Rp 2.000 (ini kita asumsikan atau dapatkan dari data biaya).

Mari kita siapkan data ini di Excel:

<img src="/images/18.Excel_price_optimization/1.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

**Langkah 1: Memodelkan Kurva Permintaan (Sederhana)**

Untuk memprediksi bagaimana permintaan berubah seiring perubahan harga, kita perlu membuat model permintaan. Dengan hanya dua titik data, model paling sederhana adalah garis lurus (linear).

1. **Buat Scatter Plot:** Blok data harga dan permintaan Anda (misal A3:B4 jika mengikuti gambar awal, atau siapkan data harga dan permintaan Anda). Pilih `Insert > Charts > Scatter`. 

<img src="/images/18.Excel_price_optimization/2.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

2. **Tambahkan Trendline:** Klik kanan pada salah satu titik data di grafik, lalu pilih `Add Trendline`. 

<img src="/images/18.Excel_price_optimization/3.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

3. **Tampilkan Persamaan:** Di panel `Format Trendline` yang muncul di sebelah kanan, gulir ke bawah dan centang kotak `Display Equation on chart`. Excel akan menampilkan persamaan garis yang paling sesuai dengan data Anda. Dalam contoh ini, persamaannya adalah `y = -0.008x + 52`. 

<img src="/images/18.Excel_price_optimization/4.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

Persamaan `y = -0.008x + 52` ini adalah model kurva permintaan linear kita. Artinya:

- `y` adalah prediksi Permintaan (Demand).
- `x` adalah Harga (Price).
- Formula ini menyatakan bahwa untuk setiap kenaikan harga sebesar Rp 1, permintaan diprediksi turun sebesar 0.008 unit. Angka 52 adalah titik potong teoritis jika harga nol (interpretasi ini perlu hati-hati dalam konteks nyata).

**Penting:** Model linear dari dua titik data adalah penyederhanaan besar. Di dunia nyata, kurva permintaan mungkin tidak linear dan Anda idealnya membutuhkan lebih banyak data. Namun, ini adalah titik awal yang baik untuk ilustrasi.

**Langkah 2: Menyiapkan Perhitungan Profit di Excel**

Sekarang, mari kita gunakan persamaan permintaan ini untuk menghitung potensi profit di Excel.

1. **Siapkan Sel Input:**
    - Di sel `B6` (misalnya), masukkan COGS Anda: `2000`.
    - Di sel `B7`, kita akan memasukkan Harga jual. Awalnya, kita bisa coba masukkan salah satu harga historis, misal `4000`.
2. **Hitung Prediksi Permintaan:**
    - Di sel `B8`, masukkan formula berdasarkan persamaan trendline, dengan `B7` sebagai input Harga (`x`): `=-0.008 * B7 + 52` Jika B7 adalah 4000, B8 akan menampilkan 20 (sesuai data awal kita). Jika Anda mencoba B7=6000, B8 akan menjadi 4. 
    
    <img src="/images/18.Excel_price_optimization/5.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

3. **Hitung Profit:**
    - Profit dihitung sebagai: `(Harga Jual - COGS) * Prediksi Permintaan`.
    - Di sel `B10`, masukkan formula: `=(B7 - B6) * B8` Jika B7=4000, B6=2000, dan B8=20, maka B10 akan menjadi (4000-2000)*20 = 40.000. Jika B7=6000, B6=2000, dan B8=4, maka B10 akan menjadi (6000-2000)*4 = 16.000. 
    
    <img src="/images/18.Excel_price_optimization/6.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">
    
    Tujuan kita adalah mencari nilai di `B7` (Harga) yang membuat nilai di `B10` (Profit) menjadi maksimal.

**Langkah 3: Menggunakan Excel Solver untuk Optimisasi**

Di sinilah Solver berperan. Solver akan mencoba berbagai nilai Harga (B7) secara otomatis untuk menemukan nilai yang memberikan Profit (B10) tertinggi.

1. **Buka Solver:** Pergi ke tab `Data` dan klik `Solver` (biasanya terletak di grup "Analyze" di paling kanan). Jika Anda tidak melihat Solver, Anda mungkin perlu mengaktifkannya melalui `File > Options > Add-ins > Excel Add-ins > Go... > centang Solver Add-in`. 

<img src="/images/18.Excel_price_optimization/7.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

2. **Konfigurasi Solver:**
    - **Set Objective:** Pilih sel `B10` (sel Profit kita). Pastikan opsi `Max` (Maximize) terpilih, karena kita ingin memaksimalkan profit.
    - **By Changing Variable Cells:** Pilih sel `B7` (sel Harga yang ingin kita optimalkan).
    - **Subject to the Constraints:** (Ini langkah penting yang sering terlewat) Kita perlu menambahkan batasan agar hasilnya realistis:
        - Klik `Add`. Masukkan `B8 >= 0` (Prediksi Permintaan tidak boleh negatif). Klik `Add`.
        - Masukkan `B7 >= B6` (Harga Jual setidaknya harus sama dengan atau lebih besar dari COGS agar tidak rugi per unit). Klik `OK`.
    - **Select a Solving Method:** Pilih `GRG Nonlinear`. Metode ini cocok untuk masalah dengan kurva (seperti model permintaan kita, meskipun linear, Solver akan menanganinya) dan fungsi tujuan yang mungkin tidak linear (profit adalah hasil kali harga dan permintaan). 
    
    <img src="/images/18.Excel_price_optimization/8.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

3. **Jalankan Solver:** Klik tombol `Solve`.

**Langkah 4: Hasil Optimisasi**

Solver akan mencari solusi. Jika berhasil, akan muncul dialog "Solver Results".

1. **Pilih "Keep Solver Solution"** dan klik `OK`. 

<img src="/images/18.Excel_price_optimization/9.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

2. **Lihat Hasilnya:** Perhatikan sel `B7` (Harga) dan `B10` (Profit). Solver telah mengubah nilai Harga ke angka yang (menurut model kita) akan menghasilkan Profit maksimal. Anda akan melihat nilai Profit (B10) sekarang lebih tinggi dibandingkan saat Anda menggunakan harga awal (misalnya Rp 4.000 atau Rp 6.000). 

<img src="/images/18.Excel_price_optimization/10.png" alt="excel solver" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

Dalam contoh ini, Solver menemukan bahwa harga optimal (berdasarkan model linear sederhana ini) adalah sekitar **Rp 4.250**, yang menghasilkan prediksi permintaan 18 unit dan **profit maksimal Rp 40.500**.

# Video singkat



<div class="youtube1" style="text-align: center;">
    <iframe width="80%" height="100%" item-align="center"  src="https://www.youtube.com/embed/w2yF4WrQ_gc?si=Jc-VmGuK9MftkGcE"
            title="YouTube video player" frameborder="0" allowfullscreen>
    </iframe>
</div>
<p style="font-size: 16px; color: #888; text-align: center;"> Price Optimization with Solver from Youtube.com</p>

**Kesimpulan**

Excel Solver adalah alat yang ampuh untuk melakukan optimisasi harga, bahkan dengan data awal yang terbatas. Dengan memodelkan hubungan antara harga dan permintaan (meskipun secara sederhana) dan mendefinisikan tujuan (memaksimalkan profit), Solver dapat membantu Anda menemukan titik harga yang lebih baik daripada sekadar menebak atau menggunakan harga historis.

**Ingat:** Kualitas hasil optimisasi sangat bergantung pada kualitas model permintaan Anda. Semakin banyak data yang Anda miliki dan semakin akurat model Anda mencerminkan realitas pasar, semakin baik pula hasil optimisasi harga yang akan Anda dapatkan. Selamat mencoba!
