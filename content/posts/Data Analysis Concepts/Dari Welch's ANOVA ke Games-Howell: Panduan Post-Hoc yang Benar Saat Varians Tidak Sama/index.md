+++
title= "Dari Welch's ANOVA ke Games-Howell: Panduan Post-Hoc yang Benar Saat Varians Tidak Sama"
date = 2025-09-10T18:29:14+09:00
draft = false
socialshare = true
description = "Saat Uji Levene gagal, ANOVA klasik dan Tukey HSD tidak lagi valid. Kuasai alur kerja yang benar menggunakan Welch's ANOVA dan uji post-hoc Games-Howell di Python untuk analisis yang kuat dan akurat."
image = "1.webp"
imageBig= "1.webp"
categories= ["Data Analysis Concepts"] 
tags= [ "ANOVA" ]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++

Dalam analisis data, kita sering dihadapkan pada persimpangan jalan metodologis. Anda telah menjalankan ANOVA untuk membandingkan rata-rata beberapa kelompok dan menemukan hasil yang signifikan. Namun, pemeriksaan asumsi—sebuah langkah yang membedakan analis yang cermat dari yang ceroboh—mengungkapkan masalah: Uji Levene menunjukkan p-value yang signifikan. Asumsi fundamental tentang kesamaan varians (homoskedastisitas) telah dilanggar.

Pada titik ini, banyak analis secara keliru tetap menggunakan uji post-hoc populer seperti Tukey HSD, sebuah kesalahan metodologis yang dapat menuntun pada kesimpulan yang salah. Tukey HSD, sama seperti ANOVA standar, bergantung pada asumsi varians yang sama. Jadi, apa langkah yang benar? Jawabannya terletak pada alur kerja alternatif yang lebih kuat: **Welch's ANOVA** untuk uji omnibus, diikuti oleh **Uji Games-Howell** untuk perbandingan berpasangan. Panduan ini akan membedah alur kerja tersebut secara konseptual dan teknis, mengubah data yang "berantakan" menjadi wawasan yang andal.

## Persimpangan Kritis: Homogenitas Varians

Sebelum melangkah lebih jauh, mari kita pahami mengapa asumsi ini begitu penting. ANOVA standar bekerja dengan menghitung "pooled variance," yaitu rata-rata varians dari semua kelompok yang dianalisis. Estimasi gabungan ini hanya akurat jika varians dari setiap kelompok kira-kira sama.



Ketika Anda menghadapi heteroskedastisitas (varians yang tidak sama), *pooled variance* menjadi bias. Kelompok dengan varians kecil akan terwakili secara berlebihan, dan kelompok dengan varians besar akan terwakili secara kurang. Hal ini mendistorsi statistik uji dan dapat meningkatkan risiko kesalahan Tipe I (menemukan efek yang sebenarnya tidak ada). Inilah sebabnya Uji Levene berfungsi sebagai "penjaga gerbang" yang krusial.

## Alat yang Tepat untuk Pekerjaan yang Tepat: Welch & Games-Howell

Ketika Uji Levene gagal (p-value < 0.05), kita harus beralih ke perangkat statistik yang dirancang khusus untuk kondisi varians tidak sama.

### Welch's ANOVA: Alternatif yang Kuat
Welch's ANOVA adalah varian dari ANOVA standar yang tidak mengasumsikan varians yang sama. Alih-alih menggunakan *pooled variance*, ia menimbang rata-rata setiap kelompok berdasarkan variansnya sendiri. Ini dicapai dengan menyesuaikan derajat kebebasan (*degrees of freedom*) menggunakan aproksimasi Welch-Satterthwaite, menjadikannya uji omnibus yang lebih andal dalam situasi ini.

### Uji Games-Howell: Post-Hoc yang Konsisten
Jika Welch's ANOVA menunjukkan hasil yang signifikan secara statistik, kita perlu mengetahui kelompok mana yang secara spesifik berbeda satu sama lain. Di sinilah Uji Games-Howell masuk. Anggap saja ini sebagai serangkaian t-test Welch independen yang disesuaikan untuk perbandingan ganda. Secara matematis, statistik ujinya dihitung untuk setiap pasangan kelompok $(i, j)$ sebagai berikut:

$$
q_{ij} = \frac{|\bar{x}_i - \bar{x}_j|}{\sqrt{\frac{1}{2} \left( \frac{s_i^2}{n_i} + \frac{s_j^2}{n_j} \right)}}
$$

Perhatikan bagaimana formula ini menggunakan varians ($s^2$) dan ukuran sampel ($n$) dari masing-masing kelompok secara terpisah, menghindari jebakan *pooled variance*. Nilai $q$ ini kemudian dibandingkan dengan distribusi *studentized range* dengan derajat kebebasan yang juga telah disesuaikan, memberikan kontrol yang kuat terhadap kesalahan Tipe I.

---

## Studi Kasus: Analisis Rating Aplikasi Lintas Platform

Seorang manajer produk ingin mengetahui apakah terdapat perbedaan signifikan pada skor rating (skala 1-5) aplikasi mereka di tiga platform: `iOS App Store`, `Android Play Store`, dan `Web App`. Ada hipotesis bahwa pengguna Web App cenderung lebih terpolarisasi dalam ulasan mereka, yang mengarah pada variabilitas rating yang lebih tinggi.

Mari kita simulasikan data ini di Python, dengan sengaja menciptakan varians yang lebih tinggi untuk Web App.

```python
import pandas as pd
import numpy as np
import pingouin as pg
import seaborn as sns
import matplotlib.pyplot as plt

# Memastikan hasil dapat direproduksi
np.random.seed(101)

# Parameter untuk setiap platform
n_ios, mean_ios, std_ios = 100, 4.5, 0.5
n_android, mean_android, std_android = 120, 4.3, 0.7
n_web, mean_web, std_web = 80, 4.2, 1.2 # Varians lebih tinggi secara signifikan

# Membuat data dan membatasi nilainya antara 1 dan 5
ulasan_ios = np.clip(np.random.normal(loc=mean_ios, scale=std_ios, size=n_ios), 1, 5)
ulasan_android = np.clip(np.random.normal(loc=mean_android, scale=std_android, size=n_android), 1, 5)
ulasan_web = np.clip(np.random.normal(loc=mean_web, scale=std_web, size=n_web), 1, 5)

# Menggabungkan data ke dalam satu DataFrame
df = pd.concat([
    pd.DataFrame({'platform': 'iOS', 'rating': ulasan_ios}),
    pd.DataFrame({'platform': 'Android', 'rating': ulasan_android}),
    pd.DataFrame({'platform': 'Web App', 'rating': ulasan_web})
], ignore_index=True)

# Visualisasi awal untuk melihat distribusi
sns.boxplot(x='platform', y='rating', data=df)
plt.title('Distribusi Rating Aplikasi per Platform')
plt.ylabel('Rating (1-5 Bintang)')
plt.xlabel('Platform')
plt.show()
```
Boxplot awal secara visual mengindikasikan bahwa varians (ketinggian kotak dan panjang "kumis") untuk `Web App` memang lebih besar daripada `iOS` dan `Android`.

---

## Alur Kerja Diagnostik Lengkap di Python

Sekarang, mari kita jalankan alur kerja statistik yang benar langkah demi langkah.

### Langkah 1: Uji Asumsi Homogenitas Varians
Kita memvalidasi kecurigaan visual kita dengan Uji Levene. Hipotesis nol (H0) untuk uji ini adalah bahwa semua kelompok memiliki varians yang sama.

```python
# Menjalankan Uji Levene dengan pingouin
# 'W50' adalah default dan direkomendasikan karena kekuatannya
homogeneity_test = pg.homoscedasticity(data=df, dv='rating', group='platform', method='levene')
print(f"Hasil Uji Levene:\n{homogeneity_test}\n")

# Interpretasi hasil
is_equal_variance = homogeneity_test['equal_var'].iloc[0]
p_value = homogeneity_test['pval'].iloc[0]
print(f"Apakah varians sama? {'Ya' if is_equal_variance else 'Tidak'}, p-value = {p_value:.4f}")
```
Dengan p-value yang sangat kecil (`< 0.0001`), kita menolak hipotesis nol dan menyimpulkan bahwa asumsi homogenitas varians telah dilanggar. Ini adalah sinyal tegas untuk menghindari ANOVA standar.

### Langkah 2: Jalankan Uji Omnibus yang Tepat (Welch's ANOVA)
Karena asumsi dilanggar, kita menggunakan Welch's ANOVA untuk menguji apakah ada perbedaan rata-rata *secara keseluruhan* di antara platform.

```python
# Menjalankan Welch's ANOVA dengan Pingouin
welch_anova_result = pg.welch_anova(data=df, dv='rating', between='platform')
print("--- Hasil Welch's ANOVA ---")
print(welch_anova_result)
```
Hasil Welch's ANOVA juga signifikan (p-value < 0.05), yang mengonfirmasi bahwa setidaknya ada satu platform dengan rata-rata rating yang berbeda secara signifikan. Tugas kita sekarang adalah menemukan di mana perbedaan tersebut berada.

### Langkah 3: Implementasikan Uji Post-Hoc yang Sesuai (Games-Howell)
Kita menggunakan Uji Games-Howell untuk melakukan perbandingan berpasangan. Library `pingouin` membuat langkah ini menjadi sangat sederhana.

```python
# Menjalankan Uji Games-Howell untuk perbandingan berpasangan
games_howell_result = pg.gameshowell(data=df, dv='rating', between='platform')
print("\n--- Hasil Uji Post-Hoc Games-Howell ---")
print(games_howell_result)
```

---

## Interpretasi Mendalam: Dari Statistik ke Strategi

Tabel output Games-Howell menyediakan semua yang kita butuhkan untuk membuat kesimpulan yang bernuansa. Mari kita bedah baris demi baris.

| A       | B       |   mean(A) |   mean(B) |      diff |        se |     T |      df |     pval |    conf-int |
|:--------|:--------|----------:|----------:|----------:|----------:|------:|--------:|---------:|------------:|
| Android | iOS     |     4.316 |     4.502 |    -0.186 |     0.069 | -2.69 | 196.88  |    0.021 | [-0.32, -0.05] |
| Android | Web App |     4.316 |     4.234 |     0.082 |     0.126 |  0.65 | 115.54  |    0.791 | [-0.17, 0.33] |
| iOS     | Web App |     4.502 |     4.234 |     0.268 |     0.119 |  2.25 | 105.15  |    0.071 | [-0.01, 0.54] |

1.  **Android vs. iOS:** Perbedaan rata-rata (`diff`) adalah -0.186, dengan `pval` = 0.021. Karena p-value < 0.05, perbedaan ini **signifikan secara statistik**. Rata-rata rating iOS secara signifikan lebih tinggi daripada Android. Interval kepercayaan 95% `[-0.32, -0.05]` tidak mencakup nol, yang mengonfirmasi kesimpulan ini.
2.  **Android vs. Web App:** Perbedaan rata-rata sangat kecil (0.082) dan `pval` = 0.791. Perbedaan ini **tidak signifikan secara statistik**.
3.  **iOS vs. Web App:** Ini adalah kasus yang menarik. Perbedaan rata-ratanya cukup besar (0.268), tetapi p-value-nya adalah 0.071. Dengan ambang batas umum $\alpha = 0.05$, perbedaan ini **tidak signifikan secara statistik**. Varians yang sangat tinggi pada Web App membuat perbedaan rata-rata ini tidak cukup kuat untuk dianggap signifikan. *Ini adalah wawasan kunci yang mungkin terlewatkan jika hanya membandingkan rata-rata secara naif.*

Wawasan ini dapat diterjemahkan menjadi rekomendasi bisnis yang tajam:
* **Keunggulan iOS Terbukti:** Tim pemasaran dapat dengan percaya diri mengklaim rating yang lebih tinggi di App Store sebagai keunggulan kompetitif.
* **Fokus pada Polarisasi Web App:** Hasil yang "tidak signifikan" antara iOS dan Web App, meskipun rata-ratanya berbeda, adalah sinyal kuat. Ini bukan berarti Web App baik-baik saja; ini berarti pengalamannya tidak konsisten. Tim produk harus segera menyelidiki polarisasi pengguna di platform web—apa yang membuat sebagian pengguna sangat menyukainya dan sebagian lain sangat tidak menyukainya?
* **Prioritas Alokasi Sumber Daya:** Alih-alih melakukan perombakan besar-besaran pada platform Android yang kinerjanya solid, sumber daya pengembangan harus difokuskan untuk menstabilkan dan meningkatkan pengalaman pengguna di Web App.

## Peta Jalan Diagnostik Anda

Untuk menyederhanakan proses pengambilan keputusan di masa depan, gunakan diagram alur ini sebagai panduan Anda.

{{< mermaid >}}
flowchart TD
    %% Mendefinisikan kelas gaya yang konsisten
    classDef process fill:#4A5568,stroke:#A0AEC0,stroke-width:2px,color:#fff;
    classDef decision fill:#674188,stroke:#C3ACD0,stroke-width:2px,color:#fff;
    classDef success fill:#28a745,stroke:#28a745,stroke-width:2px,color:#fff;
    classDef recommendation fill:#d1ecf1,stroke:#bee5eb,stroke-width:2px,color:#0c5460;
    %% Mendefinisikan node/titik dalam flowchart
    A["Mulai: Membandingkan rata-rata<br/>>2 kelompok"]:::process;
    B{"Uji Asumsi Homogenitas Varians<br/>(Uji Levene)"}:::decision;
    C["Jalankan ANOVA Standar"]:::recommendation;
    D{"Hasil ANOVA Signifikan?"}:::decision;
    E["Lakukan Uji Post-Hoc<br/>Tukey HSD"]:::recommendation;
    F["Selesai: Tidak ada perbedaan<br/>signifikan antar kelompok"]:::success;
    G["Jalankan Welch's ANOVA"]:::recommendation;
    H{"Hasil Welch's ANOVA Signifikan?"}:::decision;
    I["Lakukan Uji Post-Hoc<br/>Games-Howell"]:::recommendation;
    J["✅ Interpretasi Hasil &<br/>Rekomendasi Bisnis"]:::success;
    %% Menghubungkan semua node
    A --> B;
    B -- "P-value > 0.05 ✅<br/>Asumsi Terpenuhi" --> C;
    C --> D;
    D -- "Ya (p < 0.05)" --> E;
    D -- "Tidak (p >= 0.05)" --> F;
    B -- "P-value < 0.05 ❌<br/>Asumsi Dilanggar" --> G;
    G --> H;
    H -- "Ya (p < 0.05)" --> I;
    H -- "Tidak (p >= 0.05)" --> F;
    E --> J;
    I --> J;
{{< /mermaid >}}

## Kesimpulan

Mengetahui alat statistik yang tepat untuk digunakan adalah hal yang penting, tetapi memahami *mengapa* dan *kapan* menggunakannya adalah hal yang membedakan analisis data yang baik dari yang hebat. Ketika berhadapan dengan data dunia nyata yang seringkali tidak memenuhi asumsi ideal, beralih dari ANOVA/Tukey ke Welch/Games-Howell bukanlah sekadar pilihan teknis—ini adalah komitmen terhadap ketelitian metodologis. Dengan mengikuti alur kerja diagnostik ini, Anda memastikan bahwa kesimpulan yang Anda berikan tidak hanya didukung oleh data, tetapi juga diperkuat oleh fondasi statistik yang kokoh dan dapat dipertanggungjawabkan.


## Penyelusuran Terkait

<ul>
  <li><a href="https://www.statology.org/levenes-test-python/">How to Perform Levene’s Test in Python — Statology</a></li>
  <li><a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.shapiro.html">Shapiro–Wilk test (implementation) — SciPy docs</a></li>
  <li><a href="https://www.statsmodels.org/dev/generated/statsmodels.graphics.gofplots.qqplot.html">statsmodels.graphics.gofplots.qqplot — Statsmodels docs</a></li>
  <li><a href="https://statisticsbyjim.com/anova/welchs-anova-compared-to-classic-one-way-anova/">Welch’s ANOVA Compared to the Classic ANOVA — StatisticsByJim</a></li>
  <li><a href="https://pingouin-stats.org/build/html/generated/pingouin.welch_anova.html">pingouin.welch_anova — Pingouin docs</a></li>
  <li><a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.kruskal.html">Kruskal–Wallis test (implementation) — SciPy docs</a></li>
  <li><a href="https://www.jmp.com/en/statistics-knowledge-portal/what-is-regression/simple-linear-regression-assumptions">Assumptions of Linear Regression — JMP</a></li>
  <li><a href="https://www.investopedia.com/terms/h/heteroskedasticity.asp">Heteroskedasticity: What It Is, How It Occurs, Examples — Investopedia</a></li>
</ul>
