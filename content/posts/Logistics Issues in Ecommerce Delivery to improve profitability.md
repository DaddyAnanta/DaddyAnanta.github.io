+++
title = 'Logistics Issues in Ecommerce Delivery to improve profitability'
date = 2024-09-10
draft = false
description = "Pada kesempatan ini, saya menganalisis data e-commerce yang dipilih secara acak dari Kaggle. Dataset ini berisi informasi tentang transaksi penjualan barang di sebuah perusahaan e-commerce yang beroperasi di Brasil."
image = "/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image11.png"
imageBig= "/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image11.png"
categories= ["Portofolio"]
tags= ["Python"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++

## Project Goals

Tujuan daru proyek ini adalah untuk mengidentifikasi permasalahan logistik yang disebabkan oleh kelambatan dalam proses pesanan

Dengan mengidentifikasi tantangan dalam pengiriman, seperti penundaan, tantangan dalam pengiriman, dan fluktasi permintaaan di berbagai wilayah. Proyek ini bertujuan untuk memberikan rekomendasi berbasis data untuk mengoptimalkan proses pengiriman. 

Perbaikan ini akan meningkatkan kepuasan pelanggan dan pada akhirnya meningkatkan profitabilitas melalui manajemen logistik, yang lebih baik dan peningkatan penjualan di berbagai wilayah. 


## Business Understanding

A-Ecommerce (fiksi) adalah merek yang diakui secara  global dan peritel terkemuka di Amerika Serikat, yang dikenal dengan menawarkan nilai yang luar biasa, inspirasi, inovasi dan pengalaman belanja yang unik.

Dataset ini berfokus pada operasi di A-Ecommerce di Brazil, yang mencangkup 100.000 pesanan yang dilakukan pada tahun 2017 sampai 2018. Ini mencangkup informasi terperinci tentang status pesanan, harga, kinerja pembayaran dan pengiriman, lokasi pelanggan serta atribut produk.

## Tentang Dataset

Berikut terkait dengan skema datasetnya :

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image1.png" alt="Logistik Image">


## Analisis Deskriptif

Berdasarkan Grafik yang ada, terlihat peningkatan untuk permintaan pembelian di tahun 2018 dibandingkan tahun 2017 dalam perbandingan setiap bulannya. Peningkatan ini mungkin dipengaruhi oleh keberhasilan dalam strategi pemasaran yang didorong oleh promosi dari mulut ke mulut.

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image2.png" alt="Logistik Image">


## Tantangan Logistik

Terbukti sebelum tahun 2018, nasih ada pesanan yang mengalami keterlambatan dan tidak terkonfirmasi telah dikirim. Masalah ini dapat menyebabkan ketidakpuasan pelanggan, yang pada ahirnya dapat mempengaruhi loyalitas pelanggan dan memberikan keuntungan bagi pesaing. Permasalahan ini perlu diidentifikasi untuk mengurangi resiko yang sama dikemudian hari.


<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image3.png" alt="Logistik Image">


### Proses Pemesanan di A-Ecommerce

1. Created 

<p style="margin-left:40px">Setelah konsumen memilih produk dan menyelesaikan pembayaran, pemesanan berhasil dibuat di dalam sistem</p>

2. Approved 

<p style="margin-left:40px">Setelah pesanan dibuat, sistem atau penjual akan melakukan verifikasi pembayaran dan menyetujui pesanan untuk diproses</p>

3. Processing

<p style="margin-left:40px">Setelah pesanan disetujui, tim gudang menyiapkan produk, memverifikasi alamat, dan mengemas barang untuk pengiriman.</p>

4. Invoiced

<p style="margin-left:40px">Setelah pesanan diproses, faktur resmi akan dibuat dan dikirimkan kepada pelanggan sebagai bukti transaksi.</p>

5. Shipping

<p style="margin-left:40px">Setelah pesanan siap, tim pengiriman akan mengatur pengiriman produk. Saat itulah barang dikirim dan dikirim ke alamat tujuan.</p>

6. Delivery

<p style="margin-left:40px">Setelah barang dikirim, kurir akan mengirimkan produk ke pelanggan. Ini menandai selesainya pesanan.</p>

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image4.png" alt="Logistik Image">


## Tantangan Logistik

Jumlah penjualan yang sering tertunda lebih tinggi di São Paulo (525) dibandingkan dengan Rio de Janeiro (43), Santa Catarina (20), dan Paraná (48). Secara keseluruhan, persentase penjualan yang tertunda di São Paulo mencapai 68% dari semua transaksi yang tertunda. Apa penyebab utama masalah ini di São Paulo?

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image5.png" alt="Logistik Image">

São Paulo mendominasi volume pesanan dengan 34.705 pesanan, jauh lebih tinggi daripada negara bagian lainnya. Minas Gerais, Paraná, dan Santa Catarina mengikuti dengan jumlah pesanan yang jauh lebih kecil, yang mengindikasikan potensi konsentrasi aktivitas bisnis di São Paulo.

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image6.png" alt="Logistik Image">

Grafik menunjukkan bahwa São Paulo secara konsisten memimpin dalam lalu lintas penjual, dengan lonjakan yang signifikan pada awal 2018, yang mengindikasikan lonjakan aktivitas selama periode tersebut. Sebaliknya, negara bagian lain seperti Minas Gerais dan Paraná menunjukkan tingkat lalu lintas penjual yang relatif stabil tetapi lebih rendah, menunjukkan lebih sedikit fluktuasi dalam aktivitas mereka.

Tren ini dapat diibaratkan sebagai monster raksasa di lautan luas, di mana São Paulo mewakili kekuatan dan dominasi yang luar biasa, menjulang tinggi di atas ombak, sementara negara bagian lain menyerupai makhluk yang lebih tenang yang bergerak di perairan yang lebih tenang, yang membutuhkan pengembangan untuk tumbuh lebih besar.

Namun, kehadiran São Paulo yang terus berkembang dapat memberikan tekanan yang lebih besar kepada negara-negara bagian yang lebih kecil, yang berpotensi menghambat pertumbuhan mereka dan bahkan mengancam kelangsungan hidup mereka jika mereka tidak dapat beradaptasi dan bersaing dengan lonjakan aktivitas.

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image7.png" alt="Logistik Image">


Pangsa penjual di São Paulo secara konsisten meningkat, mencapai 72,9% pada Q2 2018, sementara negara bagian lain, seperti Rio de Janeiro dan Minas Gerais, mengalami penurunan pangsa yang stabil. Dominasi São Paulo yang terus meningkat ini menunjukkan adanya perluasan konsentrasi penjual di negara bagian tersebut, yang berpotensi membatasi peluang pertumbuhan di wilayah lain.

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image8.png" alt="Logistik Image">


## Rekomendasi Bisnis

Selain São Paulo, lima negara bagian lainnya - Minas Gerais, Paraná, Rio Grande do Sul, dan Santa Catarina - dapat menjadi solusi untuk mengatasi ketergantungan yang besar pada São Paulo. Dengan jumlah pembelian yang signifikan di negara-negara bagian ini, mereka dapat menjadi alternatif untuk mengalihkan pembelian atau memperluas cakupan penjualan, membantu mendistribusikan beban transaksi dan mengurangi tekanan di São Paulo, sambil memanfaatkan potensi pasar di wilayah-wilayah ini.

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image9.png" alt="Logistik Image">


Berdasarkan visualisasi Pareto ini, 80% pendapatan berasal dari 7 kategori produk inti: Rumah & Tempat Tinggal, Elektronik, Kesehatan & Kecantikan, Furnitur & Dekorasi, Olahraga & Luar Ruang, Fashion & Aksesori, dan Lain-lain. Hal ini menyoroti pentingnya berfokus pada “beberapa kategori penting” yang memberikan kontribusi terbesar terhadap pendapatan, sementara kategori lainnya memberikan kontribusi yang lebih kecil.

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image10.png" alt="Logistik Image">


1. Memperluas Fokus ke Negara Bagian Utama

<p style="margin-left:40px">Menargetkan peningkatan penjualan di negara-negara bagian alternatif seperti Minas Gerais, Paraná, Rio Grande do Sul, Rio de Janeiro, dan Santa Catarina, selain São Paulo. Hal ini akan membantu mengurangi kegagalan pemenuhan pesanan dan mengoptimalkan jaringan distribusi di wilayah-wilayah tersebut, memastikan jangkauan pasar yang lebih luas dan pengiriman produk yang lebih efisien.</p>

2. Memprioritaskan Kategori Produk dengan Permintaan Tinggi

<p style="margin-left:40px">Berdasarkan analisis Pareto, fokuslah pada kategori produk dengan permintaan tinggi seperti Rumah & Tempat Tinggal, Elektronik, Kesehatan & Kecantikan, Perabot & Dekorasi, Olahraga & Luar Ruangan, Mode & Aksesori, dan Lain-lain. Berkonsentrasi pada kategori-kategori ini di negara bagian yang ditargetkan akan memaksimalkan pendapatan dan mengurangi kehabisan stok yang dapat mengganggu pemenuhan pesanan.</p>

3. Melakukan Analisis Kepuasan Pelanggan dan NPS yang Mendalam

<p style="margin-left:40px">Lakukan analisis mendalam tentang kepuasan pelanggan dan Net Promoter Score (NPS) untuk memahami pengalaman pelanggan di platform e-commerce. Dengan mengidentifikasi area yang perlu ditingkatkan dalam pengalaman pengguna, pengiriman, dan kualitas produk, Anda dapat meningkatkan loyalitas pelanggan dan meningkatkan pembelian berulang.</p>


## Dashboard Preview

<img src="/images/Logistics_Issues_in_Ecommerce_Delivery_to_improve_profitability/image11.png" alt="Logistik Image">


## Hasil Proyek

1. **Github** : <a style="margin-left:30px; text-align: justify;">Link</a>

2. **Looker-Studio** : <a style="margin-left:30px; text-align: justify;">Link</a>

3. **Power Point Presentation** : <a style="margin-left:30px; text-align: justify;">Link</a>
