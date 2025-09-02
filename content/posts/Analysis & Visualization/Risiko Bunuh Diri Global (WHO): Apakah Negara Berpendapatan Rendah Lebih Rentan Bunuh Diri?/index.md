+++
title = 'Risiko Bunuh Diri Global (WHO): Apakah Negara Berpendapatan Rendah Lebih Rentan Bunuh Diri?'
date = 2025-05-25T00:37:00+00:00
draft = false
socialshare = true
description = "Dengan menggunakan metrik Median yang lebih akurat, analisis data WHO 2021 mematahkan asumsi umum dan menunjukkan bahwa negara 'tipikal' di kelompok berpendapatan rendahlah yang paling rentan."
image = "2.webp"
imageBig = "2.webp"
categories= ["Analysis and Visualization"]
tags = ["WHO"]
authors= ["Daddy Ananta"]
avatar="/images/Analysis_and_Visualization/profil.jpeg"
+++

Sebuah asumsi umum seringkali mengaitkan masalah kesehatan mental kompleks seperti bunuh diri dengan tekanan hidup di negara-negara maju. Kita membayangkan stres di lingkungan korporat dan laju hidup yang cepat. Namun, apakah data mendukung narasi ini? Dengan melihat melampaui permukaan, jawabannya menunjuk pada prioritas global yang sering terabaikan.


<div style="background-color: #FFEBEE;margin-bottom: 20px; padding: 25px; border-radius: 10px; border: 1px solid #FFCDD2; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
  <h3 style="color: #B71C1C; margin-top: 0; text-align: left; font-weight: bold;">Seri Risiko Bunuh Diri Global (WHO)</h3>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who--benarkah-jepang-dan-korea-memiliki-tingkat-bunuh-diri-tertinggi-di-dunia/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Benarkah Jepang dan Korea Memiliki Tingkat Bunuh Diri Tertinggi di Dunia?</a>
    </li>
    <li style="margin-bottom: 12px;">
      <a href="/posts/risiko-bunuh-diri-global-who-benarkah-pria-memiliki-risiko-lebih-tinggi-dibandingkan-wanita/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Benarkah Pria Memiliki Risiko Lebih Tinggi Dibandingkan Wanita?</a>
    </li>
    <li style="margin-bottom: 12px;">
      <a href="https://daddyananta.github.io/posts/risiko-bunuh-diri-global-who-kelompok-usia-mana-yang-paling-membutuhkan-perhatian/" style="color: #C62828; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">Kelompok Usia Mana yang Paling Membutuhkan Perhatian?</a>
    </li>
    <li style="margin-bottom: 12px; font-weight: bold; color: #A71C1C; padding-left: 10px; border-left: 3px solid #A71C1C;">Apakah Negara Berpendapatan Rendah Lebih Rentan Bunuh Diri?</li>
  </ul>
</div>

## Melihat Melampaui Rata-Rata yang Menyesatkan

Jika kita hanya melihat rata-rata kasus per negara, gambaran bisa terdistorsi oleh negara berpopulasi masif yang menarik angka rata-rata secara tidak wajar. Untuk memahami bagaimana kondisi negara "tipikal" dalam sebuah kelompok pendapatan, **Median** adalah lensa yang lebih jujur dan akurat.

Visualisasi *force-directed graph* di bawah ini melakukan hal tersebut. Ia mengelompokkan negara berdasarkan pendapatan dan memberi peringkat pada kelompok tersebut berdasarkan *median* kasus bunuh diri. Hasilnya mematahkan asumsi kita. Prioritas risiko tertinggi, yang ditandai dengan warna merah paling gelap, bukanlah kelompok *High-Income*. Justru kelompok **Low-Income** dan **Lower-Middle Income** yang menunjukkan median kasus tertinggi.

## Visualisasi Data

<script src="https://d3js.org/d3.v7.min.js"></script>

<style>
    /* --- CSS DASAR UNTUK KONTAINER DAN GRAFIK --- */
    .chart-container {
        background-color: #fff;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
        margin-top: 20px;
        width: 100%;
        height: 500px;
        cursor: grab;
        position: relative;
    }
    .hugo-d3-force-graph {
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
        stroke: #555;
        stroke-width: 2.5px;
    }
    .link.country-to-group {
        stroke-opacity: 0.5;
    }
    .income-group-node circle {
        stroke-width: 2px;
    }
    .global-summary-node circle {
        stroke: #444;
        stroke-width: 2px;
    }

    /* --- CSS UNTUK TOOLTIP HOVER --- */
    ._hugo-d3-v-tooltip_ {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.95);
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 10px 12px;
        font-size: 12px;
        line-height: 1.5;
        color: #333;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        max-width: 250px;
        z-index: 10;
    }
</style>

<div class="chart-container" id="force-graph-container"></div>

<script>
// Data mentah Anda
const yourRawData = {"Country":{"0":"Algeria","1":"Angola","2":"Benin","3":"Botswana","4":"Burkina Faso","5":"Burundi","6":"Cabo Verde","7":"Cameroon","8":"Central African Republic","9":"Chad","10":"Comoros","11":"Congo","12":"C\u00f4te d'Ivoire","13":"Democratic Republic of the Congo","14":"Equatorial Guinea","15":"Eritrea","16":"Eswatini","17":"Ethiopia","18":"Gabon","19":"Gambia","20":"Ghana","21":"Guinea","22":"Guinea-Bissau","23":"Kenya","24":"Lesotho","25":"Liberia","26":"Madagascar","27":"Malawi","28":"Mali","29":"Mauritania","30":"Mauritius","31":"Mozambique","32":"Namibia","33":"Niger","34":"Nigeria","35":"Rwanda","36":"Sao Tome and Principe","37":"Senegal","38":"Seychelles","39":"Sierra Leone","40":"South Africa","41":"South Sudan","42":"Togo","43":"Uganda","44":"United Republic of Tanzania","45":"Zambia","46":"Zimbabwe","47":"Antigua and Barbuda","48":"Argentina","49":"Bahamas","50":"Barbados","51":"Belize","52":"Bolivia","53":"Brazil","54":"Canada","55":"Chile","56":"Colombia","57":"Costa Rica","58":"Cuba","59":"Dominican Republic","60":"Ecuador","61":"El Salvador","62":"Grenada","63":"Guatemala","64":"Guyana","65":"Haiti","66":"Honduras","67":"Jamaica","68":"Mexico","69":"Nicaragua","70":"Panama","71":"Paraguay","72":"Peru","73":"Saint Lucia","74":"Saint Vincent and the Grenadines","75":"Suriname","76":"Trinidad and Tobago","77":"United States of America","78":"Uruguay","79":"Venezuela (Bolivarian Republic of)","80":"Albania","81":"Armenia","82":"Austria","83":"Azerbaijan","84":"Belarus","85":"Belgium","86":"Bosnia and Herzegovina","87":"Bulgaria","88":"Croatia","89":"Cyprus","90":"Czechia","91":"Denmark","92":"Estonia","93":"Finland","94":"France","95":"Georgia","96":"Germany","97":"Greece","98":"Hungary","99":"Iceland","100":"Ireland","101":"Israel","102":"Italy","103":"Kazakhstan","104":"Kyrgyzstan","105":"Latvia","106":"Lithuania","107":"Luxembourg","108":"Malta","109":"Montenegro","110":"Netherlands (Kingdom of the)","111":"North Macedonia","112":"Norway","113":"Poland","114":"Portugal","115":"Republic of Moldova","116":"Romania","117":"Russian Federation","118":"Serbia","119":"Slovakia","120":"Slovenia","121":"Spain","122":"Sweden","123":"Switzerland","124":"Tajikistan","125":"T\u00fcrkiye","126":"Turkmenistan","127":"Ukraine","128":"United Kingdom of Great Britain and Northern Ireland","129":"Uzbekistan","130":"Afghanistan","131":"Bahrain","132":"Djibouti","133":"Egypt","134":"Iran (Islamic Republic of)","135":"Iraq","136":"Syrian Arab Republic","137":"Tunisia","138":"United Arab Emirates","139":"Yemen","140":"Bangladesh","141":"Bhutan","142":"Democratic People's Republic of Korea","143":"India","144":"Indonesia","145":"Maldives","146":"Myanmar","147":"Nepal","148":"Sri Lanka","149":"Thailand","150":"Timor-Leste","151":"Australia","152":"Brunei Darussalam","153":"Cambodia","154":"China","155":"Fiji","156":"Japan","157":"Kiribati","158":"Lao People's Democrati","159":"Malaysia","160":"Micronesia (Federated States of)","161":"Mongolia","162":"New Zealand","163":"Papua New Guinea","164":"Philippines","165":"Republic of Korea","166":"Samoa","167":"Singapore","168":"Solomon Islands","169":"Vanuatu","170":"Viet Nam","171":"Tonga"},"Income group b":{"0":"Upper-Middle-Income","1":"Lower-Middle-Income","2":"Lower-Middle-Income","3":"Upper-Middle-Income","4":"Low-Income","5":"Low-Income","6":"Lower-Middle-Income","7":"Lower-Middle-Income","8":"Low-Income","9":"Low-Income","10":"Lower-Middle-Income","11":"Lower-Middle-Income","12":"Lower-Middle-Income","13":"Low-Income","14":"Upper-Middle-Income","15":"Low-Income","16":"Lower-Middle-Income","17":"Low-Income","18":"Upper-Middle-Income","19":"Low-Income","20":"Lower-Middle-Income","21":"Lower-Middle-Income","22":"Low-Income","23":"Lower-Middle-Income","24":"Lower-Middle-Income","25":"Low-Income","26":"Low-Income","27":"Low-Income","28":"Low-Income","29":"Lower-Middle-Income","30":"Upper-Middle-Income","31":"Low-Income","32":"Upper-Middle-Income","33":"Low-Income","34":"Lower-Middle-Income","35":"Low-Income","36":"Lower-Middle-Income","37":"Lower-Middle-Income","38":"High-Income","39":"Low-Income","40":"Upper-Middle-Income","41":"Low-Income","42":"Low-Income","43":"Low-Income","44":"Lower-Middle-Income","45":"Lower-Middle-Income","46":"Lower-Middle-Income","47":"High-Income","48":"Upper-Middle-Income","49":"High-Income","50":"High-Income","51":"Upper-Middle-Income","52":"Lower-Middle-Income","53":"Upper-Middle-Income","54":"High-Income","55":"High-Income","56":"Upper-Middle-Income","57":"Upper-Middle-Income","58":"Upper-Middle-Income","59":"Upper-Middle-Income","60":"Upper-Middle-Income","61":"Upper-Middle-Income","62":"Upper-Middle-Income","63":"Upper-Middle-Income","64":"High-Income","65":"Lower-Middle-Income","66":"Lower-Middle-Income","67":"Upper-Middle-Income","68":"Upper-Middle-Income","69":"Lower-Middle-Income","70":"High-Income","71":"Upper-Middle-Income","72":"Upper-Middle-Income","73":"Upper-Middle-Income","74":"Upper-Middle-Income","75":"Upper-Middle-Income","76":"High-Income","77":"High-Income","78":"High-Income","79":"Upper-Middle-Income","80":"Upper-Middle-Income","81":"Upper-Middle-Income","82":"High-Income","83":"Upper-Middle-Income","84":"Upper-Middle-Income","85":"High-Income","86":"Upper-Middle-Income","87":"High-Income","88":"High-Income","89":"High-Income","90":"High-Income","91":"High-Income","92":"High-Income","93":"High-Income","94":"High-Income","95":"Upper-Middle-Income","96":"High-Income","97":"High-Income","98":"High-Income","99":"High-Income","100":"High-Income","101":"High-Income","102":"High-Income","103":"Upper-Middle-Income","104":"Lower-Middle-Income","105":"High-Income","106":"High-Income","107":"High-Income","108":"High-Income","109":"Upper-Middle-Income","110":"High-Income","111":"Upper-Middle-Income","112":"High-Income","113":"High-Income","114":"High-Income","115":"Upper-Middle-Income","116":"High-Income","117":"High-Income","118":"Upper-Middle-Income","119":"High-Income","120":"High-Income","121":"High-Income","122":"High-Income","123":"High-Income","124":"Lower-Middle-Income","125":"Upper-Middle-Income","126":"Upper-Middle-Income","127":"Upper-Middle-Income","128":"High-Income","129":"Lower-Middle-Income","130":"Low-Income","131":"High-Income","132":"Lower-Middle-Income","133":"Lower-Middle-Income","134":"Upper-Middle-Income","135":"Upper-Middle-Income","136":"Low-Income","137":"Lower-Middle-Income","138":"High-Income","139":"Low-Income","140":"Lower-Middle-Income","141":"Lower-Middle-Income","142":"Low-Income","143":"Lower-Middle-Income","144":"Upper-Middle-Income","145":"Upper-Middle-Income","146":"Lower-Middle-Income","147":"Lower-Middle-Income","148":"Lower-Middle-Income","149":"Upper-Middle-Income","150":"Lower-Middle-Income","151":"High-Income","152":"High-Income","153":"Lower-Middle-Income","154":"Upper-Middle-Income","155":"Upper-Middle-Income","156":"High-Income","157":"Lower-Middle-Income","158":"Lower-Middle-Income","159":"Upper-Middle-Income","160":"Lower-Middle-Income","161":"Upper-Middle-Income","162":"High-Income","163":"Lower-Middle-Income","164":"Lower-Middle-Income","165":"High-Income","166":"Lower-Middle-Income","167":"High-Income","168":"Lower-Middle-Income","169":"Lower-Middle-Income","170":"Lower-Middle-Income","171":"Upper-Middle-Income"},"Number of suicides, c 2021":{"0":"976","1":"2802","2":"956","3":"201","4":"1869","5":"992","6":"77","7":"2287","8":"470","9":"929","10":"49","11":"396","12":"2191","13":"8695","14":"124","15":"443","16":"329","17":"7412","18":"173","19":"124","20":"1729","21":"661","22":"158","23":"2438","24":"648","25":"314","26":"1808","27":"1517","28":"931","29":"128","30":"135","31":"3363","32":"241","33":"1097","34":"10 912","35":"1159","36":"2","37":"1164","38":"5","39":"497","40":"13 712","41":"857","42":"829","43":"2524","44":"3207","45":"1397","46":"2740","47":"1","48":"3594","49":"13","50":"10","51":"17","52":"501","53":"15 907","54":"3631","55":"1496","56":"2534","57":"408","58":"1534","59":"467","60":"1336","61":"478","62":"2","63":"869","64":"202","65":"889","66":"306","67":"48","68":"8872","69":"282","70":"143","71":"424","72":"510","73":"9","74":"0","75":"138","76":"199","77":"53 162","78":"841","79":"2437","80":"78","81":"69","82":"1301","83":"160","84":"1444","85":"2124","86":"291","87":"654","88":"615","89":"40","90":"1403","91":"613","92":"199","93":"807","94":"10 957","95":"193","96":"10 799","97":"495","98":"1597","99":"44","100":"430","101":"391","102":"4176","103":"2882","104":"464","105":"287","106":"618","107":"53","108":"34","109":"68","110":"2040","111":"107","112":"713","113":"5199","114":"1197","115":"428","116":"1852","117":"31 172","118":"1035","119":"539","120":"398","121":"4160","122":"1442","123":"1221","124":"242","125":"2332","126":"484","127":"9397","128":"6461","129":"2857","130":"1438.0","131":"70.0","132":"89.0","133":"699.0","134":"3603.0","135":"1281.0","136":"127.0","137":"222.0","138":"167.0","139":"1564.0","140":"4714","141":"38","142":"2442","143":"177 567","144":"3333","145":"8","146":"1545","147":"2989","148":"3347","149":"11 899","150":48,"151":"3394","152":"14","153":"764","154":"127 601","155":"76","156":"21 904","157":"22","158":"341","159":"1938","160":"22","161":"618","162":"609","163":"182","164":"3947","165":"14 273","166":"26","167":"449","168":"149","169":"48","170":"7222","171":5}};

// Fungsi untuk mentransformasi data mentah (MENGGUNAKAN MEDIAN)
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
            incomeGroupsMap.set(incomeGroupStr, {
                suicideValues: [], 
                totalSuicides: 0,
                countryCount: 0
            });
        }
        
        const groupData = incomeGroupsMap.get(incomeGroupStr);
        if (!isNaN(suicides)) {
            groupData.suicideValues.push(suicides);
            groupData.totalSuicides += suicides;
        }
        groupData.countryCount++;
    }

    const incomeGroupNodesArray = [];
    let overallTotalSuicides = 0;
    let overallTotalCountries = 0;

    for (const [groupName, data] of incomeGroupsMap) {
        
        // Logika untuk menghitung Median
        const sortedValues = [...data.suicideValues].sort((a, b) => a - b);
        let medianSuicides = 0;
        if (sortedValues.length > 0) {
            const midIndex = Math.floor(sortedValues.length / 2);
            if (sortedValues.length % 2 === 0) {
                medianSuicides = (sortedValues[midIndex - 1] + sortedValues[midIndex]) / 2;
            } else {
                medianSuicides = sortedValues[midIndex];
            }
        }

        incomeGroupNodesArray.push({
            id: `income_group_${groupName.replace(/\s+/g, '_')}`,
            type: "income_group",
            displayName: groupName,
            totalSuicides: data.totalSuicides,
            countryCount: data.countryCount,
            medianSuicides: medianSuicides, // Menyimpan nilai median
        });
        overallTotalSuicides += data.totalSuicides;
        overallTotalCountries += data.countryCount;
    }

    // Mengurutkan berdasarkan Median
    incomeGroupNodesArray.sort((a, b) => b.medianSuicides - a.medianSuicides);

    const incomeGroupRankColors = ["#4A102A", "#85193C", "#C5172E", "#FF0B55"];
    const groupNameToAssignedColor = new Map();

    incomeGroupNodesArray.forEach((node, index) => {
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
    countryNodes.forEach(country => { links.push({ source: country.id, target: `income_group_${country.incomeGroup.replace(/\s+/g, '_')}`, value: 1, type: 'country_to_group' }); });
    incomeGroupNodesArray.forEach(igNode => { links.push({ source: igNode.id, target: globalSummaryNode.id, value: igNode.countryCount, type: 'group_to_global' }); });
    return { nodes: allNodes, links, groupColorMapping: groupNameToAssignedColor };
}

// Proses data sekali di awal
const { nodes: graphNodes, links: graphLinks, groupColorMapping } = transformDataAdvanced(yourRawData);

// Fungsi utama untuk menggambar grafik
function drawForceDirectedGraph(nodesData, linksData, groupColorsMap) {
    const container = document.getElementById('force-graph-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    const globalNodeColor = "#000000";

    const nodes = nodesData.map(d => ({...d}));
    const links = linksData.map(d => ({...d}));

    const minSuicides = d3.min(nodes.filter(n => n.type === 'country'), d => d.suicides);
    const maxSuicides = d3.max(nodes.filter(n => n.type === 'country'), d => d.suicides);
    const radiusScaleCountry = d3.scaleSqrt().domain([minSuicides || 0, maxSuicides || 1]).range([4, 22]);
    const minCountryCount = d3.min(nodes.filter(n => n.type === 'income_group'), d => d.countryCount);
    const maxCountryCount = d3.max(nodes.filter(n => n.type === 'income_group'), d => d.countryCount);
    const radiusScaleGroup = d3.scaleSqrt().domain([minCountryCount || 0, maxCountryCount || 1]).range([20, 45]);
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

    const tooltip = d3.select("body").append("div")
        .attr("class", "_hugo-d3-v-tooltip_");

    const linkElements = mainGroup.append("g").selectAll("line").data(links).join("line").attr("class", d => `link ${d.type}`).attr("stroke-width", d => d.type === 'group_to_global' ? 2.5 : 1.5);
    
    const nodeElements = mainGroup.append("g").selectAll("g").data(nodes).join("g").attr("class", d => `${d.type}-node`).call(drag(simulation))
        .on("mouseover", (event, d) => {
            tooltip.transition()
                .duration(200)
                .style("opacity", .95);
            
            let tooltipContent = '';
            if (d.type === 'country') {
                tooltipContent = `<strong>${d.id}</strong><br>Income Group: ${d.incomeGroup}<br>Suicides: ${d.suicides.toLocaleString()}`;
            } else if (d.type === 'income_group') {
                // Teks tooltip diperbarui untuk menampilkan Median
                tooltipContent = `<strong>Income Group: ${d.displayName}</strong><br>(Ranked by Median Suicides)<br>Countries: ${d.countryCount.toLocaleString()}<br>Total Suicides: ${d.totalSuicides.toLocaleString()}<br>MEDIAN SUICIDES PER COUNTRY: ${d.medianSuicides.toFixed(2).toLocaleString()}`;
            } else if (d.type === 'global_summary') {
                tooltipContent = `<strong>${d.displayName}</strong><br>Total Countries: ${d.totalCountries.toLocaleString()}<br>Total Suicides: ${d.totalSuicides.toLocaleString()}`;
            }

            tooltip.html(tooltipContent)
                .style("left", (event.pageX + 15) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mousemove", (event, d) => {
            tooltip.style("left", (event.pageX + 15) + "px")
                   .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", (event, d) => {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
    
    const getNodeRadius = (d) => { if (d.type === 'country') return radiusScaleCountry(d.suicides); if (d.type === 'income_group') return radiusScaleGroup(d.countryCount); if (d.type === 'global_summary') return radiusGlobalNode; return 8; };
    
    nodeElements.append("circle").attr("r", d => getNodeRadius(d)).attr("fill", d => { if (d.type === 'country') { return groupColorsMap.get(d.incomeGroup) || "#BDBDBD"; } if (d.type === 'income_group') { return d.assignedColor; } if (d.type === 'global_summary') { return globalNodeColor; } return "#E0E0E0"; }).attr("stroke", d => { let baseColorStr; if (d.type === 'country') baseColorStr = groupColorsMap.get(d.incomeGroup) || "#BDBDBD"; else if (d.type === 'income_group') baseColorStr = d.assignedColor; else if (d.type === 'global_summary') baseColorStr = globalNodeColor; else baseColorStr = "#E0E0E0"; if (typeof baseColorStr !== 'string') baseColorStr = "#E0E0E0"; const baseColor = d3.rgb(baseColorStr); return (d.type === 'global_summary') ? baseColor.brighter(2).toString() : baseColor.darker(0.7).toString(); }).attr("stroke-width", d => (d.type === 'global_summary') ? 2.5 : 1.5);
    nodeElements.append("text").attr("class", "node-label").text(d => { if (d.type === 'country') return d.suicides > 20000 ? d.id : ''; if (d.type === 'income_group') return d.displayName; if (d.type === 'global_summary') return d.displayName; return ''; }).attr("x", d => getNodeRadius(d) + (d.type === 'income_group' ? 6 : (d.type === 'global_summary' ? 7 : 5))).attr("y", 3);
    
    function drag(simulation) { function dragstarted(event, d) { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; } function dragged(event, d) { d.fx = event.x; d.fy = event.y; } function dragended(event, d) { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; } return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended); }
    function ticked() { linkElements.attr("x1", d => d.source.x).attr("y1", d => d.source.y).attr("x2", d => d.target.x).attr("y2", d => d.target.y); nodeElements.attr("transform", d => `translate(${d.x},${d.y})`); }

    const zoomBehavior = d3.zoom().scaleExtent([0.1, 8]).on("zoom", (event) => { mainGroup.attr("transform", event.transform); });
    svg.call(zoomBehavior);

    const initialScale = 0.3;
    const initialX = (width - width * initialScale) / 2;
    const initialY = (height - height * initialScale) / 2;
    const initialTransform = d3.zoomIdentity.translate(initialX, initialY).scale(initialScale);
    svg.call(zoomBehavior.transform, initialTransform);
}

drawForceDirectedGraph(graphNodes, graphLinks, groupColorMapping);

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const container = document.getElementById('force-graph-container');
        if (container) {
            d3.select("._hugo-d3-v-tooltip_").remove();
            container.innerHTML = '';
            drawForceDirectedGraph(graphNodes, graphLinks, groupColorMapping);
        }
    }, 250);
});
</script>


## Prioritas Tersembunyi: Krisis di Negara Berpendapatan Rendah

Ini adalah temuan krusial: meskipun kita sering mendengar tentang tantangan di negara maju, negara "khas" di kelompok berpendapatan rendah menghadapi beban yang lebih berat. Perasaan putus asa di sini mungkin bukan tentang tekanan karier, melainkan tentang akses terbatas ke layanan kesehatan, ketidakstabilan ekonomi, dan stigma yang lebih kuat.

Bagi para pembuat kebijakan dan organisasi global, data ini adalah panggilan untuk bertindak. Ia mengindikasikan prioritas mendesak untuk:
* **Membangun Infrastruktur Kesehatan Mental Dasar:** Di banyak negara berpendapatan rendah, akses ke dukungan profesional hampir tidak ada. Prioritasnya adalah membangun fondasi layanan yang terjangkau dan dapat diakses.
* **Integrasi dengan Bantuan Kemanusiaan:** Dukungan kesehatan mental harus menjadi bagian tak terpisahkan dari program bantuan ekonomi dan sosial, bukan sebagai tambahan yang mewah.

## Kesimpulan: Data Memanggil Kita untuk Mengubah Fokus

Analisis ini secara tegas menjawab: ya, jika kita melihat melampaui outlier, negara berpendapatan rendah secara tipikal lebih rentan. Kemakmuran ekonomi negara bukanlah faktor pelindung utama dari krisis kesehatan mental. Oleh karena itu, prioritas global harus mencakup investasi serius dalam membangun infrastruktur kesehatan mental dasar di wilayah-wilayah yang paling membutuhkannya, memastikan bahwa bantuan sampai kepada mereka yang risikonya tertinggi namun suaranya paling jarang kita dengar.

<a href="https://daddyananta.github.io//categories/quantitative/">Perdalam pemahaman Quantitative Anda di sini</a>

## Referensi
<p style="text-indent:0px;">Nevid, J. S. (2012). <strong>Abnormal Psychology: In a Changing World</strong>. <i>Pearson Education</i>.</p>

## Penelusuran Terkait
<ul>
    <li><a href="https://www.who.int/news/item/04-09-2014-suicide-preventable-global-imperative">Suicide is a preventable global imperative - World Health Organization</a></li>
    <li><a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(22)00210-3/fulltext">Suicide risk and prevention in low-income and middle-income countries - The Lancet</a></li>
    <li><a href="https://www.worldbank.org/en/topic/mental-health">Mental Health - The World Bank</a></li>
    <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5479082/">Suicide prevention in low- and middle-income countries - National Institutes of Health (NIH)</a></li>
    <li><a href="https://ourworldindata.org/mental-health">Mental Health - Our World in Data</a></li>
    <li><a href="https://www.mhinnovation.net/">Mental Health Innovation Network</a></li>
    <li><a href="https://globalmentalhealth.org/">Global Mental Health Action Network</a></li>
    <li><a href="https://www.nature.com/articles/d41586-022-01562-w">Suicide prevention needs a better evidence base - Nature</a></li>
</ul>