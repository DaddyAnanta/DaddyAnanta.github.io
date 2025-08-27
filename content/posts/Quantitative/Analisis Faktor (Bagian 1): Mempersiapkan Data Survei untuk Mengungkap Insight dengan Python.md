+++
title = 'Analisis Faktor (Bagian 1): Persiapan Data dan Uji Kelayakan untuk Survei UX dengan Python'
date = 2025-08-25T00:37:00+00:00
draft= false
socialshare= true
description= "Pelajari langkah fundamental Analisis Faktor (EFA) pada data survei UX 20-item, mulai dari persiapan data hingga uji kelayakan menggunakan KMO dan Bartlett's Test di Python."
image = "/images/Quantitative/Seri_Analisis_Faktor/5.webp"
imageBig= "/images/Quantitative/Seri_Analisis_Faktor/5.webp"
categories= ["Quantitative"]
tags= ["Analisis Faktor", "Python", "Statistik", "Survei UX", "Data Preparation"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++


## Pengantar Seri
<div style="background-color: #f8f7fa; border: 1px solid #e0dce6; border-radius: 12px; padding: 24px; font-family: 'Segoe UI', Arial, sans-serif; margin-bottom: 2.5em; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">    <p style="background-color: #e6f4ea; color: #2d6a4f; padding: 16px; border-radius: 8px; line-height: 1.6;">        Selamat datang di <strong>bagian pertama</strong> dari seri tiga bagian kami tentang Analisis Faktor. Di sini, kita akan meletakkan fondasi yang kokoh untuk proyek analisis survei Anda. Kita akan membahas konsep inti di balik EFA dan, yang terpenting, memastikan data Anda yang berisi 20 item benar-benar siap untuk dianalisis sebelum melangkah lebih jauh.    </p>    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-top: 20px;">        <a href="#link-ke-bagian-1" style="flex: 1; min-width: 280px; border: 2px solid #6a1b9a; background-color: #f3e5f5; color: #333; text-decoration: none; padding: 16px; border-radius: 8px; text-align: center; transition: all 0.3s ease;">            <div style="font-size: 0.9em; color: #6a1b9a; margin-bottom: 4px;"><strong>LANGKAH 1</strong></div>            <div style="font-weight: bold; margin-bottom: 4px;"><strong>Persiapan & Uji Kelayakan</strong></div>            <div style="font-size: 0.85em; color: #555;"><strong>Anda di sini</strong></div>        </a>        <a href="http://localhost:1313/posts/quantitative/analisis-faktor-bagian-2-dari-20-variabel-ke-4-pilar-ux-dengan-python/" style="flex: 1; min-width: 280px; border: 1px solid #d3d3d3; background-color: #ffffff; color: #333; text-decoration: none; padding: 16px; border-radius: 8px; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 15px rgba(106, 27, 154, 0.6)'; this.style.borderColor='#6a1b9a';" onmouseout="this.style.boxShadow='none'; this.style.borderColor='#d3d3d3';">            <div style="font-size: 0.9em; color: #888; margin-bottom: 4px;">LANGKAH 2</div>            <div style="font-weight: 500; margin-bottom: 4px;">Analisis & Keputusan</div>            <div style="font-size: 0.85em; color: #888;">Menemukan pilar inti</div>        </a>        <a href="http://localhost:1313/posts/quantitative/analisis_faktor_bagian_3_mengaudit_reliabilitas_pilar_ux_anda_dengan_cronbachs_alpha_di_python/" style="flex: 1; min-width: 280px; border: 1px solid #d3d3d3; background-color: #ffffff; color: #333; text-decoration: none; padding: 16px; border-radius: 8px; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 0 15px rgba(106, 27, 154, 0.6)'; this.style.borderColor='#6a1b9a';" onmouseout="this.style.boxShadow='none'; this.style.borderColor='#d3d3d3';">            <div style="font-size: 0.9em; color: #888; margin-bottom: 4px;">LANGKAH 3</div>            <div style="font-weight: 500; margin-bottom: 4px;">Audit & Validasi</div>            <div style="font-size: 0.85em; color: #888;">Memastikan kualitas skala</div>        </a>    </div></div>

## Landasan Teori: Apa Itu Analisis Faktor?
Secara intuitif, EFA bertujuan untuk mengidentifikasi **faktor laten** (struktur tersembunyi) di antara sekumpulan variabel yang teramati. Dasarnya adalah asumsi bahwa korelasi antar variabel disebabkan oleh adanya satu atau lebih "konstruk" yang tidak dapat kita ukur secara langsung. Menurut Kaiser (1974), asumsi ini mendasari model EFA.

Model EFA fundamental dapat direpresentasikan sebagai berikut:
<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;"><p>$$X_i = \lambda_{i1}F_1 + \lambda_{i2}F_2 + \dots + \lambda_{ik}F_k + \epsilon_i$$</p></div>

Di mana $X_i$ adalah variabel teramati (jawaban kuesioner), $F_k$ adalah faktor laten (misal: 'Keandalan'), dan $\lambda_{ik}$ adalah _beban faktor_ (factor loading) yang menunjukkan seberapa kuat hubungan antara keduanya.

## Contoh Kasus
### Studi Kasus & Data: Survei Pengalaman Pengguna ShopZenith
Pemilihan skala Likert ini umum dalam survei UX karena mencerminkan respons subyektif. Kita akan membuat dataset `df_ux_survey` yang lebih realistis. Datanya akan berupa **integer** dalam **skala 5 poin** (1=Sangat Tidak Setuju, 5=Sangat Setuju), dan polanya tidak akan sempurna untuk meniru data di dunia nyata.

```python
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from factor_analyzer import FactorAnalyzer
from factor_analyzer.factor_analyzer import calculate_bartlett_sphericity, calculate_kmo

np.random.seed(123)
n_samples = 500

# Membuat 4 faktor laten
keandalan = np.random.normal(0, 1, n_samples)
aplikasi = np.random.normal(0, 1, n_samples)
layanan = np.random.normal(0, 1, n_samples)
nilai = np.random.normal(0, 1, n_samples)

# Membuat 20 item survei dengan noise yang lebih acak
data = {}
item_names = []

# Faktor 1: Keandalan (5 item)
for i in range(1, 6):
    name = f"q{i}_keandalan"
    data[name] = keandalan + np.random.normal(0, 1.2, n_samples)
    item_names.append(name)

# Faktor 2: Aplikasi (5 item)
for i in range(6, 11):
    name = f"q{i}_aplikasi"
    # q10 sedikit dipengaruhi faktor lain
    if i == 10:
        data[name] = aplikasi*0.8 + layanan*0.2 + np.random.normal(0, 1.2, n_samples)
    else:
        data[name] = aplikasi + np.random.normal(0, 1.2, n_samples)
    item_names.append(name)

# Faktor 3: Layanan (6 item)
for i in range(11, 17):
    name = f"q{i}_layanan"
    data[name] = layanan + np.random.normal(0, 1.2, n_samples)
    item_names.append(name)

# Faktor 4: Nilai (4 item)
for i in range(17, 21):
    name = f"q{i}_nilai"
    # q20 dibuat sengaja lemah
    if i == 20:
        data[name] = nilai*0.5 + np.random.normal(0, 2.0, n_samples)
    else:
        data[name] = nilai + np.random.normal(0, 1.2, n_samples)
    item_names.append(name)

df_ux_survey = pd.DataFrame(data)

# Mengubah data float menjadi skala Likert 5 poin (integer)
for col in df_ux_survey.columns:
    df_ux_survey[col] = pd.cut(df_ux_survey[col], bins=5, labels=range(1, 6), include_lowest=True)

df_ux_survey = df_ux_survey.astype(int)
df_ux_survey
````

<div class="single-image-source"> <img src="/images/Quantitative/Seri_Analisis_Faktor/1.webp" alt="Ilustrasi kelompok penelitian" style="height:60%;width:60%;display:block;margin-left:auto;margin-right:auto;"></div>

## Uji Kelayakan: Validasi Statistik Data Anda

Sebelum melangkah lebih jauh, kita harus memastikan data kita layak dianalisis.



```Python
# Uji Bartlett's
chi_square_value, p_value = calculate_bartlett_sphericity(df_ux_survey)
print(f"Bartlett's Test: Chi-Square={chi_square_value:.2f}, p-value={p_value:.3e}")

# Uji KMO
kmo_all, kmo_model = calculate_kmo(df_ux_survey)
print(f"KMO Test: Overall MSA={kmo_model:.2f}")
```

```
Bartlett's Test: Chi-Square=1660.07, p-value=8.520e-233
KMO Test: Overall MSA=0.76
```

Hasilnya: **p-value Bartlett's sangat kecil** dan **skor KMO di atas 0.7**, memberi kita lampu hijau untuk melanjutkan. Secara standar, p-value <0.05 dan KMO >0.7 menunjukkan data cocok untuk EFA (menurut Hutcheson & Sofroniou, 1999).

Di bagian 2, kita akan menyelami ekstraksi faktor untuk menemukan pilar UX inti.

<div style="background-color: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 12px; padding: 25px; margin: 30px 0; font-family: 'Segoe UI', Arial, sans-serif; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
    <h4 style="margin-top: 0; margin-bottom: 12px; font-size: 22px; color: #333; text-align: center; line-height: 1.4;">Praktik Langsung: <strong style="color: #007bff;">Unduh Kode Lengkap</strong></h4>
    <p style="font-size: 16px; color: #555; margin-bottom: 25px; text-align: center; line-height: 1.7;">
        Ingin mencoba sendiri analisis ini? Unduh Jupyter Notebook yang berisi seluruh kode dari seri tiga bagian ini, mulai dari persiapan data hingga audit reliabilitas.
    </p>
    <div style="text-align: center;">
        <a href="/download/Quantitative/Seri_Analisis_Faktor/Analisis Faktor.ipynb" download
           style="display: inline-flex; align-items: center; justify-content: center; background-color: #007bff; color: #ffffff; padding: 15px 30px; font-size: 18px; font-weight: bold; text-decoration: none; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3); transition: all 0.3s ease; letter-spacing: 0.5px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 10px;">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
            </svg>
            Unduh Jupyter Notebook (.ipynb)
        </a>
        <p style="font-size: 14px; color: #6c757d; margin-top: 12px; margin-bottom: 0;">
            Ukuran file: 68,8 kB
        </p>
    </div>
</div>

Dalam konteks medis atau psikologi pendidikan, pendekatan ini bisa diterapkan untuk survei pasien atau analisis faktor dalam penelitian perilaku.

Dengan fondasi EFA yang kuat, dari pemahaman teori hingga validasi data, Anda kini siap menggali struktur tersembunyi dalam survei. Pendekatan ini tidak hanya meningkatkan akurasi analisis, tapi juga mendukung praktik evidence-based di berbagai bidang seperti psikologi pendidikan dan penelitian klinis.

<a href="https://daddyananta.github.io//categories/quantitative/">Perdalam pemahaman Quantitative Anda di sini</a>

## Referensi

<p style="text-indent:0px;">Kaiser, H.F.(1974). An index of factorial simplicity. <a href="https://doi.org/10.1007/BF02291575">Psychometrika</a></p>
<p style="text-indent:0px;">Hutcheson, G.D., & Sofroniou, N.(1999). The Multivariate Social Scientist. <a href="https://doi.org/10.4135/9780857028075">SAGE Publications</a></p>

## Penelusuran Terkait

- <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7883798/">Factor Analysis: a means for theory and instrument ...</a>
    
- <a href="https://journals.sagepub.com/doi/10.1177/1523422314559804">Exploratory Factor Analysis - Thomas G. Reio, Brad Shuck, ...</a>
    
- <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4178683">Exploratory Factor Analysis; Concepts and Theory</a>
    
- <a href="https://www.sciencedirect.com/topics/nursing-and-health-professions/exploratory-factor-analysis">Exploratory Factor Analysis - an overview</a>
    
- <a href="https://datapott.com/kaiser-meyer-olkin-kmo-and-bartletts-test-of-sphericity-in-spss/">Kaiser-Meyer-Olkin (KMO) and Bartlett's Test of Sphericity in SPSS</a>
    
- <a href="https://stats.oarc.ucla.edu/spss/seminars/introduction-to-factor-analysis/a-practical-introduction-to-factor-analysis/">A Practical Introduction to Factor Analysis - OARC Stats - UCLA</a>
    
- <a href="https://www.statistischedatenanalyse.de/images/Exploratory_Factor_Analysis-EFA-How_to_interpret_KMO_and_Bartletts_test.pdf">[PDF] Exploratory Factor Analysis (EFA), How to interpret KMO and Bartlett ...</a>
    
- <a href="https://datatab.net/tutorial/exploratory-factor-analysis">Exploratory Factor Analysis: A Beginner's Guide</a>