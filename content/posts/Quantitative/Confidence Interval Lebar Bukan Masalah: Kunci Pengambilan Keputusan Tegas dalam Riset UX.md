+++
title= "Confidence Interval Lebar Bukan Masalah: Kunci Pengambilan Keputusan Tegas dalam Riset UX"
date = 2025-06-23T00:37:00+00:00
draft = false
socialshare = true
description = ""
image = "/images/Quantitative/Confidence_Interval_Lebar_Bukan_Masalah:_Kunci_Pengambilan_Keputusan_Tegas_dalam_Riset_UX/1.webp"
imageBig= "/images/Quantitative/Confidence_Interval_Lebar_Bukan_Masalah:_Kunci_Pengambilan_Keputusan_Tegas_dalam_Riset_UX/1.webp"
categories= ["Quantitative"] 
tags=  [ "Confidence Interval", "Riset UX", "Analisis Statistik", "Pengambilan Keputusan", "Benchmark" ]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++



<div style="background-color:#f9f9f9; border: 1px solid #d3d3d3; padding: 15px; font-family: Arial, sans-serif;margin-bottom: 20px;">
  <p style="font-style: italic;">"Jawaban yang mendekati untuk pertanyaan yang tepat jauh lebih berharga daripada jawaban yang tepat untuk pertanyaan yang salah."</p>
  <p style="text-align: right; font-size: 0.9em; margin-top: 10px; color: #555;">- John Tukey, <span style="font-weight: bold;">Exploratory Data Analysis</span></p>
</div>

Dalam dunia riset UX, kita sering dihadapkan pada keterbatasan: sampel kecil, waktu yang sempit, dan tekanan untuk memberikan rekomendasi yang meyakinkan. Salah satu alat statistik yang paling sering disalahpahami dalam konteks ini adalah confidence interval (CI). Ketika dihadapkan pada CI 95% yang membentang 40 atau 50 poin persentase, reaksi pertama banyak periset adalah berkecil hati. Interval yang "lebar" terasa tidak meyakinkan, seolah-olah data kita hanya berteriak, "Saya tidak tahu!"

Namun, pandangan ini mengabaikan kekuatan sesungguhnya dari CI. Kekuatannya bukan terletak pada presisi lebarnya, melainkan pada di mana batas-batasnya berlabuh relatif terhadap tujuan yang penting. Artikel ini akan membongkar cara memandang CI bukan sebagai ukuran ketidakpastian yang melumpuhkan, tetapi sebagai alat navigasi yang tajam untuk pengambilan keputusan yang tegas.

Analogi Inti: Navigasi GPS di Dalam Taman Kota
Bayangkan Anda sedang mencoba menemukan sebuah kafe di dalam taman kota yang luas menggunakan GPS di ponsel Anda. Tujuan (benchmark) Anda adalah "berada di dalam area kafe". Saat Anda tiba di lokasi, GPS tidak menunjukkan satu titik tunggal. Sebaliknya, ia menampilkan sebuah lingkaran biru yang berdenyut di sekitar posisi Anda. Lingkaran ini adalah confidence interval Anda—rentang lokasi plausibel di mana Anda sebenarnya berada.

Sekarang, ada dua skenario:

1.  **Lingkaran Biru Lebar, Keputusan Jelas:** Anggap saja sinyal GPS Anda lemah, sehingga lingkaran biru itu cukup besar. Namun, jika seluruh lingkaran biru itu sudah berada di dalam batas-batas area kafe, apakah Anda masih ragu? Tentu tidak. Anda bisa 100% yakin telah mencapai tujuan. Lebarnya lingkaran menjadi tidak relevan; yang penting adalah batas terluarnya sudah melewati gerbang kafe.
2.  **Lingkaran Biru Sempit, Keputusan Tidak Jelas:** Bayangkan sinyal Anda sangat kuat dan lingkaran biru itu sangat kecil. Namun, jika lingkaran itu berada tepat di perbatasan, separuh di dalam area kafe dan separuh di luar, Anda tidak bisa yakin. Meskipun lebih presisi, posisinya yang ambigu membuat keputusan menjadi sulit.

Inilah inti dari penggunaan CI untuk pengujian benchmark: pertanyaan kuncinya bukanlah "Seberapa lebar jangkauan data saya?", melainkan "Apakah seluruh jangkauan plausibel dari data saya telah melampaui ambang batas keberhasilan?"

## Menetapkan Benchmark yang Bermakna

Sebuah benchmark tidak boleh muncul dari angan-angan. Menetapkan tujuan seperti "tingkat keberhasilan harus 80%" tanpa konteks adalah resep untuk kegagalan. Di sinilah kerangka kerja konseptual menjadi sangat penting. Salah satu yang paling relevan untuk UX adalah Kerangka HEART yang dikembangkan oleh Google. HEART adalah akronim untuk:

* **Happiness**: Kepuasan pengguna, sering diukur dengan survei (misalnya, SUS, CSAT).
* **Engagement**: Tingkat keterlibatan pengguna (misalnya, frekuensi kunjungan, jumlah foto yang diunggah per sesi).
* **Adoption**: Jumlah pengguna baru yang memakai fitur atau produk.
* **Retention**: Persentase pengguna yang kembali dari waktu ke waktu.
* **Task Success**: Metrik efisiensi dan efektivitas (misalnya, tingkat penyelesaian tugas, waktu pengerjaan, tingkat eror).

Dengan menggunakan HEART, tim dapat mendefinisikan benchmark yang lebih holistik. Alih-alih hanya menargetkan Task Success, kita bisa menetapkan tujuan seperti: "Peluncuran fitur baru harus mencapai tingkat Adoption 25% pada bulan pertama, dengan skor Happiness (CSAT) tidak lebih rendah dari 4.0/5.0." Tujuan ini jauh lebih kaya dan berakar pada pengalaman pengguna yang nyata.

<div style="background-color:#f9f9f9; border: 1px solid #d3d3d3; padding: 15px; font-family: Arial, sans-serif;margin-bottom: 20px;">
  <p style="font-style: italic;">"Sinyal adalah kebenaran. Kebisingan adalah apa yang mengalihkan kita dari kebenaran."</p>
  <p style="text-align: right; font-size: 0.9em; margin-top: 10px; color: #555;">- Nate Silver, <span style="font-weight: bold;">The Signal and the Noise</span></p>
</div>

Dalam analisis kita, posisi batas CI relatif terhadap benchmark adalah sinyalnya. Lebar interval seringkali hanyalah kebisingan yang mengganggu.

## Contoh Kasus
### Tragedi Desain Ulang Digg v4

<div class="single-image-source">
  <img src="/images/Quantitative/Confidence_Interval_Lebar_Bukan_Masalah:_Kunci_Pengambilan_Keputusan_Tegas_dalam_Riset_UX/3.webp" alt="Trik Praktis Uji Hipotesis Satu Arah" style="height:80%;width:80%;display:block;margin-left:auto;margin-right:auto;"><p style="font-size: 16px; color: #888; margin-top:-15px; text-align: center;">Digg v4 from Google Search
</p>
</div>

Pada tahun 2010, situs agregator berita populer <a href="https://techcrunch.com/2010/08/30/broken-is-repaired/">Digg meluncurkan versi keempat (v4) dari platformnya</a>, yang bukan sekadar desain ulang, melainkan penulisan ulang total dari sisi desain, kode, arsitektur, hingga infrastruktur. Peluncuran ini dilakukan dengan tujuan modernisasi dan skalabilitas jangka panjang, namun terjadi dengan mengorbankan banyak fitur inti yang dihargai oleh pengguna setia. Hasilnya, v4 memicu gelombang protes besar dari komunitas pengguna — disebut sebagai revolusi pengguna kelima — karena perubahan tersebut mengalihkan kontrol konten dari komunitas ke penerbit besar, serta menghapus fitur-fitur kunci yang telah menjadi ciri khas Digg v3.

Para mantan insinyur, seperti Ian Eure, mencatat bahwa sekalipun manajemen ingin kembali ke versi lama, mereka tidak lagi memiliki tim teknis yang memahami sistem v3 karena sebagian besar staf utama telah meninggalkan perusahaan. Akibatnya, lalu lintas situs mengalami penurunan drastis dalam waktu singkat, dengan laporan yang menyebutkan penurunan lebih dari 25%.

Seandainya Digg menerapkan pengujian terbatas dengan pengukuran metrik seperti engagement (misalnya jumlah "diggs" per pengguna per hari) atau user happiness (skor kepuasan), mereka mungkin akan melihat bahwa interval kepercayaan dari metrik tersebut jauh berada di bawah performa versi sebelumnya. Bahkan jika interval tersebut lebar, hasilnya tetap akan memberikan sinyal bahaya dini bahwa basis pengguna inti berisiko besar untuk ditinggalkan.


### Kultur Eksperimen di Booking.com

<div class="single-image-source">
  <img src="/images/Quantitative/Jangan_Terjebak_Angka_Tunggal__Kekuatan_Confidence_Interval_dalam_Riset_UX/3.webp" alt="Tennis dan Basket" style="height:80%;width:80%;display:block;margin-left:auto;margin-right:auto;">
  <p style="font-size: 16px; color: #888; margin-top:-15px; text-align: center;"> Booking.com Logo from Jas Rolyn in<a href="https://unsplash.com/photos/a-sign-on-the-side-of-a-building-that-says-bookking-com-7BqK0rCPO5k"> Unsplash</a></p>
</div>


Booking.com terkenal dengan budaya eksperimen online yang sangat intensif, menjalankan lebih dari seribu A/B test secara bersamaan pada waktu tertentu. Setiap perubahan, bahkan yang tampak kecil — seperti mengubah teks tombol atau urutan hasil pencarian — tidak akan diterapkan tanpa melalui eksperimen. Dalam setiap A/B test, versi saat ini dari desain (kontrol) dijadikan benchmark, sementara versi baru (perlakuan) hanya akan diterapkan ke semua pengguna jika menunjukkan peningkatan yang signifikan secara statistik terhadap metrik kunci seperti tingkat konversi dari pencarian ke pemesanan.

Salah satu prinsip utama dalam pengambilan keputusan mereka adalah <a href="https://hbr.org/2017/09/the-surprising-power-of-online-experiments">penggunaan *confidence interval* (CI)</a>. Secara khusus, mereka memperhatikan apakah batas bawah dari CI 95% dari selisih konversi antara perlakuan dan kontrol berada di atas nol. Jika ya, artinya dengan 95% keyakinan, versi baru akan tetap lebih baik daripada yang lama — bahkan dalam skenario terburuknya. Mereka tidak terlalu peduli seberapa besar peningkatannya secara absolut, apakah 0,1% atau 5%, selama bukti statistik menunjukkan bahwa peningkatan itu nyata. Pendekatan ini mencerminkan penerapan prinsip benchmark yang sangat disiplin dan berbasis data dalam pengembangan produk.



## Trik Praktis Uji Hipotesis Satu Arah

<div class="single-image-source">
  <img src="/images/Quantitative/Confidence_Interval_Lebar_Bukan_Masalah:_Kunci_Pengambilan_Keputusan_Tegas_dalam_Riset_UX/2.webp" alt="Trik Praktis Uji Hipotesis Satu Arah" style="height:80%;width:80%;display:block;margin-left:auto;margin-right:auto;"><p style="font-size: 16px; color: #888; margin-top:-15px; text-align: center;">Confidence Interval and two tail vs one tail from Abhishek Jain in <a href="https://medium.com/@abhishekjainindore24/insights-about-significance-level-and-confidence-level-confidence-interval-and-two-tail-vs-one-40c1646c6a23 ">Medium.com</a>
</p>
</div>

Saat membandingkan hasil dengan benchmark, kita biasanya tidak peduli jika hasilnya hanya "berbeda". Kita peduli jika hasilnya *lebih baik dari* atau *lebih buruk dari* target. Ini disebut uji satu arah (one-tailed test). Ada cara mudah untuk melakukannya dengan CI standar:

> Untuk melakukan uji satu arah dengan tingkat signifikansi 5% (keyakinan 95%), hitunglah CI 90%.

Mengapa? CI 95% standar menyisakan 2.5% kemungkinan kesalahan di setiap ujung (total 5%). Untuk uji satu arah, kita memindahkan semua 5% risiko kesalahan ke satu sisi saja. Dengan menghitung CI 90%, kita menyisakan 5% di batas bawah dan 5% di batas atas. Kita kemudian hanya perlu melihat satu batas yang relevan dengan pertanyaan kita.

* **Pertanyaan**: "Apakah tingkat keberhasilan kita secara signifikan di atas 80%?"
* **Metode**: Hitung CI 90%. Periksa apakah batas bawahnya di atas 80%.
* **Pertanyaan**: "Apakah waktu tugas kita secara signifikan di bawah 60 detik?"
* **Metode**: Hitung CI 90%. Periksa apakah batas atasnya di bawah 60 detik.

## Membedah Contoh Kasus Praktis
**Konteks**: Tim UX di sebuah aplikasi fintech ingin mengurangi waktu rata-rata yang dibutuhkan pengguna untuk menyelesaikan proses pendaftaran (onboarding). Berdasarkan data kompetitor dan tujuan bisnis, tim menetapkan benchmark: "Waktu onboarding rata-rata harus di bawah 180 detik secara signifikan."

Tim melakukan usability test dengan 12 pengguna baru dan mendapatkan hasil berikut:

* Waktu rata-rata sampel ($\bar{x}$) = 165 detik
* Standar deviasi sampel ($s$) = 25 detik

**Pertanyaan**: Dengan tingkat keyakinan 95%, dapatkah tim menyimpulkan bahwa mereka telah mencapai benchmark (waktu rata-rata populasi, $\mu$, di bawah 180 detik)?

### Langkah-langkah Pengerjaan Manual

1.  **Identifikasi Hipotesis**: Ini adalah uji satu arah (one-tailed test), karena kita hanya peduli jika waktunya lebih rendah dari benchmark.
    * $H_0: \mu \ge 180$ (Waktu rata-rata sama dengan atau lebih buruk dari benchmark)
    * $H_1: \mu < 180$ (Waktu rata-rata secara signifikan lebih baik dari benchmark)

2.  **Pilih Metode**: Karena kita ingin melakukan uji satu arah dengan keyakinan 95% ($\alpha=0.05$), kita akan menghitung CI 90% dan memeriksa batas atasnya.

3.  **Hitung Standard Error (SE)**:
    <div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;"><p>
    $$SE = \frac{s}{\sqrt{n}} = \frac{25}{\sqrt{12}} \approx 7.217$$</p></div>

4.  **Tentukan Nilai t-kritis**:
    * Tingkat kepercayaan = 90%
    * Derajat kebebasan ($df$) = $n-1 = 12-1 = 11$
    * Menggunakan tabel t-distribusi atau kalkulator online untuk $df=11$ dan $\alpha=0.10$ (dua arah), nilai t-kritisnya adalah 1.796.

5.  **Hitung Margin of Error (ME)**:
  <div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;"><p>
    $$ME = t \times SE = 1.796 \times 7.217 \approx 12.96$$</p></div>

6.  **Hitung *confidence interval* 90%**:
    <div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;"><p>
    $$CI = \bar{x} \pm ME = 165 \pm 12.96$$</p></div>
    
    * Batas Bawah = $165 - 12.96 = 152.04$
    * Batas Atas = $165 + 12.96 = 177.96$
    * Rentang CI 90% adalah (152.04 detik, 177.96 detik).

7.  **Ambil Keputusan**:
    Pertanyaan kita adalah: "Apakah batas atas CI di bawah benchmark 180 detik?"
    * Batas atas CI adalah 177.96 detik.
    * $177.96 < 180$.
    * **Kesimpulan**: Ya. Karena seluruh rentang CI 90% berada di bawah benchmark 180 detik, kita dapat dengan 95% yakin menyimpulkan bahwa waktu onboarding rata-rata yang sebenarnya di populasi pengguna memang lebih rendah dari 180 detik. Tim telah berhasil mencapai tujuannya.

---

### Otomatisasi Perhitungan dengan Python

Untuk mempermudah dan mempercepat analisis serupa di masa depan, kita dapat mengotomatiskan langkah-langkah di atas menggunakan Python dengan *library* `scipy` dan `numpy`.

```python
import numpy as np
from scipy import stats

# --- Variabel yang Perlu Diisi ---
# Masukkan data berdasarkan studi kasus Anda
jumlah_sampel = 12
rata_rata_sampel = 165
standar_deviasi_sampel = 25
benchmark = 180
tingkat_keyakinan_satu_arah = 0.95

# --- Fungsi Perhitungan Statistik ---

def hitung_standard_error(standar_deviasi, n):
  """Menghitung Standard Error (SE) dari sampel."""
  return standar_deviasi / np.sqrt(n)

def hitung_margin_of_error(n, se):
  """Menghitung Margin of Error (ME) untuk CI 90%"""
  derajat_kebebasan = n - 1
  t_kritis = stats.t.ppf(0.95, df=derajat_kebebasan)  # 90% CI → alpha dua sisi = 0.10 → alpha/2 = 0.05
  return t_kritis * se

def hitung_confidence_interval(rata_rata, margin_of_error):
  """Menghitung rentang Confidence Interval (CI)."""
  batas_bawah = rata_rata - margin_of_error
  batas_atas = rata_rata + margin_of_error
  return (batas_bawah, batas_atas)

# --- Proses Kalkulasi ---

# 1. Menghitung Standard Error
se = hitung_standard_error(standar_deviasi_sampel, jumlah_sampel)

# 2. Menghitung Margin of Error
# Tingkat keyakinan untuk CI disesuaikan menjadi 90% untuk uji satu arah 95%
tingkat_keyakinan_ci = 1 - ((1 - tingkat_keyakinan_satu_arah) * 2) # Ini akan menjadi 0.90
me = hitung_margin_of_error(jumlah_sampel, se, tingkat_keyakinan_satu_arah)

# 3. Menghitung Confidence Interval 90%
ci = hitung_confidence_interval(rata_rata_sampel, me)
batas_atas_ci = ci[1]

# --- Menampilkan Hasil ---

print(f"--- Hasil Perhitungan Statistik ---")
print(f"Standard Error (SE): {se:.3f}")
print(f"Margin of Error (ME): {me:.2f}")
print(f"Rentang Confidence Interval 90%: ({ci[0]:.2f}, {ci[1]:.2f})")
print(f"Benchmark yang Ditetapkan: {benchmark} detik")
print("-" * 35)


# --- Fungsi Pengecekan Terhadap Benchmark ---

def cek_benchmark(batas_atas_ci, benchmark_value):
  """Membandingkan batas atas CI dengan benchmark untuk mengambil keputusan."""
  if batas_atas_ci < benchmark_value:
    print(f"Keputusan: Berhasil! Batas atas CI ({batas_atas_ci:.2f}) secara signifikan di bawah benchmark ({benchmark_value}).")
  else:
    print(f"Keputusan: Belum Berhasil. Batas atas CI ({batas_atas_ci:.2f}) tidak berada di bawah benchmark ({benchmark_value}).")

# Menjalankan fungsi pengecekan
cek_benchmark(batas_atas_ci, benchmark)
```

``` Output
--- Hasil Perhitungan Statistik ---
Standard Error (SE): 7.217
Margin of Error (ME): 12.96
Rentang Confidence Interval 90%: (152.04, 177.96)
Benchmark yang Ditetapkan: 180 detik
-----------------------------------
Keputusan: Berhasil! Batas atas CI (177.96) secara signifikan di bawah benchmark (180).
```

<div style="background-color:#f9f9f9; border: 1px solid #d3d3d3; padding: 15px; font-family: Arial, sans-serif;margin-bottom: 20px;">
  <p style="font-style: italic;">"Adalah keliru untuk berasumsi bahwa jika Anda tidak dapat mengukurnya, Anda tidak dapat mengelolanya – sebuah mitos yang mahal."</p>
  <p style="text-align: right; font-size: 0.9em; margin-top: 10px; color: #555;">- W. Edwards Deming, <span style="font-weight: bold;">Prinsip Manajemen Kualitas</span></p>
</div>

## Kesimpulan
*Confidence Interval* dari sampel kecil memang seringkali lebar, tetapi itu bukanlah kelemahan; itu adalah representasi jujur dari ketidakpastian. Tugas kita sebagai periset bukan untuk menghilangkan ketidakpastian, tetapi untuk membuat keputusan cerdas di tengahnya. Dengan memfokuskan perhatian kita dari lebar interval ke posisi batas-batasnya relatif terhadap benchmark yang bermakna, kita dapat mengubah data yang tampaknya ambigu menjadi bukti yang kuat dan dapat ditindaklanjuti. Jadi, lain kali Anda melihat CI yang lebar, jangan panik. Tanyakan: "Di mana letak batasnya, dan apa artinya itu untuk tujuan kita?"

Jelajahi lebih banyak artikel dan teknik analisis di kategori <a href="http://localhost:1313/categories/quantitative/">Quantitative</a> kami.

## Referensi
<p style="text-indent:0px;">Tukey, J. W. (1977). Exploratory Data Analysis. <a href="https://books.google.co.id/books/about/Exploratory_Data_Analysis.html?id=g-4EAQAAIAAJ&redir_esc=y">Addison-Wesley</a></p>
<p style="text-indent:0px;">Silver, N. (2012). The Signal and the Noise: Why So Many Predictions Fail-but Some Don't. <a href="https://books.google.co.id/books/about/The_Signal_and_the_Noise.html?id=h3aVvhtUP2EC&redir_esc=y">Penguin Press</a></p>

## Penelusuran Terkait

<ul>
<li><a href="https://www.nngroup.com/articles/confidence-interval/">Confidence Intervals, Margins of Error, and Confidence Levels in UX</a></li>
<li><a href="https://www.scribd.com/document/736032819/a-practical-guide-for-understanding-confidence-intervals-and-p-values">A Practical Guide For Understanding Confidence Intervals and P Values</a></li>
<li><a href="https://www.usertesting.com/blog/confidence-intervals">What are confidence intervals and why do we need them?</a></li>
<li><a href="https://vkteam.medium.com/practitioners-guide-to-statistical-tests-ed2d580ef04f">Practitioner’s Guide to Statistical Tests</a></li>
<li><a href="https://survicate.com/blog/survey-sample-size/">How To Determine Survey Sample Size: A Short Guide</a></li>
<li><a href="https://medium.com/@Joleeee/common-statistics-in-ux-research-10bee1ec2f3f">Common Statistics in UX Research</a></li>
<li><a href="https://cxl.com/blog/confidence-intervals/">Confidence Intervals: What Are They? How Do You Calculate Them?</a></li>
<li><a href="https://cxl.com/blog/ab-testing-statistics/">A/B Testing Statistics: An Easy-to-Understand Guide</a></li>
</ul>