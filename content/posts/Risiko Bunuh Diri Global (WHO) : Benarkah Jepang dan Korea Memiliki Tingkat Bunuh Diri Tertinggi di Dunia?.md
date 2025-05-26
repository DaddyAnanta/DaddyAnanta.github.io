+++
title = 'Risiko Bunuh Diri Global (WHO): Benarkah Jepang dan Korea Memiliki Tingkat Bunuh Diri Tertinggi di Dunia?'
date = 2025-05-25T00:37:00+00:00
draft = false
socialshare = true
description = "Berdasarkan data grafik tahun 2021, angka bunuh diri yang dilaporkan menunjukkan variasi yang sangat besar antar negara yang ditampilkan. Penting untuk dicatat di awal bahwa grafik ini juga mengindikasikan adanya perbedaan tingkat kualitas data (mulai dari 'Sangat Rendah' hingga 'Tinggi') yang dilaporkan oleh masing-masing negara, sebuah faktor yang perlu dipertimbangkan saat menginterpretasi angka-angka berikut."
image = "/images/67.Risiko_Bunuh_Diri_Global_(WHO)/4.webp"
imageBig= "/images/67.Risiko_Bunuh_Diri_Global_(WHO)/4.webp"
categories= ["News"]
tags = ["WHO"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++
<div style="background-color: #FFEBEE;margin-bottom: 20px; padding: 25px; border-radius: 10px; border: 1px solid #FFCDD2; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
  <h3 style="color: #B71C1C; margin-top: 0; text-align: left; font-weight: bold;">Seri Risiko Bunuh Diri Global (WHO)</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 12px; font-weight: bold; color: #A71C1C; padding-left: 10px; border-left: 3px solid #A71C1C;">Benarkah Jepang dan Korea Memiliki Tingkat Bunuh Diri Tertinggi di Dunia?</li>
    <li style="margin-bottom: 12px;">
      <a href="/posts/risiko-bunuh-diri-global-who-benarkah-pria-memiliki-risiko-lebih-tinggi-dibandingkan-wanita/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Benarkah Pria Memiliki Risiko Lebih Tinggi Dibandingkan Wanita?</a>
    </li>
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who-kelompok-usia-mana-yang-paling-membutuhkan-perhatian/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Kelompok Usia Mana yang Paling Membutuhkan Perhatian?</a>
    </li>
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who-apakah-negara-berpendapatan-rendah-lebih-rentan-bunuh-diri/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Apakah Negara Berpendapatan Rendah Lebih Rentan Bunuh Diri?</a>
    </li>
  </ul>
</div>
India (Wilayah Asia Tenggara) dan Tiongkok (Wilayah Pasifik Barat) mencatatkan angka absolut tertinggi dengan masing-masing lebih dari 177.000 dan 127.000 kasus, diikuti oleh Amerika Serikat (Wilayah Amerika) dengan lebih dari 53.000 kasus. Ketiga negara tersebut merupakan negara dengan populasi tertinggi menurut data <a href="https://www.worldometers.info/world-population/population-by-country/">Worldometer</a>. Federasi Rusia (Wilayah Eropa) yang juga merupakan negara dengan populasi terbesar ke-9 dengan lebih dari 31.000 kasus serta Brazil dengan Populasi tertinggi ke-7 dengan kasus 15.907.

Yang menjadi fokus adalah negara Jepang, Korea, Thailand serta Prancis yang masuk ke dalam 10 negara dengan kasus bunuh diri tertinggi di Dunia. Hal ini harus lebih menjadi perhatian serius dan mendorong upaya pencegahan yang lebih komprehensif dan terfokus, baik di tingkat global maupun pada masing-masing negara tersebut.

<style>
/* CSS untuk Horizontal Bar Chart */
#hugo-horizontal-bar-chart { /* Kontainer utama yang di-target skrip */
    /* Tidak perlu style khusus di sini, akan diisi skrip */
}

#hugo-horizontal-bar-chart #filterContainer { /* ID unik untuk filter bar chart */
    margin-bottom: 15px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
    border: 1px solid #dee2e6;
    display: flex;
    flex-direction: column; /* Mengatur filter dalam kolom */
    gap: 10px; /* Jarak antar grup filter */
    align-items: center;
}

#hugo-horizontal-bar-chart .filter-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    align-items: center; /* Agar label dan tombol sejajar */
    width: 100%;
}
#hugo-horizontal-bar-chart .filter-group-label {
    font-size: 13px;
    font-weight: bold;
    margin-right: 10px;
    white-space: nowrap;
}

#hugo-horizontal-bar-chart #filterContainer button {
    padding: 6px 12px;
    font-size: 12px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
}
#hugo-horizontal-bar-chart #filterContainer button:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}
#hugo-horizontal-bar-chart #filterContainer button.active {
    background-color: #004085;
    border-color: #00376e;
    font-weight: bold;
}

#hugo-horizontal-bar-chart .chart-scroll-wrapper-hbc { /* ID/Class unik */
    position: relative; /* Penting untuk positioning absolut anak */
    width: 100%; /* Mengikuti lebar .d3-chart */
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #e0e0e0; /* Sesuaikan dengan border .d3-chart jika perlu */
    /* Tinggi diatur di JS */
}
#hugo-horizontal-bar-chart #chart-svg-container-hbc { /* ID/Class unik */
    width: 100%;
}
#hugo-horizontal-bar-chart .bar-label-hbc { /* Class unik */
    text-anchor: end;
    font-size: 9px; /* Ukuran font label pada bar mungkin perlu disesuaikan jika bar lebih besar */
    pointer-events: none;
}
#hugo-horizontal-bar-chart .axis-label-hbc { /* Class unik */
    font-size: 12px;
    font-weight: bold;
}
#hugo-horizontal-bar-chart .chart-title-hbc { /* Class unik */
    font-size: 16px;
    font-weight: bold;
    text-anchor: middle;
}
#hugo-horizontal-bar-chart .tooltip-hbc { /* Class unik */
    position: absolute;
    text-align: left;
    padding: 8px;
    font: 12px sans-serif;
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    white-space: nowrap;
    z-index: 1070; /* Pastikan di atas elemen lain, sesuaikan jika perlu */
}
#hugo-horizontal-bar-chart #legendContainer-hbc { /* ID unik */
    position: absolute; /* Akan relatif terhadap chart-scroll-wrapper-hbc */
    bottom: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 10px;
    z-index: 10; /* Agar di atas bar chart tapi di bawah tooltip */
}
#hugo-horizontal-bar-chart #legendContainer-hbc h5 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: bold;
    text-align: left;
}
#hugo-horizontal-bar-chart .legend-item-div-hbc { /* Class unik */
    display: flex;
    align-items: center;
    margin-bottom: 4px;
}
#hugo-horizontal-bar-chart .legend-item-div-hbc:last-child {
    margin-bottom: 0;
}
#hugo-horizontal-bar-chart .legend-color-swatch-hbc { /* Class unik */
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border: 1px solid #bbb;
}
#hugo-horizontal-bar-chart .no-data-message-hbc { /* Class unik */
    text-anchor: middle;
    font-size: 16px;
    fill: #777;
}
</style>

<div class="d3-chart">
  <div id="hugo-horizontal-bar-chart">
    </div>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const chartMainContainerId = "#hugo-horizontal-bar-chart";
    const chartMainContainer = d3.select(chartMainContainerId);

    if (chartMainContainer.empty()) {
        console.error(`Kontainer utama chart "${chartMainContainerId}" tidak ditemukan.`);
        return;
    }

    // --- Data Mentah ---
    const rawData = {"Country":{"0":"Algeria","1":"Angola","2":"Benin","3":"Botswana","4":"Burkina Faso","5":"Burundi","6":"Cabo Verde","7":"Cameroon","8":"Central African Republic","9":"Chad","10":"Comoros","11":"Congo","12":"C\u00f4te d'Ivoire","13":"Democratic Republic of the Congo","14":"Equatorial Guinea","15":"Eritrea","16":"Eswatini","17":"Ethiopia","18":"Gabon","19":"Gambia","20":"Ghana","21":"Guinea","22":"Guinea-Bissau","23":"Kenya","24":"Lesotho","25":"Liberia","26":"Madagascar","27":"Malawi","28":"Mali","29":"Mauritania","30":"Mauritius","31":"Mozambique","32":"Namibia","33":"Niger","34":"Nigeria","35":"Rwanda","36":"Sao Tome and Principe","37":"Senegal","38":"Seychelles","39":"Sierra Leone","40":"South Africa","41":"South Sudan","42":"Togo","43":"Uganda","44":"United Republic of Tanzania","45":"Zambia","46":"Zimbabwe","47":"Antigua and Barbuda","48":"Argentina","49":"Bahamas","50":"Barbados","51":"Belize","52":"Bolivia","53":"Brazil","54":"Canada","55":"Chile","56":"Colombia","57":"Costa Rica","58":"Cuba","59":"Dominican Republic","60":"Ecuador","61":"El Salvador","62":"Grenada","63":"Guatemala","64":"Guyana","65":"Haiti","66":"Honduras","67":"Jamaica","68":"Mexico","69":"Nicaragua","70":"Panama","71":"Paraguay","72":"Peru","73":"Saint Lucia","74":"Saint Vincent and the Grenadines","75":"Suriname","76":"Trinidad and Tobago","77":"United States of America","78":"Uruguay","79":"Venezuela (Bolivarian Republic of)","80":"Albania","81":"Armenia","82":"Austria","83":"Azerbaijan","84":"Belarus","85":"Belgium","86":"Bosnia and Herzegovina","87":"Bulgaria","88":"Croatia","89":"Cyprus","90":"Czechia","91":"Denmark","92":"Estonia","93":"Finland","94":"France","95":"Georgia","96":"Germany","97":"Greece","98":"Hungary","99":"Iceland","100":"Ireland","101":"Israel","102":"Italy","103":"Kazakhstan","104":"Kyrgyzstan","105":"Latvia","106":"Lithuania","107":"Luxembourg","108":"Malta","109":"Montenegro","110":"Netherlands (Kingdom of the)","111":"North Macedonia","112":"Norway","113":"Poland","114":"Portugal","115":"Republic of Moldova","116":"Romania","117":"Russian Federation","118":"Serbia","119":"Slovakia","120":"Slovenia","121":"Spain","122":"Sweden","123":"Switzerland","124":"Tajikistan","125":"T\u00fcrkiye","126":"Turkmenistan","127":"Ukraine","128":"United Kingdom of Great Britain and Northern Ireland","129":"Uzbekistan","130":"Afghanistan","131":"Bahrain","132":"Djibouti","133":"Egypt","134":"Iran (Islamic Republic of)","135":"Iraq","136":"Syrian Arab Republic","137":"Tunisia","138":"United Arab Emirates","139":"Yemen","140":"Bangladesh","141":"Bhutan","142":"Democratic People's Republic of Korea","143":"India","144":"Indonesia","145":"Maldives","146":"Myanmar","147":"Nepal","148":"Sri Lanka","149":"Thailand","150":"Timor-Leste","151":"Australia","152":"Brunei Darussalam","153":"Cambodia","154":"China","155":"Fiji","156":"Japan","157":"Kiribati","158":"Lao People's Democrati","159":"Malaysia","160":"Micronesia (Federated States of)","161":"Mongolia","162":"New Zealand","163":"Papua New Guinea","164":"Philippines","165":"Republic of Korea","166":"Samoa","167":"Singapore","168":"Solomon Islands","169":"Vanuatu","170":"Viet Nam","171":"Tonga"},
    "Data quality a":{"0":"Very low","1":"Very low","2":"Very low","3":"Very low","4":"Very low","5":"Very low","6":"Low","7":"Very low","8":"Very low","9":"Very low","10":"Very low","11":"Very low","12":"Very low","13":"Very low","14":"Very low","15":"Very low","16":"Very low","17":"Very low","18":"Very low","19":"Very low","20":"Very low","21":"Very low","22":"Very low","23":"Very low","24":"Very low","25":"Very low","26":"Very low","27":"Very low","28":"Very low","29":"Very low","30":"High","31":"Very low","32":"Very low","33":"Very low","34":"Very low","35":"Very low","36":"Very low","37":"Very low","38":"Medium","39":"Very low","40":"Medium","41":"Very low","42":"Very low","43":"Very low","44":"Very low","45":"Very low","46":"Very low","47":"Medium","48":"Medium","49":"Medium","50":"Low","51":"High","52":"Very low","53":"High","54":"High","55":"High","56":"High","57":"High","58":"High","59":"Low","60":"Medium","61":"Low","62":"Medium","63":"High","64":"Medium","65":"Very low","66":"Very low","67":"High","68":"High","69":"High","70":"High","71":"Medium","72":"Medium","73":"High","74":"High","75":"Medium","76":"Low","77":"High","78":"Medium","79":"High","80":"Low","81":"High","82":"High","83":"Very low","84":"High","85":"High","86":"Medium","87":"Medium","88":"High","89":"High","90":"High","91":"High","92":"High","93":"High","94":"Medium","95":"Medium","96":"High","97":"Medium","98":"High","99":"High","100":"High","101":"High","102":"High","103":"High","104":"High","105":"High","106":"High","107":"High","108":"High","109":"Low","110":"High","111":"Medium","112":"High","113":"Medium","114":"High","115":"High","116":"High","117":"Medium","118":"Medium","119":"High","120":"High","121":"High","122":"High","123":"High","124":"Low","125":"Medium","126":"Very low","127":"Medium","128":"High","129":"Medium","130":"Very low","131":"Low","132":"Very low","133":"Low","134":"Medium","135":"Low","136":"Low","137":"Low","138":"Low","139":"Very low","140":"Very low","141":"Very low","142":"Very low","143":"Very low","144":"Very low","145":"Low","146":"Very low","147":"Very low","148":"Medium","149":"Low","150":"Very low","151":"High","152":"High","153":"Very low","154":"Very low","155":"Low","156":"High","157":"Very low","158":"Very low","159":"Low","160":"Low","161":"High","162":"High","163":"Very low","164":"Medium","165":"High","166":"Very low","167":"High","168":"Low","169":"Very low","170":"Very low","171":"Very low"},
    "Number of suicides, c 2021":{"0":976,"1":2802,"2":956,"3":201,"4":1869,"5":992,"6":77,"7":2287,"8":470,"9":929,"10":49,"11":396,"12":2191,"13":8695,"14":124,"15":443,"16":329,"17":7412,"18":173,"19":124,"20":1729,"21":661,"22":158,"23":2438,"24":648,"25":314,"26":1808,"27":1517,"28":931,"29":128,"30":135,"31":3363,"32":241,"33":1097,"34":10912,"35":1159,"36":2,"37":1164,"38":5,"39":497,"40":13712,"41":857,"42":829,"43":2524,"44":3207,"45":1397,"46":2740,"47":1,"48":3594,"49":13,"50":10,"51":17,"52":501,"53":15907,"54":3631,"55":1496,"56":2534,"57":408,"58":1534,"59":467,"60":1336,"61":478,"62":2,"63":869,"64":202,"65":889,"66":306,"67":48,"68":8872,"69":282,"70":143,"71":424,"72":510,"73":9,"74":0,"75":138,"76":199,"77":53162,"78":841,"79":2437,"80":78,"81":69,"82":1301,"83":160,"84":1444,"85":2124,"86":291,"87":654,"88":615,"89":40,"90":1403,"91":613,"92":199,"93":807,"94":10957,"95":193,"96":10799,"97":495,"98":1597,"99":44,"100":430,"101":391,"102":4176,"103":2882,"104":464,"105":287,"106":618,"107":53,"108":34,"109":68,"110":2040,"111":107,"112":713,"113":5199,"114":1197,"115":428,"116":1852,"117":31172,"118":1035,"119":539,"120":398,"121":4160,"122":1442,"123":1221,"124":242,"125":2332,"126":484,"127":9397,"128":6461,"129":2857,"130":1438,"131":70,"132":89,"133":699,"134":3603,"135":1281,"136":127,"137":222,"138":167,"139":1564,"140":4714,"141":38,"142":2442,"143":177567,"144":3333,"145":8,"146":1545,"147":2989,"148":3347,"149":11899,"150":48,"151":3394,"152":14,"153":764,"154":127601,"155":76,"156":21904,"157":22,"158":341,"159":1938,"160":22,"161":618,"162":609,"163":182,"164":3947,"165":14273,"166":26,"167":449,"168":149,"169":48,"170":7222,"171":5},
    "Crude suicide rate, d 2021":{"0":2.2,"1":8.1,"2":7.1,"3":8.4,"4":8.5,"5":7.7,"6":14.9,"7":8.5,"8":9.2,"9":5.2,"10":6.0,"11":6.7,"12":7.4,"13":8.8,"14":7.0,"15":13.2,"16":27.2,"17":6.1,"18":7.3,"19":4.8,"20":5.3,"21":4.8,"22":7.7,"23":4.6,"24":28.7,"25":6.0,"26":6.1,"27":7.6,"28":4.2,"29":2.7,"30":10.5,"31":10.6,"32":8.6,"33":4.5,"34":5.0,"35":8.7,"36":0.9,"37":6.8,"38":4.3,"39":6.1,"40":22.3,"41":7.9,"42":9.3,"43":5.5,"44":5.1,"45":7.1,"46":17.3,"47":1.5,"48":7.9,"49":3.3,"50":3.5,"51":4.2,"52":4.2,"53":7.6,"54":9.4,"55":7.7,"56":5.0,"57":8.1,"58":13.8,"59":4.2,"60":7.6,"61":7.6,"62":1.3,"63":4.9,"64":24.8,"65":7.8,"66":3.0,"67":1.7,"68":7.0,"69":4.2,"70":3.3,"71":6.4,"72":1.5,"73":5.3,"74":0.4,"75":22.3,"76":13.3,"77":15.6,"78":24.8,"79":8.6,"80":2.8,"81":2.5,"82":14.5,"83":1.6,"84":15.6,"85":18.4,"86":9.0,"87":9.5,"88":15.7,"89":3.0,"90":13.3,"91":10.5,"92":14.9,"93":14.6,"94":16.6,"95":5.1,"96":12.9,"97":4.7,"98":16.5,"99":11.9,"100":8.5,"101":4.4,"102":7.0,"103":14.6,"104":6.8,"105":15.2,"106":22.1,"107":8.2,"108":6.5,"109":11.3,"110":11.5,"111":5.8,"112":13.2,"113":13.7,"114":11.5,"115":14.1,"116":9.6,"117":21.4,"118":15.1,"119":9.9,"120":18.9,"121":8.7,"122":13.8,"123":14.0,"124":2.4,"125":2.7,"126":6.8,"127":21.2,"128":9.5,"129":8.3,"130":3.6,"131":4.7,"132":8.0,"133":0.6,"134":4.1,"135":3.0,"136":0.6,"137":1.8,"138":1.7,"139":4.2,"140":2.8,"141":4.9,"142":9.3,"143":12.6,"144":1.2,"145":1.5,"146":2.9,"147":10.1,"148":14.7,"149":16.6,"150":3.6,"151":13.1,"152":3.0,"153":4.5,"154":8.9,"155":8.3,"156":17.4,"157":17.5,"158":4.6,"159":5.7,"160":19.8,"161":18.5,"162":11.9,"163":1.8,"164":3.5,"165":27.5,"166":12.0,"167":8.1,"168":19.6,"169":15.7,"170":7.3,"171":4.7},
    "Organization":{"0":"WHO African Region","1":"WHO African Region","2":"WHO African Region","3":"WHO African Region","4":"WHO African Region","5":"WHO African Region","6":"WHO African Region","7":"WHO African Region","8":"WHO African Region","9":"WHO African Region","10":"WHO African Region","11":"WHO African Region","12":"WHO African Region","13":"WHO African Region","14":"WHO African Region","15":"WHO African Region","16":"WHO African Region","17":"WHO African Region","18":"WHO African Region","19":"WHO African Region","20":"WHO African Region","21":"WHO African Region","22":"WHO African Region","23":"WHO African Region","24":"WHO African Region","25":"WHO African Region","26":"WHO African Region","27":"WHO African Region","28":"WHO African Region","29":"WHO African Region","30":"WHO African Region","31":"WHO African Region","32":"WHO African Region","33":"WHO African Region","34":"WHO African Region","35":"WHO African Region","36":"WHO African Region","37":"WHO African Region","38":"WHO African Region","39":"WHO African Region","40":"WHO African Region","41":"WHO African Region","42":"WHO African Region","43":"WHO African Region","44":"WHO African Region","45":"WHO African Region","46":"WHO African Region","47":"WHO Region of the Americas.","48":"WHO Region of the Americas.","49":"WHO Region of the Americas.","50":"WHO Region of the Americas.","51":"WHO Region of the Americas.","52":"WHO Region of the Americas.","53":"WHO Region of the Americas.","54":"WHO Region of the Americas.","55":"WHO Region of the Americas.","56":"WHO Region of the Americas.","57":"WHO Region of the Americas.","58":"WHO Region of the Americas.","59":"WHO Region of the Americas.","60":"WHO Region of the Americas.","61":"WHO Region of the Americas.","62":"WHO Region of the Americas.","63":"WHO Region of the Americas.","64":"WHO Region of the Americas.","65":"WHO Region of the Americas.","66":"WHO Region of the Americas.","67":"WHO Region of the Americas.","68":"WHO Region of the Americas.","69":"WHO Region of the Americas.","70":"WHO Region of the Americas.","71":"WHO Region of the Americas.","72":"WHO Region of the Americas.","73":"WHO Region of the Americas.","74":"WHO Region of the Americas.","75":"WHO Region of the Americas.","76":"WHO Region of the Americas.","77":"WHO Region of the Americas.","78":"WHO Region of the Americas.","79":"WHO Region of the Americas.","80":"WHO European Region.","81":"WHO European Region.","82":"WHO European Region.","83":"WHO European Region.","84":"WHO European Region.","85":"WHO European Region.","86":"WHO European Region.","87":"WHO European Region.","88":"WHO European Region.","89":"WHO European Region.","90":"WHO European Region.","91":"WHO European Region.","92":"WHO European Region.","93":"WHO European Region.","94":"WHO European Region.","95":"WHO European Region.","96":"WHO European Region.","97":"WHO European Region.","98":"WHO European Region.","99":"WHO European Region.","100":"WHO European Region.","101":"WHO European Region.","102":"WHO European Region.","103":"WHO European Region.","104":"WHO European Region.","105":"WHO European Region.","106":"WHO European Region.","107":"WHO European Region.","108":"WHO European Region.","109":"WHO European Region.","110":"WHO European Region.","111":"WHO European Region.","112":"WHO European Region.","113":"WHO European Region.","114":"WHO European Region.","115":"WHO European Region.","116":"WHO European Region.","117":"WHO European Region.","118":"WHO European Region.","119":"WHO European Region.","120":"WHO European Region.","121":"WHO European Region.","122":"WHO European Region.","123":"WHO European Region.","124":"WHO European Region.","125":"WHO European Region.","126":"WHO European Region.","127":"WHO European Region.","128":"WHO European Region.","129":"WHO European Region.","130":"WHO Eastern Mediterranean Region","131":"WHO Eastern Mediterranean Region","132":"WHO Eastern Mediterranean Region","133":"WHO Eastern Mediterranean Region","134":"WHO Eastern Mediterranean Region","135":"WHO Eastern Mediterranean Region","136":"WHO Eastern Mediterranean Region","137":"WHO Eastern Mediterranean Region","138":"WHO Eastern Mediterranean Region","139":"WHO Eastern Mediterranean Region","140":"WHO South-East Asia Region.","141":"WHO South-East Asia Region.","142":"WHO South-East Asia Region.","143":"WHO South-East Asia Region.","144":"WHO South-East Asia Region.","145":"WHO South-East Asia Region.","146":"WHO South-East Asia Region.","147":"WHO South-East Asia Region.","148":"WHO South-East Asia Region.","149":"WHO South-East Asia Region.","150":"WHO South-East Asia Region.","151":"WHO Western Pacific Region.","152":"WHO Western Pacific Region.","153":"WHO Western Pacific Region.","154":"WHO Western Pacific Region.","155":"WHO Western Pacific Region.","156":"WHO Western Pacific Region.","157":"WHO Western Pacific Region.","158":"WHO Western Pacific Region.","159":"WHO Western Pacific Region.","160":"WHO Western Pacific Region.","161":"WHO Western Pacific Region.","162":"WHO Western Pacific Region.","163":"WHO Western Pacific Region.","164":"WHO Western Pacific Region.","165":"WHO Western Pacific Region.","166":"WHO Western Pacific Region.","167":"WHO Western Pacific Region.","168":"WHO Western Pacific Region.","169":"WHO Western Pacific Region.","170":"WHO Western Pacific Region.","171":"WHO South-East Asia Region."}};

    // --- Konfigurasi Chart ---
    const barHeight = 30; // PERMINTAAN 2: Perbesar ukuran bar
    const visibleBars = 10; 
    const marginTop = 80;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 200; // Mungkin perlu disesuaikan jika nama negara panjang dan bar lebih besar
    const designWidth = 880;

    const colorMap = {
        "Very low": "#EEEEEE", "Low": "#D84040",
        "Medium": "#8E1616", "High": "#1D1616"
    };
    const colorMapKeys = Object.keys(colorMap);

    const metricOptions = {
        "Number of suicides, c 2021": "Number of Suicides (2021)",
        "Crude suicide rate, d 2021": "Crude Suicide Rate (per 100k, 2021)"
    };
    const metricKeys = Object.keys(metricOptions);
    let currentMetricKey = metricKeys[0]; 
    let currentOrganization = "All"; 

    let processedFullData = [];
    let allOrganizations = [];
    let svgChart, xScale, yScale, tooltipElement;

    // --- Struktur Internal Chart ---
    const filterContainer = chartMainContainer.append("div").attr("id", "filterContainer");
    const metricFilterGroup = filterContainer.append("div").attr("class", "filter-group");
    metricFilterGroup.append("span").attr("class", "filter-group-label").text("Metric:");
    
    const orgFilterGroup = filterContainer.append("div").attr("class", "filter-group");
    orgFilterGroup.append("span").attr("class", "filter-group-label").text("Organization:");

    const scrollWrapper = chartMainContainer.append("div").attr("class", "chart-scroll-wrapper-hbc");
    const svgContainer = scrollWrapper.append("div").attr("id", "chart-svg-container-hbc");
    // PERMINTAAN 1: Legend di dalam chart (scrollable area)
    const legendFixedContainer = scrollWrapper.append("div").attr("id", "legendContainer-hbc"); 
    tooltipElement = chartMainContainer.append("div").attr("class", "tooltip-hbc");


    function processChartData() {
        const indices = Object.keys(rawData.Country);
        processedFullData = indices.map(index => ({
            country: rawData.Country[index],
            dataQuality: rawData["Data quality a"][index],
            value: rawData[currentMetricKey][index], 
            organization: rawData.Organization[index]
        })).filter(d => d.value !== null && d.value > 0 && !isNaN(parseFloat(d.value)));

        processedFullData.sort((a, b) => b.value - a.value); 

        if (allOrganizations.length === 0) { 
            allOrganizations = ["All", ...new Set(
                indices.map(index => rawData.Organization[index]).sort()
            )];
        }
    }

    function updateDynamicChart(dataToPlot) {
        if (!svgChart) return;
        svgChart.selectAll("*").remove();

        const numBars = dataToPlot.length;

        const scrollViewportActualHeight = Math.min(numBars, visibleBars) * barHeight + marginTop + marginBottom;
        const svgActualHeight = numBars * barHeight + marginTop + marginBottom;
        
        const finalScrollViewportHeight = numBars > 0 ? scrollViewportActualHeight : (visibleBars * barHeight / 2) + marginTop + marginBottom;
        const finalSvgHeight = numBars > 0 ? svgActualHeight : (visibleBars * barHeight / 2) + marginTop + marginBottom;

        scrollWrapper.style("height", finalScrollViewportHeight + 'px');
        svgChart.attr("height", finalSvgHeight)
               .attr("viewBox", `0 0 ${designWidth} ${finalSvgHeight}`);

        xScale.domain([0, d3.max(dataToPlot, d => d.value) || 10]); 
        yScale.domain(dataToPlot.map(d => d.country))
             .rangeRound([marginTop, finalSvgHeight - marginBottom]);

        svgChart.append("text")
            .attr("class", "chart-title-hbc")
            .attr("x", marginLeft + (designWidth - marginLeft - marginRight) / 2)
            .attr("y", 30)
            .text(metricOptions[currentMetricKey]); 

        // Penyesuaian posisi legend di dalam scrollWrapper
        if (numBars === 0) {
            svgChart.append("text")
                .attr("class", "no-data-message-hbc")
                .attr("x", designWidth / 2)
                .attr("y", finalSvgHeight / 2)
                .text("No data available for this selection.");
            legendFixedContainer.style("bottom", "10px").style("top", "auto").style("right", "10px");
            return;
        }
        
        // Jika viewport sangat pendek, pindahkan legend ke atas kanan agar tidak menutupi data.
        // Threshold (1.5) mungkin perlu disesuaikan tergantung barHeight dan visibleBars.
        if (finalScrollViewportHeight < (visibleBars * barHeight + marginTop + marginBottom) / 1.8) { 
             legendFixedContainer.style("bottom", "auto").style("top", "10px"); // Atas kanan viewport scroll
        } else {
             legendFixedContainer.style("top", "auto").style("bottom", "10px"); // Bawah kanan viewport scroll
        }


        const bars = svgChart.append("g")
          .selectAll("rect")
          .data(dataToPlot)
          .join("rect")
            .attr("fill", d => colorMap[d.dataQuality] || "gray")
            .attr("x", xScale(0))
            .attr("y", d => yScale(d.country))
            .attr("width", d => xScale(d.value) - xScale(0)) 
            .attr("height", yScale.bandwidth())
            .style("cursor", "pointer");

        svgChart.append("g")
          .selectAll("text.bar-label-hbc")
          .data(dataToPlot)
          .join("text")
            .attr("class", "bar-label-hbc")
            .attr("y", d => yScale(d.country) + yScale.bandwidth() / 2)
            .attr("dy", "0.35em")
            .text(d => d.value.toLocaleString()) 
            .each(function(d) {
                const barWidthVal = xScale(d.value) - xScale(0); 
                const textNode = d3.select(this);
                if (barWidthVal < 60) { // Sesuaikan threshold ini jika perlu
                    textNode.attr("x", xScale(d.value) + 5).attr("text-anchor", "start").attr("fill", "black");
                } else {
                    textNode.attr("x", xScale(d.value) - 5).attr("text-anchor", "end").attr("fill", d.dataQuality === "Very low" ? "black" : "white");
                }
            });

        const xAxisGroup = svgChart.append("g")
            .attr("transform", `translate(0,${marginTop})`)
            .call(d3.axisTop(xScale).ticks(designWidth / 120 > 1 ? designWidth / 120 : 5).tickFormat(d3.format(",")))
            .call(g => g.select(".domain").remove());
        xAxisGroup.selectAll(".tick line").clone()
            .attr("y2", finalSvgHeight - marginTop - marginBottom)
            .attr("stroke-opacity", 0.1);
        xAxisGroup.append("text")
            .attr("class", "axis-label-hbc")
            .attr("x", marginLeft + (designWidth - marginLeft - marginRight) / 2)
            .attr("y", - (marginTop / 2) + 10)
            .attr("fill", "currentColor").attr("text-anchor", "middle")
            .text(metricOptions[currentMetricKey]); 

        svgChart.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(yScale).tickSizeOuter(0))
            .call(g => g.selectAll(".tick text").style("font-size", "10px")); // Ukuran font nama negara
        svgChart.append("text")
            .attr("class", "axis-label-hbc")
            .attr("transform", "rotate(-90)")
            .attr("x", -(marginTop + (finalSvgHeight - marginTop - marginBottom) / 2))
            .attr("y", 15) // Sesuaikan jika marginLeft berubah
            .attr("fill", "currentColor").attr("text-anchor", "middle")
            .text("Country");

        bars.on("mouseover", function(event, d) {
                d3.select(this).style("opacity", 0.7);
                tooltipElement.style("opacity", 1);
            })
            .on("mousemove", function(event, d) {
                let valueLabel = currentMetricKey.includes("Rate") ? "Rate" : "Suicides";
                tooltipElement.html(`<strong>${d.country}</strong><br/>
                              Organization: ${d.organization}<br/>
                              ${valueLabel}: ${d.value.toLocaleString()}<br/>
                              Data Quality: ${d.dataQuality}`)
                       .style("left", (event.pageX + 15) + "px") 
                       .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function(event, d) {
                d3.select(this).style("opacity", 1);
                tooltipElement.style("opacity", 0);
            });
    }
    
    function filterAndRenderChart() {
        let filteredData = processedFullData;
        if (currentOrganization !== "All") {
            filteredData = processedFullData.filter(d => d.organization === currentOrganization);
        }
        updateDynamicChart(filteredData);
    }

    function initializeChart() {
        processChartData(); 

        xScale = d3.scaleLinear().range([marginLeft, designWidth - marginRight]);
        yScale = d3.scaleBand().padding(0.1); // Padding antar bar, mungkin perlu disesuaikan

        svgChart = svgContainer.append("svg")
            .attr("width", "100%")
            .attr("preserveAspectRatio", "xMinYMin meet");

        // Setup Metric Filters
        metricKeys.forEach(key => {
            metricFilterGroup.append("button")
                .text(metricOptions[key])
                .attr("data-metric", key)
                .classed("active", key === currentMetricKey)
                .on("click", function() {
                    currentMetricKey = d3.select(this).attr("data-metric");
                    metricFilterGroup.selectAll("button").classed("active", false);
                    d3.select(this).classed("active", true);
                    processChartData(); 
                    filterAndRenderChart(); 
                });
        });
        
        // Setup Organization Filters
        allOrganizations.forEach(org => {
            orgFilterGroup.append("button")
                .text(org)
                .attr("data-org", org)
                .classed("active", org === currentOrganization)
                .on("click", function() {
                    currentOrganization = d3.select(this).attr("data-org");
                    orgFilterGroup.selectAll("button").classed("active", false);
                    d3.select(this).classed("active", true);
                    filterAndRenderChart(); 
                });
        });

        // Setup Legend (sekarang di dalam scrollWrapper)
        legendFixedContainer.append("h5").text("Data Quality");
        colorMapKeys.forEach((key) => {
            const legendItem = legendFixedContainer.append("div")
                .attr("class", "legend-item-div-hbc");
            legendItem.append("div")
                .attr("class", "legend-color-swatch-hbc")
                .style("background-color", colorMap[key]);
            legendItem.append("span").text(key);
        });

        filterAndRenderChart(); 
    }

    initializeChart();
});
</script>

## Referensi 

- <p style="text-indent:0px;">
  Nevid, J. S. (2012). <strong>Abnormal Psychology: In a Changing World</strong>. <i>Pearson Education</i>.
</p>