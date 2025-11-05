+++
title= "Melampaui Rata-Rata: Panduan Praktis Regresi Kuantil untuk Manajemen Risiko dan Pengambilan Keputusan"
date = 2025-09-10T21:29:14+09:00
draft = true
socialshare = true
description = "Berhenti membuat keputusan bisnis berdasarkan rata-rata yang menyesatkan. Kuasai Regresi Kuantil di Python untuk memodelkan skenario terbaik dan terburuk, mengelola risiko secara cerdas, dan membangun strategi yang kokoh."
image = "1.webp"
imageBig= "1.webp"
categories= ["Data Analysis Concepts"] 
tags= [ "ANCOVA" ]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++




Seringkali dalam analisis, kita melihat perusahaan yang mengumumkan waktu pengiriman "rata-rata" 3 hari. Namun, jika kita melihat media sosialnya, banyak keluhan tentang paket yang baru tiba 10 hari kemudian. Contoh lain, dalam data keuangan, mungkin dilaporkan kerugian portofolio "rata-rata" yang terlihat kecil, namun data tersebut hampir mengabaikan beberapa hari di mana terjadi kerugian ekstrem yang sangat berdampak.

Apa benang merah dari dua contoh ini? Kita mungkin telah dilatih untuk terlalu fokus pada rata-rata (mean). Metrik ini, meskipun berguna, sering kali menyembunyikan risiko dan realitas sebenarnya yang ada di ujung spektrum distribusi data.

Dalam banyak kasus di dunia nyata, dampak atau outcome jarang sekali simetris. Keterlambatan satu pengiriman bisa jadi jauh lebih merugikan daripada manfaat dari pengiriman yang tiba satu hari lebih awal. Dalam konteks finansial, kerugian ekstrem (di ujung distribusi) jauh lebih penting untuk dipahami daripada sekadar keuntungan rata-rata.

Artikel ini akan mengenalkan kita pada alat statistik yang lebih tajam: Regresi Kuantil. Alih-alih hanya memodelkan hasil rata-rata, kita akan belajar cara memodelkan berbagai skenario—misalnya, skenario kasus terburuk (persentil ke-95), nilai tengah (median atau persentil ke-50), dan skenario lainnya. Ini akan memberi kita pemahaman untuk mengelola risiko secara proaktif dan membuat keputusan yang benar-benar berdasarkan data di dunia yang kenyataannya jarang sekali berjalan "rata-rata".

---

## Apa Sebenarnya Regresi Kuantil?

### Intuisi Visual: Menggambar Garis Melalui Persentil

Regresi linier standar, atau *Ordinary Least Squares* (OLS), bertujuan untuk menemukan satu garis yang paling pas melalui **pusat massa (rata-rata)** dari data kita. Metode ini sangat baik dalam meringkas tren sentral. Namun, Regresi Kuantil jauh lebih fleksibel. Ia dapat menemukan garis yang paling pas melalui **persentil mana pun** dari data kita.

Bayangkan kita dapat meminta model:
* "Tunjukkan hubungan antara fitur dan hasil untuk 10% pelanggan dengan performa terendah." (kuantil ke-10)
* "Tunjukkan hubungan untuk pelanggan tipikal atau median." (kuantil ke-50)
* "Tunjukkan batas atas di mana 90% dari hasil saya akan berada di bawahnya." (kuantil ke-90)

Visualisasi adalah cara terbaik untuk memahaminya. Mari kita buat beberapa data dan bandingkan garis OLS (rata-rata) dengan beberapa garis Regresi Kuantil.



```python
import numpy as np
import pandas as pd
import statsmodels.formula.api as smf
import matplotlib.pyplot as plt

# Reproducibility
np.random.seed(42)

# Buat data dengan hubungan yang tidak seragam (heteroskedastisitas)
# Efek dari 'x' akan lebih besar untuk nilai 'y' yang lebih tinggi
x = np.linspace(1, 100, 200)
error = np.random.normal(0, 0.1 * x, 200) # Error meningkat seiring dengan x
y = 1.5 * x + 5 + error
df = pd.DataFrame({'x': x, 'y': y})

# 1. Model OLS (rata-rata) sebagai baseline
model_ols = smf.ols('y ~ x', data=df).fit()

# 2. Model Regresi Kuantil untuk beberapa kuantil
quantiles = [0.1, 0.5, 0.9]
models_qr = [smf.quantreg('y ~ x', data=df).fit(q=q) for q in quantiles]

# 3. Visualisasi
plt.figure(figsize=(12, 8))
plt.scatter(df['x'], df['y'], alpha=0.5, label='Data Aktual')
plt.plot(df['x'], model_ols.predict(df), color='red', linestyle='-', linewidth=2, label='OLS (Rata-rata)')
for model, q in zip(models_qr, quantiles):
    plt.plot(df['x'], model.predict(df), linestyle='--', label=f'Regresi Kuantil (q={q})')

plt.title('Perbandingan OLS vs. Regresi Kuantil', fontsize=16)
plt.xlabel('Variabel Independen (x)', fontsize=12)
plt.ylabel('Variabel Dependen (y)', fontsize=12)
plt.legend()
plt.grid(True, which='both', linestyle='--', linewidth=0.5)
plt.show()
```
Dalam plot di atas, garis OLS merah menangkap tren rata-rata secara keseluruhan. Namun, perhatikan bagaimana garis putus-putus Regresi Kuantil menceritakan kisah yang lebih kaya. Garis `q=0.9` memiliki kemiringan yang lebih curam, menunjukkan bahwa peningkatan `x` memiliki efek yang jauh lebih besar pada hasil di persentil atas. Inilah wawasan yang akan hilang jika kita hanya berfokus pada rata-rata.

### Mesin di Balik Layar: The Check Function

Bagaimana ini bekerja? OLS meminimalkan jumlah *kuadrat* error, yang secara inheren memberikan bobot besar pada outlier dan menarik garis ke arah rata-rata. Sebaliknya, Regresi Kuantil meminimalkan jumlah *absolut* error yang diberi bobot secara asimetris. Proses ini diatur oleh sebuah formula yang disebut *check function*.

$$
\min_{\beta \in \mathbb{R}^p} \sum_{i=1}^{n} \rho_q(y_i - x_i^T\beta)
$$

Secara intuitif, bayangkan `ρq` sebagai "penalti yang miring".
* Untuk kuantil rendah (misalnya, `q=0.1`), ia memberi penalti lebih besar pada titik data yang berada *di atas* garis prediksi, sehingga "menarik" garis ke bawah.
* Untuk kuantil tinggi (misalnya, `q=0.9`), ia memberi penalti lebih besar pada titik data yang berada *di bawah* garis prediksi, sehingga "menarik" garis ke atas.
* Untuk median (`q=0.5`), penaltinya simetris, menjadikannya robust terhadap outlier.

Keunggulan teknisnya adalah kita tidak memerlukan asumsi distribusi normal pada residu, yang sering kali dilanggar dalam data dunia nyata.

---

## Studi Kasus Lintas Industri: Dari Teori ke Dampak Bisnis

Mari kita terapkan konsep ini pada masalah bisnis yang nyata.

### Kasus 1: FinTech — Mengukur Risiko dengan Value at Risk (VaR)

**Masalah Bisnis:** Sebuah perusahaan investasi perlu mengestimasi potensi kerugian maksimum pada portofolio mereka dalam kondisi pasar yang bergejolak. Memprediksi kerugian *rata-rata* tidak berguna; mereka perlu memahami skenario terburuk untuk memenuhi persyaratan modal.

**Solusi dengan Regresi Kuantil:** Kita akan memodelkan kerugian harian (`daily_loss`) sebagai fungsi dari volatilitas pasar (`market_volatility`). Alih-alih memodelkan rata-rata, kita menargetkan **kuantil ke-95 (`q=0.95`)**, yang secara efektif merupakan model untuk *Value at Risk* (VaR).

```python
# Skenario data untuk FinTech
np.random.seed(42)
n_days = 252
market_volatility = np.random.uniform(1, 5, n_days)
# Mensimulasikan kerugian dengan distribusi yang condong ke kanan (right-skewed)
daily_loss = market_volatility * 0.5 + np.random.gamma(2, 0.5, n_days)
df_finance = pd.DataFrame({'daily_loss': daily_loss, 'market_volatility': market_volatility})

# Memodelkan kerugian maksimum persentil ke-95
model_var = smf.quantreg('daily_loss ~ market_volatility', data=df_finance).fit(q=0.95)
print(model_var.summary())
```

```Output
=====================================================================================
                        coef    std err          t      P>|t|      [0.025      0.975]
-------------------------------------------------------------------------------------
Intercept             1.5583      0.219      7.127      0.000       1.127       1.989
market_volatility     0.5943      0.071      8.381      0.000       0.455       0.734
=====================================================================================
```
**Interpretasi & Tindakan:**
* **Koefisien `market_volatility` (0.5943):** Ini adalah angka yang paling penting. Ini berarti untuk setiap **peningkatan 1 poin** dalam indeks volatilitas pasar, **batas atas kerugian harian kita (di tingkat kepercayaan 95%) diperkirakan meningkat sebesar $0.59 juta** (dengan asumsi unit dalam jutaan).
* **Aksi Bisnis:** Tim manajemen risiko sekarang memiliki model dinamis. Jika indeks volatilitas pasar besok diperkirakan mencapai 5.0, mereka dapat memprediksi VaR sebesar `1.5583 + (0.5943 * 5.0) ≈ $4.53 juta`. Angka ini memberikan dasar kuantitatif untuk menyesuaikan cadangan modal dan batas eksposur risiko.

### Kasus 2: E-commerce — Menetapkan Janji Pengiriman (SLA) yang Realistis

**Masalah Bisnis:** Perusahaan kita menjanjikan "pengiriman 3 hari", tetapi janji ini sering kali meleset untuk pengiriman jarak jauh, yang menyebabkan pelanggan tidak puas. Janji yang sama untuk semua orang tidak efektif.

**Solusi dengan Regresi Kuantil:** Tim logistik memodelkan waktu pengiriman (`delivery_time`) sebagai fungsi dari jarak (`distance`). Mereka memodelkan **kuantil ke-90 (`q=0.90`)** untuk membuat janji yang dapat mereka penuhi untuk 90% pelanggan, bahkan untuk kasus yang lebih sulit.

```python
# Skenario data untuk E-commerce
np.random.seed(101)
n_orders = 500
distance = np.random.randint(50, 800, n_orders)
# Waktu pengiriman dipengaruhi jarak, dengan beberapa penundaan acak
delivery_time = 1 + (distance / 150) + np.random.lognormal(0, 0.5, n_orders)
df_logistics = pd.DataFrame({'delivery_time': delivery_time, 'distance': distance})

# Memodelkan janji pengiriman yang dapat diandalkan (persentil ke-90)
model_sla = smf.quantreg('delivery_time ~ distance', data=df_logistics).fit(q=0.90)
print(f"Intercept: {model_sla.params['Intercept']:.2f}")
print(f"Koefisien Jarak: {model_sla.params['distance']:.4f}")
```

Intercept: 2.51
Koefisien Jarak: 0.0071
```
* **Aksi Bisnis:** Hasil ini dapat langsung diubah menjadi mesin janji dinamis di situs web kita. Formulanya adalah:
    `Janji_Pengiriman_Hari = 2.51 + (0.0071 * Jarak_dalam_km)`
    Jika pelanggan berada 500 km jauhnya, janji pengiriman yang ditampilkan adalah `2.51 + (0.0071 * 500) ≈ 6.06`, yang dapat dibulatkan menjadi "Dijamin tiba dalam 7 hari." Ini mengelola ekspektasi pelanggan secara efektif, mengurangi keluhan, dan membangun kepercayaan, karena didasarkan pada janji yang 90% kemungkinan akan terpenuhi.

---

## Kerangka Kerja Strategis: Kapan Menggunakan Regresi Kuantil?

Untuk mengimplementasikan Regresi Kuantil secara efektif, kita bisa mengikuti alur kerja sistematis berikut, yang membantu memandu proses dari identifikasi masalah hingga pengambilan keputusan.

{{< mermaid >}}
flowchart TD
    %% Mendefinisikan kelas gaya yang konsisten
    classDef process fill:#4A5568,stroke:#A0AEC0,stroke-width:2px,color:#fff;
    classDef success fill:#28a745,stroke:#28a745,stroke-width:2px,color:#fff;
    %% Mendefinisikan node/titik dalam flowchart
    A["1. Identifikasi Masalah Bisnis<br>(Apakah rata-rata cukup? Atau fokus<br>pada ekor distribusi?)"]:::process;
    B["2. Eksplorasi Data (EDA)<br>(Visualisasikan data, identifikasi outlier<br>& heteroskedastisitas)"]:::process;
    C["3. Pemilihan Kuantil<br>(Pilih kuantil yang relevan dengan<br>tujuan bisnis, mis. q=0.95 untuk risiko,<br>q=0.90 untuk SLA)"]:::process;
    D["4. Pemodelan<br>(Fit model OLS sebagai baseline dan<br>model QR untuk kuantil terpilih)"]:::process;
    E["5. Visualisasi & Diagnosis<br>(Plot garis OLS vs. QR. Periksa bagaimana<br>koefisien berubah di berbagai kuantil)"]:::process;
    F["6. Interpretasi Kuantitatif<br>(Analisis output `summary()`. Terjemahkan<br>koefisien menjadi dampak bisnis)"]:::process;
    G["✅ 7. Pengambilan Keputusan<br>(Gunakan wawasan untuk menetapkan SLA,<br>mengelola cadangan modal, atau<br>mengevaluasi intervensi)"]:::success;
    %% Menghubungkan semua node
    A --> B;
    B --> C;
    C --> D;
    D --> E;
    E --> F;
    F --> G;
{{< /mermaid >}}

Jadi, kapan kita harus beralih dari OLS ke Regresi Kuantil? Gunakan alur pikir ini untuk mendiagnosis masalah kita:

1.  **Apakah ada Biaya Asimetris?** Pikirkan masalah kita. Apakah kesalahan prediksi ke satu arah jauh lebih merugikan daripada ke arah lain? (Contoh: Keterlambatan pengiriman lebih buruk daripada pengiriman lebih awal; meremehkan risiko lebih berbahaya daripada melebih-lebihkannya). Jika ya, modelkan kuantil yang sesuai dengan arah yang merugikan tersebut.

2.  **Apakah kita Perlu Membuat Jaminan atau Batasan?** Apakah tujuan akhir kita adalah menetapkan batas atas atau bawah? (Contoh: Menetapkan Service Level Agreement (SLA), menghitung kapasitas maksimum, atau memperkirakan Value at Risk). Jika ya, Regresi Kuantil adalah alat yang tepat untuk memodelkan batas-batas ini secara langsung.

3.  **Apakah kita Mencurigai Efeknya Tidak Seragam?** Apakah sebuah intervensi (misalnya, obat baru, kampanye diskon) mungkin memiliki dampak yang berbeda pada kelompok yang berbeda? (Contoh: Apakah obat lebih membantu pasien yang paling sakit? Apakah diskon hanya menarik bagi pemburu diskon?). Dengan memodelkan beberapa kuantil (misalnya, q=0.25, 0.50, 0.75) dan membandingkan koefisiennya, kita dapat mengungkap wawasan mendalam tentang efek heterogen ini.

Jika jawaban kita "ya" untuk salah satu dari pertanyaan ini, Regresi Kuantil kemungkinan besar akan memberikan wawasan yang lebih kaya dan lebih dapat ditindaklanjuti daripada model berbasis rata-rata.

## Kesimpulan: Beralih ke Pola Pikir Distribusional

Berfokus secara eksklusif pada rata-rata berarti kita merancang solusi untuk pengguna "mitos" yang sebenarnya tidak ada, sambil mengabaikan pengalaman nyata pelanggan atau skenario bisnis di ujung spektrum. Regresi Kuantil bukan hanya sekadar alat teknis; ini adalah perubahan pola pikir. Ini mendorong kita untuk beralih dari pemikiran titik pusat ke pemikiran distribusional.

Dengan memodelkan median untuk mendapatkan pandangan yang robust, kuantil ke-90 untuk menetapkan janji yang andal, atau kuantil ke-95 untuk mengelola risiko, kita dapat membuat keputusan bisnis yang lebih cerdas, lebih bernuansa, dan pada akhirnya lebih kuat di dunia nyata yang penuh dengan variabilitas.

## Penelusuran Terkait

<ul>
  <li><a href="https://www.statsmodels.org/stable/examples/notebooks/generated/quantile_regression.html">Quantile Regression — statsmodels</a></li>
  <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4054530/">Quantile regression in medical research: a practical and accessible guide for clinicians</a></li>
</ul>


