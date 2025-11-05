+++
title = "Bootstrapping di Python: Satu Teknik untuk Validasi Regresi dan A/B Test"
date = 2025-09-05T07:05:14+08:00
draft = true
socialshare = true
description = "Pelajari kekuatan universal bootstrapping. Panduan ini menunjukkan cara menggunakan satu alur kerja Python untuk validasi regresi dan analisis hasil A/B test."
image = "1.webp"
imageBig= "1.webp"
categories= ["Data Analysis Concepts"]
tags =  ["Regresi"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++



Sebagai analis data, kita hidup dalam dunia ketidakpastian. Berapa sebenarnya ROI dari kampanye iklan terakhir kita? Apakah kenaikan 0.5% dalam A/B test itu nyata, atau hanya kebisingan acak? Seringkali, kita hanya melaporkan satu angka—koefisien regresi atau perbedaan rata-rata—tanpa benar-benar memahami rentang kemungkinan di mana nilai sebenarnya berada. Bagaimana jika ada satu teknik statistik yang kuat, seperti "mesin pengukur ketidakpastian" universal, yang dapat Anda terapkan pada hampir semua masalah untuk mendapatkan jawaban yang lebih andal? Teknik itu adalah **bootstrapping**.

Dalam panduan ini, kami akan menunjukkan kepada Anda cara menggunakan satu alur kerja Python yang sama untuk memecahkan dua masalah bisnis yang sangat berbeda: pertama, memvalidasi koefisien dalam model prediksi penjualan, dan kedua, menentukan signifikansi hasil dari A/B test. Bersiaplah untuk menambahkan alat paling fleksibel ke dalam toolkit statistik Anda.

---

## Landasan Teoretis: Mesin Pengukur Ketidakpastian Universal

Inti dari bootstrapping adalah ide yang brilian: jika kita tidak bisa mengambil banyak sampel dari dunia nyata, kita bisa menciptakan ribuan "dunia alternatif" dengan mengambil sampel berulang kali dari data yang kita miliki. Proses *resampling* ini memungkinkan kita melihat seberapa banyak statistik kita (apakah itu rata-rata, median, atau koefisien regresi) bervariasi dari satu "dunia alternatif" ke "dunia alternatif" lainnya.

Kunci dari proses ini adalah pengambilan sampel **dengan pengembalian** (*with replacement*). Ini berarti setiap data yang dipilih 'dikembalikan' lagi ke dalam tumpukan, sehingga ia bisa terpilih lebih dari satu kali dalam satu sampel bootstrap. Inilah yang menciptakan variasi antar sampel, yang secara efektif mensimulasikan proses pengambilan sampel dari populasi yang lebih besar. Rentang variasi inilah yang memberi kita interval kepercayaan yang andal, tanpa perlu mengasumsikan data kita terdistribusi normal.

- **Penjelasan Konsep:** Bootstrapping adalah metode non-parametrik yang menghasilkan distribusi sampling dari sebuah statistik dengan melakukan resampling berulang kali dengan pengembalian dari sampel data asli.
- **Rumus Matematis (Interval Kepercayaan Persentil):**
  Untuk tingkat kepercayaan $(1 - \alpha)$, intervalnya dihitung dari distribusi bootstrap statistik $\theta^*$:
  $$ CI = [\theta^*_{(\alpha/2)}, \theta^*_{(1 - \alpha/2)}] $$
- **Definisi Komponen:**
  - $\theta^*$: Distribusi dari statistik yang dihitung dari sampel bootstrap.
  - $\theta^*_{(p)}$: Persentil ke-p dari distribusi bootstrap $\theta^*$.
  - $\alpha$: Tingkat signifikansi (misalnya, 0.05 untuk interval kepercayaan 95%).

---

## Alur Kerja Universal Bootstrapping

Sebelum masuk ke kode, penting untuk memahami bahwa alur kerja bootstrapping selalu sama, terlepas dari masalahnya. Diagram alir di bawah ini meringkas prosesnya:

{{< mermaid >}}
flowchart TD
    %% Mendefinisikan kelas gaya yang konsisten
    classDef process fill:#4A5568,stroke:#A0AEC0,stroke-width:2px,color:#fff;
    classDef success fill:#28a745,stroke:#28a745,stroke-width:2px,color:#fff;
    %% Mendefinisikan node/titik dalam flowchart
    A["Mulai: Punya sampel data asli & statistik<br>yang diminati (misal: rata-rata, koefisien regresi)"]:::process;
    B["Buat 'n' sampel bootstrap dengan mengambil sampel<br>dari data asli DENGAN PENGEMBALIAN"]:::process;
    C["Untuk setiap sampel bootstrap,<br>hitung statistik yang diminati"]:::process;
    D["Kumpulkan semua statistik yang dihitung untuk<br>membentuk distribusi sampling bootstrap"]:::process;
    E["Hitung interval kepercayaan dengan mengambil<br>persentil dari distribusi bootstrap<br>(misal: persentil 2.5 dan 97.5 untuk 95% CI)"]:::process;
    F["✅ Selesai: Interpretasikan interval kepercayaan<br>dalam konteks masalah bisnis"]:::success;
    %% Menghubungkan semua node
    A --> B;
    B --> C;
    C --> D;
    D --> E;
    E --> F;
{{< /mermaid >}}

Dengan alur kerja ini sebagai panduan, mari kita terapkan pada dua studi kasus.

---

## Studi Kasus 1: Validasi Koefisien Regresi (Prediksi Penjualan)

### Konteks Bisnis

Bayangkan kita adalah seorang analis di sebuah perusahaan rekaman. Kita telah membuat model regresi untuk memprediksi `penjualan_album` berdasarkan `anggaran_iklan`. Model kita memberikan estimasi ROI, tetapi kita ragu dengan asumsi normalitas residualnya. Kita perlu interval kepercayaan yang kokoh untuk koefisien `anggaran_iklan` sebelum kita melaporkannya.

### Implementasi & Prosedur Kode

Di bawah ini adalah kode untuk melakukan bootstrapping pada koefisien regresi. Kita akan membuat 1.000 versi "alternatif" dari data kita, melatih model pada masing-masing, dan menyimpan koefisien `anggaran_iklan` setiap saat.

```python
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.utils import resample
import matplotlib.pyplot as plt
import seaborn as sns

# -- 1. Menyiapkan Data --
# Data ini sengaja dibuat dengan noise yang tidak normal (skewed)
# untuk menunjukkan kekuatan bootstrapping.
np.random.seed(42)
jumlah_album = 150
anggaran_iklan = np.random.uniform(50, 800, jumlah_album)
skewed_noise = np.random.exponential(scale=20, size=jumlah_album)
centered_noise = skewed_noise - skewed_noise.mean()
penjualan_album = 25 + (0.12 * anggaran_iklan) + centered_noise
album_data_skewed = pd.DataFrame({'anggaran_iklan': anggaran_iklan, 'penjualan_album': penjualan_album})

# -- 2. Prosedur Bootstrapping --
n_iterations = 1000
boot_coeffs = []

# Loop untuk membuat sampel bootstrap dan melatih model
for i in range(n_iterations):
    # Buat sampel bootstrap (resampling dengan pengembalian)
    sample = resample(album_data_skewed)
    
    # Latih model pada sampel bootstrap
    X_sample = sample[['anggaran_iklan']]
    y_sample = sample['penjualan_album']
    model = LinearRegression().fit(X_sample, y_sample)
    
    # Simpan statistik yang diminati (koefisien regresi)
    boot_coeffs.append(model.coef_[0])

# -- 3. Hitung Interval Kepercayaan --
alpha = 0.95
lower_bound = np.percentile(boot_coeffs, (1-alpha)/2 * 100)
upper_bound = np.percentile(boot_coeffs, (alpha + (1-alpha)/2) * 100)

print(f"Interval Kepercayaan 95% untuk Koefisien Iklan: [{lower_bound:.3f}, {upper_bound:.3f}]")
```

### Hasil & Interpretasi

Hasilnya adalah sebuah distribusi dari 1.000 kemungkinan nilai untuk koefisien `anggaran_iklan`. Visualisasi di bawah ini menunjukkan distribusi sampling empiris yang telah kita buat.

```python
# -- 4. Visualisasi Hasil --
sns.set_style("whitegrid")
plt.figure(figsize=(10, 6))
sns.histplot(boot_coeffs, kde=True, color='skyblue')
plt.title('Distribusi Bootstrap Koefisien Iklan', fontsize=16)
plt.xlabel('Nilai Koefisien', fontsize=12)
plt.ylabel('Frekuensi', fontsize=12)
plt.axvline(lower_bound, color='red', linestyle='--', label=f'Batas Bawah (2.5%) = {lower_bound:.3f}')
plt.axvline(upper_bound, color='red', linestyle='--', label=f'Batas Atas (97.5%) = {upper_bound:.3f}')
plt.legend()
plt.show()
```


> **Interpretasi:** Kita 95% yakin bahwa untuk setiap kenaikan **$1.000** pada anggaran iklan, kenaikan penjualan album yang sebenarnya berada di antara **98 dan 141 unit**. Interval ini kokoh karena tidak bergantung pada asumsi normalitas yang mungkin telah kita langgar.

---

## Studi Kasus 2: Validasi Hasil A/B Test (Eksperimen Pemasaran)

### Konteks Bisnis

Sekarang, bayangkan Anda bekerja di sebuah perusahaan e-commerce. Tim pemasaran baru saja menjalankan A/B test untuk desain tombol "Beli" yang baru (Grup B) melawan desain lama (Grup A). Mereka menemukan bahwa Grup B memiliki tingkat konversi 0.5% lebih tinggi. Pertanyaannya: apakah peningkatan ini nyata, atau hanya karena keberuntungan acak?

### Implementasi & Prosedur Kode

Kita akan menggunakan **alur kerja bootstrapping yang sama persis** pada statistik yang berbeda: **perbedaan rata-rata konversi** antara dua grup.

```python
# -- 1. Menyiapkan Data --
# 1 merepresentasikan konversi, 0 merepresentasikan tidak ada konversi
grup_a = np.array([1] * 50 + [0] * 950) # Tingkat konversi 5.0%
grup_b = np.array([1] * 55 + [0] * 945) # Tingkat konversi 5.5%

# -- 2. Prosedur Bootstrapping --
boot_diffs = []

for i in range(n_iterations):
    # Buat sampel bootstrap untuk setiap grup
    sample_a = resample(grup_a)
    sample_b = resample(grup_b)
    
    # Hitung statistik yang diminati (perbedaan rata-rata)
    boot_diffs.append(sample_b.mean() - sample_a.mean())

# -- 3. Hitung Interval Kepercayaan --
lower_diff = np.percentile(boot_diffs, (1-alpha)/2 * 100)
upper_diff = np.percentile(boot_diffs, (alpha + (1-alpha)/2) * 100)

print(f"Perbedaan Rata-rata yang Diamati: {grup_b.mean() - grup_a.mean():.3f} (0.5%)")
print(f"Interval Kepercayaan 95% untuk Perbedaan: [{lower_diff:.3f}, {upper_diff:.3f}]")
```

### Hasil & Interpretasi

Kita sekarang memiliki distribusi dari 1.000 kemungkinan "perbedaan nyata" antara Grup B dan Grup A. Kunci utamanya adalah memeriksa apakah interval kepercayaannya mencakup nol.

```python
# -- 4. Visualisasi Hasil --
plt.figure(figsize=(10, 6))
sns.histplot(boot_diffs, kde=True, color='lightgreen')
plt.title('Distribusi Bootstrap Perbedaan Rata-Rata Konversi', fontsize=16)
plt.xlabel('Perbedaan Rata-Rata (Grup B - Grup A)', fontsize=12)
plt.ylabel('Frekuensi', fontsize=12)
plt.axvline(lower_diff, color='red', linestyle='--', label=f'Batas Bawah (2.5%) = {lower_diff:.3f}')
plt.axvline(upper_diff, color='red', linestyle='--', label=f'Batas Atas (97.5%) = {upper_diff:.3f}')
plt.axvline(0, color='black', linestyle='-', label='Tidak Ada Perbedaan (Nol)') # Garis referensi nol
plt.legend()
plt.show()
```


> **Interpretasi:** Interval kepercayaan 95% berkisar dari **-1.5% hingga +2.5%**. Karena rentang ini **dengan jelas mencakup angka nol**, kita tidak dapat menyimpulkan dengan keyakinan 95% bahwa tombol baru secara signifikan lebih baik. Ada kemungkinan yang masuk akal bahwa efek sebenarnya adalah nol, dan peningkatan 0.5% yang kita lihat hanyalah kebisingan acak dalam sampel kita.

---

## Sintesis: Pola yang Sama, Wawasan Berbeda

Perhatikan kedua studi kasus di atas. Meskipun masalah bisnisnya sangat berbeda (estimasi parameter vs. uji hipotesis) dan statistik yang dihitung juga berbeda, **kerangka kerja inti bootstrapping tetap identik**. Satu-satunya hal yang berubah adalah baris di dalam loop yang menghitung statistik spesifik yang kita minati—baik itu `model.coef_` untuk regresi atau `sample_b.mean() - sample_a.mean()` untuk A/B test. Ini membuktikan bahwa bootstrapping adalah sebuah **pola** atau **kerangka kerja**, bukan sekadar fungsi tunggal.

---

## Kapan Bootstrapping Bisa Gagal? (Sebuah Catatan Kritis)

Meskipun sangat kuat, bootstrapping bukanlah peluru perak. Kredibilitasnya bergantung pada satu asumsi kunci: **sampel asli Anda harus merupakan representasi yang wajar dari populasi**. Jika sampel asli Anda sangat bias, sampel bootstrap Anda hanya akan mereplikasi dan memperkuat bias tersebut. Selain itu, teknik ini bisa kurang andal untuk sampel yang sangat kecil atau ketika mencoba mengestimasi statistik yang ekstrem seperti nilai maksimum atau minimum.

---

## Kesimpulan

Bootstrapping adalah salah satu teknik paling praktis dan serbaguna dalam statistik modern. Ini membebaskan kita dari kungkungan asumsi-asumsi teoretis dan memungkinkan kita untuk mengukur ketidakpastian dari hampir semua metrik. Dengan memahami satu proses inti ini, Anda dapat memberikan tingkat kepercayaan yang lebih tinggi pada hasil analisis Anda, baik saat Anda mempresentasikan ROI kampanye iklan maupun saat Anda menentukan pemenang A/B test berikutnya.

**Rekomendasi tindakan terakhir dari kami sederhana: kapan pun Anda menghitung satu angka penting yang akan mendorong keputusan bisnis, tanyakan pada diri sendiri, "Bagaimana saya bisa melakukan bootstrap untuk memahami ketidakpastiannya?".**


## Penelusuran Terkait

-   [An Introduction to the Bootstrap Method — Towards Data Science](https://towardsdatascience.com/an-introduction-to-the-bootstrap-method-58bcb51b4d60)  
-   [Bootstrapping in Statistics: What It Is and Why It’s Used — Statistics By Jim](https://statisticsbyjim.com/hypothesis-testing/bootstrapping/)  
-   [How to Perform Bootstrapping in Python — Statology](https://www.statology.org/bootstrapping-in-python/)  
-   [A Gentle Introduction to the Bootstrap Method — Machine Learning Mastery](https://machinelearningmastery.com/a-gentle-introduction-to-the-bootstrap-method/)  
-   [A/B Testing with Bootstrapping — Medium (Getir)](https://medium.com/getir/bootstrapping-for-a-b-testing-893f01fa6700)  
-   [Bootstrapping (statistics) — Wikipedia](https://en.wikipedia.org/wiki/Bootstrapping_(statistics))  
-   [sklearn.utils.resample — scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.utils.resample.html)  
-   [Reading 24: Bootstrap Confidence Intervals — MIT OpenCourseWare](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/resources/mit18_05s14_reading24/)  
