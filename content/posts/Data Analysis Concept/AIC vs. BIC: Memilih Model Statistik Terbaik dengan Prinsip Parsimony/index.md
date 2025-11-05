+++
title= "AIC vs. BIC: Memilih Model Statistik Terbaik dengan Prinsip Parsimony"
date = 2025-09-05T08:16:14+09:00
draft = true
socialshare = true
description = "Pelajari intuisi di balik AIC dan BIC. Pahami trade-off antara akurasi dan kompleksitas untuk memilih model statistik yang lebih baik dan menghindari overfitting."
image = "1.webp"
imageBig= "1.webp"
categories= ["Data Analysis Concepts"] 
tags= [ "Regresi-Logistic" ]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++

## Dilema Sang Pemodel — Akurasi vs. Parsimony

Sebagai seorang Data Scientist, Anda pasti pernah dihadapkan pada skenario klasik ini: dua model prediksi di hadapan Anda. Model A, dengan banyak prediktor, sedikit lebih unggul dalam akurasi. Model B, jauh lebih sederhana dengan sedikit prediktor, namun akurasinya sedikit di bawah Model A. Mana yang akan Anda pilih?

Godaan untuk terus menambahkan variabel demi sedikit peningkatan akurasi sangatlah besar. Namun, setiap variabel tambahan membawa "beban"—model menjadi lebih sulit diinterpretasikan, lebih mahal untuk dijalankan, dan yang paling penting, **lebih rentan terhadap *overfitting***. Overfitting terjadi ketika model "menghafal" pola spesifik dari data pelatihan, sehingga kinerjanya buruk saat menghadapi data baru yang belum pernah dilihat sebelumnya.



Di sinilah **Prinsip Parsimony (Pisau Occam)** berperan: di antara penjelasan yang bersaing, pilihlah yang paling sederhana namun tetap efektif. Untuk menavigasi dilema ini, para ahli statistik telah mengembangkan sebuah "kompas" yang elegan: **Akaike Information Criterion (AIC)** dan **Bayesian Information Criterion (BIC)**. Ini bukan sekadar metrik, melainkan sebuah filosofi yang terwujud dalam rumus, yang membantu kita menyeimbangkan kebaikan model dengan "pajak" untuk setiap kompleksitas yang ditambahkan. Artikel ini akan menyelami intuisi, rumus, dan implementasi AIC dan BIC, sekaligus mengintegrasikannya ke dalam alur kerja diagnostik model regresi logistik yang komprehensif.

## Fondasi Statistik: Mengukur Kecocokan dan Ketidakcocokan Model

Sebelum memahami AIC dan BIC, kita perlu memahami bagaimana "kecocokan" model diukur, khususnya dalam konteks model linier generalisasi (GLM) seperti regresi logistik.

### 1. Log-Likelihood: Seberapa Baik Model Menjelaskan Data?
Inti dari banyak model statistik adalah konsep *likelihood*. Dalam regresi logistik, **Log-Likelihood (LL)** mengukur seberapa baik probabilitas yang diprediksi model sesuai dengan hasil aktual (0 atau 1) yang kita amati di data. Secara intuitif, Log-Likelihood mengukur "kemungkinan" data yang kita amati terjadi jika model kita adalah representasi yang benar dari proses yang mendasarinya. Karena kita bekerja dengan probabilitas (antara 0 dan 1) yang dilogaritmakan, nilai Log-Likelihood akan selalu negatif.

Sebuah model yang lebih baik akan memiliki nilai Log-Likelihood yang "lebih tinggi" (yaitu, lebih dekat ke nol, atau kurang negatif).

$$ \text{Log-Likelihood (LL)} = \sum_{i=1}^{N} [Y_i \ln(\hat{P}(Y_i)) + (1-Y_i)\ln(1-\hat{P}(Y_i))] $$

Di mana:
* `N` adalah jumlah observasi.
* `Y_i` adalah nilai aktual dari variabel respons untuk observasi ke-`i` (0 atau 1).
* `\hat{P}(Y_i)` adalah probabilitas yang diprediksi oleh model untuk observasi ke-`i` (yaitu, `P(Y_i=1)`).

### 2. Deviance: Ukuran "Ketidakcocokan" Model
Para ahli statistik seringkali lebih nyaman bekerja dengan ukuran "kesalahan" atau "ketidakcocokan". Dengan mengalikan Log-Likelihood dengan -2, kita mendapatkan **Deviance**.

$$ \text{Deviance} = -2 \times \text{Log-Likelihood (LL)} $$

Analogi terbaik untuk Deviance adalah skor dalam permainan golf: **semakin rendah skor Deviance, semakin baik modelnya**. Sebuah Deviance yang mendekati nol menunjukkan model yang sangat cocok dengan data.

Dalam konteks Regresi Logistik, kita sering membandingkan **Residual Deviance** (Deviance dari model yang sedang kita evaluasi) dengan **Null Deviance** (Deviance dari model paling sederhana yang hanya mencakup *intercept*, tanpa prediktor). Perbedaan antara Null Deviance dan Residual Deviance dapat digunakan untuk mengukur seberapa baik prediktor kita secara kolektif menjelaskan variabilitas dalam respons.

## Solusi Elegan: Memberi "Pajak" pada Kompleksitas Model

Mengejar skor Deviance terendah secara membabi buta akan selalu membawa kita ke dalam perangkap overfitting. Di sinilah AIC dan BIC menawarkan solusi yang elegan. Mereka "memajaki" setiap parameter tambahan dalam model, mendorong kita untuk memilih model yang sederhana namun tetap prediktif.

### 1. Akaike Information Criterion (AIC): Keseimbangan Prediksi
**AIC** dikembangkan oleh Hirotugu Akaike pada tahun 1970-an. Tujuan utamanya adalah memilih model yang akan memberikan **prediksi terbaik** pada data baru. AIC menghargai kecocokan model (Deviance rendah) tetapi secara bersamaan memberikan penalti untuk setiap parameter yang ditambahkan.

Rumus AIC adalah:
$$ \text{AIC} = -2LL + 2k $$

Di mana:
* `-2LL` adalah Deviance model (ukuran ketidakcocokan).
* `k` adalah **jumlah parameter yang diestimasi** dalam model. Ini mencakup `intercept` ditambah jumlah koefisien untuk setiap prediktor.

**Interpretasi AIC:**
Model dengan nilai AIC **terendah** dianggap sebagai model terbaik. Ini menunjukkan model yang mencapai keseimbangan optimal antara kecocokan data dan kesederhanaan.

**Contoh:**
Bayangkan kita membandingkan dua model regresi logistik:
* **Model A:** Deviance = 150, jumlah parameter (k) = 3 (misalnya, 2 prediktor + 1 intercept)
* **Model B:** Deviance = 148, jumlah parameter (k) = 5 (misalnya, 4 prediktor + 1 intercept)

Perhitungan AIC mereka:
* AIC Model A = 150 + (2 * 3) = **156**
* AIC Model B = 148 + (2 * 5) = **158**

Meskipun Model B memiliki Deviance yang lebih rendah (lebih "cocok"), "pajak" untuk dua parameter tambahannya membuat skor AIC-nya lebih tinggi. Oleh karena itu, berdasarkan AIC, **Model A yang lebih sederhana lebih disukai** untuk tujuan prediksi.

### 2. Bayesian Information Criterion (BIC): Fokus pada Inferensi
**BIC**, juga dikenal sebagai Schwarz Information Criterion (SIC), diperkenalkan oleh Gideon Schwarz pada tahun 1978. BIC mirip dengan AIC tetapi memberikan penalti yang **lebih tegas** pada kompleksitas model, terutama untuk ukuran sampel yang besar. BIC lebih cenderung memilih model yang lebih sederhana dan seringkali digunakan ketika tujuan utama adalah **inferensi** atau **penjelasan** hubungan yang mendasari data, bukan semata-mata prediksi.

Rumus BIC adalah:
$$ \text{BIC} = -2LL + k \ln(N) $$

Di mana:
* `-2LL` adalah Deviance model.
* `k` adalah jumlah parameter yang diestimasi dalam model.
* `N` adalah jumlah observasi (ukuran sampel).

**Perbedaan Utama dengan AIC:**
Penalti `k \ln(N)` pada BIC lebih besar daripada `2k` pada AIC ketika `N > 7`. Ini berarti BIC akan lebih kuat "menghukum" model yang kompleks dan cenderung memilih model yang lebih parsimonius, terutama dengan ukuran dataset yang besar.

**Kapan Menggunakan AIC vs. BIC?**
* **Gunakan AIC** jika tujuan Anda adalah **prediksi**. Jika Anda membangun sistem deteksi *fraud* di mana akurasi pada transaksi baru adalah segalanya, AIC adalah pilihan yang kuat. AIC sering kali memilih model yang sedikit lebih kompleks yang berkinerja baik dalam prediksi *out-of-sample*.
* **Gunakan BIC** jika tujuan Anda adalah **inferensi** atau penjelasan. Jika Anda seorang peneliti yang mencoba memahami faktor-faktor fundamental yang menyebabkan suatu fenomena untuk publikasi ilmiah, BIC lebih disukai karena ia lebih cenderung memilih model dengan variabel yang benar-benar berpengaruh, mengurangi risiko *false positives*.

## Alur Kerja Komprehensif: Diagnostik dan Pemilihan Model Regresi Logistik

Pemilihan model yang baik tidak hanya berhenti pada AIC/BIC. Ini adalah bagian dari proses iteratif yang lebih besar yang melibatkan diagnostik model dan validasi.

{{< mermaid >}}
flowchart TD
    %% Mendefinisikan kelas gaya yang konsisten
    classDef process fill:#4A5568,stroke:#A0AEC0,stroke-width:2px,color:#fff;
    classDef decision fill:#674188,stroke:#C3ACD0,stroke-width:2px,color:#fff;
    classDef success fill:#28a745,stroke:#28a745,stroke-width:2px,color:#fff;
    classDef warning fill:#C70039,stroke:#900C3F,stroke-width:2px,color:#fff;
    classDef recommendation fill:#d1ecf1,stroke:#bee5eb,stroke-width:2px,color:#0c5460;
    %% Mendefinisikan node/titik dalam flowchart
    A["Mulai: Persiapan Data &<br>Pemahaman Masalah"]:::process;
    B{"Identifikasi Variabel Potensial<br>& Hipotesis"}:::decision;
    C["Bangun Model Regresi Logistik Awal"]:::process;
    D{"Evaluasi Goodness-of-Fit:<br>Uji Hosmer-Lemeshow, Deviance"}:::decision;
    E{"Periksa Multikolinearitas (VIF)"}:::decision;
    F{"Periksa Linearitas Log-Odds:<br>Analisis Residual, Uji Box-Tidwell"}:::decision;
    G{"Identifikasi Outlier/Influential Points<br>(Cook's Distance, DFBETAS)"}:::decision;
    H{"Evaluasi Kinerja Prediksi:<br>AUC-ROC, Accuracy, Precision, Recall, F1-Score"}:::decision;
    I{"Bandingkan Model (jika ada beberapa kandidat):<br>AIC, BIC, Uji Rasio Kemungkinan"}:::decision;
    J["Interpretasi Koefisien Model Terbaik<br>(Odds Ratio)"]:::recommendation;
    K["Validasi Model: Data Uji<br>/ Cross-Validation"]:::process;
    L["✅ Selesai: Deploy Model atau<br>Iterasi & Refine"]:::success;
    M["❗ Revisi Model:<br>Ubah Prediktor/Struktur"]:::warning;
    %% Menghubungkan semua node
    A --> B;
    B --> C;
    C --> D;
    D -- OK --> E;
    E -- VIF OK --> F;
    F -- OK --> G;
    G -- OK --> H;
    H -- Kinerja Baik --> I;
    I --> J;
    J --> K;
    K --> L;
    
    D -- "Tidak OK" --> M;
    E -- "VIF Tinggi" --> M;
    F -- "Tidak Linear" --> M;
    G -- "Outlier/Influential" --> M;
    M --> C;
{{< /mermaid >}}

### Penjelasan Tahapan Penting dalam Alur Kerja:

1.  **Evaluasi Goodness-of-Fit:** Selain Deviance, uji seperti **Hosmer-Lemeshow** dapat membantu menilai seberapa baik probabilitas yang diprediksi model cocok dengan observasi aktual, terutama pada kelompok risiko yang berbeda.
2.  **Multikolinearitas (VIF):** **Variance Inflation Factor (VIF)** mengukur seberapa banyak varians koefisien regresi yang diperbesar karena multikolinearitas (korelasi antar prediktor). VIF > 5 atau > 10 sering dianggap mengkhawatirkan dan dapat membuat interpretasi koefisien menjadi tidak stabil.
3.  **Linearitas Log-Odds:** Regresi logistik mengasumsikan hubungan linear antara prediktor numerik dan logit (log-odds) dari variabel respons. Ini dapat diperiksa dengan menganalisis residual atau uji Box-Tidwell.
4.  **Outlier & Influential Points:** Observasi *outlier* atau *influential* (misalnya dengan **Cook's Distance** atau **DFBETAS**) dapat sangat memengaruhi estimasi koefisien model.
5.  **Interpretasi Koefisien (Odds Ratio):** Dalam regresi logistik, koefisien model ditransformasikan menjadi **Odds Ratio (OR)**. OR > 1 berarti peningkatan satu unit pada prediktor akan meningkatkan peluang kejadian respons, sedangkan OR < 1 akan menurunkannya. Misalnya, OR = 1.5 berarti peluang kejadian meningkat 50%.

## Implementasi Praktis dengan Python

Mari kita demontrasikan bagaimana menghitung dan membandingkan AIC serta BIC menggunakan `statsmodels` di Python.

```python
import pandas as pd
import numpy as np
import statsmodels.api as sm
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, accuracy_score, classification_report
from statsmodels.stats.outliers_influence import variance_inflation_factor

# 1. Siapkan Data Contoh
# Kita akan membuat data sintetis untuk demonstrasi
np.random.seed(42)
n_samples = 1000
X = pd.DataFrame({
    'prediktor1': np.random.rand(n_samples) * 10,
    'prediktor2': np.random.rand(n_samples) * 5,
    'prediktor3': np.random.rand(n_samples) * 3,
    'prediktor4_dummy': np.random.randint(0, 2, n_samples) # Variabel dummy
})
X['prediktor5_interaksi'] = X['prediktor1'] * X['prediktor2'] # Prediktor interaksi

# Membuat variabel respons Y berdasarkan model logistik 'sebenarnya'
# Log-odds = -3 + 0.5*prediktor1 + 1.2*prediktor2 - 0.8*prediktor4_dummy
lin_comb = -3 + 0.5 * X['prediktor1'] + 1.2 * X['prediktor2'] - 0.8 * X['prediktor4_dummy']
prob = 1 / (1 + np.exp(-lin_comb))
y = (prob > np.random.rand(n_samples)).astype(int) # Respons biner

# Tambahkan konstanta untuk intercept (wajib untuk statsmodels)
X = sm.add_constant(X)

# Bagi data menjadi training dan testing
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

print("Data berhasil disiapkan dan dibagi.\n")

# 2. Bangun dan Bandingkan Beberapa Model Regresi Logistik

# Model 1: Sederhana (hanya prediktor1 dan prediktor2)
print("--- Membangun Model 1 (Prediktor: prediktor1, prediktor2) ---")
model1_predictors = ['const', 'prediktor1', 'prediktor2']
logit_model1 = sm.Logit(y_train, X_train[model1_predictors])
result1 = logit_model1.fit()
print(result1.summary())
print(f"AIC Model 1: {result1.aic:.2f}")
print(f"BIC Model 1: {result1.bic:.2f}\n")

# Model 2: Menambahkan prediktor3 dan prediktor4_dummy
print("--- Membangun Model 2 (Prediktor: prediktor1, prediktor2, prediktor3, prediktor4_dummy) ---")
model2_predictors = ['const', 'prediktor1', 'prediktor2', 'prediktor3', 'prediktor4_dummy']
logit_model2 = sm.Logit(y_train, X_train[model2_predictors])
result2 = logit_model2.fit()
print(result2.summary())
print(f"AIC Model 2: {result2.aic:.2f}")
print(f"BIC Model 2: {result2.bic:.2f}\n")

# Model 3: Menambahkan prediktor interaksi (prediktor5_interaksi)
print("--- Membangun Model 3 (Prediktor: prediktor1, prediktor2, prediktor3, prediktor4_dummy, prediktor5_interaksi) ---")
model3_predictors = ['const', 'prediktor1', 'prediktor2', 'prediktor3', 'prediktor4_dummy', 'prediktor5_interaksi']
logit_model3 = sm.Logit(y_train, X_train[model3_predictors])
result3 = logit_model3.fit()
print(result3.summary())
print(f"AIC Model 3: {result3.aic:.2f}")
print(f"BIC Model 3: {result3.bic:.2f}\n")

# 3. Perbandingan AIC dan BIC
print("--- Ringkasan Perbandingan Model ---")
print(f"Model 1 (k={len(model1_predictors)}): AIC={result1.aic:.2f}, BIC={result1.bic:.2f}")
print(f"Model 2 (k={len(model2_predictors)}): AIC={result2.aic:.2f}, BIC={result2.bic:.2f}")
print(f"Model 3 (k={len(model3_predictors)}): AIC={result3.aic:.2f}, BIC={result3.bic:.2f}")

# Menentukan model terbaik berdasarkan AIC dan BIC
best_aic_model = np.argmin([result1.aic, result2.aic, result3.aic]) + 1
best_bic_model = np.argmin([result1.bic, result2.bic, result3.bic]) + 1

print(f"\nModel terbaik berdasarkan AIC adalah Model {best_aic_model}")
print(f"Model terbaik berdasarkan BIC adalah Model {best_bic_model}")

# 4. Contoh Diagnostik Tambahan: VIF untuk Multikolinearitas
print("\n--- Diagnostik Model: VIF untuk Model Terbaik (Misalnya Model 2) ---")
# Hitung VIF hanya untuk prediktor, bukan 'const'
X_diag = X_train[model2_predictors].drop(columns=['const'])
vif_data = pd.DataFrame()
vif_data["feature"] = X_diag.columns
vif_data["VIF"] = [variance_inflation_factor(X_diag.values, i) for i in range(len(X_diag.columns))]
print(vif_data)

# 5. Contoh Interpretasi Odds Ratio (dari Model Terbaik, misal Model 2)
print("\n--- Interpretasi Odds Ratio dari Model Terbaik (Model 2) ---")
odds_ratios = np.exp(result2.params)
summary_odds_ratios = pd.DataFrame({'Coef': result2.params, 'Odds Ratio': odds_ratios})
print(summary_odds_ratios)

print("\n**Interpretasi:**")
print("Odds Ratio untuk 'prediktor1' sebesar [Odds Ratio value] berarti setiap peningkatan satu unit pada prediktor1, kemungkinan terjadinya peristiwa (Y=1) meningkat sebesar ([Odds Ratio value] - 1) * 100%,"
      " dengan asumsi prediktor lain tetap.")
print("Odds Ratio untuk 'prediktor4_dummy' sebesar [Odds Ratio value] berarti ketika prediktor4_dummy berubah dari 0 ke 1, kemungkinan terjadinya peristiwa (Y=1) meningkat sebesar ([Odds Ratio value] - 1) * 100%,"
      " dengan asumsi prediktor lain tetap.")
```

**Penjelasan Kode:**
* **Data Sintetis:** Kita membuat dataset simulasi untuk mempraktikkan regresi logistik.
* **Pembangunan Model:** Tiga model logistik dibangun dengan jumlah prediktor yang berbeda. `sm.add_constant(X)` digunakan untuk menambahkan *intercept*, yang dihitung sebagai parameter `k`.
* **Output `summary()`:** Fungsi `fit()` dari `statsmodels` menghasilkan objek `result` yang kaya informasi, termasuk AIC (`result.aic`) dan BIC (`result.bic`). Anda akan melihat nilai ini dalam ringkasan output.
* **Perbandingan:** Model dengan nilai AIC atau BIC terendah adalah yang paling disukai. Dalam contoh ini, Anda dapat mengamati bagaimana penalti `k` (dan `ln(N)` untuk BIC) memengaruhi pilihan model.
* **VIF:** Dihitung untuk memeriksa multikolinearitas. Nilai VIF di atas 5 atau 10 biasanya memerlukan perhatian.
* **Odds Ratio:** `np.exp(result.params)` digunakan untuk mengubah koefisien log-odds menjadi odds ratio yang lebih mudah diinterpretasikan.

## Kesimpulan: Arsitek Model yang Bijaksana

Memilih model terbaik bukanlah tentang menemukan satu angka ajaib, melainkan sebuah proses yang holistik. Metrik seperti AIC dan BIC adalah kompas yang sangat berharga yang membantu kita menavigasi *trade-off* kompleks antara kecocokan model dan kesederhanaan. Mereka memaksa kita untuk memikirkan biaya dari setiap kompleksitas yang kita tambahkan, mengubah kita dari sekadar "pelatih model" menjadi "arsitek model" yang bijaksana.

Dengan memahami Log-Likelihood dan Deviance sebagai fondasi, menerapkan AIC dan BIC untuk pemilihan model yang seimbang, dan mengintegrasikannya dalam alur kerja diagnostik model yang komprehensif (termasuk VIF, linearitas log-odds, dan interpretasi Odds Ratio), Anda akan siap membangun model yang tidak hanya akurat tetapi juga kuat, dapat diinterpretasikan, dan andal untuk memecahkan masalah bisnis nyata. Pada akhirnya, model terbaik bukan hanya yang memiliki skor terendah, tetapi yang paling berguna, dapat diinterpretasikan, dan andal untuk memecahkan masalah nyata Anda.

## Penelusuran Terkait

-   [Discrete Choice Models — statsmodels](https://www.statsmodels.org/stable/discretemod.html)  
-   [Logistic Regression — Statistics Solutions](https://www.statisticssolutions.com/free-resources/directory-of-statistical-analyses/logistic-regression/)  
-   [1.1. Generalized Linear Models — scikit-learn documentation](https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression)  
-   [Understanding Logistic Regression in Python — DataCamp](https://www.datacamp.com/tutorial/understanding-logistic-regression-python)  
-   [Understanding Logistic Regression — GeeksforGeeks](https://www.geeksforgeeks.org/understanding-logistic-regression/)  
-   [Logistic Regression: Detailed Overview — Towards Data Science](https://towardsdatascience.com/logistic-regression-detailed-overview-46c4da4303bc)  
-   [What is Logistic Regression? — IBM](https://www.ibm.com/topics/logistic-regression)  
-   [Logistic Regression: A Step-by-Step Guide with Examples — Scribbr](https://www.scribbr.com/statistics/logistic-regression/)  
