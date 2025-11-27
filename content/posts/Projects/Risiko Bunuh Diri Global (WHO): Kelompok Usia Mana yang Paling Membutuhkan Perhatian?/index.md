+++
title = 'Risiko Bunuh Diri Global (WHO): Data WHO Mengungkap Usia Paling Rentan Bunuh Diri'
date = 2025-05-25T00:37:00+00:00
draft = false
socialshare = true
description = "Risiko bunuh diri tidak seragam. Analisis heatmap data WHO 2021 menunjukkan pola regional yang tajam, di mana lansia menjadi prioritas utama di satu wilayah, dan remaja di wilayah lain."
image = "1.webp"
imageBig= "1.webp"
categories= ["Projects"]
tags = ["WHO"]
authors= ["Daddy Ananta"]
avatar="/images/Analysis_and_Visualization/profil.jpeg"
url = "/posts/projects//risiko-bunuh-diri-global-who-kelompok-usia-mana-yang-paling-membutuhkan-perhatian/"
aliases = [
    "/posts/analysis--visualization/risiko-bunuh-diri-global-who-kelompok-usia-mana-yang-paling-membutuhkan-perhatian/"
+++

Fokus media pada isu kesehatan mental remaja seringkali membuat kita berpikir seolah-olah itu satu-satunya krisis usia. Namun, data WHO 2021 menunjukkan bahwa risiko bunuh diri tidaklah seragam; ia berubah bentuk secara dramatis tergantung **di mana Anda tinggal dan pada tahap kehidupan mana Anda berada**. Mengidentifikasi pola-pola ini adalah kunci untuk menentukan di mana kita harus memprioritaskan bantuan.


<div style="background-color: #FFF5F5; padding: 15px; border-radius: 5px; border: 1px solid #E57373; margin-bottom: 20px;">
  <p style="margin: 0; font-style: italic; color: #D32F2F;">
    <strong>Catatan Penting:</strong> Konten berikut membahas isu sensitif terkait bunuh diri dan bertujuan untuk meningkatkan kesadaran serta pemahaman. Jika Anda atau seseorang yang Anda kenal membutuhkan dukungan, harap segera hubungi layanan bantuan profesional.
  </p>
</div>

<div style="background-color: #FFEBEE;margin-bottom: 20px; padding: 25px; border-radius: 10px; border: 1px solid #FFCDD2; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
  <h3 style="color: #B71C1C; margin-top: 0; text-align: left; font-weight: bold;">Seri Risiko Bunuh Diri Global (WHO)</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who--benarkah-jepang-dan-korea-memiliki-tingkat-bunuh-diri-tertinggi-di-dunia/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Benarkah Jepang dan Korea Memiliki Tingkat Bunuh Diri Tertinggi di Dunia?</a>
    </li>
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who-benarkah-pria-memiliki-risiko-lebih-tinggi-dibandingkan-wanita/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Benarkah Pria Memiliki Risiko Lebih Tinggi Dibandingkan Wanita?</a>
    </li>
    <li style="margin-bottom: 12px; font-weight: bold; color: #A71C1C; padding-left: 10px; border-left: 3px solid #A71C1C;">
      Kelompok Usia Mana yang Paling Membutuhkan Perhatian?
    </li>
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who-apakah-negara-berpendapatan-rendah-lebih-rentan-bunuh-diri/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Apakah Negara Berpendapatan Rendah Lebih Rentan Bunuh Diri?</a>
    </li>
  </ul>
</div>

## Membaca 'Sidik Jari' Risiko Tiap Negara

Visualisasi *heatmap* di bawah ini memungkinkan kita melihat "sidik jari" risiko untuk setiap negara. Coba Anda filter berdasarkan wilayah (Organization), maka pola yang tajam akan muncul. Sebagai contoh, di banyak negara Eropa, warna merah tua terkonsentrasi di kolom **70+ tahun**. Ini menunjukkan prioritas yang sangat jelas: populasi lansia di wilayah ini menghadapi tingkat risiko tertinggi, seringkali didorong oleh isolasi, kesepian, dan penyakit kronis. Ini adalah perasaan terabaikan yang tecermin dalam data.

Sebaliknya, di wilayah lain seperti Amerika, polanya bisa berbeda. Di beberapa negara, puncaknya mungkin terjadi pada usia paruh baya (30-49 tahun) atau dewasa muda (15-29 tahun), yang dipicu oleh tekanan ekonomi, karier, dan identitas. Setiap pola ini menceritakan kisah yang berbeda tentang penderitaan dan kebutuhan yang belum terpenuhi, yang mengarah pada prioritas yang juga berbeda.


## Visualisasi Data

<style>
/* CSS Umum untuk D3 Chart Wrapper */
.d3-chart {
    margin: 15px auto; /* Contoh margin, sesuaikan jika perlu */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    max-width: 900px; /* Contoh max-width, sesuaikan */
    box-sizing: border-box;
}

/* CSS KHUSUS UNTUK HEATMAP CHART */
#hugo-heatmap-chart { /* Kontainer utama heatmap */
    display: flex;
    flex-direction: column;
    align-items: center; /* Pusatkan konten secara horizontal */
}

#hugo-heatmap-chart #heatmapTitleContainer-heatmap {
    text-align: center;
    margin-bottom: 15px;
    width: 100%;
}

#hugo-heatmap-chart #heatmapTitleContainer-heatmap .chart-title-heatmap {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

#hugo-heatmap-chart #heatmapTitleContainer-heatmap .chart-subtitle-heatmap {
    font-size: 14px;
    font-weight: normal;
    margin-top: 0px;
    color: #555;
}

#hugo-heatmap-chart #heatmapFilterContainer-heatmap {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
    border: 1px solid #dee2e6;
    display: flex;
    flex-direction: column; /* Tumpuk label dan select di mobile */
    gap: 10px;
    align-items: center;
    width: 100%;
    max-width: 400px; /* Batasi lebar filter */
    box-sizing: border-box;
}

#hugo-heatmap-chart #heatmapFilterContainer-heatmap .filter-group-heatmap {
    display: flex;
    flex-wrap: wrap; /* Biarkan wrap jika perlu */
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 100%;
}

#hugo-heatmap-chart #heatmapFilterContainer-heatmap .filter-group-label-heatmap {
    font-size: 13px;
    font-weight: bold;
    margin-right: 5px; /* Kurangi margin untuk mobile */
    white-space: nowrap;
}

#hugo-heatmap-chart #heatmapFilterContainer-heatmap select {
    padding: 6px 10px;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    flex-grow: 1; /* Biarkan select mengambil ruang yang tersedia */
    min-width: 150px; /* Lebar minimum */
}

#hugo-heatmap-chart #heatmapLegendContainer-heatmap {
    display: flex;
    flex-wrap: wrap; /* Agar item legenda bisa wrap di mobile */
    justify-content: center;
    align-items: center;
    gap: 10px; /* Jarak antar item legenda */
    margin-bottom: 25px;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: #fdfdfd;
    width: 100%;
    box-sizing: border-box;
}
#hugo-heatmap-chart #heatmapLegendContainer-heatmap .legend-title-heatmap {
    font-size: 12px;
    font-weight: bold;
    margin-right: 10px;
    white-space: nowrap;
}
#hugo-heatmap-chart #heatmapLegendContainer-heatmap .legend-item-heatmap {
    display: flex;
    align-items: center;
    gap: 5px; /* Jarak antara kotak warna dan teks */
}
#hugo-heatmap-chart #heatmapLegendContainer-heatmap .legend-color-box-heatmap {
    width: 15px; /* Sesuaikan ukuran kotak warna */
    height: 15px;
    border: 1px solid #ccc;
}
#hugo-heatmap-chart #heatmapLegendContainer-heatmap .legend-text-heatmap {
    font-size: 10px;
}

#hugo-heatmap-chart #heatmapSvgContainer-heatmap {
    width: 100%;
    overflow-x: auto; /* Tambahkan scroll horizontal jika SVG lebih lebar */
    overflow-y: visible;
}

#hugo-heatmap-chart #heatmapSvgContainer-heatmap svg {
    display: block; /* Mencegah ruang ekstra di bawah SVG */
}

#hugo-heatmap-chart .tooltip-heatmap { /* ID/Class unik */
    position: absolute;
    text-align: left;
    padding: 8px;
    font: 12px sans-serif;
    background: #333; /* Warna dari kode asli Anda */
    color: white; /* Warna dari kode asli Anda */
    border: 0px;
    border-radius: 4px; /* Radius dari kode asli Anda */
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    white-space: nowrap;
    z-index: 1070;
}

#hugo-heatmap-chart .no-data-message-heatmap { /* Class unik */
    text-anchor: middle;
    font-size: 16px;
    fill: #777;
}

/* Media Query untuk Mobile */
@media (min-width: 600px) {
    #hugo-heatmap-chart #heatmapFilterContainer-heatmap {
        flex-direction: row; /* Kembalikan ke baris di layar lebih besar */
        justify-content: center;
    }
    #hugo-heatmap-chart #heatmapFilterContainer-heatmap .filter-group-heatmap {
        width: auto; /* Biarkan lebar grup menyesuaikan konten */
    }
}

</style>

<div class="d3-chart">
  <div id="hugo-heatmap-chart">
    <div id="heatmapTitleContainer-heatmap">
        </div>
    <div id="heatmapFilterContainer-heatmap">
        </div>
    <div id="heatmapLegendContainer-heatmap">
        </div>
    <div id="heatmapSvgContainer-heatmap">
        </div>
    <div id="heatmapTooltip-heatmap" style="position: absolute; opacity: 0; background-color: #333; color: white; padding: 8px; border-radius: 4px; pointer-events: none; font-size: 12px;"></div>
  </div>
</div>

<script type="text/javascript" src="https://d3js.org/d3.v7.min.js"></script>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
  const chartContainerId = "#hugo-heatmap-chart"; // ID kontainer utama heatmap
  const chartContainer = d3.select(chartContainerId);

  if (chartContainer.empty()) {
      console.error(`Kontainer utama chart "${chartContainerId}" tidak ditemukan.`);
      return;
  }

  const rawData = [{"index":0,"Country":"Algeria","15-29 years":3.3,"30-49 years":3.4,"50-69 years":2.1,"70+ years":"3.7","Organization":"WHO African Region"},{"index":3,"Country":"Angola","15-29 years":6.1,"30-49 years":13.3,"50-69 years":32.6,"70+ years":"65.4","Organization":"WHO African Region"},{"index":6,"Country":"Benin","15-29 years":5.5,"30-49 years":11.4,"50-69 years":25.5,"70+ years":"48.9","Organization":"WHO African Region"},{"index":9,"Country":"Botswana","15-29 years":7.3,"30-49 years":15.2,"50-69 years":19.3,"70+ years":"21.9","Organization":"WHO African Region"},{"index":12,"Country":"Burkina Faso","15-29 years":6.8,"30-49 years":13.6,"50-69 years":34.1,"70+ years":"68.5","Organization":"WHO African Region"},{"index":15,"Country":"Burundi","15-29 years":6.2,"30-49 years":12.0,"50-69 years":32.7,"70+ years":"70.2","Organization":"WHO African Region"},{"index":18,"Country":"Cabo Verde","15-29 years":8.5,"30-49 years":18.3,"50-69 years":39.0,"70+ years":"52.1","Organization":"WHO African Region"},{"index":21,"Country":"Cameroon","15-29 years":7.2,"30-49 years":14.4,"50-69 years":28.5,"70+ years":"51.7","Organization":"WHO African Region"},{"index":24,"Country":"Central African Republic","15-29 years":8.2,"30-49 years":15.3,"50-69 years":47.7,"70+ years":"72.3","Organization":"WHO African Region"},{"index":27,"Country":"Chad","15-29 years":3.9,"30-49 years":8.8,"50-69 years":24.8,"70+ years":"49.4","Organization":"WHO African Region"},{"index":30,"Country":"Comoros","15-29 years":4.2,"30-49 years":7.0,"50-69 years":19.3,"70+ years":"46.5","Organization":"WHO African Region"},{"index":33,"Country":"Congo","15-29 years":5.9,"30-49 years":9.8,"50-69 years":22.6,"70+ years":"55.0","Organization":"WHO African Region"},{"index":36,"Country":"C\u00f4te d'Ivoire","15-29 years":5.7,"30-49 years":11.5,"50-69 years":26.7,"70+ years":"58.1","Organization":"WHO African Region"},{"index":39,"Country":"Democratic Republic of the Congo","15-29 years":6.1,"30-49 years":13.5,"50-69 years":37.0,"70+ years":"69.4","Organization":"WHO African Region"},{"index":42,"Country":"Equatorial Guinea","15-29 years":5.5,"30-49 years":8.9,"50-69 years":21.1,"70+ years":"52.3","Organization":"WHO African Region"},{"index":45,"Country":"Eritrea","15-29 years":10.1,"30-49 years":19.4,"50-69 years":43.3,"70+ years":"87.1","Organization":"WHO African Region"},{"index":48,"Country":"Eswatini","15-29 years":29.1,"30-49 years":55.7,"50-69 years":44.4,"70+ years":"32.3","Organization":"WHO African Region"},{"index":51,"Country":"Ethiopia","15-29 years":4.4,"30-49 years":8.3,"50-69 years":22.1,"70+ years":"60.7","Organization":"WHO African Region"},{"index":54,"Country":"Gabon","15-29 years":4.7,"30-49 years":9.7,"50-69 years":21.8,"70+ years":"50.8","Organization":"WHO African Region"},{"index":57,"Country":"Gambia","15-29 years":4.2,"30-49 years":6.2,"50-69 years":17.8,"70+ years":"42.4","Organization":"WHO African Region"},{"index":60,"Country":"Ghana","15-29 years":3.6,"30-49 years":6.9,"50-69 years":17.0,"70+ years":"41.0","Organization":"WHO African Region"},{"index":63,"Country":"Guinea","15-29 years":3.6,"30-49 years":6.6,"50-69 years":19.1,"70+ years":"38.6","Organization":"WHO African Region"},{"index":66,"Country":"Guinea-Bissau","15-29 years":6.3,"30-49 years":13.2,"50-69 years":25.2,"70+ years":"46.0","Organization":"WHO African Region"},{"index":69,"Country":"Kenya","15-29 years":2.5,"30-49 years":4.9,"50-69 years":19.8,"70+ years":"60.9","Organization":"WHO African Region"},{"index":72,"Country":"Lesotho","15-29 years":24.3,"30-49 years":62.1,"50-69 years":61.2,"70+ years":"45.4","Organization":"WHO African Region"},{"index":75,"Country":"Liberia","15-29 years":4.7,"30-49 years":7.7,"50-69 years":21.2,"70+ years":"44.6","Organization":"WHO African Region"},{"index":78,"Country":"Madagascar","15-29 years":4.7,"30-49 years":7.9,"50-69 years":21.8,"70+ years":"49.9","Organization":"WHO African Region"},{"index":81,"Country":"Malawi","15-29 years":5.9,"30-49 years":12.2,"50-69 years":31.8,"70+ years":"77.4 68.2","Organization":"WHO African Region"},{"index":84,"Country":"Mali","15-29 years":3.2,"30-49 years":6.9,"50-69 years":18.9,"70+ years":"38.9","Organization":"WHO African Region"},{"index":87,"Country":"Mauritania","15-29 years":2.0,"30-49 years":3.2,"50-69 years":10.8,"70+ years":"28.3","Organization":"WHO African Region"},{"index":90,"Country":"Mauritius","15-29 years":16.0,"30-49 years":13.6,"50-69 years":10.1,"70+ years":"3.9","Organization":"WHO African Region"},{"index":93,"Country":"Mozambique","15-29 years":11.0,"30-49 years":18.5,"50-69 years":36.5,"70+ years":"81.5","Organization":"WHO African Region"},{"index":96,"Country":"Namibia","15-29 years":8.3,"30-49 years":17.0,"50-69 years":19.2,"70+ years":"19.5","Organization":"WHO African Region"},{"index":99,"Country":"Niger","15-29 years":3.0,"30-49 years":6.7,"50-69 years":20.9,"70+ years":"42.5","Organization":"WHO African Region"},{"index":102,"Country":"Nigeria","15-29 years":3.0,"30-49 years":8.2,"50-69 years":17.7,"70+ years":"45.6","Organization":"WHO African Region"},{"index":105,"Country":"Rwanda","15-29 years":6.2,"30-49 years":11.1,"50-69 years":29.2,"70+ years":"66.4","Organization":"WHO African Region"},{"index":108,"Country":"Sao Tome and Principe","15-29 years":0.8,"30-49 years":1.3,"50-69 years":2.7,"70+ years":"4.4","Organization":"WHO African Region"},{"index":111,"Country":"Senegal","15-29 years":4.5,"30-49 years":7.9,"50-69 years":25.0,"70+ years":"69.3","Organization":"WHO African Region"},{"index":114,"Country":"Seychelles","15-29 years":4.5,"30-49 years":7.9,"50-69 years":25.0,"70+ years":"69.3","Organization":"WHO African Region"},{"index":117,"Country":"Sierra Leone","15-29 years":4.6,"30-49 years":8.5,"50-69 years":21.5,"70+ years":"41.0","Organization":"WHO African Region"},{"index":120,"Country":"South Africa","15-29 years":26.5,"30-49 years":40.7,"50-69 years":20.1,"70+ years":"15.2","Organization":"WHO African Region"},{"index":123,"Country":"South Sudan","15-29 years":4.9,"30-49 years":10.6,"50-69 years":31.9,"70+ years":"66.8","Organization":"WHO African Region"},{"index":126,"Country":"Togo","15-29 years":6.7,"30-49 years":14.5,"50-69 years":33.9,"70+ years":"63.0","Organization":"WHO African Region"},{"index":129,"Country":"Uganda","15-29 years":4.3,"30-49 years":9.3,"50-69 years":25.7,"70+ years":"60.6","Organization":"WHO African Region"},{"index":132,"Country":"United Republic of Tanzania","15-29 years":4.0,"30-49 years":8.4,"50-69 years":18.9,"70+ years":"43.1","Organization":"WHO African Region"},{"index":135,"Country":"Zambia","15-29 years":6.1,"30-49 years":13.4,"50-69 years":28.8,"70+ years":"52.8","Organization":"WHO African Region"},{"index":138,"Country":"Zimbabwe","15-29 years":16.7,"30-49 years":37.3,"50-69 years":46.7,"70+ years":"56.0","Organization":"WHO African Region"},{"index":141,"Country":"Antigua and Barbuda","15-29 years":2.8,"30-49 years":0.6,"50-69 years":0.0,"70+ years":10.5,"Organization":"WHO Region of the Americas."},{"index":144,"Country":"Argentina","15-29 years":13.2,"30-49 years":8.7,"50-69 years":7.4,"70+ years":12.0,"Organization":"WHO Region of the Americas."},{"index":147,"Country":"Bahamas","15-29 years":3.4,"30-49 years":4.6,"50-69 years":3.7,"70+ years":4.7,"Organization":"WHO Region of the Americas."},{"index":150,"Country":"Barbados","15-29 years":3.3,"30-49 years":3.1,"50-69 years":3.9,"70+ years":10.4,"Organization":"WHO Region of the Americas."},{"index":153,"Country":"Belize","15-29 years":3.5,"30-49 years":6.9,"50-69 years":6.9,"70+ years":12.9,"Organization":"WHO Region of the Americas."},{"index":156,"Country":"Bolivia","15-29 years":2.3,"30-49 years":4.0,"50-69 years":15.4,"70+ years":14.2,"Organization":"WHO Region of the Americas."},{"index":159,"Country":"Brazil","15-29 years":7.3,"30-49 years":8.8,"50-69 years":10.8,"70+ years":16.0,"Organization":"WHO Region of the Americas."},{"index":162,"Country":"Canada","15-29 years":9.1,"30-49 years":11.3,"50-69 years":12.9,"70+ years":9.9,"Organization":"WHO Region of the Americas."},{"index":165,"Country":"Chile","15-29 years":8.6,"30-49 years":9.7,"50-69 years":8.6,"70+ years":11.7,"Organization":"WHO Region of the Americas."},{"index":168,"Country":"Colombia","15-29 years":6.4,"30-49 years":4.5,"50-69 years":6.5,"70+ years":10.9,"Organization":"WHO Region of the Americas."},{"index":171,"Country":"Costa Rica","15-29 years":9.4,"30-49 years":12.3,"50-69 years":8.7,"70+ years":5.6,"Organization":"WHO Region of the Americas."},{"index":174,"Country":"Cuba","15-29 years":5.2,"30-49 years":8.4,"50-69 years":21.5,"70+ years":41.0,"Organization":"WHO Region of the Americas."},{"index":177,"Country":"Dominican Republic","15-29 years":4.2,"30-49 years":5.3,"50-69 years":7.7,"70+ years":10.9,"Organization":"WHO Region of the Americas."},{"index":180,"Country":"Ecuador","15-29 years":12.2,"30-49 years":9.0,"50-69 years":7.2,"70+ years":8.1,"Organization":"WHO Region of the Americas."},{"index":183,"Country":"El Salvador","15-29 years":7.9,"30-49 years":12.6,"50-69 years":10.2,"70+ years":9.6,"Organization":"WHO Region of the Americas."},{"index":186,"Country":"Grenada","15-29 years":0.0,"30-49 years":2.4,"50-69 years":1.4,"70+ years":4.5,"Organization":"WHO Region of the Americas."},{"index":189,"Country":"Guatemala","15-29 years":7.9,"30-49 years":6.7,"50-69 years":5.9,"70+ years":6.6,"Organization":"WHO Region of the Americas."},{"index":192,"Country":"Guyana","15-29 years":26.1,"30-49 years":37.0,"50-69 years":44.8,"70+ years":36.6,"Organization":"WHO Region of the Americas."},{"index":195,"Country":"Haiti","15-29 years":6.6,"30-49 years":13.5,"50-69 years":16.7,"70+ years":19.3,"Organization":"WHO Region of the Americas."},{"index":198,"Country":"Honduras","15-29 years":2.9,"30-49 years":4.1,"50-69 years":7.1,"70+ years":11.3,"Organization":"WHO Region of the Americas."},{"index":201,"Country":"Jamaica","15-29 years":1.2,"30-49 years":1.7,"50-69 years":2.6,"70+ years":8.3,"Organization":"WHO Region of the Americas."},{"index":204,"Country":"Mexico","15-29 years":11.5,"30-49 years":9.2,"50-69 years":5.6,"70+ years":7.5,"Organization":"WHO Region of the Americas."},{"index":207,"Country":"Nicaragua","15-29 years":6.7,"30-49 years":6.1,"50-69 years":3.4,"70+ years":3.1,"Organization":"WHO Region of the Americas."},{"index":210,"Country":"Panama","15-29 years":3.9,"30-49 years":3.5,"50-69 years":5.0,"70+ years":7.2,"Organization":"WHO Region of the Americas."},{"index":213,"Country":"Paraguay","15-29 years":9.8,"30-49 years":6.4,"50-69 years":9.1,"70+ years":7.5,"Organization":"WHO Region of the Americas."},{"index":216,"Country":"Peru","15-29 years":1.6,"30-49 years":1.8,"50-69 years":2.6,"70+ years":2.3,"Organization":"WHO Region of the Americas."},{"index":219,"Country":"Saint Lucia","15-29 years":5.5,"30-49 years":6.1,"50-69 years":6.3,"70+ years":12.6,"Organization":"WHO Region of the Americas."},{"index":222,"Country":"Saint Vincent and the Grenadines","15-29 years":0.0,"30-49 years":0.0,"50-69 years":1.9,"70+ years":0.0,"Organization":"WHO Region of the Americas."},{"index":225,"Country":"Suriname","15-29 years":36.0,"30-49 years":26.3,"50-69 years":25.3,"70+ years":35.2,"Organization":"WHO Region of the Americas."},{"index":228,"Country":"Trinidad and Tobago","15-29 years":12.0,"30-49 years":17.6,"50-69 years":17.4,"70+ years":19.3,"Organization":"WHO Region of the Americas."},{"index":231,"Country":"United States","15-29 years":18.4,"30-49 years":19.9,"50-69 years":17.7,"70+ years":19.7,"Organization":"WHO Region of the Americas."},{"index":234,"Country":"Uruguay","15-29 years":28.5,"30-49 years":28.3,"50-69 years":31.0,"70+ years":39.1,"Organization":"WHO Region of the Americas."},{"index":237,"Country":"Afghanistan","15-29 years":4.8,"30-49 years":7.7,"50-69 years":8.0,"70+ years":10.9,"Organization":"WHO Eastern Mediterranean Region"},{"index":240,"Country":"Bahrain","15-29 years":6.8,"30-49 years":5.4,"50-69 years":4.1,"70+ years":10.7,"Organization":"WHO Eastern Mediterranean Region"},{"index":243,"Country":"Djibouti","15-29 years":5.9,"30-49 years":9.3,"50-69 years":19.4,"70+ years":47.6,"Organization":"WHO Eastern Mediterranean Region"},{"index":246,"Country":"Egypt","15-29 years":0.9,"30-49 years":0.7,"50-69 years":1.2,"70+ years":1.7,"Organization":"WHO Eastern Mediterranean Region"},{"index":249,"Country":"Iran (Islamic Republic of)","15-29 years":8.3,"30-49 years":4.7,"50-69 years":3.2,"70+ years":3.2,"Organization":"WHO Eastern Mediterranean Region"},{"index":252,"Country":"Iraq","15-29 years":3.7,"30-49 years":4.8,"50-69 years":6.8,"70+ years":7.2,"Organization":"WHO Eastern Mediterranean Region"},{"index":255,"Country":"Jordan","15-29 years":0.9,"30-49 years":0.8,"50-69 years":0.8,"70+ years":1.4,"Organization":"WHO Eastern Mediterranean Region"},{"index":258,"Country":"Kuwait","15-29 years":3.8,"30-49 years":2.7,"50-69 years":2.2,"70+ years":3.5,"Organization":"WHO Eastern Mediterranean Region"},{"index":261,"Country":"Lebanon","15-29 years":1.1,"30-49 years":0.7,"50-69 years":0.8,"70+ years":1.6,"Organization":"WHO Eastern Mediterranean Region"},{"index":264,"Country":"Libya","15-29 years":7.0,"30-49 years":7.8,"50-69 years":5.7,"70+ years":5.1,"Organization":"WHO Eastern Mediterranean Region"},{"index":267,"Country":"Morocco","15-29 years":3.8,"30-49 years":3.6,"50-69 years":4.3,"70+ years":5.1,"Organization":"WHO Eastern Mediterranean Region"},{"index":270,"Country":"Oman","15-29 years":1.2,"30-49 years":1.2,"50-69 years":1.2,"70+ years":2.0,"Organization":"WHO Eastern Mediterranean Region"},{"index":273,"Country":"Pakistan","15-29 years":9.6,"30-49 years":8.3,"50-69 years":7.2,"70+ years":9.2,"Organization":"WHO Eastern Mediterranean Region"},{"index":276,"Country":"Qatar","15-29 years":6.9,"30-49 years":5.1,"50-69 years":4.2,"70+ years":8.9,"Organization":"WHO Eastern Mediterranean Region"},{"index":279,"Country":"Saudi Arabia","15-29 years":1.3,"30-49 years":0.4,"50-69 years":1.7,"70+ years":13.5,"Organization":"WHO Eastern Mediterranean Region"},{"index":282,"Country":"Somalia","15-29 years":6.6,"30-49 years":14.0,"50-69 years":35.3,"70+ years":"64.8","Organization":"WHO Eastern Mediterranean Region"},{"index":285,"Country":"Sudan","15-29 years":5.0,"30-49 years":5.7,"50-69 years":4.3,"70+ years":4.7,"Organization":"WHO Eastern Mediterranean Region"},{"index":288,"Country":"Syrian Arab Republic","15-29 years":0.8,"30-49 years":0.9,"50-69 years":0.9,"70+ years":1.2,"Organization":"WHO Eastern Mediterranean Region"},{"index":291,"Country":"Tunisia","15-29 years":2.5,"30-49 years":2.2,"50-69 years":2.1,"70+ years":4.2,"Organization":"WHO Eastern Mediterranean Region"},{"index":294,"Country":"United Arab","15-29 years":1.7,"30-49 years":2.1,"50-69 years":2.3,"70+ years":4.8,"Organization":"WHO Eastern Mediterranean Region"},{"index":297,"Country":"Yemen","15-29 years":6.4,"30-49 years":7.7,"50-69 years":6.5,"70+ years":5.9,"Organization":"WHO Eastern Mediterranean Region"},{"index":300,"Country":"Albania","15-29 years":2.1,"30-49 years":2.0,"50-69 years":"3.0","70+ years":9.7,"Organization":"WHO European Region"},{"index":303,"Country":"Armenia","15-29 years":1.1,"30-49 years":1.8,"50-69 years":"3.4","70+ years":11.1,"Organization":"WHO European Region"},{"index":306,"Country":"Austria","15-29 years":9.0,"30-49 years":12.8,"50-69 years":"17.1","70+ years":34.1,"Organization":"WHO European Region"},{"index":309,"Country":"Azerbaijan","15-29 years":2.3,"30-49 years":1.5,"50-69 years":"2.1","70+ years":3.7,"Organization":"WHO European Region"},{"index":312,"Country":"Belarus","15-29 years":6.2,"30-49 years":16.4,"50-69 years":"24.6","70+ years":29.8,"Organization":"WHO European Region"},{"index":315,"Country":"Belgium","15-29 years":10.1,"30-49 years":22.2,"50-69 years":"26.3","70+ years":28.6,"Organization":"WHO European Region"},{"index":318,"Country":"Bosnia and Herzegovina","15-29 years":4.6,"30-49 years":5.0,"50-69 years":"12.1","70+ years":24.0,"Organization":"WHO European Region"},{"index":321,"Country":"Bulgaria","15-29 years":4.6,"30-49 years":7.0,"50-69 years":"13.5","70+ years":20.9,"Organization":"WHO European Region"},{"index":324,"Country":"Croatia","15-29 years":7.3,"30-49 years":12.7,"50-69 years":"22.6","70+ years":31.2,"Organization":"WHO European Region"},{"index":327,"Country":"Cyprus","15-29 years":1.6,"30-49 years":3.7,"50-69 years":"4.0","70+ years":3.6,"Organization":"WHO European Region"},{"index":330,"Country":"Czechia","15-29 years":9.8,"30-49 years":13.9,"50-69 years":"17.2","70+ years":23.7,"Organization":"WHO European Region"},{"index":333,"Country":"Denmark","15-29 years":6.4,"30-49 years":10.2,"50-69 years":"13.1","70+ years":22.8,"Organization":"WHO European Region"},{"index":336,"Country":"Estonia","15-29 years":17.6,"30-49 years":16.2,"50-69 years":"16.6","70+ years":23.2,"Organization":"WHO European Region"},{"index":339,"Country":"Finland","15-29 years":14.1,"30-49 years":18.5,"50-69 years":"18.3","70+ years":16.6,"Organization":"WHO European Region"},{"index":342,"Country":"France","15-29 years":7.2,"30-49 years":16.3,"50-69 years":"25.8 23.6","70+ years":34.8,"Organization":"WHO European Region"},{"index":345,"Country":"Georgia","15-29 years":5.8,"30-49 years":5.4,"50-69 years":"6.3","70+ years":10.8,"Organization":"WHO European Region"},{"index":348,"Country":"Germany","15-29 years":6.3,"30-49 years":9.5,"50-69 years":"15.8","70+ years":30.3,"Organization":"WHO European Region"},{"index":351,"Country":"Greece","15-29 years":2.1,"30-49 years":5.1,"50-69 years":"6.8","70+ years":6.9,"Organization":"WHO European Region"},{"index":354,"Country":"Hungary","15-29 years":7.9,"30-49 years":14.0,"50-69 years":"25.0","70+ years":33.4,"Organization":"WHO European Region"},{"index":357,"Country":"Iceland","15-29 years":14.3,"30-49 years":14.3,"50-69 years":"18.6","70+ years":4.6,"Organization":"WHO European Region"},{"index":360,"Country":"Ireland","15-29 years":7.9,"30-49 years":11.4,"50-69 years":"13.1","70+ years":8.0,"Organization":"WHO European Region"},{"index":363,"Country":"Israel","15-29 years":4.3,"30-49 years":6.4,"50-69 years":"6.9","70+ years":7.9,"Organization":"WHO European Region"},{"index":366,"Country":"Italy","15-29 years":3.6,"30-49 years":6.3,"50-69 years":"8.6","70+ years":13.2,"Organization":"WHO European Region"},{"index":369,"Country":"Kazakhstan","15-29 years":15.1,"30-49 years":23.1,"50-69 years":"19.7","70+ years":29.7,"Organization":"WHO European Region"},{"index":372,"Country":"Kyrgyzstan","15-29 years":8.5,"30-49 years":9.6,"50-69 years":"10.6","70+ years":18.3,"Organization":"WHO European Region"},{"index":374,"Country":"Latvia","15-29 years":8.9,"30-49 years":20.1,"50-69 years":"17.5","70+ years":23.7,"Organization":"WHO European Region"},{"index":378,"Country":"Lithuania","15-29 years":15.8,"30-49 years":22.4,"50-69 years":"30.7","70+ years":35.3,"Organization":"WHO European Region"},{"index":381,"Country":"Luxembourg","15-29 years":3.3,"30-49 years":9.1,"50-69 years":"13.0","70+ years":16.0,"Organization":"WHO European Region"},{"index":384,"Country":"Malta","15-29 years":5.8,"30-49 years":8.0,"50-69 years":"8.9","70+ years":5.5,"Organization":"WHO European Region"},{"index":387,"Country":"Montenegro","15-29 years":6.9,"30-49 years":12.1,"50-69 years":"16.1","70+ years":24.4,"Organization":"WHO European Region"},{"index":390,"Country":"Netherlands","15-29 years":8.9,"30-49 years":12.0,"50-69 years":"16.6","70+ years":16.4,"Organization":"WHO European Region"},{"index":393,"Country":"North Macedonia","15-29 years":4.7,"30-49 years":5.7,"50-69 years":"8.7","70+ years":9.9,"Organization":"WHO European Region"},{"index":396,"Country":"Norway","15-29 years":12.4,"30-49 years":16.6,"50-69 years":"17.5","70+ years":15.8,"Organization":"WHO European Region"},{"index":399,"Country":"Poland","15-29 years":12.7,"30-49 years":16.2,"50-69 years":"19.0","70+ years":14.5,"Organization":"WHO European Region"},{"index":402,"Country":"Portugal","15-29 years":4.2,"30-49 years":9.4,"50-69 years":"14.9","70+ years":24.9,"Organization":"WHO European Region"},{"index":405,"Country":"Republic of Moldova","15-29 years":10.5,"30-49 years":15.6,"50-69 years":"21.5","70+ years":27.1,"Organization":"WHO European Region"},{"index":408,"Country":"Romania","15-29 years":5.3,"30-49 years":9.4,"50-69 years":"15.1","70+ years":15.7,"Organization":"WHO European Region"},{"index":411,"Country":"Russian Federation","15-29 years":15.1,"30-49 years":29.3,"50-69 years":"25.9","70+ years":32.5,"Organization":"WHO European Region"},{"index":414,"Country":"Serbia","15-29 years":4.1,"30-49 years":10.8,"50-69 years":"21.4","70+ years":38.6,"Organization":"WHO European Region"},{"index":417,"Country":"Slovakia","15-29 years":6.1,"30-49 years":9.8,"50-69 years":"13.0","70+ years":22.5,"Organization":"WHO European Region"},{"index":420,"Country":"Slovenia","15-29 years":8.4,"30-49 years":17.5,"50-69 years":"25.1","70+ years":40.5,"Organization":"WHO European Region"},{"index":423,"Country":"Spain","15-29 years":4.4,"30-49 years":9.0,"50-69 years":"11.7","70+ years":15.3,"Organization":"WHO European Region"},{"index":426,"Country":"Sweden","15-29 years":14.2,"30-49 years":15.3,"50-69 years":"18.1","70+ years":19.9,"Organization":"WHO European Region"},{"index":429,"Country":"Switzerland","15-29 years":8.8,"30-49 years":11.2,"50-69 years":"17.9","70+ years":33.4,"Organization":"WHO European Region"},{"index":432,"Country":"Tajikistan","15-29 years":2.8,"30-49 years":3.9,"50-69 years":"5.1","70+ years":7.9,"Organization":"WHO European Region"},{"index":435,"Country":"T\u00fcrkiye","15-29 years":3.8,"30-49 years":2.7,"50-69 years":"3.4","70+ years":5.3,"Organization":"WHO European Region"},{"index":438,"Country":"Turkmenistan","15-29 years":9.5,"30-49 years":9.7,"50-69 years":"9.9","70+ years":14.4,"Organization":"WHO European Region"},{"index":441,"Country":"Ukraine","15-29 years":14.5,"30-49 years":27.0,"50-69 years":"25.8","70+ years":31.1,"Organization":"WHO European Region"},{"index":444,"Country":"United Kingdom of Great Britain and Northern Ireland","15-29 years":10.3,"30-49 years":14.4,"50-69 years":"11.5","70+ years":8.2,"Organization":"WHO European Region"},{"index":447,"Country":"Uzbekistan","15-29 years":14.3,"30-49 years":9.2,"50-69 years":"10.3","70+ years":16.0,"Organization":"WHO European Region"},{"index":450,"Country":"Bangladesh","15-29 years":4.7,"30-49 years":3.2,"50-69 years":3.1,"70+ years":5.2,"Organization":"WHO South-East Asia Region"},{"index":453,"Country":"Bhutan","15-29 years":4.5,"30-49 years":5.1,"50-69 years":8.4,"70+ years":18.8,"Organization":"WHO South-East Asia Region"},{"index":456,"Country":"Democratic People's Republic of Korea","15-29 years":5.2,"30-49 years":8.4,"50-69 years":15.5,"70+ years":27.1,"Organization":"WHO South-East Asia Region"},{"index":459,"Country":"India","15-29 years":15.9,"30-49 years":16.2,"50-69 years":17.6,"70+ years":22.2,"Organization":"WHO South-East Asia Region"},{"index":462,"Country":"Indonesia","15-29 years":1.4,"30-49 years":0.8,"50-69 years":2.0,"70+ years":6.4,"Organization":"WHO South-East Asia Region"},{"index":465,"Country":"Maldives","15-29 years":1.2,"30-49 years":1.2,"50-69 years":1.4,"70+ years":21.2,"Organization":"WHO South-East Asia Region"},{"index":468,"Country":"Myanmar","15-29 years":3.3,"30-49 years":3.6,"50-69 years":4.2,"70+ years":7.1,"Organization":"WHO South-East Asia Region"},{"index":471,"Country":"Nepal","15-29 years":14.0,"30-49 years":12.7,"50-69 years":14.7,"70+ years":24.5,"Organization":"WHO South-East Asia Region"},{"index":474,"Country":"Sri Lanka","15-29 years":17.9,"30-49 years":17.6,"50-69 years":17.5,"70+ years":33.0,"Organization":"WHO South-East Asia Region"},{"index":477,"Country":"Thailand","15-29 years":21.5,"30-49 years":26.3,"50-69 years":12.4,"70+ years":13.8,"Organization":"WHO South-East Asia Region"},{"index":480,"Country":"Timor-Leste","15-29 years":4.9,"30-49 years":4.8,"50-69 years":6.1,"70+ years":9.1,"Organization":"WHO South-East Asia Region"},{"index":483,"Country":"Australia","15-29 years":14.7,"30-49 years":16.4,"50-69 years":15.9,"70+ years":16.6,"Organization":"WHO Western Pacific Region"},{"index":486,"Country":"Brunei","15-29 years":4.8,"30-49 years":4.3,"50-69 years":1.0,"70+ years":5.1,"Organization":"WHO Western Pacific Region"},{"index":489,"Country":"Cambodia","15-29 years":5.0,"30-49 years":6.0,"50-69 years":8.7,"70+ years":12.1,"Organization":"WHO Western Pacific Region"},{"index":492,"Country":"China","15-29 years":4.2,"30-49 years":6.2,"50-69 years":12.2,"70+ years":38.5,"Organization":"WHO Western Pacific Region"},{"index":495,"Country":"Fiji","15-29 years":15.0,"30-49 years":8.5,"50-69 years":9.6,"70+ years":11.9,"Organization":"WHO Western Pacific Region"},{"index":498,"Country":"Japan","15-29 years":18.7,"30-49 years":20.3,"50-69 years":20.5,"70+ years":18.7,"Organization":"WHO Western Pacific Region"},{"index":501,"Country":"Kiribati","15-29 years":31.1,"30-49 years":27.0,"50-69 years":16.8,"70+ years":16.0,"Organization":"WHO Western Pacific Region"},{"index":504,"Country":"Lao People's Democratic Republic","15-29 years":6.9,"30-49 years":5.6,"50-69 years":6.7,"70+ years":10.2,"Organization":"WHO Western Pacific Region"},{"index":507,"Country":"Malaysia","15-29 years":5.1,"30-49 years":6.9,"50-69 years":10.2,"70+ years":14.4,"Organization":"WHO Western Pacific Region"},{"index":510,"Country":"Micronesia (Federated States of)","15-29 years":33.4,"30-49 years":29.5,"50-69 years":19.3,"70+ years":19.9,"Organization":"WHO Western Pacific Region"},{"index":513,"Country":"Mongolia","15-29 years":26.2,"30-49 years":31.4,"50-69 years":20.4,"70+ years":21.0,"Organization":"WHO Western Pacific Region"},{"index":516,"Country":"New Zealand","15-29 years":15.2,"30-49 years":15.4,"50-69 years":14.1,"70+ years":11.7,"Organization":"WHO Western Pacific Region"},{"index":519,"Country":"Papua New Guinea","15-29 years":2.5,"30-49 years":2.6,"50-69 years":3.4,"70+ years":4.2,"Organization":"WHO Western Pacific Region"},{"index":522,"Country":"Philippines","15-29 years":4.6,"30-49 years":4.2,"50-69 years":5.1,"70+ years":13.6,"Organization":"WHO Western Pacific Region"},{"index":525,"Country":"Republic of Korea","15-29 years":20.2,"30-49 years":28.0,"50-69 years":31.3,"70+ years":56.5,"Organization":"WHO Western Pacific Region"},{"index":528,"Country":"Samoa","15-29 years":24.5,"30-49 years":18.4,"50-69 years":12.9,"70+ years":16.0,"Organization":"WHO Western Pacific Region"},{"index":531,"Country":"Singapore","15-29 years":9.4,"30-49 years":5.7,"50-69 years":11.9,"70+ years":13.1,"Organization":"WHO Western Pacific Region"},{"index":534,"Country":"Solomon Islands","15-29 years":33.9,"30-49 years":32.8,"50-69 years":22.3,"70+ years":23.5,"Organization":"WHO Western Pacific Region"},{"index":537,"Country":"Tonga","15-29 years":8.1,"30-49 years":6.5,"50-69 years":6.1,"70+ years":9.6,"Organization":"WHO Western Pacific Region"},{"index":540,"Country":"Vanuatu","15-29 years":29.7,"30-49 years":24.7,"50-69 years":17.0,"70+ years":22.1,"Organization":"WHO Western Pacific Region"},{"index":543,"Country":"Viet Nam","15-29 years":6.0,"30-49 years":7.8,"50-69 years":13.2,"70+ years":22.9,"Organization":"WHO Western Pacific Region"}];

  const heatmapConfig = {
    margin: { top: 30, right: 20, bottom: 100, left: 150 }, // Sesuaikan margin untuk SVG
    cellHeight: 20,
    cellPadding: 0.01,
    legendElementWidth: 60, // Lebar elemen legenda (kotak + teks)
    legendHeight: 15, // Tinggi kotak warna legenda
    valueColors: ["#EEEEEE", "#8E1616", "#1D1616"],
    xAxisTickMarginBottom: 20
  };

  let processedHeatmapData = [];
  let allOrganizations = [];
  let ageGroups = ["15-29 years", "30-49 years", "50-69 years", "70+ years"];
  let currentOrganization = "All";

  let svg, xScale, yScale, colorScale, tooltipDiv, legendContainerElement;
  let chartWidth, chartHeight;

  // Pilih kontainer HTML menggunakan ID unik yang baru
  const titleContainer = chartContainer.select("#heatmapTitleContainer-heatmap");
  const filterContainerElement = chartContainer.select("#heatmapFilterContainer-heatmap");
  legendContainerElement = chartContainer.select("#heatmapLegendContainer-heatmap");
  const svgContainer = chartContainer.select("#heatmapSvgContainer-heatmap");
  tooltipDiv = chartContainer.select("#heatmapTooltip-heatmap").attr("class", "tooltip-heatmap"); // Terapkan class CSS

  function parseValue(valueStr) {
    if (valueStr === null || typeof valueStr === 'undefined') return null;
    const s = String(valueStr).split(" ")[0];
    const num = parseFloat(s);
    return isNaN(num) ? null : num;
  }

  function processHeatmapData() {
    processedHeatmapData = [];
    const organizationsSet = new Set();

    rawData.forEach(d => {
      organizationsSet.add(d.Organization);
      ageGroups.forEach(ageGroup => {
        const val = parseValue(d[ageGroup]);
        processedHeatmapData.push({
          country: d.Country,
          organization: d.Organization,
          ageGroup: ageGroup,
          value: val
        });
      });
    });
    allOrganizations = ["All", ...Array.from(organizationsSet).sort()];
  }

  function initializeHeatmap() {
    processHeatmapData();

    // Judul dan Subjudul
    titleContainer.selectAll("*").remove(); // Hapus judul lama jika ada
    titleContainer.append("h2")
        .attr("class", "chart-title-heatmap") // Terapkan class CSS
        .text("Crude Suicide Rate by Age (per 100k, 2021)");
    titleContainer.append("h3")
        .attr("class", "chart-subtitle-heatmap") // Terapkan class CSS
        .text("The majority of people aged 70+ in some countries are vulnerable to suicide.");

    // Filter
    filterContainerElement.selectAll("*").remove();
    const filterGroup = filterContainerElement.append("div").attr("class", "filter-group-heatmap");
    filterGroup.append("span").attr("class", "filter-group-label-heatmap").text("Organization:");
    const orgSelect = filterGroup.append("select")
      .on("change", function() {
        currentOrganization = d3.select(this).property("value");
        filterAndRenderHeatmap();
      });

    orgSelect.selectAll("option")
      .data(allOrganizations)
      .enter().append("option")
      .text(d => d)
      .attr("value", d => d)
      .property("selected", d => d === currentOrganization);

    // SVG setup
    const availableWidth = svgContainer.node().getBoundingClientRect().width;
    chartWidth = availableWidth - heatmapConfig.margin.left - heatmapConfig.margin.right;

    xScale = d3.scaleBand()
      .domain(ageGroups)
      .padding(heatmapConfig.cellPadding);

    yScale = d3.scaleBand()
      .padding(heatmapConfig.cellPadding);

    colorScale = d3.scaleLinear()
      .range(heatmapConfig.valueColors);

    svg = svgContainer.append("svg")
      .attr("width", availableWidth); // SVG mengambil lebar penuh kontainernya initially

    const chartG = svg.append("g")
      .attr("transform", `translate(${heatmapConfig.margin.left},${heatmapConfig.margin.top})`);

    chartG.append("g").attr("class", "x-axis");
    chartG.append("g").attr("class", "y-axis");
    chartG.append("g").attr("class", "cells");
    chartG.append("text").attr("class", "no-data-message-heatmap"); // Untuk pesan "No data"

    filterAndRenderHeatmap();
  }

  function filterAndRenderHeatmap() {
    let filteredData = processedHeatmapData;
    if (currentOrganization !== "All") {
      filteredData = processedHeatmapData.filter(d => d.organization === currentOrganization);
    }

    const countries = Array.from(new Set(filteredData.map(d => d.country))).sort(d3.ascending);

    // Update skala berdasarkan data yang difilter
    const availableWidth = svgContainer.node().getBoundingClientRect().width;
    chartWidth = Math.max(100, availableWidth - heatmapConfig.margin.left - heatmapConfig.margin.right); // Pastikan chartWidth tidak negatif

    xScale.range([0, chartWidth]);
    yScale.domain(countries)
        .range([0, countries.length * (heatmapConfig.cellHeight + heatmapConfig.cellPadding * heatmapConfig.cellHeight)]);

    const validValues = filteredData.filter(d => d.value !== null).map(d => d.value);
    let minVal, midVal, maxVal;

    if (validValues.length > 0) {
        minVal = d3.min(validValues);
        maxVal = d3.max(validValues);
        if (minVal === maxVal) {
            midVal = minVal;
            minVal = midVal - 0.5; maxVal = midVal + 0.5;
            if (midVal === 0) { minVal = -0.5; maxVal = 0.5; }
            else if (midVal > 0 && minVal < 0) { minVal = 0; }
        } else {
            midVal = (minVal + maxVal) / 2;
        }
        colorScale.domain([minVal, midVal, maxVal]);
    } else {
        colorScale.domain([0, 0.5, 1]);
        minVal = 0; midVal = 0.5; maxVal = 1;
    }

    chartHeight = yScale.range()[1];
    svg.attr("height", chartHeight + heatmapConfig.margin.top + heatmapConfig.margin.bottom)
       .attr("width", chartWidth + heatmapConfig.margin.left + heatmapConfig.margin.right); // Sesuaikan lebar SVG juga

    const chartG = svg.select("g"); // Transform sudah diatur di initialize

    chartG.select(".x-axis")
      .attr("transform", `translate(0, -${heatmapConfig.xAxisTickMarginBottom})`)
      .call(d3.axisTop(xScale).tickSize(0))
      .select(".domain").remove();

    chartG.selectAll(".x-axis .tick text")
      .attr("transform", "rotate(-12)")
      .style("text-anchor", "middle")
      .attr("dx", 0)
      .attr("dy", "0.35em");

    chartG.select(".y-axis")
      .call(d3.axisLeft(yScale).tickSize(0))
      .select(".domain").remove();
    chartG.selectAll(".y-axis .tick text")
        .style("font-size", "10px");

    const cells = chartG.select(".cells")
      .selectAll("rect")
      .data(filteredData, d => d.country + d.ageGroup + d.value);

    cells.exit().remove();

    cells.enter().append("rect")
      .merge(cells)
      .attr("x", d => xScale(d.ageGroup))
      .attr("y", d => yScale(d.country))
      .attr("width", xScale.bandwidth())
      .attr("height", yScale.bandwidth())
      .style("fill", d => (d.value === null) ? "#cccccc" : colorScale(d.value))
      .on("mouseover", function(event, d) {
          if (d.value === null) return;
          d3.select(this).style("stroke", "black").style("stroke-width", 1.5);
          tooltipDiv.style("opacity", 1);
      })
      .on("mousemove", function(event, d) {
          if (d.value === null) return;
          tooltipDiv.html(
              `<strong>${d.country}</strong><br/>
              Age Group: ${d.ageGroup}<br/>
              Value: ${d.value !== null ? d.value.toFixed(1) : "N/A"}<br/>
              Organization: ${d.organization}`
            )
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", function(event, d) {
          if (d.value === null) return;
          d3.select(this).style("stroke", "none");
          tooltipDiv.style("opacity", 0);
      });

    // Render Legend di #heatmapLegendContainer-heatmap
    legendContainerElement.selectAll("*").remove();
    if (validValues.length > 0) {
        const legendDomainPoints = colorScale.domain();
        legendContainerElement.append("span")
            .attr("class", "legend-title-heatmap")
            .text("Value Legend:");

        const legendItems = legendContainerElement.selectAll(".legend-item-heatmap")
            .data(heatmapConfig.valueColors)
            .enter()
            .append("div")
            .attr("class", "legend-item-heatmap");

        legendItems.append("div")
            .attr("class", "legend-color-box-heatmap")
            .style("background-color", d => d);

        legendItems.append("span")
            .attr("class", "legend-text-heatmap")
            .text((d,i) => legendDomainPoints[i] !== undefined ? legendDomainPoints[i].toFixed(1) : "");
    }

    // Tampilkan pesan jika tidak ada data
    const noDataMsg = chartG.select(".no-data-message-heatmap");
    if (filteredData.length === 0 && countries.length === 0) {
        noDataMsg
            .attr("x", chartWidth / 2)
            .attr("y", Math.max(50, chartHeight / 2)) // Hindari y negatif jika chartHeight 0
            .text("No data available for this selection.")
            .style("display", "block");
        cells.style("display", "none"); // Sembunyikan sel jika tidak ada data
    } else {
        noDataMsg.style("display", "none");
        cells.style("display", "block");
    }
  }

  initializeHeatmap();

  window.addEventListener('resize', () => {
      // Re-calculate width and re-render on resize
      const availableWidth = svgContainer.node().getBoundingClientRect().width;
      chartWidth = Math.max(100, availableWidth - heatmapConfig.margin.left - heatmapConfig.margin.right);
      
      xScale.range([0, chartWidth]); // Update range xScale
      svg.attr("width", chartWidth + heatmapConfig.margin.left + heatmapConfig.margin.right);
      
      filterAndRenderHeatmap(); // Re-render seluruh chart
  });

});
</script>

## Kebutuhan Berbeda, Prioritas Berbeda

Analisis ini menunjukkan bahwa pendekatan "satu untuk semua" tidak akan berhasil. Bagi para inovator dan penyedia layanan, prioritas intervensi harus dirancang dengan empati mendalam terhadap konteks dan kebutuhan spesifik dari setiap tahap kehidupan:

### Prioritas 1: Populasi Lansia (Terutama di Negara Maju)
* **Kebutuhan:** Koneksi sosial yang mudah diakses dan perasaan dihargai untuk melawan isolasi.
* **Peluang Industri:** Layanan atau platform teknologi sangat sederhana yang memfasilitasi lansia untuk berbagi cerita dan keahlian.

### Prioritas 2: Remaja & Dewasa Muda (Krisis Modern)
* **Kebutuhan:** Keterampilan emosional (*emotional toolkit*) untuk membangun resiliensi dan ruang digital yang lebih aman.
* **Peluang Industri:** Platform edukasi yang mengajarkan cara mengelola kecemasan dan kegagalan dalam format yang relevan bagi mereka.

## Kesimpulan: Intervensi Harus Sesuai Konteks Usia dan Geografi

Data ini mengajarkan kita bahwa pertanyaan "Kelompok usia mana yang paling berisiko?" tidak bisa dijawab secara tunggal. Jawabannya adalah, "Tergantung di mana mereka tinggal." Prioritas penanganan krisis kesehatan mental harus bersifat dinamis, mengenali bahwa seorang lansia di Eropa mungkin merasakan tantangan yang sama sekali berbeda dengan seorang remaja di Amerika Selatan. Solusi yang efektif harus dimulai dengan memahami 'sidik jari' risiko yang unik ini sebelum kita bisa menawarkan bantuan yang benar-benar bermakna.

<a href="https://daddyananta.github.io/categories/insight-psychology/">Baca artikel lain tentang Insight Psikologi</a>

## Referensi
<p style="text-indent:0px;">Nevid, J. S. (2012). <strong>Abnormal Psychology: In a Changing World</strong>. <i>Pearson Education</i>.</p>

## Penelusuran Terkait
<ul>
    <li><a href="https://www.who.int/news/item/17-06-2021-one-in-100-deaths-is-by-suicide">One in 100 deaths is by suicide - World Health Organization</a></li>
    <li><a href="https://www.cdc.gov/suicide/facts/index.html">Facts About Suicide - Centers for Disease Control and Prevention (CDC)</a></li>
    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8235608/">Suicide in Older Adults: A Public Health Concern - National Institutes of Health (NIH)</a></li>
    <li><a href="https://www.unicef.org/press-releases/unicef-urgent-action-needed-protect-mental-health-children-and-adolescents-europe">Urgent action needed to protect mental health of children and adolescents - UNICEF</a></li>
    <li><a href="https://connect.springerpub.com/content/sgreb/22/4/269">Global Suicide Rates Among Older Adults: A Systematic Review - Springer Publishing</a></li>
    <li><a href="https://www.weforum.org/agenda/2024/02/loneliness-epidemic-aging-population-who/">How can we tackle the loneliness epidemic in our ageing populations? - World Economic Forum</a></li>
    <li><a href="https://www.ageuk.org.uk/information-advice/health-wellbeing/mind-body/loneliness/">Loneliness in later life - Age UK</a></li>
    <li><a href="https://hbr.org/2023/02/the-growing-need-for-mental-health-support-for-gen-z-employees">The Growing Need for Mental Health Support for Gen Z Employees - Harvard Business Review</a></li>
</ul>
