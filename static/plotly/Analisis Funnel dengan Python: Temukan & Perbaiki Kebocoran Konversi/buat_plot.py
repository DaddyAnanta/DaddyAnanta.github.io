import pandas as pd
import plotly.graph_objects as go
import os
import numpy as np


# dfi image tabel

# --- Konfigurasi ---
output_dir = "A"
output_filename = "funnel_chart.html"
output_filepath = os.path.join(output_dir, output_filename)

df = pd.read_csv("user_data.csv")

stage_order = ['homepage', 'product_page', 'cart', 'checkout', 'purchase']
funnel_data = df.groupby('stage')['user_id'].nunique().reset_index()
funnel_data.columns = ['stage', 'user_count']
funnel_data['stage'] = pd.Categorical(funnel_data['stage'], categories=stage_order, ordered=True)
funnel_data = funnel_data.sort_values('stage')
full_funnel_df = pd.DataFrame({'stage': stage_order})
funnel_data = pd.merge(full_funnel_df, funnel_data, on='stage', how='left').fillna(0)
funnel_data['user_count'] = funnel_data['user_count'].astype(int)

# --- 2. Menambahkan Metrik untuk Teks & Hover ---
# [PERBAIKAN] Menghitung persentase retensi dari tahap awal (homepage)
initial_users = funnel_data['user_count'].iloc[0]
funnel_data['retention_from_start'] = (funnel_data['user_count'] / initial_users * 100)

print("\nData Funnel Final Siap untuk Plotting:")
print(funnel_data[['stage', 'user_count', 'retention_from_start']])

# --- 3. Menyiapkan Data & Membuat Funnel Chart ---
colors = ['#4A55A2', '#7895CB', '#A0BFE0', '#C5DFF8', '#E2F1FF']

fig = go.Figure(
    go.Funnelarea(
        labels = funnel_data['stage'].str.title(),
        values = funnel_data['user_count'],
        customdata = funnel_data['retention_from_start'], # Memasukkan data retensi
        # [PERBAIKAN] Mengubah teks di dalam chart agar lebih jelas
        # Menampilkan jumlah absolut dan persentase retensi dari awal
        texttemplate = "<b>%{label}</b><br>%{customdata:.1f}%",
        textposition = "inside",
        textfont = {"size": 16, "family": "Arial, sans-serif", "color": "white"},
        marker = {"colors": colors, "line": {"color": "white", "width": 1}},
        opacity = 1.0,
        # [PERBAIKAN] Menyederhanakan dan memperjelas nama di hover box
        hovertemplate = (
            "<b>Tahap: %{label}</b><br><br>" +
            "Pengguna yang Mencapai Tahap Ini: <b>%{value:,} Pengguna</b><br>" +
            "Retensi dari Tahap Awal: <b>%{customdata:.2f}%</b>" +
            "<extra></extra>"
        )
    )
)

# --- 4. Kustomisasi Layout ---
# [PERBAIKAN] Judul dibuat lebih deskriptif
fig.update_layout(
    title={
        'text': "<b>Visualisasi Perjalanan Pengguna</b><br><sup style='color:#555;'>Tingkat Retensi di Setiap Tahapan Funnel</sup>",
        'y':0.95, 'x':0.5, 'xanchor': 'center', 'yanchor': 'top',
        'font': {'size': 26, 'family': "Arial, sans-serif", 'color': '#2C3E50'}
    },
    showlegend=False,
    margin=dict(l=50, r=50, t=120, b=80),
    paper_bgcolor='#F4F6F9',
    plot_bgcolor='#F4F6F9',
    hoverlabel=dict(
        bgcolor="white",
        bordercolor="#E5E7EB",
        font=dict(family="Arial, sans-serif", size=14, color="black")
    )
)

# --- 5. Ekspor ke HTML ---
os.makedirs(output_dir, exist_ok=True)
html_string = fig.to_html(full_html=False, include_plotlyjs='cdn')
with open(output_filepath, 'w') as f:
    f.write(html_string)

print(f"\n✅ Funnel Area Chart dengan nama yang disempurnakan berhasil dibuat di: {output_filepath}")
