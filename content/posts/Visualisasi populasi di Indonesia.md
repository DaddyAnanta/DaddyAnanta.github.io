+++
title = 'Visualisasi populasi di Indonesia'
date = 2025-04-18T21:37:16+07:00
draft = false
socialshare = true
description = 'Indonesia merupakan negara kepulauan yang besar serta dengan jumlah penduduk yang begitu padat. Menurut data yang diambil dalam worldometers.info mencatat Indonesia sebagai negara ke-4 dengan jumlah populasi terbanyak di dunia dengan jumlah penduduk lebih dari 285jt Jiwa setelah India, China United States.'
image = "/images/14.Penduduk/22.webp"
imageBig= "/images/14.Penduduk/22.webp"
categories= ["Analisis Data"]
tags=["Python"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++

---

# Sumber Berita

Sumber berita yang merupakan bagian dari visualisasi ini dapat diakses di  <a href="https://daddyananta.github.io/posts/peningkatan-populasi-dan-penurunan-angka-kelahiran-di-indonesia-pada-tahun-2023/">Peningkatan Populasi dan Penurunan Angka Kelahiran di Indonesia Pada Tahun 2023</a>


---

# Python Code Data Visualization

## Library yang Dibutuhkan

Langkah pertama dalam setiap proyek analisis data atau visualisasi dengan Python adalah mengimpor pustaka-pustaka yang diperlukan. Pustaka seperti Pandas digunakan untuk manipulasi data, Matplotlib dan Seaborn untuk visualisasi, dan NumPy untuk operasi numerik. Beberapa pustaka tambahan juga diimpor untuk penyesuaian plot dan manipulasi gambar.

---

``` Python
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.ticker as mticker
import seaborn as sns
import matplotlib.pyplot as plt

import matplotlib.ticker as mticker
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from PIL import Image
import matplotlib.patches as mpatches
import io
from adjustText import adjust_text
import math # Diperlukan untuk math.ceil di create_grid

warnings.filterwarnings('ignore')
%matplotlib inline
```
## Upload Data
Untuk datanya dapat Anda unduh di &lt;a href="[invalid URL removed]?">Dataset Populasi&lt;/a>

### Memuat Dataset
Setelah pustaka siap, langkah selanjutnya adalah memuat data yang akan kita analisis. Data jumlah penduduk ini disimpan dalam format file CSV (.csv) dan kita akan menggunakan fungsi read_csv dari Pandas untuk membacanya ke dalam sebuah DataFrame. Untuk datanya dapat Anda akses langsung di <a href="https://www.bps.go.id/id/statistics-table/3/WVc0MGEyMXBkVFUxY25KeE9HdDZkbTQzWkVkb1p6MDkjMw==/jumlah-penduduk-menurut-kelompok-umur-dan-jenis-kelamin--2023.html?">Dataset BPS</a> atau dengan versi yang telah disatukan <a href="https://github.com/DaddyAnanta/Pyramid_Distribution_-_Slope_Chart-Python/blob/main/Data/jumlah_penduduk_2018_2023.csv">Dataset</a>.







``` Python
df = pd.read_csv("jumlah_penduduk_2018_2023.csv")
df
```
<img src="/images/14.Penduduk/4.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


### Pembersihan dan Konversi Tipe Data
Data mentah seringkali memerlukan pembersihan. Dalam kasus ini, kolom jumlah penduduk masih dalam format teks (string) dengan pemisah ribuan (titik) dan desimal (koma) gaya Indonesia. Kita perlu menghapus titik, mengganti koma dengan titik (standar float), dan mengonversi kolom-kolom ini menjadi tipe data numerik (float) agar dapat digunakan dalam perhitungan dan plot. Kita buat salinan DataFrame (df1) agar data asli (df) tetap utuh.

``` Python
# Daftar kolom yang ingin dikonversi
cols = [
    'Penduduk (Laki-Laki) (Ribu)',
    'Penduduk (Perempuan) (Ribu)',
    'Penduduk (Laki-Laki + Perempuan) (Ribu)'
]

df1 = df.copy()

# Ubah format desimal lokal (koma) ke titik, hapus pemisah ribuan jika ada
for col in cols:
    df1[col] = (
        df1[col]
        .str.replace('.', '', regex=False)        
        .str.replace(',', '.', regex=False)       
        .astype(float)                            
    )
    
df1.head()

```

<img src="/images/14.Penduduk/5.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


### Eksplorasi Data: Kelompok Umur
Sebelum melangkah lebih jauh, penting untuk memahami isi dari kolom 'Kelompok Umur'. Kita bisa menggunakan value_counts() untuk melihat nilai-nilai unik apa saja yang ada di kolom ini dan berapa kali masing-masing muncul.


``` Python

df1["Kelompok Umur"].value_counts()

```
<img src="/images/14.Penduduk/6.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


### Eksplorasi Data: Memeriksa Nilai "Indonesia"
Dari hasil value_counts() sebelumnya, kita melihat ada nilai "Indonesia". Mari kita periksa baris data yang memiliki nilai ini untuk memahami apa yang direpresentasikannya (kemungkinan adalah total keseluruhan).

``` Python

df1[df1["Kelompok Umur"] == "Indonesia"]

```

<img src="/images/14.Penduduk/7.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


### Penggantian Nilai untuk Konsistensi
Nilai "Indonesia" tampaknya merepresentasikan total populasi. Untuk kejelasan dan konsistensi dalam analisis selanjutnya, kita akan menggantinya dengan label "Jumlah/Total".

``` Python
df1["Kelompok Umur"] = df1["Kelompok Umur"].replace("Indonesia", "Jumlah/Total")
df1

```
<img src="/images/14.Penduduk/8.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


## Persiapan Data untuk Piramida Penduduk
Piramida penduduk menampilkan distribusi usia per jenis kelamin, bukan total keseluruhan. Oleh karena itu, kita perlu membuat DataFrame baru (pyramid_chart) yang hanya berisi data per kelompok umur, dengan mengecualikan baris "Jumlah/Total".



``` Python

pyramid_chart = df1[df1["Kelompok Umur"] != "Jumlah/Total"]
pyramid_chart

```
<img src="/images/14.Penduduk/9.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">



### Memfilter Data Berdasarkan Tahun (Contoh)
Untuk membuat visualisasi spesifik per tahun, kita perlu memfilter data. Sebagai contoh, berikut cara mendapatkan data khusus untuk tahun 2019.

``` Python

df_2019 = pyramid_chart[pyramid_chart["Tahun"] == 2019]
df_2019.head()

```
<img src="/images/14.Penduduk/10.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">



## Membuat Fungsi Dasar Piramida Penduduk
Untuk efisiensi, kita akan membuat fungsi Python yang dapat menghasilkan plot piramida penduduk dasar. Fungsi ini akan menerima tahun sebagai input, memfilter data untuk tahun tersebut, dan menggunakan Seaborn (barplot) untuk membuat plot horizontal bagi laki-laki (nilai negatif agar ke kiri) dan perempuan (nilai positif ke kanan).

``` Python

def create_age_distribution(year):
    df2 = pyramid_chart.copy()
    df2 = df2[df2["Tahun"]== year]
    
    kelompok_usia_labels = df2['Kelompok Umur'].tolist()
    
    ax = sns.barplot(y=kelompok_usia_labels, x=df2[df2['Tahun'] == year]['Penduduk (Laki-Laki) (Ribu)'] * -1, orient="h", color=MALE_COLOR)
    ax = sns.barplot(y=kelompok_usia_labels, x=df2[df2['Tahun'] == year]['Penduduk (Perempuan) (Ribu)'], orient="h", color=FEMALE_COLOR)
    
    return ax

```
### Menampilkan Plot Piramida Dasar
Sekarang kita definisikan konstanta warna untuk laki-laki dan perempuan. Lalu, kita panggil fungsi create_age_distribution yang baru saja dibuat untuk tahun 2021 dan tampilkan plotnya menggunakan plt.show(). Ini akan memberikan gambaran awal visualisasi kita.

``` Python


FEMALE_COLOR = "#F64740"
MALE_COLOR = "#05B2DC"

fig = plt.figure(figsize=(10, 7))

ax = create_age_distribution(
    year=2021
)

plt.show()

```

<img src="/images/14.Penduduk/11.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


## Meningkatkan Estetika Plot: Styling dengan Seaborn
Plot dasar tadi fungsional, tetapi tampilannya bisa ditingkatkan. Kita akan membuat fungsi set_seaborn_style untuk mengatur berbagai aspek visual seperti warna latar belakang, warna grid, jenis font, dan warna teks agar plot lebih menarik dan sesuai dengan tema blog Anda.


``` Python
def set_seaborn_style(font_family, background_color, grid_color, text_color):
    sns.set_style({
        "axes.facecolor": background_color,
        "figure.facecolor": background_color,

        "axes.labelcolor": text_color,

        "axes.edgecolor": grid_color,
        "axes.grid": True,
        "axes.axisbelow": True,

        "grid.color": grid_color,

        "font.family": font_family,
        "text.color": text_color,
        "xtick.color": text_color,
        "ytick.color": text_color,

        "xtick.bottom": False,
        "xtick.top": False,
        "ytick.left": False,
        "ytick.right": False,

        "axes.spines.left": False,
        "axes.spines.bottom": True,
        "axes.spines.right": False,
        "axes.spines.top": False,
    }
)
    
FEMALE_COLOR = "#F64740"
MALE_COLOR = "#05B2DC"

set_seaborn_style(
    font_family="monospace",
    background_color="#253D5B",
    grid_color="#355882",
    text_color="#EEEEEE"
)
```

### Menampilkan Plot dengan Gaya Baru
Setelah gaya kustom diterapkan, mari kita buat ulang plot piramida untuk tahun 2021 untuk melihat efek dari perubahan gaya tersebut.


``` Python
fig = plt.figure(figsize=(10, 7))

ax = create_age_distribution(
    year=2021
)

plt.show()
```
<img src="/images/14.Penduduk/12.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">



## Memperbaiki Keterbacaan Sumbu X: Format Angka
Sumbu X saat ini menampilkan angka populasi dalam ribuan, tetapi bisa menjadi sangat besar. Untuk membuatnya lebih mudah dibaca, kita akan membuat fungsi create_x_labels yang mengubah angka absolut menjadi format yang lebih ringkas (misalnya, '10000K' menjadi '10M' atau '10000' menjadi '10K').

``` Python
def create_x_labels(ax, xformat):
    if xformat == "billions":
        return ["{}B".format(round(abs(x / 1e9))) for x in ax.get_xticks()[1:-1]]
    elif xformat == "millions":
        return ["{}M".format(round(abs(x / 1e6))) for x in ax.get_xticks()[1:-1]]
    elif xformat == "thousands":
        return ["{}K".format(round(abs(x / 1e3))) for x in ax.get_xticks()[1:-1]]
    elif xformat == "percentage":
        return ["{}%".format(round(abs(x), 1)) for x in ax.get_xticks()[1:-1]]
```
### Menerapkan Format pada Ticks Sumbu X
Selanjutnya, kita buat fungsi format_ticks yang akan menggunakan create_x_labels (atau cara pemformatan lain yang lebih baik seperti FuncFormatter) untuk mengatur label sumbu X. Fungsi ini juga mengatur ukuran font, padding, dan menghapus label sumbu Y yang mungkin tidak diperlukan. Kita juga bisa menetapkan batas sumbu X (xlim) jika diperlukan.

``` Python
def format_ticks(ax, xformat, xlim=(None, None)):
    ax.tick_params(axis="x", labelsize=12, pad=8)
    ax.tick_params(axis="y", labelsize=12)
    ax.set(ylabel=None, xlabel=None, xlim=xlim)
    
    plt.xticks(
        ticks=ax.get_xticks()[1:-1],
        labels=create_x_labels(ax, xformat)
    )
```

### Menampilkan Plot dengan Sumbu X yang Terformat
Panggil kembali fungsi create_age_distribution dan terapkan format_ticks untuk melihat plot dengan label sumbu X yang sudah diformat agar lebih mudah dibaca (menampilkan nilai absolut dalam ribuan).


``` Python
fig = plt.figure(figsize=(10, 7))

ax = create_age_distribution(
    year=2021
)

# New functions
format_ticks(ax, xformat="thousands")

plt.show()
```
<img src="/images/14.Penduduk/13.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">



## Menambahkan Informasi Penting: Legenda
Untuk memastikan pembaca tahu warna mana yang mewakili laki-laki dan mana yang perempuan, kita perlu menambahkan legenda. Fungsi add_legend berikut akan membuat legenda menggunakan matplotlib.patches dan menempatkannya di posisi yang ditentukan pada plot.



``` Python
from matplotlib.patches import Patch

def add_legend(x, y): 
    patches = [
        Patch(color=MALE_COLOR, label="Male"),
        Patch(color=FEMALE_COLOR, label="Female")
    ]
    
    leg = plt.legend(
        handles=patches,
        bbox_to_anchor=(x, y), loc='center',
        ncol=2, fontsize=15,
        handlelength=1, handleheight=0.4,
        edgecolor="#253D5B"
    )
```

### Menyempurnakan Plot Final (untuk Satu Tahun)
Sekarang saatnya menggabungkan semua elemen: membuat plot dasar, menerapkan format pada sumbu, menambahkan legenda, dan memberikan judul yang informatif. Kita juga menggunakan plt.tight_layout() untuk memastikan semua elemen pas tanpa tumpang tindih.

``` Python
fig = plt.figure(figsize=(10, 8))

ax = create_age_distribution(
    year=2021
)

# New functions
format_ticks(ax, xformat="thousands")
add_legend(x=0.5, y=1.09)
plt.title("Distribusi Demografi Usia di Indonesia tahun 2019", y=1.14, fontsize=20)

plt.tight_layout()
plt.show()
```

<img src="/images/14.Penduduk/13.webp" alt="pyramid distrirbution plot python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


## Utilitas Gambar: Konversi Figure ke Image
Dalam beberapa kasus, terutama jika ingin menggabungkan beberapa plot atau menyimpannya dalam format tertentu, kita perlu mengonversi objek Figure Matplotlib menjadi objek gambar yang bisa dimanipulasi, misalnya menggunakan pustaka PIL (Pillow). Fungsi create_image_from_figure melakukan konversi ini.

``` Python
def create_image_from_figure(fig):
    plt.tight_layout()
    
    fig.canvas.draw()
    data = np.frombuffer(fig.canvas.tostring_rgb(), dtype=np.uint8)
    data = data.reshape((fig.canvas.get_width_height()[::-1]) + (3,))
    plt.close() 
    
    return Image.fromarray(data)
```
### Kode Lengkap: Plot Piramida Dinamis dengan Anotasi Perubahan dan Grid
Blok kode berikut berisi definisi fungsi yang telah dimodifikasi dan diperbarui, termasuk fungsi utilitas gambar, serta loop utama untuk menghasilkan visualisasi multi-tahun dalam format grid. Perhatikan penambahan anotasi teks (+/- %) pada plot piramida. Hasilnya akan langsung dimuat dalam format .webp di tempat di mana jupyter notebook Anda berjalan.

``` Python
# --- Warna ---
MALE_COLOR = '#3498db'
FEMALE_COLOR = '#F72798'
POSITIVE_CHANGE_COLOR = '#06D001'
NEGATIVE_CHANGE_COLOR = '#FF204E'
# --- Fungsi create_age_distribution yang dimodifikasi ---
def create_age_distribution(year, data_df):
    """
    Membuat plot piramida penduduk untuk tahun tertentu, dengan
    anotasi teks persentase perubahan dari tahun sebelumnya.
    """
    current_year = int(year)
    previous_year = current_year - 1

    # Ambil data tahun ini
    df_year = data_df[data_df['Tahun'] == current_year].copy()
    if df_year.empty:
        print(f"Tidak ada data untuk tahun {current_year}.")
        return None, None

    # Ambil data tahun sebelumnya (jika ada)
    df_previous_year = data_df[data_df['Tahun'] == previous_year].copy()
    has_previous_data = not df_previous_year.empty

    # Siapkan label dan koordinat y (lebih baik set index untuk lookup)
    df_year_indexed = df_year.set_index('Kelompok Umur')
    kelompok_usia_labels = df_year_indexed.index.tolist()
    y_coords = np.arange(len(kelompok_usia_labels))

    # Buat Figure dan Axes
    fig, ax = plt.subplots(figsize=(9, 6)) 

    # --- Plot Bar Chart (Tahun Ini) ---
    sns.barplot(ax=ax, y=kelompok_usia_labels, x=df_year_indexed['Penduduk (Laki-Laki) (Ribu)'] * -1,
                orient="h", color=MALE_COLOR, label=f'Laki-Laki {current_year}')
    sns.barplot(ax=ax, y=kelompok_usia_labels, x=df_year_indexed['Penduduk (Perempuan) (Ribu)'],
                orient="h", color=FEMALE_COLOR, label=f'Perempuan {current_year}')

    # --- Tambahkan Anotasi Persentase Perubahan ---
    if has_previous_data:
        prev_data_dict = df_previous_year.set_index('Kelompok Umur').to_dict()

        # Pengaturan Teks Anotasi
        annotation_fontsize = 12 
        text_offset_x = df_year_indexed[['Penduduk (Laki-Laki) (Ribu)', 'Penduduk (Perempuan) (Ribu)']].max().max() * 0.02 

        for i, label in enumerate(kelompok_usia_labels):
            y = y_coords[i]

            # Ambil nilai tahun ini
            curr_male_val = df_year_indexed.loc[label, 'Penduduk (Laki-Laki) (Ribu)']
            curr_female_val = df_year_indexed.loc[label, 'Penduduk (Perempuan) (Ribu)']

            # Ambil nilai tahun lalu
            prev_male_val = prev_data_dict.get('Penduduk (Laki-Laki) (Ribu)', {}).get(label, np.nan)
            prev_female_val = prev_data_dict.get('Penduduk (Perempuan) (Ribu)', {}).get(label, np.nan)

            # --- Anotasi Laki-Laki ---
            if pd.notna(curr_male_val) and pd.notna(prev_male_val):
                if prev_male_val != 0: 
                    male_pct_change = ((curr_male_val - prev_male_val) / prev_male_val) * 100
                    male_text = f"{male_pct_change:+.1f}%" 
                    male_color = POSITIVE_CHANGE_COLOR if male_pct_change > 0 else NEGATIVE_CHANGE_COLOR if male_pct_change < 0 else 'black'
                    x_pos_male = curr_male_val * -1 
                    ax.text(x_pos_male - text_offset_x, y, male_text,
                            color=male_color, fontsize=annotation_fontsize,
                            ha='right', va='center', weight='bold') # ha=right

            # --- Anotasi Perempuan ---
            if pd.notna(curr_female_val) and pd.notna(prev_female_val):
                 if prev_female_val != 0: 
                    female_pct_change = ((curr_female_val - prev_female_val) / prev_female_val) * 100
                    female_text = f"{female_pct_change:+.1f}%"
                    female_color = POSITIVE_CHANGE_COLOR if female_pct_change > 0 else NEGATIVE_CHANGE_COLOR if female_pct_change < 0 else 'black'
                    x_pos_female = curr_female_val 
                    ax.text(x_pos_female + text_offset_x, y, female_text,
                            color=female_color, fontsize=annotation_fontsize,
                            ha='left', va='center', weight='bold') 


    # --- Pengaturan Visual Plot ---
    plot_title = f'Piramida Penduduk Tahun {current_year}'
    ax.set_title(plot_title, fontsize=16, pad=15)

    # Label dan Format Sumbu 
    ax.set_xlabel('Jumlah Penduduk (Ribu)', fontsize=14)
    ax.set_ylabel('Kelompok Umur', fontsize=14)
    formatter = mticker.FuncFormatter(lambda x, pos: f'{abs(int(x))}')
    ax.xaxis.set_major_formatter(formatter)
    ax.grid(axis='x', linestyle='--', alpha=0.7)

    # --- Legend
    handles = []
    male_patch = mpatches.Patch(color=MALE_COLOR, label=f'Laki-laki')
    female_patch = mpatches.Patch(color=FEMALE_COLOR, label=f'Perempuan')
    handles.extend([male_patch, female_patch])

    ax.legend(handles=handles, loc='best', fontsize=12) 

    # Despine dan Ticks (sama seperti sebelumnya)
    sns.despine(ax=ax, left=True)
    ax.tick_params(axis='y', length=0)
    ax.tick_params(axis='x', labelsize=12)
    ax.tick_params(axis='y', labelsize=12)

    # Perluas batas sumbu x sedikit agar teks tidak terpotong
    current_xlim = ax.get_xlim()
    ax.set_xlim(current_xlim[0] * 1.1, current_xlim[1] * 1.1) 
    fig.tight_layout(rect=[0, 0.02, 1, 0.95])

    return fig, ax

# --- Fungsi utilitas gambar (create_image_from_figure, add_padding_to_chart) ---
# --- Fungsi create_grid ---)
def create_image_from_figure(fig):
    canvas = FigureCanvas(fig)
    canvas.draw()
    width, height = canvas.get_width_height()
    image = np.frombuffer(canvas.buffer_rgba(), dtype=np.uint8).reshape((height, width, 4))
    return Image.fromarray(image, 'RGBA')

def add_padding_to_chart(chart, left, top, right, bottom, background):
    size = chart.size
    mode = chart.mode
    if background.startswith('#') and len(background) == 9 and background.endswith('00'):
       mode = "RGBA"; bg_color = background
    elif background.startswith('#') and len(background) == 7:
        mode = "RGB"; bg_color = background
    else: mode = "RGB"; bg_color = "#FFFFFF"
    image = Image.new(mode, (size[0] + left + right, size[1] + top + bottom), bg_color)
    if chart.mode == 'RGBA': image.paste(chart, (left, top), mask=chart.split()[3])
    else: image.paste(chart, (left, top))
    return image

# --- Fungsi create_grid --- (PASTIKAN DEFINISI INI YANG DIGUNAKAN)
def create_grid(figures, pad, ncols, grid_background_color): 
    """ Membuat grid dari gambar dengan warna latar belakang tertentu. """
    if not figures: return None
    nrows = math.ceil(len(figures) / ncols)
    if nrows <= 0: return None
    size = figures[0].size
    if size[0] <= 0 or size[1] <= 0: return None
    grid_width = ncols * size[0] + (ncols - 1) * pad
    grid_height = nrows * size[1] + (nrows - 1) * pad

    # Menentukan mode grid berdasarkan warna background
    if isinstance(grid_background_color, tuple) and len(grid_background_color) == 4:
        grid_mode = "RGBA"
    elif isinstance(grid_background_color, str) and grid_background_color.startswith('#') and len(grid_background_color) == 9:
        grid_mode = "RGBA"
    else:
        grid_mode = "RGB"

    # Buat grid_image dengan warna background yang diinginkan
    grid_image = Image.new(grid_mode, (grid_width, grid_height), grid_background_color) 

    for i, figure in enumerate(figures):
        col = i % ncols; row = i // ncols
        x_offset = col * (size[0] + pad); y_offset = row * (size[1] + pad)

        if figure.mode == 'RGBA':
            if grid_image.mode != 'RGBA':
                grid_image = grid_image.convert('RGBA')
            grid_image.paste(figure, (x_offset, y_offset), mask=figure.split()[3])
        else: 
            grid_image.paste(figure, (x_offset, y_offset))

    return grid_image

# --- Loop Utama ---
figures = []
background_color = "#253D5B"
data_source_df = pyramid_chart

for year in range(2018, 2024): # Iterasi per tahun
    print(f"Processing year: {year}")

    # Panggil fungsi untuk membuat plot
    fig, ax = create_age_distribution(
        year=str(year),       # Kirim sebagai string
        data_df=data_source_df # Kirim DataFrame lengkap
    )

    if fig is None or ax is None:
        print(f"Skipping year {year} due to missing data or plot error.")
        continue

    # Konversi figure ke image
    image = create_image_from_figure(fig)
    # Tambahkan padding
    image = add_padding_to_chart(image, 20, 30, 20, 20, background_color)
    figures.append(image)
    # Tutup figure matplotlib
    plt.close(fig)



# --- Pastikan juga pemanggilan fungsi sudah benar ---
# (di bagian bawah skrip)
if figures:
    print(f"Creating grid with {len(figures)} figures...")
    # Panggil create_grid dengan parameter grid_background_color
    grid = create_grid(figures, pad=20, ncols=3, grid_background_color=background_color) # <<< Argumen keyword ini harus cocok dengan parameter di definisi
    if grid:
        grid.show()
        save_filename = "Distribusi Usia.webp"
        try:
            grid.save(save_filename)
            print(f"Grid berhasil disimpan sebagai '{save_filename}'")
        except Exception as e:
            print(f"Gagal menyimpan grid: {e}")
    else:
        print("Gagal membuat grid.")
else:
    print("Tidak ada gambar yang dihasilkan untuk membuat grid.")
```
---

## SLOPE CHART

## Persiapan Data Awal untuk Slope Chart
Untuk memulai pembuatan Slope Chart, kita siapkan data terlebih dahulu. Kita buat salinan dari DataFrame df1 yang sudah bersih (df4), dan pastikan data total keseluruhan ('Jumlah/Total') serta baris 'Indonesia' (jika masih ada setelah pembersihan sebelumnya) tidak disertakan, karena kita fokus pada perbandingan perubahan antar kelompok umur dari waktu ke waktu.

``` Python
df4 = df1.copy()
df4 = df4[df4["Kelompok Umur"]!= "Jumlah/Total"]
df4 = df4[df4["Kelompok Umur"]!= "Indonesia"]
df4.head()
```
<img src="/images/14.Penduduk/15.webp" alt="slope chart python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


### Kategorisasi Usia dan Konversi Satuan
Kelompok umur yang detail ('0-4', '5-9', dst.) akan kita kategorikan menjadi kelompok yang lebih luas (Balita, Anak-anak, Remaja, Dewasa Awal, Dewasa Akhir, Lansia) agar slope chart lebih mudah dibaca dan tidak terlalu ramai. Kita definisikan fungsi kategorikan_usia_modifikasi dan terapkan untuk membuat kolom 'Kategori Usia'. Selain itu, kita juga konversi satuan jumlah penduduk dari ribu menjadi juta (dengan pembulatan) untuk skala yang lebih sesuai pada visualisasi.

``` Python
df4["Kelompok Umur"].value_counts()
```
<img src="/images/14.Penduduk/16.webp" alt="slope chart python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


## Transformasi Data untuk Slope Chart
Slope chart secara efektif membandingkan nilai antara dua titik waktu. Kita akan membandingkan populasi antara tahun 2018 dan 2023. Pertama, kita filter DataFrame df4 agar hanya berisi data untuk kedua tahun tersebut. Kemudian, kita gunakan groupby() berdasarkan 'Kategori Usia' dan 'Tahun', lalu sum() untuk menjumlahkan populasi (dalam juta), dan unstack() untuk memutar (pivot) tabel sehingga tahun menjadi kolom. Hasilnya (df_jumlah) adalah format data yang ideal untuk membuat slope chart.

``` Python

def kategorikan_usia_modifikasi(kelompok):
    if kelompok in ['0-4']:
        return 'Balita'
    elif kelompok in ['5-9']:
        return 'Anak-anak'
    elif kelompok in ['10-14', '15-19']:
        return 'Remaja'
    # --- Modifikasi di sini ---
    elif kelompok in ['20-24', '25-29', '30-34', '35-39']: # Rentang usia untuk Dewasa Awal
        return 'Dewasa Awal'
    elif kelompok in ['40-44', '45-49', '50-54', '55-59']: # Rentang usia untuk Dewasa Akhir
        return 'Dewasa Akhir'
    # --- Akhir Modifikasi ---
    elif kelompok in ['60-64', '65-69', '70-74', '75+']:
        return 'Lansia'
    else:
        return 'Tidak Diketahui'

# Terapkan fungsi yang sudah dimodifikasi ke DataFrame
# Ini akan menimpa kolom 'Kategori Usia' yang lama jika sudah ada
df4['Kategori Usia'] = df4['Kelompok Umur'].apply(kategorikan_usia_modifikasi)
df4.loc[:, "Penduduk (Laki-Laki + Perempuan) (Juta)"] = round(df4["Penduduk (Laki-Laki + Perempuan) (Ribu)"] / 1000,2)
df4
```

<img src="/images/14.Penduduk/17.webp" alt="slope chart python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


## Pembuatan Visualisasi Slope Chart
Ini adalah blok kode utama untuk menghasilkan Slope Chart.


``` Python
def add_label(continent_name, year):
    
    # Calculate value (and round it)
    y_position = round(df[year][continent_name])
    
    # Determine x_position depending on the year  
    if year==2018:
        x_position = year - 1.2
    else:
        x_position = year + 0.12
    
    # Adding the text
    plt.text(x_position, # x-axis position
             y_position, #y-axis position
             f'{continent_name}, {y_position}', # Text
             fontsize=8, # Text size
             color='white', # Text color
            ) 
# Filter data for the years 1952 and 1957
years = [2018, 2023]
df4 = df4[df4['Tahun'].isin(years)]

# Calculate average gdp, per continent, per year
df_jumlah = df4.groupby(['Kategori Usia', 'Tahun'])['Penduduk (Laki-Laki + Perempuan) (Juta)'].sum().unstack()

df_jumlah
```

<img src="/images/14.Penduduk/18.webp" alt="slope chart python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


``` Python
import pandas as pd
import matplotlib.pyplot as plt
import io
from adjustText import adjust_text
import numpy as np


df_populasi = df_jumlah.copy()
years = [2018, 2023]


plt.figure(figsize=(20, 12))
plt.xticks(years, fontsize=24, color='white', weight="bold")

ax = plt.gca()

# --- Parameter untuk Penyesuaian Manual ---

min_vertical_separation = (df_populasi[years].values.max() - df_populasi[years].values.min()) * 0.02 # Contoh: 2% dari rentang Y

# List untuk menyimpan informasi label sebelum digambar
labels_left = [] 
labels_right = []

# Loop 1: Plot garis dan kumpulkan informasi label
for age_group in df_populasi.index:
    value_before = df_populasi.loc[age_group, years[0]]
    value_after = df_populasi.loc[age_group, years[1]]

    if value_before > value_after: color = '#FF204E'
    elif value_before < value_after: color = '#06D001'
    else: color = 'grey'

    plt.plot(years, df_populasi.loc[age_group, years], marker='o', color=color, linewidth=5, markersize=10)

    label_text = f"{age_group} ({value_before:.1f} Juta)"
    labels_left.append([value_before, value_before, label_text, 'white']) # y_original, y_adjusted (sementara sama), text, color

    label_text = f"{age_group} ({value_after:.1f} Juta)"
    labels_right.append([value_after, value_after, label_text, 'white'])

# --- Fungsi untuk menyesuaikan posisi Y ---
def adjust_label_positions(labels, separation):
    # Urutkan berdasarkan y_original
    labels.sort(key=lambda x: x[0])
    last_y = -np.inf 
    for i in range(len(labels)):
        if labels[i][1] < last_y + separation:
            labels[i][1] = last_y + separation 
        last_y = labels[i][1] # Update posisi y terakhir yg ditempatkan
    return labels



plt.text(
    2015.6,
    95,
    f'Perbandingan Populasi per Kelompok Umur\nAntara Tahun {years[0]} dengan {years[1]}',
    fontsize=25,
    color='white',
    fontweight='bold',
    ha='left',
    family='serif' 
)


# Add the BEFORE and AFTER
plt.text(2026, 78, '''Pertumbuhan populasi terkonsentrasi pada\nkelompok usia produktif dan lanjut.Kenaikan\nterbesar terjadi pada Dewasa Akhir dan Lansia,\nyang menunjukkan peningkatan signifikan di usia\nmatang dan tua. Hal ini mengindikasikan\nkemungkinan peningkatan persaingan kerja, serta\nmeningkatnya angka harapan hidup.''', 
         fontsize=16, color='white', fontweight='semibold', ha='left',family='sans-serif')
plt.text(2026, 63, '''Sebaliknya, pada kelompok usia muda mengalami\npenyusutan populasi selama periode lima\ntahun ini. Jumlah Balita, Anak-anak, dan\nRemaja tercatat menurun, mengindikasikan\nadanya kontraksi pada basis populasi usia\ndini, yang menunjukkan menurunnya angka\nkelahiran di tahun sebelumnya''', 
         fontsize=16, color='white', fontweight='semibold', ha='left',family='sans-serif')
plt.text(
    2026,
    49,
    '''Tren ini mencerminkan awal transisi demografi\nnegara Indonesia dengan populasi tinggi,\nyang membuka peluang peningkatan kualitas hidup.\nNamun, penurunan angka kelahiran juga perlu\ncermat dipantau agar tidak menimbulkan ketimpangan\nstruktur usia di masa mendatang.''',
    fontsize=16,
    color='white',
    fontweight='semibold',
    ha='left', family='sans-serif'
)


plt.text(
    2028,
    19,  # atau atur sesuai ruang kosong di bagian bawah chart kamu
    'Sumber data: https://www.bps.go.id/ \nVisualisasi Daddy Ananta',
    fontsize=16,
    color='#CCCCCC',
    ha='left',
    family='sans-serif'
)


# --- Sesuaikan posisi untuk kedua sisi ---
labels_left_adjusted = adjust_label_positions(labels_left, min_vertical_separation)
labels_right_adjusted = adjust_label_positions(labels_right, min_vertical_separation)

# --- Loop 2: Gambar teks pada posisi yang sudah disesuaikan ---
for y_orig, y_adj, text, color in labels_left_adjusted:
    plt.text(years[0] - 0.35, y_adj, text, ha='right', va='center', fontsize=15, color=color, weight="semibold")

for y_orig, y_adj, text, color in labels_right_adjusted:
    plt.text(years[1] + 0.35, y_adj, text, ha='left', va='center', fontsize=15, color=color, weight="semibold")

# --- Pengaturan Plot ---
plt.title(None)
plt.yticks([])
plt.box(False)
plt.xlim(years[0] - 0.8, years[1] + 0.8)
plt.grid(linewidth="10")

# Atur batas Y berdasarkan posisi label 
min_y_adj = min(min(l[1] for l in labels_left_adjusted), min(l[1] for l in labels_right_adjusted))
max_y_adj = max(max(l[1] for l in labels_left_adjusted), max(l[1] for l in labels_right_adjusted))
range_val = max_y_adj - min_y_adj
plt.ylim(min_y_adj - range_val * 0.05, max_y_adj + range_val * 0.05) # Padding kecil

ax.set_facecolor('#2c3e50')

ax.tick_params(axis='x', colors='white')
ax.spines['bottom'].set_color('white')
ax.spines['top'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['right'].set_visible(False)
plt.xlim(2016, 2028)       # Lebarkan rentang sumbu x

plt.tight_layout()
plt.show()
```
<img src="/images/14.Penduduk/19.webp" alt="slope chart python" style="height:100%;width:100%;display:block;margin-left:auto;margin-right:auto;">


# Jupyter notebook




# Referensi

- <p style="text-indent:0px;">Data - Badan Pusat Statistik (BPS) - <a href="https://www.bps.go.id/id/statistics-table/3/WVc0MGEyMXBkVFUxY25KeE9HdDZkbTQzWkVkb1p6MDkjMw==/jumlah-penduduk-menurut-kelompok-umur-dan-jenis-kelamin--2023.html?">Link</a></p>

- <p style="text-indent:0px;">World Population By Country - <a href="https://www.worldometers.info/world-population/population-by-country/">Worldometers<a/></p>
