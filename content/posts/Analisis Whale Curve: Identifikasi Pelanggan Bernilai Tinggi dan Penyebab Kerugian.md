+++
title = 'Analisis Whale Curve: Identifikasi Pelanggan Bernilai Tinggi dan Penyebab Kerugian'
date = 2025-03-04T21:37:16+07:00
draft = false
socialshare= true
description = "Dalam dunia marketing, Anda tentunya pasti tidak asing dengan istilah profitabilitas. Profitabilitas merupakan kemampuan perusahaan untuk menghasilkan keuntungan dari aktivitas bisnisnya, termasuk dari strategi pemasaran yang dijalankan. Ini tidak hanya mengatur seberapa efisien perusahaan mengubah pendapatan menjadi keuntungan, tetapi juga menjadi Key Performance Indicator (KPI) dalam menilai keberhasilan kampanye pemasaran, manajemen biaya, serta pengalokasian sumber daya."
image = "/images/6.Whale_Curve/1.webp"
imageBig= "/images/6.Whale_Curve/1.webp"
categories= ["Blog"]
authors= ["Daddy Ananta"]
tags = ["Marketing Matrix"]
avatar="/images/profil.jpeg"
+++

Untuk menghitung nilai dari profitabilitas tersebut, kita perlu memahami nilai dari penghasilan yang kita miliki dikurangi dengan biaya yang dikeluarkan untuk setiap pelanggan. Penghasilan ini dapat berasal dari pendapatan penjualan produk atau layanan, sedangkan biaya mencakup biaya operasional, pemasaran, produksi, dan layanan pelanggan. Dengan mengetahui selisih antara keduanya, kita dapat menentukan apakah bisnis menghasilkan keuntungan atau mengalami kerugian. Analisis profitabilitas konsumen penting untuk mengukur efisiensi usaha serta membantu dalam pengambilan keputusan strategis untuk meningkatkan laba di masa depan.

<div class="single-code" style="font: inherit;font-size: 100%;background-color: #f9f9f9;border:1px solid #ccc;color: #333;padding: 10px;border-radius: 5px;margin-bottom:20px">
    <p>$$\text{Customer profitability} = r_t - c_t$$</p>
</div>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <td style="border: 0px solid black; padding: 8px; text-align: center;"><p>$$r_t$$</p></td>
        <td style="border: 0px solid black; padding: 8px; text-align: left;">: Penghasilan dari pelanggan</td>
    </tr>
    <tr>
        <td style="border: 0px solid black; padding: 8px; text-align: center;"><p>$$c_t$$</p></td>
        <td style="border: 0px solid black; padding: 8px; text-align: left;">: Biaya yang dikeluarkan untuk memperoleh dan mendukung pelanggan</td>
    </tr>
</table>


Singkatnya, saat menjalankan bisnis, Anda mungkin menerapkan strategi seperti promo, gratis ongkir, atau diskon untuk meningkatkan pembelian konsumen. Namun, **bagaimana jika konsumen hanya membeli saat ada insentif tersebut dan enggan melakukan transaksi yang berkontribusi positif pada penghasilan bersih (net profit)?** 

**Dalam jangka panjang, hal ini dapat menciptakan ketergantungan konsumen pada diskon, memicu persaingan harga tidak sehat, dan mengikis margin keuntungan.** Jika kebiasaan ini terus berlanjut, bisnis berisiko terjebak dalam siklus "loyalitas semu"—konsumen datang karena benefit sesaat, bukan nilai produk atau layanan yang menambah nilai profitabilitas.

<img src="/images/6.Whale_Curve/2.webp" alt="Discount">

Dengan mengetahui nilai profitabilitas pelanggan, kita dapat memisahkan mereka ke dalam segmen-segmen strategis. Segmentasi ini memungkinkan perusahaan **mengidentifikasi kelompok pelanggan yang memberikan kontribusi tertinggi pada laba bersih (high-profit customers), pelanggan dengan potensi pertumbuhan (medium-profit customers), serta pelanggan yang justru menggerogoti margin keuntungan kita (low-profit atau unprofitable customers).**

Yang menjadi masalah adalah bagaimana kita memvisualisasikan nilai profitabilitas dari ketiga segmen tersebut jika data yang kita dapatkan terdiri dari ratusan atau bahkan ribuan transaksi. Oleh karena itu, kita membutuhkan **whale curve, yaitu grafik yang membantu mengidentifikasi kontribusi masing-masing pelanggan terhadap profitabilitas secara keseluruhan.**

# Whale Curve

Untuk memvisualisasikan Whale Curve, kita akan menggunakan Python sebagai alat analisis data. Dataset yang digunakan berasal dari <a href="https://www.kaggle.com/datasets/abdulqaderasiirii/e-commerce-data">Kaggle</a>, yang berisi data transaksi dari sebuah toko online di Amerika Serikat pada tahun 2020. Dengan menggunakan dataset ini, kita dapat menganalisis pola profitabilitas pelanggan dan mengidentifikasi segmen yang memberikan kontribusi terbesar terhadap keuntungan maupun yang berpotensi merugikan bisnis. Melalui pendekatan ini, kita dapat memahami distribusi profitabilitas secara lebih mendalam dan mengambil keputusan yang lebih strategis dalam mengelola pelanggan.

## Import library yang dibutuhkan

```Python
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from pyfonts import load_font
from highlight_text import fig_text, ax_text
from drawarrow import ax_arrow
from matplotlib.patches import FancyArrowPatch
from matplotlib.font_manager import FontProperties
%matplotlib inline
```




## Mengesktrak Dataset
```Python
df = pd.read_excel("E-commerce.xlsx")
df.head()
```
<img src="/images/6.Whale_Curve/3.webp" alt="whale curve" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">

## Mengambil variabel yang dibutuhkan
```Python
df2 = df.copy()
df2 = df2[["Customer ID","Profit"]]
df2.head()
```
<img src="/images/6.Whale_Curve/4.webp" alt="whale curve" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

## Melakukan Pivot untuk Menghasilkan CLTV untuk setiap transaksi konsumen

```Python
customer_profitability = df2.groupby('Customer ID')['Profit'].sum().reset_index()
customer_profitability.sort_values("Profit", ascending=False).head()
```
<img src="/images/6.Whale_Curve/5.webp" alt="whale curve" style="height:100%;width:300px;display:block;margin-left:auto;margin-right:auto;">

## Mencari nilai Cumulative Profit, Cumulative Percentage, Cumulative Customers


<div class="single-code" style=" width:100%;font: inherit;background-color: #f9f9f9;border:1px solid #ccc;color: #333;padding: 10px;border-radius: 5px;margin-bottom:20px">
<p>$$\text{Cumulative Profit(i)} = \text{Cumulative Profit}(i - 1) + \text{Profit(i)}$$</p>
<p>$$\text{Cumulative Percentage (i)} = (\frac{\text{Cumulative Profit (i)}} {\text{Total Profit}}) * 100$$</p>
<p>$$\text{Cumulative Customers (i)}= (\frac{(i + 1)} {\text{Total Customers}}) * 100$$</p>
</div>


```Python
# Total profit and sort data by profit in descending order
total_profit = customer_profitability['Profit'].sum()
customer_profitability = customer_profitability.sort_values('Profit', ascending=False)

# Cumulative profit and percentage of total profit
customer_profitability['Cumulative Profit'] = customer_profitability['Profit'].cumsum()
customer_profitability['Cumulative Percentage'] = (customer_profitability['Cumulative Profit'] / total_profit) * 100

# Cumulative percentage of customers
num_customers = len(customer_profitability)
customer_profitability['Cumulative Customers'] = [(i + 1) / num_customers * 100 for i in range(num_customers)]
customer_profitability
```

<img src="/images/6.Whale_Curve/6.webp" alt="whale curve" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">

## Membuat Plot Whale Curve
```Python
# Membuat Whale Curve menggunakan ax
fig, ax = plt.subplots(figsize=(10, 6))

ax.plot(customer_profitability['Cumulative Customers'], 
        customer_profitability['Cumulative Percentage'], 
        linestyle='-')

ax.set_xlim(0) 

ax.set_title('Whale Curve Profit Pelanggan')
ax.set_xlabel('Peringkat pelanggan berdasarkan keuntungan - paling banyak hingga paling sedikit (%)')
ax.set_ylabel('Kumulatif Profit (%)')
ax.grid(False)

plt.show()
```
<img src="/images/6.Whale_Curve/7.webp" alt="whale curve" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">

## Penerapan Parreto 20/80 untuk Setiap Segment

```Python
high_profitable_costumer = customer_profitability [customer_profitability ["Cumulative Customers"] <= 20]
middle_profitable_customer = customer_profitability[
    (customer_profitability ["Cumulative Customers"] > 20) & (customer_profitability ["Cumulative Customers"] <= 80)]
low_profitable_customer = customer_profitability[
    (customer_profitability ["Cumulative Customers"] > 80) & (customer_profitability ["Cumulative Customers"] <= 100)]

print(f"20% (High Profit) dari konsumen menghasilkan {round(high_profitable_costumer['Cumulative Percentage'].iloc[-1], 2)}% dari profit")
print(f"60% (Medium Profit) dari konsumen menghasilkan {round(middle_profitable_customer['Cumulative Percentage'].iloc[-1] - middle_profitable_customer['Cumulative Percentage'].iloc[0], 2)}% dari profit")
print(f"20% (Low Profit) dari konsumen menghasilkan {round(low_profitable_customer['Cumulative Percentage'].iloc[-1] - low_profitable_customer['Cumulative Percentage'].iloc[0], 2)}% dari profit")
```
<img src="/images/6.Whale_Curve/8.webp" alt="whale curve" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">

## Menambahkan Elemen Visual agar Terlihat Lebih Baik
```Python
# Load font
bold_font = FontProperties(family="serif", weight="bold", size=10)
# Whale Curve menggunakan ax
fig, ax = plt.subplots(figsize=(10, 6))

#Plot
ax.plot(customer_profitability['Cumulative Customers'], 
        customer_profitability['Cumulative Percentage'], 
         linewidth=2,
        linestyle='-')

# Scatter
ax.scatter(10, 50, color='#16C47F',alpha=1, s=50)  
ax.scatter(50, 50, color='#FFD65A',alpha=1, s=50)  
ax.scatter(90, 50, color='#F93827',alpha=1, s=50) 

# Garis Tambahan Horizontal
ax.axvline(20, color='w', linestyle='-', linewidth=2,zorder=2)
ax.axvline(80, color='w', linestyle='-', linewidth=2,zorder=2)

# Garis Tambahan Vertikal
ax.axhline(140, color='black', linestyle=':', linewidth=0.7)
ax.axhline(100, color='black', linestyle=':', linewidth=0.7)


rect = patches.Rectangle((0, 0), 20, 140, linewidth=1, facecolor='#A59D84',alpha=0.5,zorder=0)
rect1 = patches.Rectangle((20, 0), 60, 140, linewidth=1, facecolor='#D7D3BF',alpha=0.5,zorder=0)
ax.add_patch(rect)
ax.add_patch(rect1)

# Atur batas sumbu x dimulai dari 0
ax.set_xlim(0)  
ax.set_ylim(0, 180)
ax.set_yticks([100, 140])
# Menghilangkan garis luar canvas
for spine in ax.spines.values():
    spine.set_visible(False)
    
ax.spines['bottom'].set_visible(True)
ax.spines['left'].set_visible(True)
ax.spines['bottom'].set_linewidth(1)
ax.spines['left'].set_linewidth(1)

ax.plot([10, 10], [50, 170], color='#16C47F',alpha=1, linewidth=3, linestyle='-')
ax.plot([50, 50], [50, 160], color='#FFD65A',alpha=1, linewidth=3, linestyle='-')
ax.plot([90, 90], [50, 150], color='#F93827',alpha=1, linewidth=3, linestyle='-')

ax_text(x=15, y=190, s="<20%> of customers contribute\nto <105.84%> profitability",fontfamily='serif', fontsize=10, ha='center',color="black", highlight_textprops=[{'fontproperties': bold_font},  
                             {'fontproperties': bold_font}])
ax_text(x=54, y=180, s="<60%> of customers contribute\nto <34.02%> profitability",fontfamily='serif', fontsize=10, ha='center',color="black", highlight_textprops=[{'fontproperties': bold_font},  
                             {'fontproperties': bold_font}])
ax_text(x=94, y=170, 
        s="<20%> of customers contribute\nto <-40.14%> profitability", 
        fontfamily='serif', fontsize=10, ha='center', color="black",
        highlight_textprops=[{'fontproperties': bold_font},  
                             {'fontproperties': bold_font}]) 

#Sub-Title
plt.text(-8.5, 200, "Whale Curve Profitable Customers",
          fontsize=12, weight="bold", color="#727D73", ha='left')

# Menambahkan label dan judul
plt.title("The Silent Profit Crisis: 20% of Customers\nFuel Growth While 20% Bleed Revenue Dry",
          fontsize=20,fontfamily='serif', color="black", loc='left', x=-0.09, y=1.18)

plt.xlabel('Cumulative Customers (%)', fontsize=12,ha='left',color="#727D73", weight="bold",x=0)
plt.ylabel('Cumulative Percentage (%)', fontsize=12,ha='left',color="#727D73", weight="bold",y=0.50)
ax.grid(False)

plt.show()
```
<img src="/images/6.Whale_Curve/9.webp" alt="whale curve" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


## Insight

Seperti yang terlihat pada visualisasi di atas, **20% pelanggan paling menguntungkan berkontribusi sebesar 105.84%** terhadap profitabilitas. Pelanggan ini memiliki peran penting dalam mendukung keberlanjutan bisnis. Sementara itu, **60% pelanggan di kategori menengah juga menyumbang profitabilitas**, meskipun tidak sebesar kelompok sebelumnya. Namun, **20% pelanggan terakhir justru merugikan bisnis, dengan kontribusi negatif sebesar -40.14%** terhadap profitabilitas.

## Rekomendation

1. Pelanggan dalam 20% teratas merupakan kontributor utama profitabilitas bisnis. Untuk mempertahankan dan meningkatkan nilai dari kelompok ini, terapkan program loyalitas serta strategi up-selling dan cross-selling guna mendorong peningkatan pembelian. Mengacu pada buku Hacking Growth karya Sean Ellis, kelompok ini adalah target utama bisnis, sehingga penting untuk mengidentifikasi kebutuhan mereka melalui survei mendalam. Dengan memahami masalah atau kekurangan dalam layanan, bisnis dapat meningkatkan kepuasan pelanggan, yang pada akhirnya juga dapat mendorong peningkatan pembelian di segmen menengah hingga rendah.

2. Segmen menengah yang mencakup 60% pelanggan memiliki potensi untuk ditingkatkan ke level profitabilitas yang lebih tinggi. Untuk mengoptimalkan segmen ini, lakukan pengujian dan eksperimen dengan berbagai penawaran yang dipersonalisasi berdasarkan perilaku pembelian mereka. Strategi ini dapat membantu meningkatkan keterlibatan dan mendorong peningkatan transaksi, sehingga sebagian dari mereka dapat bergeser menjadi pelanggan bernilai tinggi.

3. Segmen pelanggan dengan 20% profitabilitas terendah cenderung kurang menguntungkan, mungkin hanya melakukan pembelian saat ada diskon atau promosi tanpa adanya loyalitas jangka panjang. Untuk menghadapi tantangan ini, lakukan analisis guna menentukan apakah ada peluang untuk meningkatkan nilai pelanggan di segmen ini. Jika tidak memungkinkan, sebaiknya alihkan fokus pada segmen yang lebih menguntungkan agar sumber daya bisnis tidak terbuang untuk pelanggan yang tidak memberikan nilai jangka panjang.


# Kesimpulan

*Whale Curve* merupakan visualisasi yang efektif dalam memetakan distribusi pelanggan berdasarkan nilai profitabilitasnya, baik pelanggan yang menguntungkan maupun yang merugikan. Namun, menghitung profitabilitas seorang pelanggan tidak selalu mudah, karena memerlukan pemahaman mendalam terkait biaya layanan yang diberikan kepada setiap pelanggan.

Menurut John A. Davis dalam bukunya *Measuring Marketing*, pelanggan baru (*new customers*) dapat menyimpang dari pendekatan ini. Hal ini disebabkan oleh tingginya biaya akuisisi pelanggan (*Customer Acquisition Cost* atau CAC), yang umumnya lebih besar dibandingkan dengan pelanggan lama ketika dihitung dalam periode Customer Lifetime Value (CLTV) yang sama. Oleh karena itu, dalam menilai profitabilitas pelanggan, penting untuk mempertimbangkan perbedaan biaya akuisisi dan nilai jangka panjang yang mereka berikan.


# Source Code
Feel free to get it so you can analyze what the problem is  : <a href="https://github.com/DaddyAnanta1/Portofolio-Data-Analysis/tree/main/While%20Curve%20-%20Customer%20Profitability">Jupyter Notebook</a>



# Referensi

 - <p style="text-indent:0px;">Rémi Boudousquié. Black and White Whale Tail on Blue Ocean Water during Daytime from <a href="https://unsplash.com/photosblack-and-white-whale-tail-on-blue-ocean-water-during-daytime-b0s5l-7CMYU"">Unsplash.com</a></p>

- <p style="text-indent:0px;">Tamanna Rumee from <a href="https://unsplash.com/photos/text-mIqyYpSNq3o"">Unsplash.com</a></p>

- <p style="text-indent:0px;">Measuring Marketing — The 100+ Essential Metrics Every Marketer Needs, Third Edition — John Davis<a href="https://books.google.co.id/books?id=EL1GDwAAQBAJ&newbks=1&newbks_redir=0&printsec=frontcover&pg=PA74&dq=Measuring+marketing+103+key+metrics+every+marketer+needs+google+book&hl=id&redir_esc=y#v=onepage&q=Measuring%20marketing%20103%20key%20metrics%20every%20marketer%20needs%20google%20book&f=false"> - sumber buku</a></p>

- <p style="text-indent:0px;">Marketing Metrics The Definitive Guide to Measuring — Paul W. Farris, Neil T. Bendle, Phillip E. Pfeifer, David J - <a href="https://books.google.co.id/books/about/Marketing_Metrics.html?id=7Ptw4nBoGmkC&redir_esc=y">sumber buku</a></p>
