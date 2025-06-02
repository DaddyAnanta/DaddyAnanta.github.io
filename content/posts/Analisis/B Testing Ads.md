+++
title = 'A/B Testing Ads'
date = 2025-05-28T00:37:00+00:00
draft = false
description = "Pada kesempatan ini, saya menganalisis data e-commerce yang dipilih secara acak dari Kaggle. Dataset ini berisi informasi tentang transaksi penjualan barang di sebuah perusahaan e-commerce yang beroperasi di Brasil."
image = "/images/Analisa/1.ab_testing_ad/1.webp"
imageBig= "/images/Analisa/1.ab_testing_ad/1.webp"
categories= ["Analisis Data"]
tags= ["Python"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++


## Keterangan Data

Dalam dunia pemasaran digital yang dinamis, perusahaan terus berupaya untuk menjalankan kampanye yang sukses dan menghasilkan dampak maksimal. Namun, kompleksitas pasar dan banyaknya pilihan strategi seringkali membuat pengambilan keputusan menjadi tantangan. Untuk mengatasi hal ini, A/B testing hadir sebagai metodologi eksperimen acak yang kuat. Proses ini melibatkan penyajian dua atau lebih versi variabel (seperti halaman web, elemen halaman, banner iklan, dll.) kepada segmen audiens yang berbeda secara bersamaan. Tujuannya adalah untuk menentukan secara objektif versi mana yang memberikan dampak terbesar dan paling efektif dalam mendorong metrik bisnis utama.

Perusahaan yang melakukan A/B testing biasanya ingin menjawab dua pertanyaan mendasar:
1.  Apakah kampanye yang dijalankan akan berhasil mencapai tujuannya?
2.  Jika kampanye tersebut berhasil, seberapa besar kontribusi spesifik dari elemen yang diuji (misalnya, iklan) terhadap kesuksesan tersebut?

Untuk menjawab pertanyaan kedua, A/B testing menjadi sangat relevan. Dalam skenario umum, sebagian besar audiens akan terpapar pada iklan atau perlakuan yang diuji (disebut sebagai **kelompok eksperimen** atau *experimental group*). Sementara itu, sebagian kecil audiens lainnya (disebut sebagai **kelompok kontrol** atau *control group*) akan melihat versi standar, Pengumuman Layanan Masyarakat (PSA), atau bahkan tidak melihat apa-apa pada tempat dan ukuran yang sama dengan penempatan iklan.

Dataset yang digunakan dalam analisis ini dirancang untuk memfasilitasi perbandingan antara kelompok-kelompok tersebut. Tujuannya adalah untuk menganalisis apakah iklan yang ditayangkan memang berhasil meningkatkan konversi, mengestimasi potensi pendapatan tambahan dari iklan tersebut, dan yang paling penting, menentukan apakah perbedaan kinerja antara kedua kelompok tersebut signifikan secara statistik atau hanya kebetulan semata.

## 1. Pemuatan Data dan Pembersihan Awal

Tahap awal dalam setiap analisis data adalah memuat dataset yang akan digunakan dan melakukan pembersihan dasar. Proses ini memastikan bahwa data siap untuk dianalisis lebih lanjut, bebas dari inkonsistensi format atau nama kolom yang membingungkan.

### Library

```Python
import pandas as pd
from scipy.stats import chi2_contingency
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
````

### Data

Data yang kita gunakan bersumber dari <a href="https://www.kaggle.com/datasets/faviovaz/marketing-ab-testing">Kaggle: Marketing A/B Testing</a>. Pertama, kita akan memuat data dari file CSV ke dalam DataFrame pandas. Kemudian, kita akan menampilkan lima baris pertama untuk mendapatkan gambaran awal mengenai struktur dan isi data. 


``` Python
data = pd.read_csv("marketing_AB.csv") # Memuat data
df = data.copy() # Membuat salinan untuk dimodifikasi, best practice
df.head()
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/2.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

Selanjutnya, kita melakukan standarisasi nama kolom. Ini adalah praktik yang baik untuk mengubah semua nama kolom menjadi format yang konsisten, seperti huruf kecil semua dan menggunakan garis bawah (`_`) sebagai pengganti spasi.



``` Python
# Standarisasi nama kolom
df.columns = [col.replace(' ', '_').lower() for col in df.columns]
df.head()
```
<div>
  <img src="/images/Analisa/1.ab_testing_ad/3.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

Kolom pertama dalam dataset ini seringkali merupakan indeks yang tidak bernama atau bernama 'Unnamed: 0' saat dibaca dari CSV. Kita akan mengganti namanya menjadi `index_col` agar lebih deskriptif, meskipun mungkin tidak akan banyak digunakan dalam analisis inti.



```Python
# Mengganti nama kolom indeks
df.rename(columns={'unnamed:_0': 'index_col'}, inplace=True) # Pastikan nama kolom ini sesuai dengan output standardisasi sebelumnya
df.head()
```
<div>
  <img src="/images/Analisa/1.ab_testing_ad/4.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

Untuk memahami struktur data lebih dalam, kita akan menampilkan informasi dasar DataFrame menggunakan metode `.info()`. Ini akan memberikan detail mengenai tipe data setiap kolom, jumlah entri non-null, dan penggunaan memori. Informasi ini penting untuk mengidentifikasi potensi masalah tipe data atau nilai yang hilang.



```Python
# Menampilkan informasi dasar DataFrame
print("\nInfo DataFrame:")
df.info()
```
<div>
  <img src="/images/Analisa/1.ab_testing_ad/6.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

Terakhir dalam tahap pembersihan awal, kita akan memeriksa apakah terdapat nilai yang hilang (missing values) di setiap kolom. Mengetahui jumlah nilai yang hilang krusial karena dapat mempengaruhi hasil analisis dan mungkin memerlukan teknik penanganan khusus seperti imputasi atau penghapusan baris/kolom.



```Python
# Memeriksa nilai yang hilang
print("\nMissing values check:")
print(df.isnull().sum())
```
<div>
  <img src="/images/Analisa/1.ab_testing_ad/7.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>


## 2. Analisis Tingkat Konversi

Tingkat konversi adalah metrik kunci dalam A/B testing, yang mengukur proporsi pengguna yang melakukan tindakan yang diinginkan (misalnya, pembelian, pendaftaran, klik) dari total pengguna yang terpapar.

### Keseluruhan

Pertama, kita akan menghitung tingkat konversi keseluruhan dari seluruh dataset. Ini memberikan baseline atau gambaran umum performa tanpa membedakan perlakuan yang diterima pengguna. Tingkat konversi dihitung dengan membagi jumlah total pengguna yang terkonversi dengan jumlah total pengguna, kemudian dikalikan 100% untuk penyajian dalam persentase.

Rumus Tingkat Konversi Keseluruhan: 
<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p>$$\text{Tingkat Konversi Keseluruhan} = \left( \frac{\text{Jumlah Total Pengguna Terkonversi}}{\text{Jumlah Total Pengguna}}\right)\times 100\%$$</p></div>


```Python
overall_conversion_rate = df['converted'].mean()
print(f"Overall Conversion Rate: {overall_conversion_rate:.4%}")
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/8.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

Dalam pandas, jika kolom 'converted' berisi nilai boolean (True/False) atau biner (1/0), mengambil `.mean()` secara langsung akan memberikan proporsi nilai True atau 1, yang setara dengan tingkat konversi.

### Tingkat konversi per grup tes

Langkah selanjutnya yang lebih penting adalah menganalisis tingkat konversi secara terpisah untuk setiap grup dalam eksperimen: kelompok `ad` (yang melihat iklan) dan kelompok `psa` (yang melihat Public Service Announcement). Ini memungkinkan kita untuk membandingkan efektivitas iklan terhadap PSA. Kita akan mengelompokkan data berdasarkan kolom `test_group` dan kemudian menghitung jumlah total pengguna, jumlah pengguna yang terkonversi, dan rata-rata konversi untuk masing-masing grup.

Rumus Tingkat Konversi per Grup: 

<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p> $$ \text{Tingkat Konversi Grup}_i = \left( \frac{\text{Jumlah Pengguna Terkonversi di Grup}_i}{\text{Jumlah Total Pengguna di Grup}_i} \right) \times 100\% $$</p>
  <p>dimana $i$ merujuk pada grup spesifik (misalnya, 'ad' atau 'psa').</p></div>

```Python
conversion_rates_group = df.groupby('test_group')['converted'].agg(['count', 'sum', 'mean'])
conversion_rates_group.rename(columns={
    'count': 'total_users',
    'sum': 'converted_users',
    'mean': 'conversion_rate'
}, inplace=True)

conversion_rates_group
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/9.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

Setelah menghitung tingkat konversi untuk masing-masing grup, kita akan menampilkannya secara eksplisit agar mudah dibandingkan.



```Python
ad_conversion_rate = conversion_rates_group.loc['ad', 'conversion_rate'] if 'ad' in conversion_rates_group.index else 0
psa_conversion_rate = conversion_rates_group.loc['psa', 'conversion_rate'] if 'psa' in conversion_rates_group.index else 0

print(f"Ad Group Conversion Rate: {ad_conversion_rate:.4%}")
print(f"PSA Group Conversion Rate: {psa_conversion_rate:.4%}")
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/10.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

## 3. Uji Signifikansi Statistik (A/B Test)

Setelah mengamati perbedaan tingkat konversi antara grup `ad` dan `psa`, kita perlu menentukan apakah perbedaan tersebut signifikan secara statistik atau hanya terjadi karena kebetulan acak. Untuk ini, kita menggunakan uji hipotesis. Uji Chi-squared ($\chi^2$) adalah pilihan yang tepat ketika kita ingin membandingkan proporsi atau frekuensi antara dua atau lebih kelompok kategorikal. Dalam kasus ini, variabel kategorikal kita adalah `test_group` (ad vs psa) dan `converted` (True vs False).

Hipotesis Nol ($H_0$): Tidak ada perbedaan signifikan dalam tingkat konversi antara grup `ad` dan grup `psa`. Artinya, jenis paparan (iklan atau PSA) tidak mempengaruhi probabilitas konversi. Hipotesis Alternatif ($H_1$): Terdapat perbedaan signifikan dalam tingkat konversi antara grup `ad` dan grup `psa`.

Pertama, kita membuat tabel kontingensi yang menyajikan frekuensi pengguna berdasarkan grup tes dan status konversi mereka.

```Python
contingency_table = pd.crosstab(df['test_group'], df['converted'])
contingency_table
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/11.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

Kemudian, kita melakukan uji Chi-squared pada tabel kontingensi ini. Uji ini akan menghasilkan statistik Chi-squared, p-value, derajat kebebasan (degrees of freedom/dof), dan frekuensi yang diharapkan (expected frequencies). Statistik Chi-squared dihitung dengan rumus: 

<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p>$$ \chi^2 = \sum \frac{(O_{ij} - E_{ij})^2}{E_{ij}} $$ </p>
  <p>dimana $O_{ij}$ adalah frekuensi observasi pada sel (baris $i$, kolom $j$) dan $E_{ij}$ adalah frekuensi ekspektasi pada sel tersebut jika hipotesis nol benar. Derajat kebebasan (dof) untuk tabel kontingensi dihitung sebagai: </p>
<p>$$ \text{dof} = (\text{jumlah baris} - 1) \times (\text{jumlah kolom} - 1) $$</p></div>



```Python
# Melakukan uji Chi-squared
chi2, p_value, dof, expected = chi2_contingency(contingency_table)

print(f"\nChi-squared Statistic: {chi2:.4f}")
print(f"P-value: {p_value:.4f}")
print(f"Degrees of Freedom: {dof}")
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/12.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

P-value yang dihasilkan akan dibandingkan dengan tingkat signifikansi ($\alpha$) yang telah ditentukan sebelumnya, umumnya 0.05. Jika p-value lebih kecil dari $\alpha$, kita menolak hipotesis nol dan menyimpulkan bahwa ada perbedaan yang signifikan secara statistik.



```Python
alpha = 0.05
if p_value < alpha:
    print("There is a statistically significant difference in conversion rates.")
else:
    print("There is no statistically significant difference in conversion rates.")
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/13.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

## 4. Perhitungan Peningkatan (Lift)

Jika hasil uji signifikansi menunjukkan perbedaan yang nyata, langkah selanjutnya adalah mengukur seberapa besar peningkatan atau "lift" yang dihasilkan oleh grup `ad` dibandingkan dengan grup `psa`. Lift mengkuantifikasi dampak relatif dari perubahan yang diuji. Ada dua metrik umum yang digunakan: peningkatan relatif (relative lift) dan peningkatan absolut (absolute lift/absolute difference).

Peningkatan Absolut (Absolute Lift): Ini adalah perbedaan sederhana antara tingkat konversi grup `ad` dan grup `psa`. Rumus Peningkatan Absolut: 

<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p>
$$ \text{Peningkatan Absolut} = \text{Tingkat Konversi Grup Ad} - \text{Tingkat Konversi Grup PSA} $$</p></div>

Peningkatan Relatif (Lift): Ini mengukur persentase peningkatan tingkat konversi grup `ad` relatif terhadap tingkat konversi grup `psa`. Rumus Peningkatan Relatif: 

<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p>
$$ \text{Lift} = \frac{(\text{Tingkat Konversi Grup Ad} - \text{Tingkat Konversi Grup PSA})}{\text{Tingkat Konversi Grup PSA}} \times 100\% $$ </p></div>

Penting untuk memastikan bahwa tingkat konversi grup PSA (penyebut) tidak nol untuk menghindari pembagian dengan nol.

```Python
if psa_conversion_rate > 0:
    lift = (ad_conversion_rate - psa_conversion_rate) / psa_conversion_rate
    absolute_lift = ad_conversion_rate - psa_conversion_rate
    print(f"\nLift: {lift:.2%}")
    print(f"Absolute Difference: {absolute_lift:.4%}")
else:
    print("\nCannot calculate lift because PSA conversion rate is 0.")
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/14.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

## 5. Analisis Pengaruh Jumlah Iklan (`total_ads`) pada Grup 'ad'

Setelah mengetahui bahwa iklan memiliki dampak positif, kita dapat menggali lebih dalam pada kelompok `ad` itu sendiri. Salah satu faktor yang mungkin mempengaruhi konversi adalah frekuensi paparan iklan, yang dalam dataset ini direpresentasikan oleh kolom `total_ads`. Analisis ini bertujuan untuk memahami apakah ada hubungan antara jumlah iklan yang dilihat pengguna dan kecenderungan mereka untuk melakukan konversi.

Pertama, kita akan memfilter DataFrame agar hanya berisi data dari grup `ad`. Kemudian, kita dapat menghitung rata-rata jumlah iklan yang dilihat oleh pengguna yang terkonversi versus yang tidak terkonversi. Rata-rata dihitung dengan rumus standar: 

<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p>$$ \bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} $$ </p>
  <p>dimana $x_i$ adalah nilai `total_ads` untuk setiap pengguna, dan $n$ adalah jumlah pengguna dalam sub-grup tersebut (terkonversi atau tidak).</p></div>

Untuk melihat tren lebih jelas, kita akan mengelompokkan (`binning`) jumlah iklan ke dalam beberapa rentang (misalnya, 1 iklan, 2-5 iklan, dst.). Kemudian, kita hitung tingkat konversi untuk setiap rentang jumlah iklan tersebut. Ini membantu mengurangi noise dari data individual dan menunjukkan pola yang lebih halus. Tingkat konversi per bin dihitung dengan rumus yang sama seperti sebelumnya: 

<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p>
$$ \text{Tingkat Konversi Bin}_j = \left( \frac{\text{Jumlah Pengguna Terkonversi di Bin}_j}{\text{Jumlah Total Pengguna di Bin}_j} \right) \times 100\% $$</p></div>

Visualisasi menggunakan bar plot akan sangat membantu untuk melihat bagaimana tingkat konversi berubah seiring dengan meningkatnya jumlah paparan iklan.

```Python
df_ad_group = df[df['test_group'] == 'ad'].copy()

avg_ads_by_conversion = df_ad_group.groupby('converted')['total_ads'].mean()
print("\nRata-rata total_ads berdasarkan status konversi pada grup 'ad':")
print(avg_ads_by_conversion)


bins = [0, 1, 5, 10, 20, 50, 100, np.inf]
labels = ['1', '2-5', '6-10', '11-20', '21-50', '51-100', '101+']
df_ad_group['ads_bin'] = pd.cut(df_ad_group['total_ads'], bins=bins, labels=labels, right=True) # right=True berarti bin termasuk batas atas

ads_bin_conversion = df_ad_group.groupby('ads_bin', observed=True)['converted'].agg(['mean', 'count'])
ads_bin_conversion.rename(columns={'mean': 'conversion_rate', 'count': 'users'}, inplace=True)
print("\nTingkat konversi berdasarkan rentang jumlah iklan pada grup 'ad':")
print(ads_bin_conversion)

plt.figure(figsize=(12, 7))
sns.barplot(x=ads_bin_conversion.index, y='conversion_rate', data=ads_bin_conversion, palette="crest")
plt.title('Conversion Rate by Total Ads Bins (AD Group)')
plt.ylabel('Conversion Rate')
plt.xlabel('Number of Ads Seen (Binned)')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("conversion_by_ads_bin_ad.webp")
plt.show()
plt.close()
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/15.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

## 6. Analisis Pengaruh Hari Paparan Iklan Terbanyak (`most_ads_day`) pada Grup 'ad'

Selain frekuensi, waktu paparan iklan juga bisa menjadi faktor penting. Dataset ini menyediakan informasi tentang hari dalam seminggu dimana pengguna paling banyak melihat iklan (`most_ads_day`). Analisis ini bertujuan untuk mengetahui apakah ada hari-hari tertentu yang menunjukkan tingkat konversi lebih tinggi dibandingkan hari lain, khusus untuk pengguna dalam grup `ad`.

Kita akan mengurutkan nama hari secara logis (Senin hingga Minggu) agar visualisasi lebih intuitif. Kemudian, kita akan mengelompokkan data berdasarkan `most_ads_day` dan menghitung tingkat konversi serta jumlah pengguna untuk setiap hari. Hasilnya akan divisualisasikan menggunakan bar plot untuk mempermudah perbandingan tingkat konversi antar hari. Perhitungan tingkat konversi per hari menggunakan formula yang sama: 

<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p>$$ \text{Tingkat Konversi Hari}_k = \left( \frac{\text{Jumlah Pengguna Terkonversi pada Hari}_k}{\text{Jumlah Total Pengguna dengan Paparan Terbanyak pada Hari}_k} \right) \times 100\% $$</p></div>



```Python
day_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
df_ad_group['most_ads_day'] = pd.Categorical(df_ad_group['most_ads_day'], categories=day_order, ordered=True)

conversion_by_day_ad = df_ad_group.groupby('most_ads_day', observed=True)['converted'].agg(['mean', 'count'])
conversion_by_day_ad.rename(columns={'mean': 'conversion_rate', 'count': 'users'}, inplace=True)
print("\nTingkat konversi berdasarkan hari paparan iklan terbanyak pada grup 'ad':")
print(conversion_by_day_ad)


plt.figure(figsize=(10, 6))
sns.barplot(x=conversion_by_day_ad.index, y='conversion_rate', data=conversion_by_day_ad, palette="viridis", order=day_order)
plt.title('Conversion Rate by Most Ads Day (AD Group)')
plt.ylabel('Conversion Rate')
plt.xlabel('Most Ads Day')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("conversion_by_day_ad.webp")
plt.show()
plt.close()

```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/16.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

## 7. Analisis Pengaruh Jam Paparan Iklan Terbanyak (`most_ads_hour`) pada Grup 'ad'

Selain hari, jam paparan iklan terbanyak (`most_ads_hour`) juga dapat dianalisis untuk mencari tahu apakah ada jam-jam tertentu dalam sehari yang lebih optimal untuk menayangkan iklan dari segi konversi, lagi-lagi fokus pada grup `ad`.

Mirip dengan analisis per hari, kita akan mengelompokkan data berdasarkan `most_ads_hour` dan menghitung tingkat konversi serta jumlah pengguna untuk setiap jam. Jam biasanya direpresentasikan dalam format 0-23. Visualisasi bar plot akan membantu mengidentifikasi jam-jam dengan performa konversi tinggi atau rendah. Rumus tingkat konversi per jam: 

<div class="single-code" style="width: 100%; font: inherit; background-color: #f9f9f9; border:1px solid #ccc; color: #333; padding: 10px; border-radius: 5px; margin-bottom:20px; word-wrap: break-word; overflow-wrap: break-word; max-height: 200px; overflow-y: auto;">
  <p>
$$ \text{Tingkat Konversi Jam}_h = \left( \frac{\text{Jumlah Pengguna Terkonversi pada Jam}_h}{\text{Jumlah Total Pengguna dengan Paparan Terbanyak pada Jam}_h} \right) \times 100\% $$</p></div>


```Python
conversion_by_hour_ad = df_ad_group.groupby('most_ads_hour')['converted'].agg(['mean', 'count'])
conversion_by_hour_ad.rename(columns={'mean': 'conversion_rate', 'count': 'users'}, inplace=True)
print("\nTingkat konversi berdasarkan jam paparan iklan terbanyak pada grup 'ad':")
print(conversion_by_hour_ad.sort_index())


plt.figure(figsize=(12, 6))
sns.barplot(x=conversion_by_hour_ad.index, y='conversion_rate', data=conversion_by_hour_ad.sort_index(), palette="magma")
plt.title('Conversion Rate by Most Ads Hour (AD Group)')
plt.ylabel('Conversion Rate')
plt.xlabel('Most Ads Hour')
plt.tight_layout()
plt.savefig("conversion_by_hour_ad.webp")
plt.show()
plt.close()
```

<div>
  <img src="/images/Analisa/1.ab_testing_ad/17.webp" style="height:100%;width:80%;display:block;margin-left:auto;margin-right:auto;">
</div>

## Ringkasan Insight Utama & Rekomendasi

Setelah melakukan analisis data A/B testing ini, beberapa insight penting dapat ditarik:

1. **Efektivitas Kampanye Iklan**: Kampanye iklan yang diuji (`grup ad`) terbukti secara signifikan lebih efektif dalam meningkatkan tingkat konversi dibandingkan dengan hanya menampilkan PSA (`grup psa`). Berdasarkan uji Chi-squared, perbedaan tingkat konversi antara kedua grup ini signifikan secara statistik (p-value &lt; 0.0001), yang mengindikasikan bahwa iklan memang memberikan dampak positif yang nyata. Tingkat konversi grup 'ad' (2.5547%) lebih tinggi dari grup 'psa' (1.7854%).
    
2. **Besaran Peningkatan (Lift)**: Iklan memberikan peningkatan (lift) relatif sebesar **43.09%** dibandingkan dengan PSA. Perbedaan absolut dalam tingkat konversi adalah sebesar **0.7692%**. Angka ini menunjukkan seberapa besar kontribusi iklan dalam mendorong konversi.
    
3. **Pentingnya Frekuensi Iklan**: Dalam grup 'ad', terdapat korelasi positif yang kuat antara jumlah iklan yang dilihat pengguna (`total_ads`) dan kecenderungan mereka untuk melakukan konversi. Pengguna yang terkonversi rata-rata melihat jumlah iklan yang jauh lebih banyak (~84 iklan) dibandingkan yang tidak terkonversi (~23 iklan). Tingkat konversi meningkat secara substansial seiring dengan bertambahnya jumlah iklan yang dilihat, terutama setelah melewati batas 20 iklan, dan peningkatannya sangat tajam bagi mereka yang melihat lebih dari 50 iklan. Ini menyarankan bahwa strategi untuk meningkatkan frekuensi paparan iklan kepada audiens target bisa efektif, namun perlu dipertimbangkan potensi kejenuhan iklan dan biaya yang menyertainya.
    
4. **Optimasi Waktu Paparan**:
    
    - **Hari**: Analisis `most_ads_day` menunjukkan bahwa hari **Senin** memiliki tingkat konversi tertinggi (3.32%) untuk grup 'ad', diikuti oleh Selasa (3.04%). Meskipun perbedaan antar hari tidak sedramatis pengaruh jumlah iklan, ini bisa menjadi pertimbangan untuk alokasi budget atau intensitas kampanye pada hari-hari tertentu.
    - **Jam**: Analisis `most_ads_hour` mengindikasikan bahwa periode **sore hingga malam hari (sekitar pukul 14:00 - 21:00)** cenderung menunjukkan tingkat konversi yang lebih baik, dengan puncak-puncak kecil di sekitar jam 16:00 (3.09%) dan 20:00 (3.03%). Sebaliknya, jam-jam dini hari (misalnya, 02:00-03:00) memiliki tingkat konversi yang sangat rendah.

## Rekomendasi Berbasis Data:

- **Lanjutkan Kampanye Iklan**: Mengingat efektivitasnya yang terbukti, kampanye iklan sebaiknya dilanjutkan.
- **Tingkatkan Frekuensi Paparan (dengan Hati-hati)**: Pertimbangkan strategi untuk meningkatkan jumlah paparan iklan per pengguna, khususnya menargetkan agar pengguna melihat setidaknya 20+ iklan, dengan potensi hasil lebih optimal di atas 50 eksposur. Namun, ini harus diimbangi dengan analisis biaya-manfaat (ROI) dan pemantauan terhadap metrik _ad fatigue_.
- **Fokuskan Pada Waktu Optimal**: Alokasikan budget iklan lebih banyak atau tingkatkan intensitas penayangan pada hari Senin dan Selasa, serta pada jam-jam sore hingga malam (14:00 - 21:00) untuk memaksimalkan potensi konversi. Hindari atau kurangi intensitas pada jam-jam dengan konversi sangat rendah.