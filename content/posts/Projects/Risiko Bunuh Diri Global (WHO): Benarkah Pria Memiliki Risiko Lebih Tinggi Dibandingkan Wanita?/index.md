+++
title = "Risiko Bunuh Diri Global (WHO): Mengukur Kesenjangan Risiko Bunuh Diri Gender"
date = 2025-05-25T00:37:00+00:00
draft = false
socialshare = true
description = "Data WHO menunjukkan pria lebih berisiko bunuh diri, tapi itu bukan seluruh cerita. Visualisasi data mengungkap di mana kesenjangan gender ini paling ekstrem dan kelompok pria mana yang paling butuh prioritas."
image = "3.webp"
imageBig= "3.webp"
categories= ["Projects"]
tags = ["WHO"]
authors= ["Daddy Ananta"]
avatar="/images/Analysis_and_Visualization/profil.jpeg"
url = "/posts/projects/risiko-bunuh-diri-global-who-kelompok-usia-mana-yang-paling-membutuhkan-perhatian/"
aliases = [
    "/posts/analysis--visualization/risiko-bunuh-diri-global-who-kelompok-usia-mana-yang-paling-membutuhkan-perhatian/"
]
+++
Konstruksi sosial yang menuntut pria untuk "selalu kuat" berdampak tragis: data WHO secara konsisten menunjukkan pria memiliki tingkat bunuh diri yang jauh lebih tinggi. Namun, sebagai masyarakat, kita perlu bergerak melampaui pernyataan umum ini untuk memahami di mana masalah ini paling parah.

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
    <li style="margin-bottom: 12px; font-weight: bold; color: #A71C1C; padding-left: 10px; border-left: 3px solid #A71C1C;">Benarkah Pria Memiliki Risiko Lebih Tinggi Dibandingkan Wanita?</li>
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who-kelompok-usia-mana-yang-paling-membutuhkan-perhatian/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Kelompok Usia Mana yang Paling Membutuhkan Perhatian?</a>
    </li>
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who-apakah-negara-berpendapatan-rendah-lebih-rentan-bunuh-diri/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Apakah Negara Berpendapatan Rendah Lebih Rentan Bunuh Diri?</a>
    </li>
  </ul>
</div>

## Prioritas Tersembunyi dalam Kesenjangan

Sekadar menyatakan "pria lebih berisiko" adalah penyederhanaan. Visualisasi data memungkinkan kita melihat lebih dalam: **di mana kesenjangan ini paling ekstrem, dan kelompok pria mana yang paling butuh prioritas?**

Visualisasi *dumbbell plot* di bawah ini tidak hanya membandingkan pria (biru) dan wanita (merah), tetapi juga menyoroti **magnitudo kesenjangan** melalui panjang garis penghubung. Semakin panjang garisnya, semakin besar jurang pengalaman antara pria dan wanita di negara tersebut. Anda bisa melihat bagaimana negara-negara di Eropa Timur seperti Rusia, Belarusia, dan Lithuania menunjukkan kesenjangan yang sangat lebar. Ini menandakan adanya tekanan sosial spesifik gender yang sangat kuat dan menjadi prioritas intervensi yang jelas: pria di wilayah ini menghadapi badai sempurna antara ekspektasi maskulinitas yang kaku dan kemungkinan kurangnya akses ke dukungan yang sesuai.

<div style="background-color:#f9f9f9; border: 1px solid #d3d3d3; padding: 15px; font-family: Arial, sans-serif;margin-bottom: 20px;">
<p style="font-style: italic;">"Akar masalahnya seringkali adalah keengganan pria untuk mencari bantuan."</p>
<p style="text-align: right; font-size: 0.9em; margin-top: 10px; color: #555;">- Jeffrey S. Nevid, <span style="font-weight: bold;">Abnormal Psychology: In a Changing World</span></p>
</div>

Kutipan di atas terasa sangat personal karena ini bukan kegagalan individu, melainkan cerminan dari sistem yang belum menyediakan jalur bantuan yang tepat. Inilah peluang bagi para inovator di industri kesehatan.


## Visualisasi Data

<style>
/* CSS Umum untuk Kontainer D3 */
.d3-chart {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    overflow: hidden; /* Mencegah konten meluap secara tidak terkontrol */
}

/* CSS untuk Dumbbell Plot */
#hugo-dumbbell-plot { /* Kontainer utama yang di-target skrip */
    /* Tidak perlu style khusus di sini, akan diisi skrip */
}

#hugo-dumbbell-plot #filterContainer-dbc { /* ID unik untuk filter dumbbell plot */
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

#hugo-dumbbell-plot .filter-group-dbc {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    align-items: center; /* Agar label dan tombol sejajar */
    width: 100%;
}
#hugo-dumbbell-plot .filter-group-label-dbc {
    font-size: 13px;
    font-weight: bold;
    margin-right: 10px;
    white-space: nowrap;
}

#hugo-dumbbell-plot #filterContainer-dbc button {
    padding: 6px 12px;
    font-size: 12px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
}
#hugo-dumbbell-plot #filterContainer-dbc button:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}
#hugo-dumbbell-plot #filterContainer-dbc button.active {
    background-color: #004085;
    border-color: #00376e;
    font-weight: bold;
}

#hugo-dumbbell-plot .chart-scroll-wrapper-dbc { /* ID/Class unik */
    position: relative; 
    width: 100%; 
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #e0e0e0;
    /* Tinggi diatur di JS */
}
#hugo-dumbbell-plot #chart-svg-container-dbc { /* ID/Class unik */
    width: 100%;
}

#hugo-dumbbell-plot .dumbbell-line-dbc { /* Class unik untuk garis dumbbell */
    stroke: #cccccc; /* Warna garis penghubung */
    stroke-width: 2px;
}

#hugo-dumbbell-plot .dumbbell-circle-dbc { /* Class unik untuk lingkaran dumbbell */
    stroke: #333;
    stroke-width: 1px;
    cursor: pointer;
}

#hugo-dumbbell-plot .axis-label-dbc { /* Class unik */
    font-size: 12px;
    font-weight: bold;
}
#hugo-dumbbell-plot .chart-title-dbc { /* Class unik */
    font-size: 16px;
    font-weight: bold;
    text-anchor: middle;
}
#hugo-dumbbell-plot .tooltip-dbc { /* Class unik */
    position: absolute;
    text-align: left;
    padding: 8px;
    font: 12px sans-serif;
    background: rgba(240, 240, 240, 0.95); /* Sedikit transparan */
    border: 1px solid #ccc;
    border-radius: 8px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    white-space: pre-wrap; /* Agar multiline dari \n di HTML bekerja */
    z-index: 1070; 
}
#hugo-dumbbell-plot #legendContainer-dbc { /* ID unik */
    position: absolute; 
    bottom: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 10px;
    z-index: 10; 
}
#hugo-dumbbell-plot #legendContainer-dbc h5 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: bold;
    text-align: left;
}
#hugo-dumbbell-plot .legend-item-div-dbc { /* Class unik */
    display: flex;
    align-items: center;
    margin-bottom: 4px;
}
#hugo-dumbbell-plot .legend-item-div-dbc:last-child {
    margin-bottom: 0;
}
#hugo-dumbbell-plot .legend-color-swatch-dbc { /* Class unik */
    width: 10px; /* Lingkaran kecil untuk legend */
    height: 10px;
    border-radius: 50%; /* Membuatnya jadi lingkaran */
    margin-right: 5px;
    border: 1px solid #bbb;
}
#hugo-dumbbell-plot .no-data-message-dbc { /* Class unik */
    text-anchor: middle;
    font-size: 16px;
    fill: #777;
}
</style>

<div class="d3-chart">
  <div id="hugo-dumbbell-plot">
    </div>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const chartMainContainerIdDbc = "#hugo-dumbbell-plot";
    const chartMainContainerDbc = d3.select(chartMainContainerIdDbc);

    if (chartMainContainerDbc.empty()) {
        console.error(`Kontainer utama chart "${chartMainContainerIdDbc}" tidak ditemukan.`);
        return;
    }

    // --- Data Mentah (Gunakan JSON yang Anda berikan di paling atas) ---
    const dumbbellRawDataInput = {"Country":{"0":"Algeria","1":"Algeria","2":"Angola","3":"Angola","4":"Benin","5":"Benin","6":"Botswana","7":"Botswana","8":"Burkina Faso","9":"Burkina Faso","10":"Burundi","11":"Burundi","12":"Cabo Verde","13":"Cabo Verde","14":"Cameroon","15":"Cameroon","16":"Central African Republic","17":"Central African Republic","18":"Chad","19":"Chad","20":"Comoros","21":"Comoros","22":"Congo","23":"Congo","24":"C\u00f4te d'Ivoire","25":"C\u00f4te d'Ivoire","26":"Democratic Republic of the Congo","27":"Democratic Republic of the Congo","28":"Equatorial Guinea","29":"Equatorial Guinea","30":"Eritrea","31":"Eritrea","32":"Eswatini","33":"Eswatini","34":"Ethiopia","35":"Ethiopia","36":"Gabon","37":"Gabon","38":"Gambia","39":"Gambia","40":"Ghana","41":"Ghana","42":"Guinea","43":"Guinea","44":"Guinea-Bissau","45":"Guinea-Bissau","46":"Kenya","47":"Kenya","48":"Lesotho","49":"Lesotho","50":"Liberia","51":"Liberia","52":"Madagascar","53":"Madagascar","54":"Malawi","55":"Malawi","56":"Mali","57":"Mali","58":"Mauritania","59":"Mauritania","60":"Mauritius","61":"Mauritius","62":"Mozambique","63":"Mozambique","64":"Namibia","65":"Namibia","66":"Niger","67":"Niger","68":"Nigeria","69":"Nigeria","70":"Rwanda","71":"Rwanda","72":"Sao Tome and Principe","73":"Sao Tome and Principe","74":"Senegal","75":"Senegal","76":"Seychelles","77":"Seychelles","78":"Sierra Leone","79":"Sierra Leone","80":"South Africa","81":"South Africa","82":"South Sudan","83":"South Sudan","84":"Togo","85":"Togo","86":"Uganda","87":"Uganda","88":"United Republic of Tanzania","89":"United Republic of Tanzania","90":"Zambia","91":"Zambia","92":"Zimbabwe","93":"Zimbabwe","94":"Antigua and Barbuda","95":"Antigua and Barbuda","96":"Argentina","97":"Argentina","98":"Bahamas","99":"Bahamas","100":"Barbados","101":"Barbados","102":"Belize","103":"Belize","104":"Bolivia","105":"Bolivia","106":"Brazil","107":"Brazil","108":"Canada","109":"Canada","110":"Chile","111":"Chile","112":"Colombia","113":"Colombia","114":"Costa Rica","115":"Costa Rica","116":"Cuba","117":"Cuba","118":"Dominican Republic","119":"Dominican Republic","120":"Ecuador","121":"Ecuador","122":"El Salvador","123":"El Salvador","124":"Grenada","125":"Grenada","126":"Guatemala","127":"Guatemala","128":"Guyana","129":"Guyana","130":"Haiti","131":"Haiti","132":"Honduras","133":"Males","134":"Jamaica","135":"Males","136":"Mexico","137":"Mexico","138":"Nicaragua","139":"Males","140":"Panama","141":"Panama","142":"Paraguay","143":"Males","144":"Peru","145":"Peru","146":"Saint Lucia","147":"Males","148":"Saint Vincent and the Grenadines","149":"Saint Vincent and the Grenadines","150":"Suriname","151":"Males","152":"Trinidad and Tobago","153":"Males","154":"United States of America","155":"United States of America","156":"Uruguay","157":"Uruguay","158":"Venezuela (Bolivarian Republic of)","159":"Venezuela (Bolivarian Republic of)","160":"Albania","161":"Albania","162":"Armenia","163":"Armenia","164":"Austria","165":"Austria","166":"Azerbaijan","167":"Azerbaijan","168":"Belarus","169":"Belarus","170":"Belgium","171":"Belgium","172":"Bosnia and Herzegovina","173":"Bosnia and Herzegovina","174":"Bulgaria","175":"Bulgaria","176":"Croatia","177":"Croatia","178":"Cyprus","179":"Cyprus","180":"Czechia","181":"Czechia","182":"Denmark","183":"Denmark","184":"Estonia","185":"Estonia","186":"Finland","187":"Finland","188":"France","189":"France","190":"Georgia","191":"Georgia","192":"Germany","193":"Germany","194":"Greece","195":"Greece","196":"Hungary","197":"Hungary","198":"Iceland","199":"Iceland","200":"Ireland","201":"Ireland","202":"Israel","203":"Israel","204":"Italy","205":"Italy","206":"Kazakhstan","207":"Kazakhstan","208":"Kyrgyzstan","209":"Kyrgyzstan","210":"Latvia","211":"Latvia","212":"Lithuania","213":"Lithuania","214":"Luxembourg","215":"Luxembourg","216":"Malta","217":"Malta","218":"Montenegro","219":"Montenegro","220":"Netherlands (Kingdom of the)","221":"Netherlands (Kingdom of the)","222":"North Macedonia","223":"North Macedonia","224":"Norway","225":"Norway","226":"Poland","227":"Poland","228":"Portugal","229":"Portugal","230":"Republic of Moldova","231":"Republic of Moldova","232":"Romania","233":"Romania","234":"Russian Federation","235":"Russian Federation","236":"Serbia","237":"Serbia","238":"Slovakia","239":"Slovakia","240":"Slovenia","241":"Slovenia","242":"Spain","243":"Spain","244":"Sweden","245":"Sweden","246":"Switzerland","247":"Switzerland","248":"Tajikistan","249":"Tajikistan","250":"T\u00fcrkiye","251":"T\u00fcrkiye","252":"Turkmenistan","253":"Turkmenistan","254":"Ukraine","255":"Ukraine","256":"United Kingdom of Great Britain and Northern Ireland","257":"United Kingdom of Great Britain and Northern Ireland","258":"Uzbekistan","259":"Uzbekistan","260":"Afghanistan","261":"Afghanistan","262":"Bahrain","263":"Bahrain","264":"Djibouti","265":"Djibouti","266":"Egypt","267":"Egypt","268":"Iran (Islamic Republic of)","269":"Iran (Islamic Republic of)","270":"Iraq","271":"Iraq","272":"Syrian Arab Republic","273":"Syrian Arab Republic","274":"Tunisia","275":"Tunisia","276":"United Arab Emirates","277":"United Arab Emirates","278":"Yemen","279":"Yemen","280":"Bangladesh","281":"Bangladesh","282":"Bhutan","283":"Bhutan","284":"Democratic People's Republic of Korea","285":"Democratic People's Republic of Korea","286":"India","287":"India","288":"Indonesia","289":"Indonesia","290":"Maldives","291":"Maldives","292":"Myanmar","293":"Myanmar","294":"Nepal","295":"Nepal","296":"Sri Lanka","297":"Sri Lanka","298":"Thailand","299":"Thailand","300":"Timor-Leste","301":"Australia","302":"Australia","303":"Brunei Darussalam","304":"Brunei Darussalam","305":"Cambodia","306":"Cambodia","307":"China","308":"China","309":"Fiji","310":"Fiji","311":"Japan","312":"Japan","313":"Kiribati","314":"Kiribati","315":"Lao People's Democrati","316":"Lao People's Democrati","317":"Malaysia","318":"Malaysia","319":"Micronesia (Federated States of)","320":"Micronesia (Federated States of)","321":"Mongolia","322":"Mongolia","323":"New Zealand","324":"New Zealand","325":"Papua New Guinea","326":"Papua New Guinea","327":"Philippines","328":"Philippines","329":"Republic of Korea","330":"Republic of Korea","331":"Samoa","332":"Samoa","333":"Singapore","334":"Singapore","335":"Solomon Islands","336":"Solomon Islands","337":"Tonga","338":"Tonga","339":"Vanuatu","340":"Vanuatu","341":"Viet Nam","342":"Viet Nam","343":"Timor-Leste"},"Sex":{"0":"Females","1":"Males","2":"Females","3":"Males","4":"Females","5":"Males","6":"Females","7":"Males","8":"Females","9":"Males","10":"Females","11":"Males","12":"Females","13":"Males","14":"Females","15":"Males","16":"Females","17":"Males","18":"Females","19":"Males","20":"Females","21":"Males","22":"Females","23":"Males","24":"Females","25":"Males","26":"Females","27":"Males","28":"Females","29":"Males","30":"Females","31":"Males","32":"Females","33":"Males","34":"Females","35":"Males","36":"Females","37":"Males","38":"Females","39":"Males","40":"Females","41":"Males","42":"Females","43":"Males","44":"Females","45":"Males","46":"Females","47":"Males","48":"Females","49":"Males","50":"Females","51":"Males","52":"Females","53":"Males","54":"Females","55":"Males","56":"Females","57":"Males","58":"Females","59":"Males","60":"Females","61":"Males","62":"Females","63":"Males","64":"Females","65":"Males","66":"Females","67":"Males","68":"Females","69":"Males","70":"Females","71":"Males","72":"Females","73":"Males","74":"Females","75":"Males","76":"Females","77":"Males","78":"Females","79":"Males","80":"Females","81":"Males","82":"Females","83":"Males","84":"Females","85":"Males","86":"Females","87":"Males","88":"Females","89":"Males","90":"Females","91":"Males","92":"Females","93":"Males","94":"Females","95":"Males","96":"Females","97":"Males","98":"Females","99":"Males","100":"Females","101":"Males","102":"Females","103":"Males","104":"Females","105":"Males","106":"Females","107":"Males","108":"Females","109":"Males","110":"Females","111":"Males","112":"Females","113":"Males","114":"Females","115":"Males","116":"Females","117":"Males","118":"Females","119":"Males","120":"Females","121":"Males","122":"Females","123":"Males","124":"Females","125":"Males","126":"Females","127":"Males","128":"Females","129":"Males","130":"Females","131":"Males","132":"Females","133":"Males","134":"Females","135":"Males","136":"Females","137":"Males","138":"Females","139":"Males","140":"Females","141":"Males","142":"Females","143":"Males","144":"Females","145":"Males","146":"Females","147":"Males","148":"Females","149":"Males","150":"Females","151":"Males","152":"Females","153":"Males","154":"Females","155":"Males","156":"Females","157":"Males","158":"Females","159":"Males","160":"Females","161":"Males","162":"Females","163":"Males","164":"Females","165":"Males","166":"Females","167":"Males","168":"Females","169":"Males","170":"Females","171":"Males","172":"Females","173":"Males","174":"Females","175":"Males","176":"Females","177":"Males","178":"Females","179":"Males","180":"Females","181":"Males","182":"Females","183":"Males","184":"Females","185":"Males","186":"Females","187":"Males","188":"Females","189":"Males","190":"Females","191":"Males","192":"Females","193":"Males","194":"Females","195":"Males","196":"Females","197":"Males","198":"Females","199":"Males","200":"Females","201":"Males","202":"Females","203":"Males","204":"Females","205":"Males","206":"Females","207":"Males","208":"Females","209":"Males","210":"Females","211":"Males","212":"Females","213":"Males","214":"Females","215":"Males","216":"Females","217":"Males","218":"Females","219":"Males","220":"Females","221":"Males","222":"Females","223":"Males","224":"Females","225":"Males","226":"Females","227":"Males","228":"Females","229":"Males","230":"Females","231":"Males","232":"Females","233":"Males","234":"Females","235":"Males","236":"Females","237":"Males","238":"Females","239":"Males","240":"Females","241":"Males","242":"Females","243":"Males","244":"Females","245":"Males","246":"Females","247":"Males","248":"Females","249":"Males","250":"Females","251":"Males","252":"Females","253":"Males","254":"Females","255":"Males","256":"Females","257":"Males","258":"Females","259":"Males","260":"Females","261":"Males","262":"Females","263":"Males","264":"Females","265":"Males","266":"Females","267":"Males","268":"Females","269":"Males","270":"Females","271":"Males","272":"Females","273":"Males","274":"Females","275":"Males","276":"Females","277":"Males","278":"Females","279":"Males","280":"Females","281":"Males","282":"Females","283":"Males","284":"Females","285":"Males","286":"Females","287":"Males","288":"Females","289":"Males","290":"Females","291":"Males","292":"Females","293":"Males","294":"Females","295":"Males","296":"Females","297":"Males","298":"Females","299":"Males","300":"Males","301":"Females","302":"Males","303":"Females","304":"Males","305":"Females","306":"Males","307":"Females","308":"Males","309":"Females","310":"Males","311":"Females","312":"Males","313":"Females","314":"Males","315":"Females","316":"Males","317":"Females","318":"Males","319":"Females","320":"Males","321":"Females","322":"Males","323":"Females","324":"Males","325":"Females","326":"Males","327":"Females","328":"Males","329":"Females","330":"Males","331":"Females","332":"Males","333":"Females","334":"Males","335":"Females","336":"Males","337":"Females","338":"Males","339":"Females","340":"Males","341":"Females","342":"Males","343":"Females"},"Number of suicides, c 2021":{"0":292,"1":684,"2":672,"3":2130,"4":207,"5":749,"6":66,"7":134,"8":443,"9":1426,"10":254,"11":738,"12":11,"13":66,"14":477,"15":1809,"16":104,"17":366,"18":269,"19":660,"20":18,"21":31,"22":98,"23":298,"24":376,"25":1815,"26":1953,"27":6742,"28":29,"29":95,"30":122,"31":321,"32":62,"33":266,"34":1864,"35":5547,"36":28,"37":145,"38":40,"39":84,"40":381,"41":1348,"42":246,"43":415,"44":40,"45":118,"46":666,"47":1772,"48":193,"49":455,"50":103,"51":210,"52":515,"53":1294,"54":299,"55":1219,"56":309,"57":621,"58":42,"59":87,"60":19,"61":115,"62":974,"63":2389,"64":51,"65":190,"66":357,"67":740,"68":1658,"69":9254,"70":327,"71":832,"72":0,"73":1,"74":252,"75":912,"76":1,"77":4,"78":182,"79":315,"80":3145,"81":10567,"82":213,"83":645,"84":175,"85":654,"86":525,"87":1999,"88":868,"89":2339,"90":305,"91":1091,"92":971,"93":1769,"94":1,"95":1,"96":770,"97":2823,"98":2,"99":11,"100":2,"101":8,"102":3,"103":14,"104":140,"105":361,"106":4141,"107":11766,"108":919,"109":2712,"110":306,"111":1189,"112":540,"113":1994,"114":71,"115":337,"116":243,"117":1291,"118":83,"119":384,"120":233,"121":1102,"122":103,"123":374,"124":0,"125":1,"126":249,"127":620,"128":43,"129":159,"130":291,"131":598,"132":49,"133":257,"134":6,"135":42,"136":1706,"137":7165,"138":57,"139":225,"140":21,"141":121,"142":156,"143":268,"144":134,"145":376,"146":1,"147":8,"148":0,"149":0,"150":43,"151":94,"152":35,"153":164,"154":10938,"155":42224,"156":184,"157":657,"158":288,"159":2148,"160":33,"161":45,"162":14,"163":55,"164":262,"165":1040,"166":43,"167":117,"168":250,"169":1194,"170":627,"171":1497,"172":80,"173":211,"174":149,"175":505,"176":141,"177":474,"178":14,"179":26,"180":303,"181":1100,"182":186,"183":427,"184":40,"185":159,"186":246,"187":562,"188":3242,"189":7715,"190":26,"191":167,"192":3213,"193":7587,"194":89,"195":407,"196":378,"197":1219,"198":17,"199":27,"200":116,"201":313,"202":110,"203":280,"204":1108,"205":3068,"206":540,"207":2343,"208":108,"209":355,"210":47,"211":240,"212":136,"213":483,"214":14,"215":39,"216":11,"217":23,"218":19,"219":50,"220":680,"221":1359,"222":36,"223":71,"224":199,"225":515,"226":753,"227":4446,"228":323,"229":874,"230":82,"231":346,"232":327,"233":1526,"234":6320,"235":24852,"236":287,"237":748,"238":84,"239":455,"240":81,"241":318,"242":1085,"243":3075,"244":450,"245":992,"246":403,"247":818,"248":68,"249":174,"250":473,"251":1859,"252":126,"253":358,"254":1625,"255":7773,"256":1581,"257":4880,"258":1029,"259":1828,"260":468,"261":970,"262":8,"263":62,"264":36,"265":53,"266":184,"267":515,"268":1007,"269":2596,"270":327,"271":954,"272":28,"273":98,"274":74,"275":148,"276":13,"277":154,"278":520,"279":1044,"280":1701,"281":3013,"282":12,"283":26,"284":1078,"285":1363,"286":76848,"287":100719,"288":1257,"289":2076,"290":1,"291":7,"292":274,"293":1271,"294":1091,"295":1898,"296":685,"297":2661,"298":2011,"299":9887,"300":33,"301":880,"302":2514,"303":1,"304":12,"305":237,"306":526,"307":52479,"308":75122,"309":25,"310":51,"311":7417,"312":14487,"313":3,"314":19,"315":96,"316":245,"317":355,"318":1584,"319":5,"320":17,"321":81,"322":537,"323":156,"324":453,"325":68,"326":114,"327":1000,"328":2946,"329":4399,"330":9874,"331":7,"332":18,"333":131,"334":318,"335":36,"336":114,"337":2,"338":3,"339":10,"340":38,"341":2191,"342":5031,"343":15},"Crude suicide rate, d 2021":{"0":1.3,"1":3.0,"2":3.9,"3":12.5,"4":3.1,"5":11.1,"6":5.5,"7":11.2,"8":4.0,"9":13.0,"10":3.9,"11":11.5,"12":4.2,"13":25.3,"14":3.5,"15":13.5,"16":4.0,"17":14.7,"18":3.0,"19":7.4,"20":4.5,"21":7.5,"22":3.3,"23":10.1,"24":2.6,"25":12.0,"26":3.9,"27":13.7,"28":3.5,"29":10.2,"30":7.2,"31":19.4,"32":10.1,"33":45.0,"34":3.1,"35":9.1,"36":2.4,"37":12.0,"38":3.1,"39":6.5,"40":2.3,"41":8.3,"42":3.5,"43":6.1,"44":3.9,"45":11.6,"46":2.5,"47":6.7,"48":16.6,"49":41.4,"50":3.9,"51":8.0,"52":3.5,"53":8.7,"54":2.9,"55":12.5,"56":2.8,"57":5.5,"58":1.7,"59":3.7,"60":3.0,"61":18.0,"62":6.0,"63":15.6,"64":3.6,"65":13.9,"66":3.0,"67":5.9,"68":1.5,"69":8.4,"70":4.8,"71":12.8,"72":0.4,"73":1.3,"74":3.0,"75":10.4,"76":1.7,"77":6.3,"78":4.5,"79":7.8,"80":9.9,"81":35.4,"82":3.9,"83":12.1,"84":4.0,"85":14.6,"86":2.3,"87":8.8,"88":2.7,"89":7.5,"90":3.1,"91":11.2,"92":11.7,"93":23.6,"94":1.3,"95":1.6,"96":3.4,"97":12.6,"98":0.8,"99":5.9,"100":1.0,"101":6.2,"102":1.5,"103":6.8,"104":2.4,"105":6.0,"106":3.9,"107":11.4,"108":4.7,"109":14.2,"110":3.1,"111":12.3,"112":2.1,"113":7.9,"114":2.8,"115":13.5,"116":4.3,"117":23.5,"118":1.5,"119":6.9,"120":2.6,"121":12.5,"122":3.2,"123":12.6,"124":0.7,"125":1.9,"126":2.8,"127":7.1,"128":10.4,"129":39.9,"130":5.1,"131":10.6,"132":0.9,"133":5.0,"134":0.4,"135":3.0,"136":2.6,"137":11.6,"138":1.7,"139":6.9,"140":1.0,"141":5.6,"142":4.7,"143":8.0,"144":0.8,"145":2.3,"146":1.3,"147":9.3,"148":0.0,"149":0.8,"150":14.0,"151":30.5,"152":4.6,"153":22.2,"154":6.5,"155":24.7,"156":10.5,"157":39.9,"158":2.0,"159":15.4,"160":2.3,"161":3.2,"162":1.0,"163":4.2,"164":5.7,"165":23.6,"166":0.8,"167":2.3,"168":5.1,"169":27.7,"170":10.7,"171":26.2,"172":4.7,"173":13.7,"174":4.2,"175":15.2,"176":6.9,"177":25.1,"178":2.2,"179":3.8,"180":5.7,"181":21.2,"182":6.3,"183":14.7,"184":5.8,"185":25.1,"186":8.8,"187":20.5,"188":9.5,"189":24.1,"190":1.3,"191":9.5,"192":7.6,"193":18.4,"194":1.6,"195":7.9,"196":7.5,"197":26.2,"198":9.3,"199":14.4,"200":4.6,"201":12.6,"202":2.4,"203":6.3,"204":3.6,"205":10.5,"206":5.3,"207":24.4,"208":3.1,"209":10.5,"210":4.6,"211":27.5,"212":9.2,"213":36.7,"214":4.3,"215":12.1,"216":4.4,"217":8.4,"218":6.0,"219":17.1,"220":7.6,"221":15.4,"222":3.8,"223":7.9,"224":7.4,"225":18.9,"226":3.8,"227":24.1,"228":5.9,"229":17.7,"230":5.0,"231":24.8,"232":3.3,"233":16.4,"234":8.1,"235":36.7,"236":8.0,"237":23.0,"238":3.0,"239":17.1,"240":7.7,"241":29.9,"242":4.5,"243":13.1,"244":8.7,"245":18.9,"246":9.2,"247":18.9,"248":1.3,"249":3.6,"250":1.1,"251":4.3,"252":3.5,"253":10.3,"254":6.9,"255":37.7,"256":4.6,"257":14.7,"258":6.1,"259":10.6,"260":2.4,"261":4.8,"262":1.5,"263":6.6,"264":6.4,"265":9.6,"266":0.3,"267":0.9,"268":2.3,"269":5.8,"270":1.5,"271":4.4,"272":0.3,"273":0.9,"274":1.2,"275":2.5,"276":0.4,"277":2.5,"278":2.8,"279":5.6,"280":2.0,"281":3.6,"282":3.4,"283":6.2,"284":8.1,"285":10.5,"286":11.2,"287":13.8,"288":0.9,"289":1.5,"290":0.3,"291":2.2,"292":1.0,"293":4.8,"294":7.2,"295":13.3,"296":5.9,"297":24.2,"298":5.5,"299":28.2,"300":4.8,"301":6.7,"302":19.5,"303":0.6,"304":5.2,"305":2.7,"306":6.3,"307":7.5,"308":10.3,"309":5.3,"310":11.2,"311":11.5,"312":23.6,"313":4.8,"314":31.0,"315":2.6,"316":6.5,"317":2.2,"318":8.8,"319":8.6,"320":31.1,"321":4.8,"322":32.2,"323":6.1,"324":17.9,"325":1.4,"326":2.2,"327":1.8,"328":5.2,"329":16.9,"330":38.2,"331":7.0,"332":17.0,"333":4.9,"334":11.1,"335":9.6,"336":29.2,"337":3.5,"338":6.0,"339":6.6,"340":24.7,"341":4.3,"342":10.4,"343":2.3},"Organization":{"0":"WHO African Region","1":"WHO African Region","2":"WHO African Region","3":"WHO African Region","4":"WHO African Region","5":"WHO African Region","6":"WHO African Region","7":"WHO African Region","8":"WHO African Region","9":"WHO African Region","10":"WHO African Region","11":"WHO African Region","12":"WHO African Region","13":"WHO African Region","14":"WHO African Region","15":"WHO African Region","16":"WHO African Region","17":"WHO African Region","18":"WHO African Region","19":"WHO African Region","20":"WHO African Region","21":"WHO African Region","22":"WHO African Region","23":"WHO African Region","24":"WHO African Region","25":"WHO African Region","26":"WHO African Region","27":"WHO African Region","28":"WHO African Region","29":"WHO African Region","30":"WHO African Region","31":"WHO African Region","32":"WHO African Region","33":"WHO African Region","34":"WHO African Region","35":"WHO African Region","36":"WHO African Region","37":"WHO African Region","38":"WHO African Region","39":"WHO African Region","40":"WHO African Region","41":"WHO African Region","42":"WHO African Region","43":"WHO African Region","44":"WHO African Region","45":"WHO African Region","46":"WHO African Region","47":"WHO African Region","48":"WHO African Region","49":"WHO African Region","50":"WHO African Region","51":"WHO African Region","52":"WHO African Region","53":"WHO African Region","54":"WHO African Region","55":"WHO African Region","56":"WHO African Region","57":"WHO African Region","58":"WHO African Region","59":"WHO African Region","60":"WHO African Region","61":"WHO African Region","62":"WHO African Region","63":"WHO African Region","64":"WHO African Region","65":"WHO African Region","66":"WHO African Region","67":"WHO African Region","68":"WHO African Region","69":"WHO African Region","70":"WHO African Region","71":"WHO African Region","72":"WHO African Region","73":"WHO African Region","74":"WHO African Region","75":"WHO African Region","76":"WHO African Region","77":"WHO African Region","78":"WHO African Region","79":"WHO African Region","80":"WHO African Region","81":"WHO African Region","82":"WHO African Region","83":"WHO African Region","84":"WHO African Region","85":"WHO African Region","86":"WHO African Region","87":"WHO African Region","88":"WHO African Region","89":"WHO African Region","90":"WHO African Region","91":"WHO African Region","92":"WHO African Region","93":"WHO African Region","94":"WHO Region of the Americas.","95":"WHO Region of the Americas.","96":"WHO Region of the Americas.","97":"WHO Region of the Americas.","98":"WHO Region of the Americas.","99":"WHO Region of the Americas.","100":"WHO Region of the Americas.","101":"WHO Region of the Americas.","102":"WHO Region of the Americas.","103":"WHO Region of the Americas.","104":"WHO Region of the Americas.","105":"WHO Region of the Americas.","106":"WHO Region of the Americas.","107":"WHO Region of the Americas.","108":"WHO Region of the Americas.","109":"WHO Region of the Americas.","110":"WHO Region of the Americas.","111":"WHO Region of the Americas.","112":"WHO Region of the Americas.","113":"WHO Region of the Americas.","114":"WHO Region of the Americas.","115":"WHO Region of the Americas.","116":"WHO Region of the Americas.","117":"WHO Region of the Americas.","118":"WHO Region of the Americas.","119":"WHO Region of the Americas.","120":"WHO Region of the Americas.","121":"WHO Region of the Americas.","122":"WHO Region of the Americas.","123":"WHO Region of the Americas.","124":"WHO Region of the Americas.","125":"WHO Region of the Americas.","126":"WHO Region of the Americas.","127":"WHO Region of the Americas.","128":"WHO Region of the Americas.","129":"WHO Region of the Americas.","130":"WHO Region of the Americas.","131":"WHO Region of the Americas.","132":"WHO Region of the Americas.","133":"WHO Region of the Americas.","134":"WHO Region of the Americas.","135":"WHO Region of the Americas.","136":"WHO Region of the Americas.","137":"WHO Region of the Americas.","138":"WHO Region of the Americas.","139":"WHO Region of the Americas.","140":"WHO Region of the Americas.","141":"WHO Region of the Americas.","142":"WHO Region of the Americas.","143":"WHO Region of the Americas.","144":"WHO Region of the Americas.","145":"WHO Region of the Americas.","146":"WHO Region of the Americas.","147":"WHO Region of the Americas.","148":"WHO Region of the Americas.","149":"WHO Region of the Americas.","150":"WHO Region of the Americas.","151":"WHO Region of the Americas.","152":"WHO Region of the Americas.","153":"WHO Region of the Americas.","154":"WHO Region of the Americas.","155":"WHO Region of the Americas.","156":"WHO Region of the Americas.","157":"WHO Region of the Americas.","158":"WHO Region of the Americas.","159":"WHO Region of the Americas.","160":"WHO European Region.","161":"WHO European Region.","162":"WHO European Region.","163":"WHO European Region.","164":"WHO European Region.","165":"WHO European Region.","166":"WHO European Region.","167":"WHO European Region.","168":"WHO European Region.","169":"WHO European Region.","170":"WHO European Region.","171":"WHO European Region.","172":"WHO European Region.","173":"WHO European Region.","174":"WHO European Region.","175":"WHO European Region.","176":"WHO European Region.","177":"WHO European Region.","178":"WHO European Region.","179":"WHO European Region.","180":"WHO European Region.","181":"WHO European Region.","182":"WHO European Region.","183":"WHO European Region.","184":"WHO European Region.","185":"WHO European Region.","186":"WHO European Region.","187":"WHO European Region.","188":"WHO European Region.","189":"WHO European Region.","190":"WHO European Region.","191":"WHO European Region.","192":"WHO European Region.","193":"WHO European Region.","194":"WHO European Region.","195":"WHO European Region.","196":"WHO European Region.","197":"WHO European Region.","198":"WHO European Region.","199":"WHO European Region.","200":"WHO European Region.","201":"WHO European Region.","202":"WHO European Region.","203":"WHO European Region.","204":"WHO European Region.","205":"WHO European Region.","206":"WHO European Region.","207":"WHO European Region.","208":"WHO European Region.","209":"WHO European Region.","210":"WHO European Region.","211":"WHO European Region.","212":"WHO European Region.","213":"WHO European Region.","214":"WHO European Region.","215":"WHO European Region.","216":"WHO European Region.","217":"WHO European Region.","218":"WHO European Region.","219":"WHO European Region.","220":"WHO European Region.","221":"WHO European Region.","222":"WHO European Region.","223":"WHO European Region.","224":"WHO European Region.","225":"WHO European Region.","226":"WHO European Region.","227":"WHO European Region.","228":"WHO European Region.","229":"WHO European Region.","230":"WHO European Region.","231":"WHO European Region.","232":"WHO European Region.","233":"WHO European Region.","234":"WHO European Region.","235":"WHO European Region.","236":"WHO European Region.","237":"WHO European Region.","238":"WHO European Region.","239":"WHO European Region.","240":"WHO European Region.","241":"WHO European Region.","242":"WHO European Region.","243":"WHO European Region.","244":"WHO European Region.","245":"WHO European Region.","246":"WHO European Region.","247":"WHO European Region.","248":"WHO European Region.","249":"WHO European Region.","250":"WHO European Region.","251":"WHO European Region.","252":"WHO European Region.","253":"WHO European Region.","254":"WHO European Region.","255":"WHO European Region.","256":"WHO European Region.","257":"WHO European Region.","258":"WHO European Region.","259":"WHO European Region.","260":"WHO Eastern Mediterranean Region","261":"WHO Eastern Mediterranean Region","262":"WHO Eastern Mediterranean Region","263":"WHO Eastern Mediterranean Region","264":"WHO Eastern Mediterranean Region","265":"WHO Eastern Mediterranean Region","266":"WHO Eastern Mediterranean Region","267":"WHO Eastern Mediterranean Region","268":"WHO Eastern Mediterranean Region","269":"WHO Eastern Mediterranean Region","270":"WHO Eastern Mediterranean Region","271":"WHO Eastern Mediterranean Region","272":"WHO Eastern Mediterranean Region","273":"WHO Eastern Mediterranean Region","274":"WHO Eastern Mediterranean Region","275":"WHO Eastern Mediterranean Region","276":"WHO Eastern Mediterranean Region","277":"WHO Eastern Mediterranean Region","278":"WHO Eastern Mediterranean Region","279":"WHO Eastern Mediterranean Region","280":"WHO South-East Asia Region.","281":"WHO South-East Asia Region.","282":"WHO South-East Asia Region.","283":"WHO South-East Asia Region.","284":"WHO South-East Asia Region.","285":"WHO South-East Asia Region.","286":"WHO South-East Asia Region.","287":"WHO South-East Asia Region.","288":"WHO South-East Asia Region.","289":"WHO South-East Asia Region.","290":"WHO South-East Asia Region.","291":"WHO South-East Asia Region.","292":"WHO South-East Asia Region.","293":"WHO South-East Asia Region.","294":"WHO South-East Asia Region.","295":"WHO South-East Asia Region.","296":"WHO South-East Asia Region.","297":"WHO South-East Asia Region.","298":"WHO South-East Asia Region.","299":"WHO South-East Asia Region.","300":"WHO South-East Asia Region.","301":"WHO Western Pacific Region.","302":"WHO Western Pacific Region.","303":"WHO Western Pacific Region.","304":"WHO Western Pacific Region.","305":"WHO Western Pacific Region.","306":"WHO Western Pacific Region.","307":"WHO Western Pacific Region.","308":"WHO Western Pacific Region.","309":"WHO Western Pacific Region.","310":"WHO Western Pacific Region.","311":"WHO Western Pacific Region.","312":"WHO Western Pacific Region.","313":"WHO Western Pacific Region.","314":"WHO Western Pacific Region.","315":"WHO Western Pacific Region.","316":"WHO Western Pacific Region.","317":"WHO Western Pacific Region.","318":"WHO Western Pacific Region.","319":"WHO Western Pacific Region.","320":"WHO Western Pacific Region.","321":"WHO Western Pacific Region.","322":"WHO Western Pacific Region.","323":"WHO Western Pacific Region.","324":"WHO Western Pacific Region.","325":"WHO Western Pacific Region.","326":"WHO Western Pacific Region.","327":"WHO Western Pacific Region.","328":"WHO Western Pacific Region.","329":"WHO Western Pacific Region.","330":"WHO Western Pacific Region.","331":"WHO Western Pacific Region.","332":"WHO Western Pacific Region.","333":"WHO Western Pacific Region.","334":"WHO Western Pacific Region.","335":"WHO Western Pacific Region.","336":"WHO Western Pacific Region.","337":"WHO Western Pacific Region.","338":"WHO Western Pacific Region.","339":"WHO Western Pacific Region.","340":"WHO Western Pacific Region.","341":"WHO Western Pacific Region.","342":"WHO Western Pacific Region.","343":"WHO South-East Asia Region."}};

    // --- Konfigurasi Chart ---
    const itemHeightDbc = 35; 
    const visibleItemsDbc = 15; 
    const marginTopDbc = 80;
    const marginRightDbc = 50; 
    const marginBottomDbc = 40;
    const marginLeftDbc = 220; 
    const designWidthDbc = 880; 

    const circleRadiusDbc = 6;
    // PERUBAHAN WARNA:
    const maleColorDbc = "#00224D"; // Warna baru untuk Males
    const femaleColorDbc = "#FF204E"; // Warna baru untuk Females

    const metricOptionsDbc = {
        "Number of suicides, c 2021": "Number of Suicides by Gender (2021)",
        "Crude suicide rate, d 2021": "Crude Suicide Rate by Gender (per 100k, 2021)"
    };
    const metricKeysDbc = Object.keys(metricOptionsDbc);
    let currentMetricKeyDbc = metricKeysDbc[0]; 
    let currentOrganizationDbc = "All"; 

    let processedFullDataDbc = [];
    let allOrganizationsDbc = [];
    let svgChartDbc, xScaleDbc, yScaleDbc, tooltipElementDbc;

    // --- Struktur Internal Chart ---
    const filterContainerDbc = chartMainContainerDbc.append("div").attr("id", "filterContainer-dbc");
    const metricFilterGroupDbc = filterContainerDbc.append("div").attr("class", "filter-group-dbc");
    metricFilterGroupDbc.append("span").attr("class", "filter-group-label-dbc").text("Metric:");
    
    const orgFilterGroupDbc = filterContainerDbc.append("div").attr("class", "filter-group-dbc");
    orgFilterGroupDbc.append("span").attr("class", "filter-group-label-dbc").text("Organization:");

    const scrollWrapperDbc = chartMainContainerDbc.append("div").attr("class", "chart-scroll-wrapper-dbc");
    const svgContainerDbc = scrollWrapperDbc.append("div").attr("id", "chart-svg-container-dbc");
    const legendFixedContainerDbc = scrollWrapperDbc.append("div").attr("id", "legendContainer-dbc"); 
    tooltipElementDbc = chartMainContainerDbc.append("div").attr("class", "tooltip-dbc");


    function processDumbbellData() {
        const indices = Object.keys(dumbbellRawDataInput.Country);
        const groupedByCountry = {};

        indices.forEach(index => {
            const country = dumbbellRawDataInput.Country[index];
            const sex = dumbbellRawDataInput.Sex[index];
            const value = parseFloat(dumbbellRawDataInput[currentMetricKeyDbc][index]);
            const organization = dumbbellRawDataInput.Organization[index];

            if (isNaN(value)) return; 

            if (!groupedByCountry[country]) {
                groupedByCountry[country] = {
                    country: country,
                    organization: organization,
                    maleValue: null,
                    femaleValue: null
                };
            }
            if (!groupedByCountry[country].organization) {
                 groupedByCountry[country].organization = organization;
            }

            if (sex === "Males") {
                groupedByCountry[country].maleValue = value;
            } else if (sex === "Females") {
                groupedByCountry[country].femaleValue = value;
            }
        });
        
        processedFullDataDbc = Object.values(groupedByCountry)
            .filter(d => d.maleValue !== null && d.femaleValue !== null && d.maleValue >=0 && d.femaleValue >=0) 
            .sort((a, b) => (b.maleValue + b.femaleValue) / 2 - (a.maleValue + a.femaleValue) / 2); 

        if (allOrganizationsDbc.length === 0) { 
            const uniqueOrgs = new Set();
            indices.forEach(index => uniqueOrgs.add(dumbbellRawDataInput.Organization[index]));
            allOrganizationsDbc = ["All", ...Array.from(uniqueOrgs).sort()];
        }
    }
    
    function updateDynamicDumbbellChart(dataToPlot) {
        if (!svgChartDbc) return;
        svgChartDbc.selectAll("*").remove();

        const numItems = dataToPlot.length;

        const scrollViewportActualHeightDbc = Math.min(numItems, visibleItemsDbc) * itemHeightDbc + marginTopDbc + marginBottomDbc;
        const svgActualHeightDbc = numItems * itemHeightDbc + marginTopDbc + marginBottomDbc;
        
        const finalScrollViewportHeightDbc = numItems > 0 ? scrollViewportActualHeightDbc : (visibleItemsDbc * itemHeightDbc / 2) + marginTopDbc + marginBottomDbc;
        const finalSvgHeightDbc = numItems > 0 ? svgActualHeightDbc : (visibleItemsDbc * itemHeightDbc / 2) + marginTopDbc + marginBottomDbc;

        scrollWrapperDbc.style("height", finalScrollViewportHeightDbc + 'px');
        svgChartDbc.attr("height", finalSvgHeightDbc)
                   .attr("viewBox", `0 0 ${designWidthDbc} ${finalSvgHeightDbc}`);

        const allValues = dataToPlot.reduce((acc, d) => {
            acc.push(d.maleValue, d.femaleValue);
            return acc;
        }, []);
        
        const minValue = d3.min(allValues) > 0 ? 0 : d3.min(allValues); 
        xScaleDbc.domain([minValue, d3.max(allValues) || 10]); 
        yScaleDbc.domain(dataToPlot.map(d => d.country))
                 .rangeRound([marginTopDbc, finalSvgHeightDbc - marginBottomDbc]);

        svgChartDbc.append("text")
            .attr("class", "chart-title-dbc")
            .attr("x", marginLeftDbc + (designWidthDbc - marginLeftDbc - marginRightDbc) / 2)
            .attr("y", 30)
            .text(metricOptionsDbc[currentMetricKeyDbc]); 

        if (numItems === 0) {
            svgChartDbc.append("text")
                .attr("class", "no-data-message-dbc")
                .attr("x", designWidthDbc / 2)
                .attr("y", finalSvgHeightDbc / 2)
                .text("No data available for this selection.");
            legendFixedContainerDbc.style("bottom", "10px").style("top", "auto").style("right", "10px");
            return;
        }
        
        if (finalScrollViewportHeightDbc < (visibleItemsDbc * itemHeightDbc + marginTopDbc + marginBottomDbc) / 1.8) { 
             legendFixedContainerDbc.style("bottom", "auto").style("top", "10px");
        } else {
             legendFixedContainerDbc.style("top", "auto").style("bottom", "10px");
        }

        const dumbbellGroup = svgChartDbc.append("g")
          .selectAll("g.dumbbell-item-dbc")
          .data(dataToPlot)
          .join("g")
            .attr("class", "dumbbell-item-dbc")
            .attr("transform", d => `translate(0, ${yScaleDbc(d.country) + yScaleDbc.bandwidth() / 2})`);

        dumbbellGroup.append("line")
            .attr("class", "dumbbell-line-dbc")
            .attr("x1", d => xScaleDbc(d.femaleValue))
            .attr("x2", d => xScaleDbc(d.maleValue))
            .attr("y1", 0)
            .attr("y2", 0);

        dumbbellGroup.append("circle")
            .attr("class", "dumbbell-circle-dbc female-circle-dbc")
            .attr("cx", d => xScaleDbc(d.femaleValue))
            .attr("cy", 0)
            .attr("r", circleRadiusDbc)
            .attr("fill", femaleColorDbc)
            .on("mouseover", (event, d) => showTooltip(event, d, "Females"))
            .on("mousemove", (event, d) => moveTooltip(event))
            .on("mouseout", (event, d) => hideTooltip());

        dumbbellGroup.append("circle")
            .attr("class", "dumbbell-circle-dbc male-circle-dbc")
            .attr("cx", d => xScaleDbc(d.maleValue))
            .attr("cy", 0)
            .attr("r", circleRadiusDbc)
            .attr("fill", maleColorDbc)
            .on("mouseover", (event, d) => showTooltip(event, d, "Males"))
            .on("mousemove", (event, d) => moveTooltip(event))
            .on("mouseout", (event, d) => hideTooltip());

        const xAxisGroupDbc = svgChartDbc.append("g")
            .attr("transform", `translate(0,${marginTopDbc})`)
            .call(d3.axisTop(xScaleDbc).ticks(designWidthDbc / 100 > 1 ? designWidthDbc / 100 : 5).tickFormat(d3.format(",")))
            .call(g => g.select(".domain").remove());
        xAxisGroupDbc.selectAll(".tick line").clone()
            .attr("y2", finalSvgHeightDbc - marginTopDbc - marginBottomDbc)
            .attr("stroke-opacity", 0.1);
        xAxisGroupDbc.append("text")
            .attr("class", "axis-label-dbc")
            .attr("x", marginLeftDbc + (designWidthDbc - marginLeftDbc - marginRightDbc) / 2)
            .attr("y", - (marginTopDbc / 2) + 5) 
            .attr("fill", "currentColor").attr("text-anchor", "middle")
            .text(metricOptionsDbc[currentMetricKeyDbc]); 

        svgChartDbc.append("g")
            .attr("transform", `translate(${marginLeftDbc},0)`)
            .call(d3.axisLeft(yScaleDbc).tickSizeOuter(0))
            .call(g => g.selectAll(".tick text").style("font-size", "10px"));
        svgChartDbc.append("text")
            .attr("class", "axis-label-dbc")
            .attr("transform", "rotate(-90)")
            .attr("x", -(marginTopDbc + (finalSvgHeightDbc - marginTopDbc - marginBottomDbc) / 2))
            .attr("y", 20) 
            .attr("fill", "currentColor").attr("text-anchor", "middle")
            .text("Country");
    }

    function showTooltip(event, d, sexCategory) {
        tooltipElementDbc.style("opacity", 1);
        tooltipElementDbc.html(
            `<strong>${d.country}</strong><br/>` +
            `Organization: ${d.organization}<br/>` +
            `<span style="color:${maleColorDbc};">Males: ${d.maleValue !== null ? d.maleValue.toLocaleString() : 'N/A'}</span><br/>` +
            `<span style="color:${femaleColorDbc};">Females: ${d.femaleValue !== null ? d.femaleValue.toLocaleString() : 'N/A'}</span><br/>` +
            `Metric: ${metricOptionsDbc[currentMetricKeyDbc]}`
        );
        moveTooltip(event);
    }
    function moveTooltip(event) {
        tooltipElementDbc
            .style("left", (event.pageX + 15) + "px") 
            .style("top", (event.pageY - 28) + "px");
    }
    function hideTooltip() {
        tooltipElementDbc.style("opacity", 0);
    }
    
    function filterAndRenderDumbbellChart() {
        let filteredData = processedFullDataDbc;
        if (currentOrganizationDbc !== "All") {
            filteredData = processedFullDataDbc.filter(d => d.organization === currentOrganizationDbc);
        }
        filteredData.sort((a, b) => {
            const valA = (a.maleValue + a.femaleValue) / 2; 
            const valB = (b.maleValue + b.femaleValue) / 2; 
            return valB - valA; 
        });

        updateDynamicDumbbellChart(filteredData);
    }

    function initializeDumbbellChart() {
        processDumbbellData(); 

        xScaleDbc = d3.scaleLinear().range([marginLeftDbc, designWidthDbc - marginRightDbc]);
        yScaleDbc = d3.scaleBand().padding(0.3); 

        svgChartDbc = svgContainerDbc.append("svg")
            .attr("width", "100%")
            .attr("preserveAspectRatio", "xMinYMin meet");

        metricKeysDbc.forEach(key => {
            metricFilterGroupDbc.append("button")
                .text(metricOptionsDbc[key])
                .attr("data-metric", key)
                .classed("active", key === currentMetricKeyDbc)
                .on("click", function() {
                    currentMetricKeyDbc = d3.select(this).attr("data-metric");
                    metricFilterGroupDbc.selectAll("button").classed("active", false);
                    d3.select(this).classed("active", true);
                    processDumbbellData(); 
                    filterAndRenderDumbbellChart(); 
                });
        });
        
        allOrganizationsDbc.forEach(org => {
            orgFilterGroupDbc.append("button")
                .text(org)
                .attr("data-org", org)
                .classed("active", org === currentOrganizationDbc)
                .on("click", function() {
                    currentOrganizationDbc = d3.select(this).attr("data-org");
                    orgFilterGroupDbc.selectAll("button").classed("active", false);
                    d3.select(this).classed("active", true);
                    filterAndRenderDumbbellChart(); 
                });
        });

        legendFixedContainerDbc.append("h5").text("Sex");
        const legendData = [
            { label: "Males", color: maleColorDbc },
            { label: "Females", color: femaleColorDbc }
        ];
        legendData.forEach(item => {
            const legendItem = legendFixedContainerDbc.append("div")
                .attr("class", "legend-item-div-dbc");
            legendItem.append("div")
                .attr("class", "legend-color-swatch-dbc")
                .style("background-color", item.color);
            legendItem.append("span").text(item.label);
        });

        filterAndRenderDumbbellChart(); 
    }

    initializeDumbbellChart();
});
</script>

## Mendesain Ulang Jalur Bantuan untuk Pria

Data ini memaksa kita untuk bertanya: "Bagaimana cara kita menciptakan ruang aman bagi pria untuk mencari dukungan tanpa merasa dihakimi?" Analisis ini mengungkap beberapa area kebutuhan yang krusial:
* **Kebutuhan akan Bahasa yang Berbeda:** Membingkai ulang kesehatan mental dari "terapi" menjadi "pelatihan mental" atau "strategi membangun ketangguhan".
* **Kebutuhan akan Koneksi Sebaya (Peer Connection):** Platform yang memfasilitasi pertukaran strategi praktis antar sesama pria.
* **Kebutuhan akan Solusi Berbasis Aksi:** Pendekatan yang aktif memberikan alat dan langkah-langkah konkret untuk mengelola stres.

## Kesimpulan: Dari Data Gender ke Intervensi Tepat Sasaran

Memahami bahwa pria berisiko lebih tinggi adalah langkah pertama. Namun, data menunjukkan bahwa prioritas intervensi harus kita tujukan pada **pria di wilayah dengan kesenjangan gender terbesar**. Solusi yang kita tawarkan pun tidak bisa "satu untuk semua"; harus dirancang khusus dengan bahasa, format, dan pendekatan yang sesuai dengan cara pria menghadapi tekanan—dengan fokus pada solusi, kekuatan, dan koneksi otentik.

<a href="https://daddyananta.github.io/categories/insight-psychology/">Baca artikel lain tentang Insight Psikologi</a>

## Referensi
<p style="text-indent:0px;">Nevid, J. S. (2012). <strong>Abnormal Psychology: In a Changing World</strong>. <i>Pearson Education</i>.</p>

## Penelusuran Terkait
<ul>
    <li><a href="https://www.who.int/europe/news/item/09-09-2021-who-highlights-urgent-need-to-prevent-suicide-in-the-european-region">WHO highlights urgent need to prevent suicide in the European Region</a></li>
    <li><a href="https://www.apa.org/monitor/2023/03/men-mental-health">Men and mental health - American Psychological Association</a></li>
    <li><a href="https://www.weforum.org/agenda/2023/11/male-mental-health-gender-gap/">Male mental health: How to close the gender gap - World Economic Forum</a></li>
    <li><a href="https://www.forbes.com/health/mind/men-mental-health-stigma/">The Stigma Surrounding Men's Mental Health: How To Break The Cycle - Forbes</a></li>
    <li><a href="https://www.samhsa.gov/data/report/2021-national-survey-drug-use-and-health-nsduh-release">2021 National Survey on Drug Use and Health - SAMHSA</a></li>
    <li><a href="https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(22)00031-6/fulltext">Toxic masculinity and suicide: a systematic review - The Lancet Psychiatry</a></li>
    <li><a href="https://www.nature.com/articles/s41591-023-02434-w">A public health approach to prevent suicide in men - Nature Medicine</a></li>
    <li><a href="https://www.calm.com/blog/category/mental-fitness">Mental Fitness - Calm Blog</a></li>
</ul>
