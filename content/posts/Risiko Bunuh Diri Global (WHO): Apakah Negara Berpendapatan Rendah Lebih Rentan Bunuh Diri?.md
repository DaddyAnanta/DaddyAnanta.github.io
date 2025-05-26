+++
title = 'Risiko Bunuh Diri Global (WHO): Apakah Negara Berpendapatan Rendah Lebih Rentan Bunuh Diri?'
date = 2025-05-25T00:37:00+00:00
draft = false
socialshare = true
description = "Analisis data bunuh diri tahun 2021, yang dikelompokkan berdasarkan empat kategori penghasilan negara (High-Income, Upper-Middle-Income, Lower-Middle-Income, dan Low-Income), mengungkapkan pola signifikan terkait rata-rata kasus per negara."
image = "/images/67.Risiko_Bunuh_Diri_Global_(WHO)/2.webp"
imageBig= "/images/67.Risiko_Bunuh_Diri_Global_(WHO)/2.webp"
categories= ["News"]
tags = ["WHO"]
authors= ["Daddy Ananta"]
avatar="/images/profil.jpeg"
+++

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
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who-kelompok-usia-mana-yang-paling-membutuhkan-perhatian/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Kelompok Usia Mana yang Paling Membutuhkan Perhatian?</a>
    </li>
    <li style="margin-bottom: 12px; font-weight: bold; color: #A71C1C; padding-left: 10px; border-left: 3px solid #A71C1C;">
      Apakah Negara Berpendapatan Rendah Lebih Rentan Bunuh Diri?
    </li>
  </ul>
</div>

Visualisasi grafik jaringan yang menyertainya secara jelas menunjukkan korelasi ini: intensitas warna pada titik pusat setiap kategori—mulai dari merah muda cerah hingga maroon pekat—berbanding lurus dengan tingginya angka rata-rata bunuh diri, di mana warna yang lebih pekat menandakan rata-rata yang lebih tinggi dan menjadi fokus pengamatan ini.

Berikut adalah urutan kategori penghasilan negara berdasarkan rata-rata kasus bunuh diri per negara dari yang tertinggi hingga terendah pada tahun 2021:

- **Lower-Middle-Income**: Rata-rata 5296.41 kasus per negara
- **Upper-Middle-Income**: Rata-rata 4489.52 kasus per negara
- **High-Income**: Rata-rata 3742.58 kasus per negara
- **Low-Income**: Rata-rata 1731.63 kasus per negara

Secara spesifik, kategori negara "**Lower-Middle-Income**" mencatatkan rata-rata bunuh diri per negara tertinggi sebesar 5296.41 (contoh negara: India, Nigeria, Mesir), direpresentasikan dengan warna visual paling pekat. Di sisi lain spektrum, kategori "**Low-Income**" memiliki rata-rata terendah yaitu 1731.63 (contoh: Afghanistan, Ethiopia, Republik Demokratik Kongo), ditandai dengan warna paling cerah. Kategori "**Upper-Middle-Income**" menunjukkan rata-rata 4489.52 (contoh: Tiongkok, Brazil, Thailand), sementara negara "High-Income" memiliki rata-rata 3742.58 (contoh: Jepang, Amerika Serikat, Jerman).

Analisis data yang disajikan mengungkap sebuah temuan penting: tidak ada hubungan linear sederhana antara tingkat pendapatan suatu negara dengan risiko bunuh diri. Hal ini terlihat jelas pada dua perbandingan kunci yang menantang asumsi umum: pertama, kategori negara berpenghasilan menengah ke bawah (**Lower-Middle-Income**) memiliki rata-rata kasus bunuh diri yang secara signifikan jauh lebih tinggi dibandingkan negara berpenghasilan rendah (**Low-Income**).

Negara-negara dalam kategori penghasilan menengah ke atas (**Upper-Middle-Income**) juga menunjukkan rata-rata risiko yang lebih tinggi dibandingkan dengan negara-negara berpenghasilan tinggi (**High-Income**)

<script src="https://d3js.org/d3.v7.min.js"></script>

<style>
    .chart-container {
        background-color: #fff;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
        margin-top: 20px;
        width: 100%;
        height: 750px;
        cursor: grab;
    }

    .hugo-d3-force-graph { /* Class SVG utama */
        display: block;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        width: 100%;
        height: 100%;
    }

    .node-label {
        font-size: 10px;
        fill: #111;
        pointer-events: none;
        text-anchor: start;
        dominant-baseline: middle;
        paint-order: stroke;
        stroke: white;
        stroke-width: 3px;
        stroke-linecap: butt;
        stroke-linejoin: round;
    }
    .country-node .node-label {
        font-size: 9px;
        stroke-width: 2.5px;
    }

    .link {
        stroke: #aaa;
        stroke-opacity: 0.7;
    }
    .link.group-to-global {
        stroke: #555; /* Link ke global lebih gelap */
        stroke-width: 2.5px;
    }
     .link.country-to-group {
        stroke-opacity: 0.5; /* Link negara ke grup bisa lebih transparan */
    }


    .income-group-node circle {
        stroke-width: 2px; /* Stroke untuk hub grup */
    }
    .global-summary-node circle {
        stroke: #444; /* Stroke untuk node global agar terlihat meski warna fill hitam */
        stroke-width: 2px;
    }
</style>

<div class="chart-container" id="force-graph-container"></div>

<script>
// Data mentah Anda
const yourRawData = {"Country":{"0":"Algeria","1":"Angola","2":"Benin","3":"Botswana","4":"Burkina Faso","5":"Burundi","6":"Cabo Verde","7":"Cameroon","8":"Central African Republic","9":"Chad","10":"Comoros","11":"Congo","12":"C\u00f4te d'Ivoire","13":"Democratic Republic of the Congo","14":"Equatorial Guinea","15":"Eritrea","16":"Eswatini","17":"Ethiopia","18":"Gabon","19":"Gambia","20":"Ghana","21":"Guinea","22":"Guinea-Bissau","23":"Kenya","24":"Lesotho","25":"Liberia","26":"Madagascar","27":"Malawi","28":"Mali","29":"Mauritania","30":"Mauritius","31":"Mozambique","32":"Namibia","33":"Niger","34":"Nigeria","35":"Rwanda","36":"Sao Tome and Principe","37":"Senegal","38":"Seychelles","39":"Sierra Leone","40":"South Africa","41":"South Sudan","42":"Togo","43":"Uganda","44":"United Republic of Tanzania","45":"Zambia","46":"Zimbabwe","47":"Antigua and Barbuda","48":"Argentina","49":"Bahamas","50":"Barbados","51":"Belize","52":"Bolivia","53":"Brazil","54":"Canada","55":"Chile","56":"Colombia","57":"Costa Rica","58":"Cuba","59":"Dominican Republic","60":"Ecuador","61":"El Salvador","62":"Grenada","63":"Guatemala","64":"Guyana","65":"Haiti","66":"Honduras","67":"Jamaica","68":"Mexico","69":"Nicaragua","70":"Panama","71":"Paraguay","72":"Peru","73":"Saint Lucia","74":"Saint Vincent and the Grenadines","75":"Suriname","76":"Trinidad and Tobago","77":"United States of America","78":"Uruguay","79":"Venezuela (Bolivarian Republic of)","80":"Albania","81":"Armenia","82":"Austria","83":"Azerbaijan","84":"Belarus","85":"Belgium","86":"Bosnia and Herzegovina","87":"Bulgaria","88":"Croatia","89":"Cyprus","90":"Czechia","91":"Denmark","92":"Estonia","93":"Finland","94":"France","95":"Georgia","96":"Germany","97":"Greece","98":"Hungary","99":"Iceland","100":"Ireland","101":"Israel","102":"Italy","103":"Kazakhstan","104":"Kyrgyzstan","105":"Latvia","106":"Lithuania","107":"Luxembourg","108":"Malta","109":"Montenegro","110":"Netherlands (Kingdom of the)","111":"North Macedonia","112":"Norway","113":"Poland","114":"Portugal","115":"Republic of Moldova","116":"Romania","117":"Russian Federation","118":"Serbia","119":"Slovakia","120":"Slovenia","121":"Spain","122":"Sweden","123":"Switzerland","124":"Tajikistan","125":"T\u00fcrkiye","126":"Turkmenistan","127":"Ukraine","128":"United Kingdom of Great Britain and Northern Ireland","129":"Uzbekistan","130":"Afghanistan","131":"Bahrain","132":"Djibouti","133":"Egypt","134":"Iran (Islamic Republic of)","135":"Iraq","136":"Syrian Arab Republic","137":"Tunisia","138":"United Arab Emirates","139":"Yemen","140":"Bangladesh","141":"Bhutan","142":"Democratic People's Republic of Korea","143":"India","144":"Indonesia","145":"Maldives","146":"Myanmar","147":"Nepal","148":"Sri Lanka","149":"Thailand","150":"Timor-Leste","151":"Australia","152":"Brunei Darussalam","153":"Cambodia","154":"China","155":"Fiji","156":"Japan","157":"Kiribati","158":"Lao People's Democrati","159":"Malaysia","160":"Micronesia (Federated States of)","161":"Mongolia","162":"New Zealand","163":"Papua New Guinea","164":"Philippines","165":"Republic of Korea","166":"Samoa","167":"Singapore","168":"Solomon Islands","169":"Vanuatu","170":"Viet Nam","171":"Tonga"},"Income group b":{"0":"Upper-Middle-Income","1":"Lower-Middle-Income","2":"Lower-Middle-Income","3":"Upper-Middle-Income","4":"Low-Income","5":"Low-Income","6":"Lower-Middle-Income","7":"Lower-Middle-Income","8":"Low-Income","9":"Low-Income","10":"Lower-Middle-Income","11":"Lower-Middle-Income","12":"Lower-Middle-Income","13":"Low-Income","14":"Upper-Middle-Income","15":"Low-Income","16":"Lower-Middle-Income","17":"Low-Income","18":"Upper-Middle-Income","19":"Low-Income","20":"Lower-Middle-Income","21":"Lower-Middle-Income","22":"Low-Income","23":"Lower-Middle-Income","24":"Lower-Middle-Income","25":"Low-Income","26":"Low-Income","27":"Low-Income","28":"Low-Income","29":"Lower-Middle-Income","30":"Upper-Middle-Income","31":"Low-Income","32":"Upper-Middle-Income","33":"Low-Income","34":"Lower-Middle-Income","35":"Low-Income","36":"Lower-Middle-Income","37":"Lower-Middle-Income","38":"High-Income","39":"Low-Income","40":"Upper-Middle-Income","41":"Low-Income","42":"Low-Income","43":"Low-Income","44":"Lower-Middle-Income","45":"Lower-Middle-Income","46":"Lower-Middle-Income","47":"High-Income","48":"Upper-Middle-Income","49":"High-Income","50":"High-Income","51":"Upper-Middle-Income","52":"Lower-Middle-Income","53":"Upper-Middle-Income","54":"High-Income","55":"High-Income","56":"Upper-Middle-Income","57":"Upper-Middle-Income","58":"Upper-Middle-Income","59":"Upper-Middle-Income","60":"Upper-Middle-Income","61":"Upper-Middle-Income","62":"Upper-Middle-Income","63":"Upper-Middle-Income","64":"High-Income","65":"Lower-Middle-Income","66":"Lower-Middle-Income","67":"Upper-Middle-Income","68":"Upper-Middle-Income","69":"Lower-Middle-Income","70":"High-Income","71":"Upper-Middle-Income","72":"Upper-Middle-Income","73":"Upper-Middle-Income","74":"Upper-Middle-Income","75":"Upper-Middle-Income","76":"High-Income","77":"High-Income","78":"High-Income","79":"Upper-Middle-Income","80":"Upper-Middle-Income","81":"Upper-Middle-Income","82":"High-Income","83":"Upper-Middle-Income","84":"Upper-Middle-Income","85":"High-Income","86":"Upper-Middle-Income","87":"High-Income","88":"High-Income","89":"High-Income","90":"High-Income","91":"High-Income","92":"High-Income","93":"High-Income","94":"High-Income","95":"Upper-Middle-Income","96":"High-Income","97":"High-Income","98":"High-Income","99":"High-Income","100":"High-Income","101":"High-Income","102":"High-Income","103":"Upper-Middle-Income","104":"Lower-Middle-Income","105":"High-Income","106":"High-Income","107":"High-Income","108":"High-Income","109":"Upper-Middle-Income","110":"High-Income","111":"Upper-Middle-Income","112":"High-Income","113":"High-Income","114":"High-Income","115":"Upper-Middle-Income","116":"High-Income","117":"High-Income","118":"Upper-Middle-Income","119":"High-Income","120":"High-Income","121":"High-Income","122":"High-Income","123":"High-Income","124":"Lower-Middle-Income","125":"Upper-Middle-Income","126":"Upper-Middle-Income","127":"Upper-Middle-Income","128":"High-Income","129":"Lower-Middle-Income","130":"Low-Income","131":"High-Income","132":"Lower-Middle-Income","133":"Lower-Middle-Income","134":"Upper-Middle-Income","135":"Upper-Middle-Income","136":"Low-Income","137":"Lower-Middle-Income","138":"High-Income","139":"Low-Income","140":"Lower-Middle-Income","141":"Lower-Middle-Income","142":"Low-Income","143":"Lower-Middle-Income","144":"Upper-Middle-Income","145":"Upper-Middle-Income","146":"Lower-Middle-Income","147":"Lower-Middle-Income","148":"Lower-Middle-Income","149":"Upper-Middle-Income","150":"Lower-Middle-Income","151":"High-Income","152":"High-Income","153":"Lower-Middle-Income","154":"Upper-Middle-Income","155":"Upper-Middle-Income","156":"High-Income","157":"Lower-Middle-Income","158":"Lower-Middle-Income","159":"Upper-Middle-Income","160":"Lower-Middle-Income","161":"Upper-Middle-Income","162":"High-Income","163":"Lower-Middle-Income","164":"Lower-Middle-Income","165":"High-Income","166":"Lower-Middle-Income","167":"High-Income","168":"Lower-Middle-Income","169":"Lower-Middle-Income","170":"Lower-Middle-Income","171":"Upper-Middle-Income"},"Number of suicides, c 2021":{"0":"976","1":"2802","2":"956","3":"201","4":"1869","5":"992","6":"77","7":"2287","8":"470","9":"929","10":"49","11":"396","12":"2191","13":"8695","14":"124","15":"443","16":"329","17":"7412","18":"173","19":"124","20":"1729","21":"661","22":"158","23":"2438","24":"648","25":"314","26":"1808","27":"1517","28":"931","29":"128","30":"135","31":"3363","32":"241","33":"1097","34":"10 912","35":"1159","36":"2","37":"1164","38":"5","39":"497","40":"13 712","41":"857","42":"829","43":"2524","44":"3207","45":"1397","46":"2740","47":"1","48":"3594","49":"13","50":"10","51":"17","52":"501","53":"15 907","54":"3631","55":"1496","56":"2534","57":"408","58":"1534","59":"467","60":"1336","61":"478","62":"2","63":"869","64":"202","65":"889","66":"306","67":"48","68":"8872","69":"282","70":"143","71":"424","72":"510","73":"9","74":"0","75":"138","76":"199","77":"53 162","78":"841","79":"2437","80":"78","81":"69","82":"1301","83":"160","84":"1444","85":"2124","86":"291","87":"654","88":"615","89":"40","90":"1403","91":"613","92":"199","93":"807","94":"10 957","95":"193","96":"10 799","97":"495","98":"1597","99":"44","100":"430","101":"391","102":"4176","103":"2882","104":"464","105":"287","106":"618","107":"53","108":"34","109":"68","110":"2040","111":"107","112":"713","113":"5199","114":"1197","115":"428","116":"1852","117":"31 172","118":"1035","119":"539","120":"398","121":"4160","122":"1442","123":"1221","124":"242","125":"2332","126":"484","127":"9397","128":"6461","129":"2857","130":"1438.0","131":"70.0","132":"89.0","133":"699.0","134":"3603.0","135":"1281.0","136":"127.0","137":"222.0","138":"167.0","139":"1564.0","140":"4714","141":"38","142":"2442","143":"177 567","144":"3333","145":"8","146":"1545","147":"2989","148":"3347","149":"11 899","150":48,"151":"3394","152":"14","153":"764","154":"127 601","155":"76","156":"21 904","157":"22","158":"341","159":"1938","160":"22","161":"618","162":"609","163":"182","164":"3947","165":"14 273","166":"26","167":"449","168":"149","169":"48","170":"7222","171":5}};


function transformDataAdvanced(rawData) {
  const countryNodes = [];
  const incomeGroupsMap = new Map();
  const indices = Object.keys(rawData.Country);

  for (const index of indices) {
    const countryName = rawData.Country[index];
    if (!countryName) continue;
    let suicideStr = String(rawData["Number of suicides, c 2021"][index]);
    const suicides = parseFloat(suicideStr.replace(/\s/g, ''));
    const incomeGroupStr = rawData["Income group b"][index] || "Unknown";

    countryNodes.push({
      id: countryName,
      type: "country",
      incomeGroup: incomeGroupStr,
      suicides: isNaN(suicides) ? 0 : suicides,
    });

    if (!incomeGroupsMap.has(incomeGroupStr)) {
      incomeGroupsMap.set(incomeGroupStr, { totalSuicides: 0, countryCount: 0 });
    }
    const groupData = incomeGroupsMap.get(incomeGroupStr);
    groupData.totalSuicides += isNaN(suicides) ? 0 : suicides;
    groupData.countryCount++;
  }

  const incomeGroupNodesArray = [];
  let overallTotalSuicides = 0;
  let overallTotalCountries = 0;

  for (const [groupName, data] of incomeGroupsMap) {
    const averageSuicides = data.countryCount > 0 ? data.totalSuicides / data.countryCount : 0; // Hitung rata-rata
    incomeGroupNodesArray.push({
      id: `income_group_${groupName.replace(/\s+/g, '_')}`,
      type: "income_group",
      displayName: groupName,
      totalSuicides: data.totalSuicides,
      countryCount: data.countryCount,
      averageSuicides: averageSuicides, // Simpan rata-rata
    });
    overallTotalSuicides += data.totalSuicides;
    overallTotalCountries += data.countryCount;
  }

  // Urutkan incomeGroupNodesArray berdasarkan averageSuicides menurun
  incomeGroupNodesArray.sort((a, b) => b.averageSuicides - a.averageSuicides);

  // Palet warna untuk Income Group b berdasarkan peringkat rata-rata bunuh diri
  const incomeGroupRankColors = ["#4A102A", "#85193C", "#C5172E", "#FF0B55"]; // Tertinggi ke terendah
  const groupNameToAssignedColor = new Map();

  incomeGroupNodesArray.forEach((node, index) => {
    // Jika ada lebih banyak grup daripada warna, warna terakhir akan digunakan berulang
    const color = incomeGroupRankColors[index % incomeGroupRankColors.length];
    node.assignedColor = color;
    groupNameToAssignedColor.set(node.displayName, color);
  });

  const globalSummaryNode = {
    id: "global_summary_node_center",
    type: "global_summary",
    displayName: "Global Stats",
    totalSuicides: overallTotalSuicides,
    totalCountries: overallTotalCountries,
  };

  const allNodes = [...countryNodes, ...incomeGroupNodesArray, globalSummaryNode];
  const links = [];

  countryNodes.forEach(country => {
    links.push({
      source: country.id,
      target: `income_group_${country.incomeGroup.replace(/\s+/g, '_')}`,
      value: 1,
      type: 'country_to_group'
    });
  });

  incomeGroupNodesArray.forEach(igNode => {
    links.push({
      source: igNode.id,
      target: globalSummaryNode.id,
      value: igNode.countryCount,
      type: 'group_to_global'
    });
  });

  return { nodes: allNodes, links, groupColorMapping: groupNameToAssignedColor };
}


const { nodes: graphNodes, links: graphLinks, groupColorMapping } = transformDataAdvanced(yourRawData);

function drawForceDirectedGraph(nodesData, linksData, groupColorsMap) {
  const container = document.getElementById('force-graph-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  const globalNodeColor = "#000000";

  const nodes = nodesData.map(d => ({...d}));
  const links = linksData.map(d => ({...d}));

  const minSuicides = d3.min(nodes.filter(n => n.type === 'country'), d => d.suicides);
  const maxSuicides = d3.max(nodes.filter(n => n.type === 'country'), d => d.suicides);
  const radiusScaleCountry = d3.scaleSqrt()
    .domain([minSuicides || 0, maxSuicides || 1])
    .range([4, 22]);

  const minCountryCount = d3.min(nodes.filter(n => n.type === 'income_group'), d => d.countryCount);
  const maxCountryCount = d3.max(nodes.filter(n => n.type === 'income_group'), d => d.countryCount);
  const radiusScaleGroup = d3.scaleSqrt()
    .domain([minCountryCount || 0, maxCountryCount || 1])
    .range([20, 45]);

  const radiusGlobalNode = 55;

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id)
      .distance(d => d.type === 'group_to_global' ? 160 : (d.type === 'country_to_group' ? 60 : 70))
      .strength(d => d.type === 'group_to_global' ? 0.3 : (d.type === 'country_to_group' ? 0.4 : 0.1))
    )
    .force("charge", d3.forceManyBody().strength(-130))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(d => {
        const padding = 7;
        if (d.type === 'country') return radiusScaleCountry(d.suicides) + padding;
        if (d.type === 'income_group') return radiusScaleGroup(d.countryCount) + padding;
        if (d.type === 'global_summary') return radiusGlobalNode + padding;
        return 10 + padding;
      }).strength(0.95))
    .on("tick", ticked);

  const svg = d3.select("#force-graph-container").append("svg")
    .attr("class", "hugo-d3-force-graph")
    .attr("viewBox", [0, 0, width, height]);

  const mainGroup = svg.append("g");

  const linkElements = mainGroup.append("g")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("class", d => `link ${d.type}`)
    .attr("stroke-width", d => d.type === 'group_to_global' ? 2.5 : 1.5);

  const nodeElements = mainGroup.append("g")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .attr("class", d => `${d.type}-node`)
    .call(drag(simulation));

  nodeElements.append("circle")
    .attr("r", d => {
        if (d.type === 'country') return radiusScaleCountry(d.suicides);
        if (d.type === 'income_group') return radiusScaleGroup(d.countryCount);
        if (d.type === 'global_summary') return radiusGlobalNode;
        return 8;
    })
    .attr("fill", d => {
        if (d.type === 'country') {
            return groupColorsMap.get(d.incomeGroup) || "#BDBDBD";
        }
        if (d.type === 'income_group') {
            return d.assignedColor;
        }
        if (d.type === 'global_summary') {
            return globalNodeColor;
        }
        return "#E0E0E0";
    })
    .attr("stroke", d => {
        let baseColorStr;
        if (d.type === 'country') baseColorStr = groupColorsMap.get(d.incomeGroup) || "#BDBDBD";
        else if (d.type === 'income_group') baseColorStr = d.assignedColor;
        else if (d.type === 'global_summary') baseColorStr = globalNodeColor;
        else baseColorStr = "#E0E0E0";

        if (typeof baseColorStr !== 'string') baseColorStr = "#E0E0E0";
        
        const baseColor = d3.rgb(baseColorStr);
        return (d.type === 'global_summary') ? baseColor.brighter(2).toString() : baseColor.darker(0.7).toString();
    })
    .attr("stroke-width", d => (d.type === 'global_summary') ? 2.5 : 1.5);


  nodeElements.append("text")
    .attr("class", "node-label")
    .text(d => {
        if (d.type === 'country') return d.suicides > 20000 ? d.id : '';
        if (d.type === 'income_group') return d.displayName;
        if (d.type === 'global_summary') return d.displayName;
        return '';
    })
    .attr("x", d => {
        if (d.type === 'country') return radiusScaleCountry(d.suicides) + 5;
        if (d.type === 'income_group') return radiusScaleGroup(d.countryCount) + 6;
        if (d.type === 'global_summary') return radiusGlobalNode + 7;
        return 12;
    })
    .attr("y", 3);

  nodeElements.append("title")
    .text(d => {
      if (d.type === 'country') {
        return `${d.id}\nIncome Group: ${d.incomeGroup}\nSuicides: ${d.suicides.toLocaleString()}`;
      } else if (d.type === 'income_group') {
        // Tambahkan rata-rata bunuh diri di sini
        return `Income Group: ${d.displayName}\n(Ranked by Avg. Suicides)\nCountries: ${d.countryCount.toLocaleString()}\nTotal Suicides: ${d.totalSuicides.toLocaleString()}\nAVG. SUICIDES PER COUNTRY: ${d.averageSuicides.toFixed(2).toLocaleString()}`;
      
      } else if (d.type === 'global_summary') {
        return `${d.displayName}\nTotal Countries: ${d.totalCountries.toLocaleString()}\nTotal Suicides: ${d.totalSuicides.toLocaleString()}`;
      }
      return '';
    });

  function drag(simulation) {
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x; d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x; d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null; d.fy = null;
    }
    return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
  }

  function ticked() {
    linkElements
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
    nodeElements
      .attr("transform", d => `translate(${d.x},${d.y})`);
  }

  const zoomBehavior = d3.zoom()
      .scaleExtent([0.05, 10])
      .on("zoom", (event) => {
          mainGroup.attr("transform", event.transform);
      });
  svg.call(zoomBehavior);
}

drawForceDirectedGraph(graphNodes, graphLinks, groupColorMapping);

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const container = document.getElementById('force-graph-container');
    if (container) {
      container.innerHTML = '';
      drawForceDirectedGraph(graphNodes, graphLinks, groupColorMapping);
    }
  }, 250);
});

</script>


## Referensi 

- <p style="text-indent:0px;">
  Nevid, J. S. (2012). <strong>Abnormal Psychology: In a Changing World</strong>. <i>Pearson Education</i>.
</p>
