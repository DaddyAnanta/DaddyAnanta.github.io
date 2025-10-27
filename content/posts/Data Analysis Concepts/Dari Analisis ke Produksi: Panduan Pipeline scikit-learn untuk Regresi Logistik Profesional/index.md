+++
title= "Dari Analisis ke Produksi: Panduan Pipeline scikit-learn untuk Regresi Logistik Profesional"
date = 2025-09-05T09:18:14+09:00
draft = false
socialshare = true
description = "Tingkatkan alur kerja analisis Anda dari statsmodels ke scikit-learn. Pelajari cara membangun Pipeline regresi logistik yang bersih, andal, dan siap produksi."
image = "1.webp"
imageBig= "1.webp"
categories= ["Data Analysis Concepts"] 
tags= [ "Regresi-Logistic" ]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++


Skrip analisis Anda di `statsmodels` bekerja dengan sempurna. Anda telah menemukan wawasan berharga dan interpretasi modelnya sangat jelas. Namun, sekarang muncul tantangan berikutnya: bagaimana cara menerapkan model ini secara andal pada data baru, atau bagaimana cara rekan tim Anda mereproduksi hasil Anda tanpa kesalahan? Proses manual sangat bagus untuk eksplorasi, tetapi bisa menjadi rapuh, repetitif, dan rentan terhadap kesalahan saat beralih ke lingkungan produksi.

Inilah saatnya untuk naik level. Artikel ini akan memandu Anda mentransisikan alur kerja analisis dari pendekatan eksploratif ke sistem yang kuat, dapat direproduksi, dan otomatis menggunakan `Pipeline` di `scikit-learn`. Ini bukan hanya tentang mengganti library, tetapi tentang mengadopsi pola pikir rekayasa perangkat lunak untuk membangun sistem machine learning yang profesional.

## Mengapa Skrip Manual Tidak Cukup untuk Produksi?

`statsmodels` luar biasa untuk inferensi—memahami "mengapa" di balik data Anda. Namun, ketika tujuannya beralih ke **prediksi** yang andal pada data baru, alur kerja yang terpisah-pisah dapat menimbulkan masalah serius, salah satunya adalah **kebocoran data (data leakage)**.

Bayangkan Anda melakukan penskalaan data sebelum validasi silang. Kode Anda mungkin terlihat seperti ini:

```python
# Cara yang SALAH dan menyebabkan data leakage
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import cross_val_score

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X) #<- BOCOR! Informasi dari seluruh data digunakan.
scores = cross_val_score(model, X_scaled, y, cv=5)
```
`scaler` mempelajari rata-rata dan standar deviasi dari *seluruh dataset*, termasuk data yang seharusnya menjadi bagian dari *fold* validasi. Informasi dari masa depan (data uji) "bocor" ke dalam proses pelatihan, menghasilkan skor evaluasi yang terlalu optimis dan model yang berkinerja buruk di dunia nyata. `Pipeline` secara elegan mencegah masalah ini dengan memastikan setiap langkah pra-pemrosesan hanya "melihat" data pelatihan yang sesuai pada saat itu juga.

## Skenario Kasus: Prediksi Keberhasilan Promosi

Kita akan menggunakan kembali skenario "LarisManis", di mana kita ingin memprediksi keberhasilan promosi berdasarkan jenis, durasi, dan channel iklan. Tujuannya adalah membangun sistem yang dapat menerima data kampanye baru dan memprediksinya secara otomatis.

```python
import pandas as pd
import numpy as np

# Menyiapkan data yang dapat direproduksi
np.random.seed(42)
n_campaigns = 300
jenis_promo = np.random.choice(['Diskon', 'Gratis Ongkir', 'Cashback'], n_campaigns, p=[0.4, 0.3, 0.3])
durasi_hari = np.random.randint(3, 31, size=n_campaigns)
channel_iklan = np.random.choice(['Email', 'Sosmed'], n_campaigns, p=[0.5, 0.5])
df_temp = pd.DataFrame({'jenis_promo': jenis_promo, 'durasi_hari': durasi_hari, 'channel_iklan': channel_iklan})
promo_effect = df_temp['jenis_promo'].map({'Diskon': -0.5, 'Gratis Ongkir': 0.2, 'Cashback': 1.2})
channel_effect = df_temp['channel_iklan'].map({'Email': -0.1, 'Sosmed': 0.1})
logit_success = -1 + promo_effect + (df_temp['durasi_hari'] * 0.05) + channel_effect + np.random.normal(0, 0.5, n_campaigns)
probability_success = 1 / (1 + np.exp(-logit_success))
berhasil = (probability_success > 0.5).astype(int)
df_promo = df_temp.copy()
df_promo['berhasil'] = berhasil

X = df_promo.drop('berhasil', axis=1)
y = df_promo['berhasil']
```

## Alur Kerja Pipeline dari Awal hingga Akhir

Sebelum menyelami kode, mari kita lihat gambaran besar dari proses yang akan kita bangun. Flowchart berikut menguraikan setiap langkah, mulai dari data mentah hingga model yang siap digunakan untuk prediksi.

{{< mermaid >}}
flowchart TD
    %% Mendefinisikan kelas gaya yang konsisten
    classDef process fill:#4A5568,stroke:#A0AEC0,stroke-width:2px,color:#fff;
    classDef decision fill:#674188,stroke:#C3ACD0,stroke-width:2px,color:#fff;
    classDef success fill:#28a745,stroke:#28a745,stroke-width:2px,color:#fff;
    classDef recommendation fill:#d1ecf1,stroke:#bee5eb,stroke-width:2px,color:#0c5460;
    %% Mendefinisikan node/titik dalam flowchart
    A["Mulai: Data Mentah (X, y)"]:::process;
    B{"Identifikasi Tipe Fitur"}:::decision;
    C["Numerik: `durasi_hari`"]:::process;
    D["Kategorikal: `jenis_promo`,<br>`channel_iklan`"]:::process;
    E["Definisikan Transformer Numerik:<br>`StandardScaler`"]:::recommendation;
    F["Definisikan Transformer Kategorikal:<br>`OneHotEncoder`"]:::recommendation;
    subgraph "Langkah 1: Buat Blueprint Pra-pemrosesan"
        G["ColumnTransformer"]:::process;
    end
    subgraph "Langkah 2: Rakit Alur Kerja Lengkap"
        H["Pipeline"]:::process;
    end
    I["Model: `LogisticRegression`"]:::process;
    J{"Evaluasi & Tuning"}:::decision;
    K["Validasi Silang dengan<br>`cross_val_score`"]:::recommendation;
    L["Tuning Hyperparameter dengan<br>`GridSearchCV`"]:::recommendation;
    M["Latih Pipeline Final pada Seluruh Data:<br>`pipeline.fit(X, y)`"]:::process;
    N["Simpan Model untuk Produksi:<br>`joblib.dump(pipeline)`"]:::process;
    O["Gunakan untuk Prediksi:<br>`pipeline.predict(X_new)`"]:::process;
    P["✅ Selesai: Sistem Prediksi yang Andal"]:::success;
    %% Menghubungkan semua node
    A --> B;
    B --> C;
    B --> D;
    C --> E;
    D --> F;
    E --> G;
    F --> G;
    G -- preprocessor --> H;
    I -- classifier --> H;
    H --> J;
    J --> K;
    J --> L;
    K --> M;
    L --> M;
    M --> N;
    N --> O;
    O --> P;
{{< /mermaid >}}

## Langkah 1: Merancang Blueprint Pra-pemrosesan

Langkah pertama dalam alur kerja `scikit-learn` adalah mengidentifikasi tipe data dari setiap kolom fitur, karena masing-masing akan memerlukan perlakuan yang berbeda.

```python
# Mengidentifikasi kolom berdasarkan tipe data
numeric_features = ['durasi_hari']
categorical_features = ['jenis_promo', 'channel_iklan']
```
Kita akan menggunakan `StandardScaler` untuk fitur numerik dan `OneHotEncoder` untuk fitur kategorikal. `ColumnTransformer` adalah alat brilian yang berfungsi sebagai "blueprint", menerapkan transformasi yang tepat ke kolom yang tepat secara paralel.

```python
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

# Membuat blueprint pra-pemrosesan
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numeric_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ])
```
`preprocessor` ini sekarang menjadi "resep" standar dan dapat digunakan kembali untuk menyiapkan data kita, baik untuk pelatihan maupun untuk data baru di masa depan.

## Langkah 2: Merakit Alur Kerja Lengkap dengan Pipeline

Sekarang kita merakit `preprocessor` kita dengan model `LogisticRegression` ke dalam satu objek `Pipeline`. Objek ini membungkus seluruh alur kerja—dari data mentah hingga prediksi—menjadi satu kesatuan.

```python
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression

# Merakit preprocessor dan model menjadi satu pipeline
logreg_pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                                  ('classifier', LogisticRegression())])
```
Untuk pemahaman yang lebih baik tentang strukturnya, kita dapat memvisualisasikan `Pipeline` ini sebagai diagram interaktif (saat dijalankan di notebook).

```python
from sklearn import set_config

# Mengatur tampilan default untuk estimator scikit-learn
set_config(display='diagram')

# Menampilkan diagram pipeline
logreg_pipeline
```
Diagram ini secara visual menunjukkan bagaimana data mentah akan mengalir melalui setiap langkah pra-pemrosesan sebelum akhirnya masuk ke model klasifikasi.

## Langkah 3: Evaluasi dan Prediksi yang Andal

Keindahan `Pipeline` adalah Anda dapat memperlakukannya seolah-olah itu adalah satu model tunggal. Untuk evaluasi yang andal dan aman dari kebocoran data, kita menggunakan validasi silang langsung pada pipeline.

```python
from sklearn.model_selection import cross_val_score

# Mengevaluasi pipeline secara keseluruhan menggunakan validasi silang
scores = cross_val_score(logreg_pipeline, X, y, cv=5, scoring='accuracy')
print(f"Akurasi Cross-Validation: {scores.mean():.3f} (+/- {scores.std() * 2:.3f})")
```
Hasil `0.853 (+/- 0.045)` berarti, rata-rata, model kita memiliki akurasi sekitar 85.3%. Angka `+/-` memberikan kita rentang keyakinan bahwa performa model pada data baru kemungkinan besar akan berada di antara 80.8% dan 89.8%.

Setelah dievaluasi, kita melatih pipeline pada seluruh dataset untuk membuatnya siap digunakan untuk prediksi.

```python
# Melatih pipeline pada seluruh dataset untuk penggunaan akhir
logreg_pipeline.fit(X, y)

# Membuat contoh data baru yang masih dalam format mentah
X_new = pd.DataFrame({
    'jenis_promo': ['Cashback', 'Diskon'],
    'durasi_hari': [20, 5],
    'channel_iklan': ['Sosmed', 'Email']
})

# Pipeline secara otomatis akan menerapkan semua langkah pra-pemrosesan
predictions = logreg_pipeline.predict(X_new)
print(f"\nPrediksi Keberhasilan untuk data baru: {predictions}")
```
Pipeline memastikan bahwa data baru diproses dengan cara yang sama persis seperti data latihan, menghilangkan seluruh potensi kesalahan manual.

## Langkah 4: Interpretasi dan Produksi

Meskipun `scikit-learn` berfokus pada prediksi, kita masih bisa mengekstrak koefisien dari model yang sudah dilatih di dalam pipeline untuk tujuan interpretasi dan sanity check.

```python
# Mengakses model yang sudah dilatih di dalam pipeline
model_final = logreg_pipeline.named_steps['classifier']
# Mengakses preprocessor untuk mendapatkan nama fitur hasil encoding
preprocessor_final = logreg_pipeline.named_steps['preprocessor']
feature_names = preprocessor_final.get_feature_names_out()

# Membuat DataFrame untuk koefisien yang lebih mudah dibaca
coef_df = pd.DataFrame(model_final.coef_.T, index=feature_names, columns=['Koefisien Log-Odds'])
print("\nKoefisien dari Model Final dalam Pipeline:")
print(coef_df.sort_values(by='Koefisien Log-Odds', ascending=False))
```
Dari sini, kita dapat melihat bahwa `jenis_promo_Cashback` memiliki koefisien log-odds positif terbesar, yang secara kuantitatif mendukung hipotesis bahwa promosi ini adalah yang paling efektif. Perlu diingat, karena `durasi_hari` diskalakan, koefisiennya sekarang mewakili perubahan log-odds untuk setiap kenaikan **satu standar deviasi** dari durasi.

Untuk membawa model ini ke produksi, langkah terakhir adalah menyimpannya sebagai file.

```python
import joblib

# Menyimpan seluruh pipeline ke dalam sebuah file
joblib.dump(logreg_pipeline, 'promo_success_pipeline.pkl')

# Di lain waktu atau di aplikasi lain, pipeline dapat dimuat kembali
# loaded_pipeline = joblib.load('promo_success_pipeline.pkl')
# predictions = loaded_pipeline.predict(X_new)
```

## Kesimpulan: Dari Analis Menjadi Arsitek Sistem

Kita telah melihat bagaimana `Pipeline` mengubah skrip analisis yang terpisah-pisah menjadi alur kerja tunggal yang kuat, dapat diandalkan, dan siap produksi. Keuntungannya jelas: kode yang lebih bersih, hasil yang dapat direproduksi, dan pencegahan kesalahan umum seperti kebocoran data. Ini adalah langkah fundamental dari sekadar seorang analis yang mengeksplorasi data, menjadi seorang praktisi machine learning yang membangun sistem yang andal dan profesional.

## Penelusuran Terkait

* [sklearn.pipeline.Pipeline — scikit-learn documentation](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html)  
* [2.3. Composite estimators and pipelines — scikit-learn documentation](https://scikit-learn.org/stable/modules/compose.html#columntransformer-for-heterogeneous-data)  
* [Handling categorical variables - Scikit-learn MOOC](https://inria.github.io/scikit-learn-mooc/python_scripts/03_categorical_pipeline.html)  
* [Column Transformer with Mixed Types — scikit-learn documentation](https://scikit-learn.org/stable/auto_examples/compose/plot_column_transformer_with_mixed_types.html)  
