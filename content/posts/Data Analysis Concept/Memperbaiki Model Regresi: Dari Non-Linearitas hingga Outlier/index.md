+++
title = "Memperbaiki Model Regresi: Dari Non-Linearitas hingga Outlier"
date = 2025-09-04T07:05:14+07:00
draft = true
socialshare = true
description = "Model regresi Anda gagal validasi? Pelajari cara memperbaiki asumsi yang dilanggar seperti non-linearitas dan heteroskedastisitas menggunakan Python."
image = "1.webp"
imageBig= "1.webp"
categories= ["Data Analysis Concepts"]
tags =  ["Regresi"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++



Anda telah melakukan pekerjaan detektif yang hebat. Anda menjalankan diagnostik pada model regresi Anda dan menemukan pelakunya: plot residual Anda melengkung seperti pisang, dan sebarannya menyerupai megafon. Anda telah berhasil mendiagnosis model Anda dengan penyakit "non-linearitas" dan "heteroskedastisitas". Selamat, Anda sudah menjadi dokter data. Tetapi sekarang muncul pertanyaan yang lebih penting: apa resepnya? 🩺

Dalam panduan ini, kita akan beralih dari ruang diagnosis ke ruang perawatan. Anda akan belajar cara menerapkan solusi praktis di Python, mulai dari menambahkan fitur polinomial untuk meluruskan hubungan yang bandel, hingga menggunakan transformasi log untuk menstabilkan varians yang liar. Bersiaplah untuk mengubah model Anda yang rapuh menjadi model yang kokoh dan dapat diandalkan.

### Studi Kasus: Mengunjungi Kembali Model Penjualan Album yang "Sakit"

Sebelum kita masuk ke ruang perawatan, mari kita siapkan kembali 'pasien' kita: sebuah model prediksi penjualan album yang, setelah kita periksa, ternyata memiliki beberapa masalah serius. Kita akan gunakan lagi data yang sengaja dibuat tidak sempurna ini untuk mendemonstrasikan bagaimana setiap teknik perbaikan bekerja.

```python
import pandas as pd
import numpy as np
import statsmodels.api as sm
import statsmodels.formula.api as smf
import matplotlib.pyplot as plt
import seaborn as sns

# Menyiapkan data yang sengaja dibuat bermasalah
np.random.seed(42)
jumlah_album = 150
anggaran_iklan = np.random.uniform(10, 500, jumlah_album)
pemutaran_radio = np.random.randint(5, 70, jumlah_album)
daya_tarik_band = np.random.randint(1, 11, jumlah_album)
non_linear_effect = -0.001 * (anggaran_iklan - 250)**2
heteroscedastic_noise = np.random.normal(0, pemutaran_radio * 0.5, jumlah_album)
penjualan_album = 50 + (0.2 * anggaran_iklan) + non_linear_effect + (2 * pemutaran_radio) + (5 * daya_tarik_band) + heteroscedastic_noise
album_data_flawed = pd.DataFrame({
    'anggaran_iklan': anggaran_iklan,
    'pemutaran_radio': pemutaran_radio,
    'daya_tarik_band': daya_tarik_band,
    'penjualan_album': penjualan_album
})
influential_point = pd.DataFrame({
    'anggaran_iklan': [900], 
    'pemutaran_radio': [80], 
    'daya_tarik_band': [10], 
    'penjualan_album': [50]
})
album_data_flawed = pd.concat([album_data_flawed, influential_point], ignore_index=True)

# Membangun model "naif" awal
formula = 'penjualan_album ~ anggaran_iklan + pemutaran_radio + daya_tarik_band'
model_naive = smf.ols(formula, data=album_data_flawed).fit()

# Menampilkan plot diagnostik yang menunjukkan masalah
sns.set_style("whitegrid")
plt.figure(figsize=(10, 6))
sns.residplot(x=model_naive.fittedvalues, y=model_naive.resid, lowess=True, line_kws={'color': 'red', 'lw': 1})
plt.title('Plot Diagnostik Awal: Non-Linearitas & Heteroskedastisitas Terdeteksi', fontsize=14)
plt.xlabel('Nilai Prediksi')
plt.ylabel('Residual')
plt.show()
```

Plot di atas mengonfirmasi diagnosis kita: garis merah yang melengkung menunjukkan **non-linearitas**, dan sebaran titik yang melebar (pola corong) menunjukkan **heteroskedastisitas**. Dengan diagnosis yang jelas di tangan, kita siap untuk memulai perawatan.

---
### Perawatan #1: Mengatasi Non-Linearitas dengan Fitur Polinomial

| Dimensi | Deskripsi |
| :--- | :--- |
| **Masalah** | **Non-Linearitas:** Hubungan antara prediktor dan hasil tidak lurus. |
| **Diagnosis** | Plot residual vs. fitted values menunjukkan pola melengkung yang jelas (seperti senyum atau cemberut). Uji Rainbow gagal (p-value < 0.05). |
| **Intuisi Solusi** | Jika data melengkung, kita perlu "membengkokkan" garis regresi kita agar pas. Menambahkan versi kuadrat dari prediktor (misalnya, $X^2$) ke model memungkinkan garis prediksi melengkung. |
| **Aksi** | Buat fitur polinomial (biasanya kuadratik) dari prediktor yang dicurigai dan masukkan ke dalam model. |

```python
# Membuat fitur kuadratik untuk menangani non-linearitas
album_data_flawed['anggaran_iklan_kuadrat'] = album_data_flawed['anggaran_iklan']**2

# Memperbarui formula untuk menyertakan term baru
formula_poly = 'penjualan_album ~ anggaran_iklan + anggaran_iklan_kuadrat + pemutaran_radio + daya_tarik_band'

# Melatih model baru
model_poly = smf.ols(formula_poly, data=album_data_flawed).fit()

# Plot diagnostik setelah perbaikan
plt.figure(figsize=(10, 6))
sns.residplot(x=model_poly.fittedvalues, y=model_poly.resid, lowess=True, line_kws={'color': 'red', 'lw': 1})
plt.title('Plot Diagnostik Setelah Fitur Polinomial', fontsize=14)
plt.xlabel('Nilai Prediksi')
plt.ylabel('Residual')
plt.show()
```
**Analisis Hasil:** Garis tren merah pada plot "sesudah" sekarang jauh lebih lurus dan mendekati nol, menandakan kita telah berhasil mengatasi masalah non-linearitas. Namun, pola corong masih terlihat, yang membawa kita ke perawatan berikutnya.

#### **Interpretasi Koefisien Polinomial**
Setelah menambahkan `anggaran_iklan_kuadrat`, interpretasi koefisien `anggaran_iklan` menjadi lebih kompleks. Anda tidak bisa lagi mengatakan "kenaikan satu dolar iklan meningkatkan penjualan sebesar X". Sebaliknya, dampak dari anggaran iklan sekarang bergantung pada level anggaran itu sendiri. Anda harus mempertimbangkan kedua koefisien (`anggaran_iklan` dan `anggaran_iklan_kuadrat`) bersama-sama untuk melihat efek marginalnya pada titik data yang berbeda.

---
### Perawatan #2: Mengatasi Heteroskedastisitas dengan Transformasi Log

| Dimensi | Deskripsi |
| :--- | :--- |
| **Masalah** | **Heteroskedastisitas:** Varians dari residual tidak konstan di seluruh rentang nilai prediksi. |
| **Diagnosis** | Plot residual vs. fitted values menunjukkan pola corong atau megafon. Uji Breusch-Pagan gagal (p-value < 0.05). |
| **Intuisi Solusi** | Heteroskedastisitas sering terjadi ketika efek dari prediktor bersifat multiplikatif. Transformasi logaritmik pada variabel hasil (Y) mengubah hubungan ini menjadi aditif, yang seringkali berhasil "menekan" dan menstabilkan varians. |
| **Aksi** | Terapkan transformasi log pada variabel hasil (Y) dan latih ulang model. |

```python
# Menerapkan transformasi log pada variabel hasil untuk menstabilkan varians
# np.log1p adalah log(1+x), aman untuk nilai yang mungkin nol
album_data_flawed['log_penjualan_album'] = np.log1p(album_data_flawed['penjualan_album'].clip(lower=0))

# Formula baru dengan hasil yang ditransformasi
formula_log = 'log_penjualan_album ~ anggaran_iklan + anggaran_iklan_kuadrat + pemutaran_radio + daya_tarik_band'

# Melatih model final
model_final = smf.ols(formula_log, data=album_data_flawed).fit()

# Plot diagnostik final
plt.figure(figsize=(10, 6))
sns.residplot(x=model_final.fittedvalues, y=model_final.resid, lowess=True, line_kws={'color': 'red', 'lw': 1})
plt.title('Plot Diagnostik Final Setelah Transformasi Log', fontsize=14)
plt.xlabel('Nilai Prediksi (Skala Log)')
plt.ylabel('Residual')
plt.show()
```
**Analisis Hasil:** Plot residual final sekarang terlihat jauh lebih sehat. Pola corong telah berkurang drastis, dan sebaran titik-titik sekarang jauh lebih acak dan homogen.

> #### **Peringatan Penting: Menginterpretasikan Koefisien pada Skala Log**
> Setelah transformasi, interpretasi koefisien ($b_1$) tidak lagi berarti 'kenaikan $b_1$ unit'.
> * **Aproksimasi Cepat:** Untuk nilai $b_1$ yang kecil (misalnya < 0.3), kenaikan satu unit pada $X_1$ dikaitkan dengan perubahan sekitar **$b_1 \times 100$%** pada Y.
> * **Rumus Tepat:** Interpretasi yang lebih akurat adalah kenaikan satu unit pada $X_1$ dikaitkan dengan perubahan persentase sebesar **$(\exp(b_1) - 1) \times 100$%** pada Y.

---
### Perawatan #3 (Alternatif): Menggunakan Regresi Robust untuk Melawan Outlier

| Dimensi | Deskripsi |
| :--- | :--- |
| **Masalah** | **Outlier/Titik Berpengaruh:** Beberapa titik data ekstrem secara tidak proporsional memengaruhi estimasi koefisien model. |
| **Diagnosis** | Ditemukan melalui plot leverage atau metrik seperti Cook's Distance. Koefisien model berubah secara drastis saat outlier dihilangkan. |
| **Intuisi Solusi** | Daripada menghapus outlier (yang bisa menghilangkan informasi), gunakan metode pemodelan yang secara inheren kurang sensitif terhadapnya. Regresi Robust (RLM) secara otomatis memberikan bobot yang lebih kecil pada observasi dengan residual besar. |
| **Aksi** | Gunakan `statsmodels.rlm` (Robust Linear Model) sebagai alternatif dari OLS. |

```python
from statsmodels.formula.api import rlm

# Membangun model RLM (Robust Linear Model) dengan formula polinomial
# Ini digunakan sebagai alternatif, bukan kelanjutan dari transformasi log
model_robust = rlm(formula_poly, data=album_data_flawed).fit()

# Menampilkan ringkasan dan membandingkan koefisien
print("Koefisien Model OLS Polinomial:")
print(model_poly.params)
print("\nKoefisien Model Regresi Robust:")
print(model_robust.params)
```
**Analisis Hasil:** Koefisien RLM akan kurang terpengaruh oleh outlier, memberikan estimasi yang berpotensi lebih andal tentang hubungan "tipikal" dalam data Anda.

---
### Kerangka Keputusan dan Siklus Berulang

Berikut adalah alur kerja untuk membantu Anda memutuskan perawatan yang tepat. Ingatlah, ini adalah sebuah siklus.

{{< mermaid >}}
flowchart TD
    %% Mendefinisikan kelas gaya yang konsisten
    classDef process fill:#4A5568,stroke:#A0AEC0,stroke-width:2px,color:#fff;
    classDef decision fill:#674188,stroke:#C3ACD0,stroke-width:2px,color:#fff;
    classDef success fill:#28a745,stroke:#28a745,stroke-width:2px,color:#fff;
    classDef warning fill:#C70039,stroke:#900C3F,stroke-width:2px,color:#fff;
    classDef recommendation fill:#d1ecf1,stroke:#bee5eb,stroke-width:2px,color:#0c5460;
    %% Mendefinisikan node/titik dalam flowchart
    A["Mulai: Model Gagal Validasi"]:::warning;
    B{"Apa Masalah Utamanya?"}:::decision;
    C["Gunakan Fitur Polinomial"]:::recommendation;
    D["Gunakan Transformasi Log pada Y"]:::recommendation;
    E["Gunakan Regresi Robust (RLM)"]:::recommendation;
    F{"**Validasi Ulang SEMUA Asumsi**"}:::decision;
    G["Validasi Selesai: Model Andal ✅"]:::success;
    %% Menghubungkan semua node
    A --> B;
    B -- "Pola Melengkung (Non-Linearitas)" --> C;
    B -- "Pola Corong (Heteroskedastisitas)" --> D;
    B -- "Outlier Berpengaruh" --> E;
    C --> F;
    D --> F;
    F -- "Masih Ada Masalah?" --> B;
    F -- "Semua Asumsi Terpenuhi" --> G;
    E --> G;
{{< /mermaid >}}

**Poin Kunci:** Jangan pernah berasumsi bahwa memperbaiki satu masalah akan menyelesaikan semuanya. Setelah setiap penyesuaian, **Anda harus menjalankan kembali seluruh checklist validasi (L.I.N.E.)** untuk memastikan perbaikan Anda tidak secara tidak sengaja menyebabkan masalah baru.

### Melihat ke Depan: Alat Canggih Lainnya
Saat Anda semakin mahir, ada beberapa alat lain yang bisa Anda jelajahi:
* **Transformasi Box-Cox:** Sebuah teknik statistik yang dapat secara otomatis menemukan transformasi daya terbaik (termasuk log) untuk menstabilkan varians.
* **Generalized Additive Models (GAMs):** Model yang lebih fleksibel yang dapat menangkap hubungan non-linear yang kompleks secara otomatis tanpa Anda harus menentukan bentuk polinomialnya secara manual.

---
### Kesimpulan

Kita telah bertransformasi dari seorang diagnostik menjadi seorang "dokter data". Dengan persenjataan teknik seperti fitur polinomial, transformasi log, dan regresi robust, kita tidak lagi hanya pasrah saat menemukan model yang "sakit". Kita sekarang memiliki kemampuan untuk mengintervensi, menerapkan perawatan yang tepat, dan secara iteratif meningkatkan kesehatan dan keandalan model kita.

Ingatlah, pemodelan bukanlah proses sekali jalan, melainkan siklus berkelanjutan dari membangun, mendiagnosis, dan menyempurnakan. **Kemampuan untuk menavigasi siklus inilah yang membedakan seorang praktisi data yang baik dari yang hebat, dan memastikan rekomendasi tindakan yang Anda berikan benar-benar dapat dipertanggungjawabkan.**

## Penelusuran Terkait

-   [How to Perform Polynomial Regression in Python — Statology](https://www.statology.org/polynomial-regression-python/)  
-   [Transformations in Data: Log, Square Root, etc. — Towards Data Science](https://towardsdatascience.com/better-log-transformations-for-data-93246d81f0c0)  
-   [Heteroscedasticity in Regression Analysis — Statistics By Jim](https://statisticsbyjim.com/regression/heteroscedasticity-regression/)  
-   [Robust Linear Models — statsmodels](https://www.statsmodels.org/dev/rlm.html)  
-   [Common Pitfalls in Linear Regression — Analytics Vidhya](https://www.analyticsvidhya.com/blog/2020/10/common-pitfalls-linear-regression/)  
-   [Robust Regression in Python — Statology](https://www.statology.org/robust-regression-python/)  
-   [Polynomial Regression: Extending Linear Models with Basis Functions — scikit-learn](https://scikit-learn.org/stable/modules/linear_model.html#polynomial-regression-extending-linear-models-with-basis-functions)  
-   [Robust Regression in Python — Medium (DataThings)](https://medium.com/datathings/robust-regression-in-python-8d6a4a2f81c9)  
