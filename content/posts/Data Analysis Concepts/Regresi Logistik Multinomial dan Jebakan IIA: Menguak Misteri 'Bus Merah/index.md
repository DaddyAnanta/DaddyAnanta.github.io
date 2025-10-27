+++
title= "Regresi Logistik Multinomial dan Jebakan IIA: Menguak Misteri 'Bus Merah'"
date = 2025-09-05T10:28:14+09:00
draft = false
socialshare = true
description = "Pahami asumsi Independence of Irrelevant Alternatives (IIA) yang krusial dalam regresi logistik multinomial, dampaknya, serta strategi diagnosis dan penanganannya."
image = "1.webp"
imageBig= "1.webp"
categories= ["Data Analysis Concepts"] 
tags= [ "Regresi-Logistic" ]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++


Sebagai seorang *Data Scientist*, kita sering dihadapkan pada skenario di mana kita perlu memprediksi pilihan dari berbagai kategori diskrit yang tidak berurutan. Di sinilah **regresi logistik multinomial** menjadi alat yang tak ternilai. Baik itu memprediksi preferensi merek *smartphone*, tujuan liburan, moda transportasi, atau bahkan keputusan medis, model ini menawarkan kerangka kerja yang kuat untuk memahami perilaku pilihan. Namun, di balik kekuatannya, terdapat sebuah asumsi fundamental yang sering terabaikan, dan jika dilanggar, dapat menyebabkan model kita menghasilkan kesimpulan yang sangat menyesatkan. Asumsi tersebut dikenal sebagai *Independence of Irrelevant Alternatives* (IIA), sebuah konsep yang dapat dengan mudah diilustrasikan melalui analogi "bus merah/bus biru" yang terkenal. Artikel ini akan menggali dasar teoretis model pilihan, menjelaskan mengapa penambahan pilihan baru yang tampak tidak relevan dapat mengganggu prediksi Anda secara drastis, serta membekali Anda dengan pengetahuan untuk menggunakan alat canggih ini secara bertanggung jawab.

---

## Memahami Dasar-dasar: Teori Utilitas Acak dan Logit Multinomial

Regresi logistik multinomial adalah perluasan dari regresi logistik biner yang dirancang untuk menangani variabel dependen kategorikal dengan lebih dari dua kategori nominal (tidak berurutan). Intinya, model ini beroperasi di bawah prinsip **Teori Utilitas Acak**. Teori ini mengasumsikan bahwa setiap individu memiliki preferensi implisit atau "utilitas" untuk setiap alternatif pilihan yang tersedia. Seorang individu diasumsikan akan memilih alternatif yang memberikan utilitas tertinggi baginya.

Secara matematis, model logit multinomial mengestimasi probabilitas seorang individu memilih suatu kategori tertentu $j$ dari $J$ kategori yang tersedia, berdasarkan seperangkat variabel prediktor $\mathbf{X}_i$. Probabilitas ini diformulasikan sebagai:

$$P(Y_i=j | \mathbf{X}_i) = \frac{e^{\mathbf{\beta}_j \mathbf{X}_i}}{\sum_{k=1}^J e^{\mathbf{\beta}_k \mathbf{X}_i}}$$

Di mana $P(Y_i=j | \mathbf{X}_i)$ adalah probabilitas individu $i$ memilih alternatif $j$ dengan vektor fitur $\mathbf{X}_i$, dan $\mathbf{\beta}_j$ adalah vektor koefisien yang mewakili dampak variabel prediktor pada utilitas alternatif $j$ relatif terhadap kategori referensi.

---

## Asumsi Krusial: *Independence of Irrelevant Alternatives* (IIA)

Asumsi IIA adalah pilar utama model logit multinomial dan menyatakan bahwa rasio probabilitas memilih dua alternatif harus tidak berubah oleh keberadaan atau atribut alternatif ketiga yang "tidak relevan". Dengan kata lain, pilihan relatif antara dua opsi tidak boleh dipengaruhi oleh penambahan atau penghapusan opsi lain.

### Analogi Klasik "Bus Merah / Bus Biru"

Mari kita pahami IIA melalui analogi yang terkenal:
Bayangkan seorang komuter dihadapkan pada dua pilihan untuk pergi bekerja: **Mobil** atau **Bus Biru**. Berdasarkan survei atau data historis, kita menemukan bahwa 50% komuter memilih Mobil dan 50% memilih Bus Biru. Rasio probabilitas antara keduanya adalah:

$$\frac{P(\text{Mobil})}{P(\text{Bus Biru})} = \frac{0.5}{0.5} = 1$$

Sekarang, bayangkan sebuah perusahaan bus baru memperkenalkan **Bus Merah**. Bus Merah ini identik dalam segala hal dengan Bus Biru (jalur, jadwal, harga, kenyamanan) kecuali warnanya. Secara intuitif, kita akan menduga bahwa penumpang bus akan membagi pilihan mereka antara dua bus yang identik ini. Skenario yang lebih realistis mungkin adalah: 50% komuter tetap memilih Mobil, sementara 25% memilih Bus Biru dan 25% memilih Bus Merah.

Dalam skenario baru ini, rasio probabilitas antara Mobil dan Bus Biru berubah menjadi:

$$\frac{P(\text{Mobil})}{P(\text{Bus Biru})} = \frac{0.5}{0.25} = 2$$

Karena rasio ini berubah dari 1 menjadi 2, **asumsi IIA telah dilanggar**. Model logit multinomial standar tidak dapat menangani dinamika substitusi yang terjadi karena model tersebut tidak mengenali bahwa Bus Merah dan Bus Biru adalah substitusi yang sangat dekat. Model logit multinomial mengasumsikan bahwa utilitas Bus Merah dan Bus Biru sepenuhnya independen, padahal kenyataannya tidak demikian; mereka adalah bagian dari "kelompok" transportasi bus yang sama.

### Bagaimana IIA Muncul dari Formula?

Asumsi IIA secara inheren tertanam dalam bentuk matematis model logit multinomial. Jika kita mengambil rasio probabilitas antara dua alternatif $j$ dan $l$:

$$\frac{P(Y_i=j | \mathbf{X}_i)}{P(Y_i=l | \mathbf{X}_i)} = \frac{\frac{e^{\mathbf{\beta}_j \mathbf{X}_i}}{\sum_{k=1}^J e^{\mathbf{\beta}_k \mathbf{X}_i}}}{\frac{e^{\mathbf{\beta}_l \mathbf{X}_i}}{\sum_{k=1}^J e^{\mathbf{\beta}_k \mathbf{X}_i}}} = \frac{e^{\mathbf{\beta}_j \mathbf{X}_i}}{e^{\mathbf{\beta}_l \mathbf{X}_i}} = e^{(\mathbf{\beta}_j - \mathbf{\beta}_l) \mathbf{X}_i}$$

Dari formula ini, terlihat jelas bahwa rasio probabilitas antara alternatif $j$ dan $l$ hanya bergantung pada koefisien dan variabel prediktor yang terkait dengan alternatif $j$ dan $l$. **Sumasi di bagian penyebut (yang mencakup semua alternatif $k$) saling meniadakan.** Ini berarti rasio probabilitas antara dua alternatif *tidak terpengaruh oleh keberadaan atau atribut alternatif lain dalam set pilihan*. Inilah inti matematis dari asumsi IIA.

### Kapan Anda Harus Curiga Pelanggaran IIA?

Sebagai praktisi data, Anda harus sangat mewaspadai pelanggaran IIA dalam skenario di mana alternatif pilihan memiliki karakteristik yang sangat mirip atau merupakan substitusi yang dekat. Beberapa contoh meliputi:

* **Pilihan Merek Produk:** Pepsi vs. Coca-Cola, iPhone 15 vs. iPhone 15 Pro.
* **Pilihan Transportasi:** Berbagai jenis layanan bus, kereta api komuter vs. kereta api ekspres.
* **Pilihan Layanan:** Berbagai paket internet dari penyedia yang sama, bank A cabang dekat rumah vs. bank A cabang di pusat kota.

---

## Konsekuensi, Diagnosis, dan Solusi

### Konsekuensi dari Pelanggaran IIA

Jika regresi logistik multinomial diterapkan pada data di mana asumsi IIA dilanggar secara serius, konsekuensinya bisa fatal bagi validitas model Anda:

* **Estimasi Koefisien yang Bias:** Parameter model ($\mathbf{\beta}$) dapat menjadi bias, menyebabkan interpretasi yang salah tentang bagaimana variabel prediktor mempengaruhi pilihan.
* **Prediksi Probabilitas yang Tidak Akurat:** Model akan gagal memprediksi pangsa pasar dengan benar. Misalnya, peluncuran produk baru mungkin diprediksi akan mencuri pangsa pasar secara merata dari semua pesaing, padahal kenyataannya ia hanya akan mengkanibalisasi produknya sendiri yang serupa.
* **Kesimpulan Bisnis yang Menyesatkan:** Keputusan strategis berdasarkan model yang cacat dapat menyebabkan alokasi sumber daya yang tidak efisien atau strategi pemasaran yang gagal.

### Diagnostik Model: Mendeteksi Pelanggaran IIA dan Asumsi Lainnya

Sebelum mempercayai model regresi logistik multinomial, penting untuk melakukan diagnostik menyeluruh. Berikut adalah flowchart visual untuk alur kerja ideal:

{{< mermaid >}}
flowchart TD
    %% Mendefinisikan kelas gaya yang konsisten
    classDef process fill:#4A5568,stroke:#A0AEC0,stroke-width:2px,color:#fff;
    classDef decision fill:#674188,stroke:#C3ACD0,stroke-width:2px,color:#fff;
    classDef success fill:#28a745,stroke:#28a745,stroke-width:2px,color:#fff;
    classDef warning fill:#C70039,stroke:#900C3F,stroke-width:2px,color:#fff;
    classDef recommendation fill:#d1ecf1,stroke:#bee5eb,stroke-width:2px,color:#0c5460;
    %% Mendefinisikan node/titik dalam flowchart
    A["Mulai: Identifikasi Masalah<br>Pilihan Diskrit"]:::process;
    B("Kumpulkan & Pra-pemrosesan<br>Data Pilihan"):::process;
    C{"Pilihan Multikategori & Nominal?"}:::decision;
    D["Pilih Model Regresi<br>Logistik Multinomial"]:::process;
    E("Estimasi Model Awal"):::process;
    F{"Diagnostik Model:<br>Evaluasi Asumsi"}:::decision;
    F1("Asumsi Multikolinearitas?<br>Cek VIF"):::process;
    F2("Asumsi Linearitas Logit?<br>Cek Plot Residual"):::process;
    F3("Asumsi IIA?<br>Uji Hausman-McFadden /<br>Pertimbangan Konseptual"):::process;
    G{"Masalah Multikolinearitas<br>Terdeteksi?"}:::decision;
    H{"Masalah Linearitas Logit<br>Terdeteksi?"}:::decision;
    I{"IIA Dilanggar?"}:::decision;
    G1["Perbaiki Multikolinearitas:<br>Hapus / Gabung Fitur"]:::recommendation;
    H1["Transformasi Fitur /<br>Tambah Term Interaksi"]:::recommendation;
    I1["❗ Pertimbangkan Model Alternatif:<br>Logit Bersarang / Logit Campuran"]:::warning;
    J("Pilih & Estimasi Model Alternatif"):::process;
    K("Interpretasi Koefisien &<br>Wawasan Bisnis"):::recommendation;
    L("Validasi Model:<br>Akurasi, Presisi, Recall, F1-Score"):::process;
    M{"Uji Validasi Lintas<br>(Cross-Validation)?"}:::decision;
    N["✅ Selesai: Komunikasi Hasil<br>& Implementasi"]:::success;
    O["Pilih Model Pilihan Diskrit Lain:<br>Biner, Ordinal"]:::recommendation;
    %% Menghubungkan semua node
    A --> B;
    B --> C;
    C -- Ya --> D;
    D --> E;
    E --> F;
    F --> F1;
    F --> F2;
    F --> F3;
    F1 --> G;
    F2 --> H;
    F3 --> I;
    G -- Ya --> G1;
    H -- Ya --> H1;
    I -- Ya --> I1;
    G1 --> E;
    H1 --> E;
    I1 --> J;
    G -- Tidak --> H;
    H -- Tidak --> I;
    I -- Tidak --> K;
    J --> K;
    K --> L;
    L --> M;
    M -- Ya --> L;
    M -- Tidak --> N;
    C -- Tidak --> O;
    O --> N;
{{< /mermaid >}}

Untuk mendeteksi pelanggaran IIA, **Tes Hausman-McFadden** adalah metode statistik yang umum. Idenya adalah membandingkan koefisien model yang dilatih pada set pilihan penuh dengan koefisien model yang dilatih pada subset pilihan (dengan menghilangkan satu atau lebih alternatif). Jika asumsi IIA berlaku, koefisien untuk alternatif yang tersisa seharusnya tidak berbeda secara signifikan secara statistik.

Berikut adalah ilustrasi implementasi Tes Hausman-McFadden secara konseptual menggunakan Python dan *library* `statsmodels`. Karena implementasi penuh Tes Hausman-McFadden dalam `statsmodels` untuk `mnlogit` dapat menjadi kompleks, kita akan fokus pada langkah-langkah yang menunjukkan bagaimana koefisien berubah ketika sebuah alternatif dihapus, yang merupakan inti dari pengujian ini.

```python
import pandas as pd
import numpy as np
import statsmodels.formula.api as smf
import statsmodels.api as sm

# Mengatur seed untuk reproduktifitas
np.random.seed(42)

# --- 1. Membuat Data Sintetis untuk Ilustrasi ---
# Asumsikan 500 individu membuat pilihan antara Mobil, Bus Biru, dan Bus Merah.
# Kita akan membuat utilitas Bus Biru dan Bus Merah sangat mirip untuk mensimulasikan
# pelanggaran IIA yang potensial.

n_samples = 500
# Fitur: biaya perjalanan (cost) dan waktu perjalanan (time_spent)
cost = np.random.uniform(5, 50, n_samples)
time_spent = np.random.uniform(15, 90, n_samples)

df_data = pd.DataFrame({'cost': cost, 'time_spent': time_spent})

# Utilitas untuk setiap pilihan (semakin tinggi, semakin disukai)
# Mobil sebagai kategori dasar
util_car = -0.05 * df_data['cost'] - 0.02 * df_data['time_spent'] + np.random.gumbel(loc=0.5, scale=1, size=n_samples)
# Bus Biru dan Bus Merah dibuat memiliki koefisien dan utilitas yang sangat mirip
util_blue_bus = -0.08 * df_data['cost'] - 0.03 * df_data['time_spent'] + np.random.gumbel(loc=0.3, scale=1, size=n_samples)
util_red_bus = -0.07 * df_data['cost'] - 0.03 * df_data['time_spent'] + np.random.gumbel(loc=0.35, scale=1, size=n_samples) # Sangat mirip dengan bus biru

# Menentukan pilihan berdasarkan utilitas tertinggi
choices = np.argmax(np.array([util_car, util_blue_bus, util_red_bus]), axis=0)
choice_map = {0: 'Car', 1: 'Blue Bus', 2: 'Red Bus'}
df_data['choice'] = pd.Categorical(pd.Series(choices).map(choice_map))


print("--- Distribusi Pilihan Awal ---")
print(df_data['choice'].value_counts())
print("\n" + "="*50 + "\n")


# --- 2. Melatih Model Penuh (Full Model) ---
# Melatih model regresi logistik multinomial pada semua pilihan yang tersedia.
# 'Car' akan secara otomatis dijadikan kategori referensi oleh statsmodels.
print("--- Estimasi Model Penuh (Full Model) ---")
full_model = smf.mnlogit('choice ~ cost + time_spent', data=df_data).fit(disp=False) # disp=False untuk menekan output iterasi
print(full_model.summary())
print("\n" + "="*50 + "\n")


# --- 3. Melatih Model Subset (Restricted Model) ---
# Menghapus salah satu alternatif yang diduga sebagai substitusi dekat,
# misalnya 'Red Bus', untuk menguji IIA.
print("--- Estimasi Model Subset (tanpa 'Red Bus') ---")
df_subset = df_data[df_data['choice'] != 'Red Bus'].copy()
# Penting: hapus kategori yang tidak terpakai dari kolom kategorikal
df_subset['choice'] = df_subset['choice'].cat.remove_unused_categories()

restricted_model = smf.mnlogit('choice ~ cost + time_spent', data=df_subset).fit(disp=False)
print(restricted_model.summary())
print("\n" + "="*50 + "\n")


# --- 4. Membandingkan Koefisien untuk Mengidentifikasi Pelanggaran IIA ---
# Kita akan membandingkan koefisien untuk alternatif yang tersisa (yaitu 'Blue Bus').
# Jika IIA berlaku, koefisien untuk 'Blue Bus' seharusnya tidak berubah secara signifikan.

# Ekstrak koefisien untuk 'Blue Bus' dari kedua model
coef_full_blue_bus = full_model.params.filter(like='Blue Bus', axis=0)
coef_restricted_blue_bus = restricted_model.params.filter(like='Blue Bus', axis=0)

comparison_df = pd.DataFrame({
    'Full Model Coeff': coef_full_blue_bus,
    'Restricted Model Coeff': coef_restricted_blue_bus
})
comparison_df['Difference'] = comparison_df['Full Model Coeff'] - comparison_df['Restricted Model Coeff']

print("--- Perbandingan Koefisien untuk Pilihan 'Blue Bus' ---")
print(comparison_df)
print("\n" + "="*50 + "\n")

# Catatan: Untuk melakukan Tes Hausman-McFadden secara formal,
# Anda perlu menghitung statistik chi-kuadrat berdasarkan perbedaan koefisien
# dan matriks kovarians estimasi dari kedua model.
# statsmodels tidak menyediakan fungsi langsung untuk Hausman test pada mnlogit,
# sehingga implementasi penuh akan memerlukan perhitungan manual atau penggunaan
# library ekonometrika diskrit yang lebih spesifik (misalnya, PyDCM).
# Namun, perubahan signifikan pada koefisien (kolom 'Difference' yang besar)
# secara intuitif mengindikasikan pelanggaran IIA, seperti yang kita lihat di sini
# di mana koefisien 'cost' dan 'time_spent' untuk 'Blue Bus' berubah setelah 'Red Bus' dihapus.
# Ini terjadi karena 'Red Bus' dan 'Blue Bus' adalah substitusi yang sangat dekat.
```

Pada contoh kode di atas, Anda dapat melihat bagaimana koefisien untuk "Blue Bus" berubah secara substansial ketika "Red Bus" dihapus dari set pilihan. Perubahan ini secara intuitif menunjukkan adanya pelanggaran IIA. Jika kedua bus (merah dan biru) bukan merupakan substitusi dekat, koefisien untuk "Blue Bus" seharusnya tetap relatif stabil.

Selain IIA, penting juga untuk memeriksa asumsi model lainnya:
* **Multikolinearitas:** Periksa apakah variabel independen Anda terlalu berkorelasi menggunakan *Variance Inflation Factor* (VIF). VIF yang tinggi (misalnya > 5 atau > 10) menunjukkan multikolinearitas yang dapat membuat estimasi koefisien tidak stabil.
* **Linearitas Logit:** Asumsi ini menyatakan bahwa hubungan antara log-odds variabel dependen dan variabel independen adalah linier. Ini dapat diperiksa dengan plot residual atau tes formal lainnya.

### Apa yang Harus Dilakukan Jika IIA Dilanggar?

Jika diagnosis menunjukkan pelanggaran serius terhadap asumsi IIA, Anda tidak boleh menggunakan model logit multinomial standar. Sebagai gantinya, pertimbangkan model pilihan diskrit yang lebih canggih yang dirancang untuk mengatasi substitusi yang tidak merata:

1.  **Logit Bersarang (Nested Logit):** Model ini memungkinkan Anda untuk secara eksplisit mengelompokkan alternatif yang serupa atau "sarang". Pilihan dimodelkan dalam beberapa tahap. Misalnya, dalam masalah transportasi, individu mungkin pertama-tama memutuskan antara "transportasi umum" atau "kendaraan pribadi" (sarang tingkat pertama), dan jika "transportasi umum" dipilih, baru kemudian memutuskan antara "Bus Merah" atau "Bus Biru" (sarang tingkat kedua). Model Logit Bersarang secara eksplisit memperhitungkan korelasi antar alternatif dalam sarang yang sama.

2.  **Logit Campuran (Mixed Logit / Random Parameters Logit):** Model ini menawarkan fleksibilitas yang lebih besar dan merupakan solusi yang paling umum dan kuat untuk pelanggaran IIA. Logit Campuran memungkinkan koefisien variabel prediktor bervariasi antar individu (parameter acak), sehingga secara efektif mengakomodasi preferensi heterogen dan pola substitusi yang kompleks tanpa perlu Anda mendefinisikan struktur sarang secara manual. Model ini dapat menangani korelasi implisit antara alternatif yang dekat, seperti Bus Merah dan Bus Biru, karena preferensi individu terhadap atribut bus dapat bervariasi.

### Interpretasi Koefisien dan Wawasan Bisnis

Setelah Anda memiliki model yang valid (baik logit multinomial, nested logit, atau mixed logit), langkah berikutnya adalah menginterpretasikan koefisien untuk mendapatkan wawasan bisnis yang *actionable*.
Koefisien dalam regresi logistik multinomial biasanya diinterpretasikan sebagai perubahan dalam log-odds suatu kategori relatif terhadap kategori referensi, untuk setiap peningkatan satu unit pada prediktor, sambil menjaga variabel lain konstan.

Untuk interpretasi yang lebih intuitif, Anda dapat mengubah koefisien menjadi **rasio odds** dengan mengambil eksponensial dari koefisien ($e^{\beta}$). Rasio odds menunjukkan berapa kali lipat probabilitas memilih suatu alternatif dibandingkan alternatif referensi akan berubah untuk setiap perubahan satu unit pada prediktor.

Contoh: Jika Anda memiliki koefisien `fitur_harga` sebesar -0.5 untuk pilihan 'Produk A' (relatif terhadap 'Produk Referensi'), maka rasio odds adalah $e^{-0.5} \approx 0.60$. Ini berarti setiap kenaikan harga sebesar satu unit akan mengurangi kemungkinan pelanggan memilih Produk A (dibandingkan Produk Referensi) sebesar sekitar 40%. Wawasan semacam ini sangat berharga untuk:

* **Strategi Penetapan Harga:** Memahami elastisitas harga dan dampak perubahan harga pada pangsa pasar.
* **Pengembangan Produk:** Mengidentifikasi fitur yang paling diminati pelanggan.
* **Segmentasi Pasar:** Menyesuaikan penawaran berdasarkan preferensi kelompok pelanggan yang berbeda.
* **Prediksi Pangsa Pasar:** Mensimulasikan dampak skenario baru (misalnya, peluncuran produk pesaing) pada pilihan pelanggan.

---

## Kesimpulan

Regresi logistik multinomial adalah alat yang sangat kuat dalam arsenal *Data Scientist* untuk memprediksi pilihan diskrit. Namun, kekuatannya datang dengan asumsi yang kuat—khususnya asumsi *Independence of Irrelevant Alternatives* (IIA)—yang mungkin tidak selalu berlaku di dunia nyata yang kompleks. Mengabaikan IIA dapat menyebabkan model yang bias dan keputusan bisnis yang merugikan.

Sebagai seorang *Data Scientist* yang bertanggung jawab, penting untuk tidak hanya tahu cara menjalankan model, tetapi juga kapan dan mengapa *tidak* menjalankannya. Selalu tanyakan pada diri Anda: "Apakah pilihan-pilihan dalam masalah saya benar-benar independen, atau apakah ada beberapa pilihan yang merupakan substitusi dekat?" Dengan memahami dan mendiagnosis IIA secara cermat, serta mempertimbangkan model alternatif seperti Logit Bersarang atau Logit Campuran saat diperlukan, Anda dapat memastikan bahwa analisis Anda menghasilkan wawasan yang akurat dan dapat diandalkan.

<a href="https://daddyananta.github.io//categories/quantitative/">Perdalam pemahaman Quantitative Anda di sini</a>

---
## Penelusuran Terkait

* [Independence of irrelevant alternatives ‒ Wikipedia](https://en.wikipedia.org/wiki/Independence_of_irrelevant_alternatives)  
* [Multinomial logistic regression ‒ Wikipedia](https://en.wikipedia.org/wiki/Multinomial_logistic_regression)  
* [How Relevant is the Independence of Irrelevant Alternatives? ‒ Statistical Horizons](https://statisticalhorizons.com/iia/)  
* [Discrete Choice Models ‒ Kenneth Train, UC Berkeley (PDF)](https://eml.berkeley.edu/books/train1201.pdf)  
