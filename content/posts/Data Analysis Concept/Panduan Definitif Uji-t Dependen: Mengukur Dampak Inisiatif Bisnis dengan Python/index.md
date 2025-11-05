+++
title= "Panduan Definitif Uji-t Dependen: Mengukur Dampak Inisiatif Bisnis dengan Python"
date = 2025-09-10T12:29:14+09:00
draft = true
socialshare = true
description = "Sebuah panduan komprehensif untuk data scientist tentang cara menggunakan Uji-t Dependen (Paired T-Test) secara tepat—mulai dari pemeriksaan asumsi hingga interpretasi bisnis—dengan studi kasus praktis di Python."
image = "1.webp"
imageBig= "1.webp"
categories= ["Data Analysis Concepts"] 
tags= [ "Comparing Two Means" ]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++

## Dari Hipotesis ke Dampak: Pertanyaan Universal Setiap Bisnis

Seorang manajer pemasaran bertanya, "Apakah kampanye iklan baru kita benar-benar meningkatkan sentimen merek?" Seorang desainer produk merenung, "Apakah desain ulang alur *checkout* ini benar-benar mempercepat transaksi pengguna?" Seorang kepala SDM ingin tahu, "Apakah program pelatihan teknis kita terbukti meningkatkan produktivitas developer?"

Tiga skenario, satu pertanyaan fundamental: **Bagaimana kita membuktikan secara kuantitatif bahwa sebuah intervensi benar-benar menyebabkan perubahan?** Jawabannya sering kali terletak pada salah satu alat statistik paling fundamental dalam analisis kausalitas sederhana: **Uji-t Dependen** (atau *Paired Samples T-Test*).

Artikel ini bukan sekadar *playbook*; ini adalah panduan metodologis yang akan membekali Anda dengan kerangka kerja yang kuat. Kita akan membedah Uji-t Dependen dari awal—mulai dari teori dan asumsi kritisnya, alur kerja diagnostik, hingga implementasi Python yang cermat pada tiga studi kasus realistis.

---

## Fondasi Konseptual: Di Balik Uji-t Dependen

Uji-t Dependen dirancang khusus untuk satu jenis skenario yang sangat umum: membandingkan dua pengukuran yang saling berhubungan dari subjek atau unit yang sama. Inti dari tes ini bukanlah membandingkan dua kelompok yang berbeda, melainkan menganalisis **perubahan atau selisih** dalam satu kelompok yang sama pada dua waktu yang berbeda (misalnya, sebelum dan sesudah perlakuan).

Secara intuitif, kita menghitung selisih (`skor_sesudah - skor_sebelum`) untuk setiap subjek. Kemudian, kita menggunakan uji statistik untuk menentukan apakah rata-rata dari semua selisih ini secara signifikan berbeda dari nol. Jika ya, kita memiliki bukti statistik untuk mengklaim bahwa intervensi kita memiliki dampak.

### Asumsi Kritis yang Tidak Boleh Diabaikan

Sebelum menjalankan kode apa pun, seorang analis yang cermat harus memvalidasi asumsi yang mendasari model statistiknya. Untuk Uji-t Dependen, asumsi utamanya adalah:

1.  **Data Berpasangan (Dependent):** Pengukuran harus berasal dari subjek yang sama atau unit yang cocok (misalnya, performa karyawan A sebelum dan sesudah pelatihan).
2.  **Independensi Pasangan:** Setiap pasangan pengukuran harus independen dari pasangan lainnya (misalnya, performa karyawan A tidak memengaruhi performa karyawan B).
3.  **Normalitas Selisih:** **Selisih** antara pengukuran berpasangan harus terdistribusi secara normal. Penting dicatat, bukan data `sebelum` atau `sesudah` itu sendiri yang harus normal, melainkan distribusi dari perbedaannya. Asumsi ini dapat kita periksa menggunakan metode visual seperti Q-Q Plot atau uji statistik formal seperti **Uji Shapiro-Wilk**.

Mengabaikan asumsi ini, terutama normalitas, dapat menghasilkan kesimpulan yang tidak valid.

### Hipotesis dan Formula

Dalam setiap uji, kita memulai dengan dua hipotesis yang bersaing:
* **Hipotesis Nol ($$H_0$$):** Tidak ada perbedaan signifikan antara rata-rata pengukuran sebelum dan sesudah. Rata-rata populasi dari selisih adalah nol ($$\mu_d = 0$$).
* **Hipotesis Alternatif ($$H_1$$):** Terdapat perbedaan yang signifikan. Rata-rata populasi dari selisih tidak sama dengan nol ($$\mu_d \neq 0$$).

Kita menguji ini menggunakan **t-statistik**, yang dihitung sebagai berikut:

$$ t = \frac{\bar{d}}{s_d / \sqrt{n}} $$

Di mana:
- $$\bar{d}$$ adalah rata-rata selisih dalam sampel kita.
- $$s_d$$ adalah standar deviasi dari selisih tersebut.
- $$n$$ adalah jumlah pasangan (ukuran sampel).

Untuk mengukur besarnya dampak di luar signifikansi statistik, kita menggunakan **Cohen's *d***:

$$ d = \frac{\bar{d}}{s_d} $$

Cohen's *d* mengukur seberapa besar perbedaan rata-rata dalam satuan standar deviasi. Panduan umum interpretasinya adalah: $$|d| \approx 0.2$$ (kecil), $$|d| \approx 0.5$$ (sedang), dan $$|d| \approx 0.8$$ (besar).

---

## Alur Kerja Analisis Diagnostik

Untuk memastikan analisis kita kuat dan dapat dipertanggungjawabkan, kita harus mengikuti alur kerja yang sistematis. Diagram berikut memvisualisasikan proses pengambilan keputusan dari awal hingga akhir.

{{< mermaid >}}
flowchart TD
    %% Mendefinisikan kelas gaya yang konsisten
    classDef process fill:#4A5568,stroke:#A0AEC0,stroke-width:2px,color:#fff;
    classDef decision fill:#674188,stroke:#C3ACD0,stroke-width:2px,color:#fff;
    classDef success fill:#28a745,stroke:#28a745,stroke-width:2px,color:#fff;
    classDef warning fill:#C70039,stroke:#900C3F,stroke-width:2px,color:#fff;
    classDef recommendation fill:#d1ecf1,stroke:#bee5eb,stroke-width:2px,color:#0c5460;
    %% Mendefinisikan node/titik dalam flowchart
    A["Mulai: Punya Data<br>'Sebelum' & 'Sesudah'"]:::process;
    B{"Cek Asumsi 1:<br>Apakah data benar-benar berpasangan?"}:::decision;
    C["Hitung selisih untuk setiap pasangan:<br>D = Sesudah - Sebelum"]:::process;
    D{"Cek Asumsi 2:<br>Apakah selisih terdistribusi normal?"}:::decision;
    E{"Hasil Uji Normalitas<br>(P-value > 0.05?)"}:::decision;
    F["Lakukan Uji-t Dependen"]:::recommendation;
    G["Hitung p-value & Cohen's d"]:::process;
    H["Lakukan Uji Peringkat<br>Bertanda Wilcoxon"]:::recommendation;
    I["Hitung p-value"]:::process;
    J["✅ Interpretasi Hasil &<br>Rekomendasi Bisnis"]:::success;
    K["❗ Stop: Gunakan Uji-t Independen"]:::warning;
    %% Menghubungkan semua node
    A --> B;
    B -- Ya --> C;
    C --> D;
    D -- "Uji dg Shapiro-Wilk / Q-Q Plot" --> E;
    E -- "Ya (Normal)" --> F;
    F --> G;
    E -- "Tidak (Tidak Normal)" --> H;
    H --> I;
    G --> J;
    I --> J;
    B -- Tidak --> K;
{{< /mermaid >}}

Alur kerja ini memastikan kita memilih uji yang tepat dan membangun fondasi yang kokoh untuk kesimpulan kita.

---

## Studi Kasus Komparatif dengan Python

Mari kita terapkan kerangka kerja ini pada tiga skenario bisnis. Kita akan menggunakan library `pandas` untuk manipulasi data, `scipy.stats` untuk pengujian statistik, `numpy` untuk kalkulasi, dan `matplotlib`/`seaborn` untuk visualisasi.

```python
# Import library yang dibutuhkan
import pandas as pd
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns

# Fungsi untuk menghitung Cohen's d
def cohens_d(x, y):
    """Menghitung Cohen's d untuk sampel dependen."""
    n = len(x)
    d = np.array(y) - np.array(x)
    mean_diff = np.mean(d)
    std_diff = np.std(d, ddof=1)
    if std_diff == 0:
        return np.inf # Hindari pembagian dengan nol
    return mean_diff / std_diff

# Membuat dataset simulasi untuk tiga studi kasus
np.random.seed(42) # Untuk reproduktifitas
# 1. Pemasaran: Peningkatan persepsi merek (skala 1-10)
persepsi_sebelum = np.random.normal(6.5, 1.5, 50)
persepsi_sesudah = persepsi_sebelum + np.random.normal(0.7, 1.2, 50)
# 2. UX: Pengurangan waktu checkout (detik)
waktu_lama = np.random.normal(120, 20, 40)
waktu_baru = waktu_lama - np.random.normal(18, 10, 40)
# 3. SDM: Peningkatan produktivitas (jumlah commit)
prod_sebelum = np.random.normal(50, 8, 25)
prod_sesudah = prod_sebelum + np.random.normal(10, 4, 25)

# Gabungkan ke dalam DataFrame untuk kemudahan
df_marketing = pd.DataFrame({'sebelum': np.clip(persepsi_sebelum, 1, 10), 'sesudah': np.clip(persepsi_sesudah, 1, 10)})
df_ux = pd.DataFrame({'lama': np.clip(waktu_lama, 30, 200), 'baru': np.clip(waktu_baru, 30, 200)})
df_hr = pd.DataFrame({'sebelum': prod_sebelum.astype(int), 'sesudah': prod_sesudah.astype(int)})
```

### Studi Kasus 1: Pemasaran - Mengukur Perubahan Persepsi Merek

**Konteks:** Tim pemasaran meluncurkan kampanye iklan dan ingin tahu apakah kampanye tersebut berhasil meningkatkan persepsi positif merek pada 50 responden.

```python
# 1. Hitung selisih
df_marketing['selisih'] = df_marketing['sesudah'] - df_marketing['sebelum']

# 2. Pemeriksaan Asumsi Normalitas
shapiro_stat, shapiro_p = stats.shapiro(df_marketing['selisih'])
print(f"Hasil Uji Shapiro-Wilk: Statistik={shapiro_stat:.3f}, p-value={shapiro_p:.3f}")

# Visualisasi Q-Q Plot
plt.figure(figsize=(6, 4))
stats.probplot(df_marketing['selisih'], dist="norm", plot=plt)
plt.title('Q-Q Plot Selisih Persepsi Merek')
plt.show()

# 3. Eksekusi Uji Statistik (jika asumsi terpenuhi)
if shapiro_p > 0.05:
    t_stat_mkt, p_value_mkt = stats.ttest_rel(df_marketing['sesudah'], df_marketing['sebelum'])
    d_mkt = cohens_d(df_marketing['sebelum'], df_marketing['sesudah'])
    print(f"Uji-t Dependen: t-statistik={t_stat_mkt:.3f}, p-value={p_value_mkt:.3f}")
    print(f"Cohen's d: {d_mkt:.3f}")
else:
    print("Asumsi normalitas tidak terpenuhi. Sebaiknya gunakan uji non-parametrik.")
```

**Interpretasi Hasil:**
* **Pemeriksaan Asumsi:** Uji Shapiro-Wilk menghasilkan *p-value* > 0.05, dan Q-Q plot menunjukkan titik-titik yang mendekati garis diagonal. Kita dapat berasumsi bahwa selisih terdistribusi normal.
* **Inferensi Statistik:** Hasil uji-t menunjukkan *p-value* yang sangat kecil (< 0.001). Ini memberikan bukti kuat untuk menolak hipotesis nol, yang berarti peningkatan persepsi merek secara statistik signifikan.
* **Ukuran Efek & Wawasan Bisnis:** Cohen's *d* sekitar 0.59, yang mengindikasikan ukuran efek **sedang**. Artinya, kampanye tidak hanya menghasilkan perubahan yang signifikan secara statistik, tetapi juga cukup besar untuk dianggap berarti secara praktis. **Rekomendasi:** Dengan bukti dampak yang moderat, tim pemasaran memiliki justifikasi untuk melanjutkan strategi kampanye ini dan mempertimbangkan alokasi anggaran lebih lanjut untuk inisiatif serupa.

### Studi Kasus 2: Desain UX - Memvalidasi Peningkatan Usability

**Konteks:** Tim produk ingin memvalidasi apakah desain ulang alur *checkout* berhasil mengurangi waktu penyelesaian transaksi pada 40 pengguna.

```python
# 1. Hitung selisih (perhatikan urutannya untuk mencerminkan 'penurunan')
df_ux['selisih'] = df_ux['lama'] - df_ux['baru']

# 2. Pemeriksaan Asumsi Normalitas
shapiro_stat_ux, shapiro_p_ux = stats.shapiro(df_ux['selisih'])
print(f"Hasil Uji Shapiro-Wilk: Statistik={shapiro_stat_ux:.3f}, p-value={shapiro_p_ux:.3f}")

# 3. Eksekusi Uji Statistik
if shapiro_p_ux > 0.05:
    # Kita menggunakan ttest_rel(baru, lama) karena H1 adalah waktu_baru < waktu_lama
    t_stat_ux, p_value_ux = stats.ttest_rel(df_ux['baru'], df_ux['lama'])
    d_ux = cohens_d(df_ux['lama'], df_ux['baru']) # Perhatikan urutan untuk d
    print(f"Uji-t Dependen: t-statistik={t_stat_ux:.3f}, p-value={p_value_ux:.3f}")
    print(f"Cohen's d: {d_ux:.3f}") # d akan negatif, menunjukkan penurunan
else:
    print("Asumsi normalitas tidak terpenuhi.")
```

**Interpretasi Hasil:**
* **Pemeriksaan Asumsi:** Uji Shapiro-Wilk menunjukkan bahwa asumsi normalitas terpenuhi.
* **Inferensi Statistik:** *p-value* yang mendekati nol menunjukkan bahwa penurunan waktu penyelesaian transaksi sangat signifikan secara statistik.
* **Ukuran Efek & Wawasan Bisnis:** Cohen's *d* sekitar -1.6, yang merupakan ukuran efek **sangat besar**. Ini berarti desain ulang tidak hanya berhasil, tetapi dampaknya luar biasa. **Rekomendasi:** Data memberikan sinyal yang sangat kuat untuk meluncurkan desain baru ke seluruh basis pengguna. Dampak positif yang besar pada *usability* kemungkinan akan berkorelasi dengan peningkatan konversi dan kepuasan pelanggan.

### Studi Kasus 3: SDM - Membuktikan ROI Pelatihan Karyawan

**Konteks:** Manajer SDM ingin membuktikan bahwa program pelatihan teknis meningkatkan produktivitas (jumlah *commit code*) dari 25 developer.

```python
# 1. Hitung selisih
df_hr['selisih'] = df_hr['sesudah'] - df_hr['sebelum']

# 2. Pemeriksaan Asumsi Normalitas
shapiro_stat_hr, shapiro_p_hr = stats.shapiro(df_hr['selisih'])
print(f"Hasil Uji Shapiro-Wilk: Statistik={shapiro_stat_hr:.3f}, p-value={shapiro_p_hr:.3f}")

# 3. Eksekusi Uji Statistik
if shapiro_p_hr > 0.05:
    t_stat_hr, p_value_hr = stats.ttest_rel(df_hr['sesudah'], df_hr['sebelum'])
    d_hr = cohens_d(df_hr['sebelum'], df_hr['sesudah'])
    print(f"Uji-t Dependen: t-statistik={t_stat_hr:.3f}, p-value={p_value_hr:.3f}")
    print(f"Cohen's d: {d_hr:.3f}")
else:
    print("Asumsi normalitas tidak terpenuhi.")
```

**Interpretasi Hasil:**
* **Pemeriksaan Asumsi:** Asumsi normalitas terpenuhi berdasarkan hasil Uji Shapiro-Wilk.
* **Inferensi Statistik:** Dengan *p-value* yang sangat kecil, kita dapat dengan percaya diri menyimpulkan bahwa peningkatan produktivitas setelah pelatihan adalah signifikan secara statistik.
* **Ukuran Efek & Wawasan Bisnis:** Cohen's *d* lebih dari 2.0, menunjukkan ukuran efek yang **luar biasa besar**. Ini adalah bukti kuantitatif yang sangat kuat. **Rekomendasi:** Program pelatihan ini menunjukkan ROI yang sangat tinggi dari segi produktivitas. Manajemen harus mempertimbangkan untuk menjadikannya program standar bagi semua developer dan menggunakannya sebagai studi kasus internal untuk justifikasi investasi pada pengembangan karyawan.

---

## Kesimpulan: Dari Data Menjadi Bukti Dampak yang Tak Terbantahkan

Meskipun berasal dari domain bisnis yang berbeda, ketiga studi kasus ini dipecahkan menggunakan kerangka kerja analitis yang sama dan kuat. Uji-t Dependen, ketika diterapkan dengan benar, lebih dari sekadar alat statistik; ia adalah jembatan yang menghubungkan tindakan dengan hasil.

Kunci sebenarnya bukan hanya pada eksekusi `stats.ttest_rel()`, melainkan pada proses yang cermat: memahami konteks, memvalidasi asumsi, memilih alat yang tepat, dan yang terpenting, menerjemahkan signifikansi statistik dan ukuran efek menjadi wawasan bisnis yang bernuansa dan dapat dipertahankan. Lain kali Anda dihadapkan pada skenario "sebelum-sesudah," ingatlah alur kerja ini untuk mengubah data mentah menjadi bukti dampak yang tak terbantahkan.


## Referensi

<p style="text-indent:0px;">Field, A., Miles, J., & Field, Z. (2012). <em>Discovering Statistics Using R</em>. <a href="https://uk.sagepub.com/en-gb/eur/discovering-statistics-using-r/book236067">SAGE Publications</a>.</p>

<p style="text-indent:0px;">SciPy Community. (2025). <code>scipy.stats.ttest_rel</code>. <a href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_rel.html">SciPy v1.15.0 Manual</a></p>

## Penelusuran Terkait

<ul>
  <li><a href="https://www.statology.org/paired-samples-t-test-python/">How to Conduct a Paired Samples t-test in Python — Statology</a></li>
  <li><a href="https://www.scribbr.com/statistics/paired-t-test/">Paired t-test | When to use it & how to report it — Scribbr</a></li>
  <li><a href="https://medium.com/@24littledino/paired-t-test-in-python-bbe778ce247e">Paired vs Unpaired T-Test: An Exploratory Data Analysis Approach — Medium</a></li>
  <li><a href="https://uxpajournal.org/a-primer-on-statistical-analysis-for-usability-testing/">A Primer on Statistical Analysis for Usability Testing — UXPA Journal</a></li>
  <li><a href="https://hbr.org/2016/02/a-refresher-on-a-b-testing">A Refresher on A/B Testing — Harvard Business Review</a></li>
  <li><a href="https://www.nngroup.com/articles/interpreting-numbers-in-ux/">How to Interpret Numbers in UX — Nielsen Norman Group</a></li>
  <li><a href="https://humansanddata.com/2022/10/19/measuring-training-effectiveness/">Measuring Training Effectiveness For Best Results — Humans & Data</a></li>
</ul>
