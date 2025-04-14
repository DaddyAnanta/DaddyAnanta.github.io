document.addEventListener("DOMContentLoaded", function () {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const height = 400;
    const width = 500;

    let data = [
        { name: "E", value: 0.12702 },
        { name: "T", value: 0.09056 },
        { name: "A", value: 0.08167 },
        { name: "O", value: 0.07507 },
        { name: "I", value: 0.06966 },
        { name: "N", value: 0.06749 },
        { name: "S", value: 0.06327 },
        { name: "H", value: 0.06094 },
        { name: "R", value: 0.05987 },
        { name: "D", value: 0.04253 }
    ];

    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    let x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

    const tooltip = d3.select("#tooltip");

    function drawChart(container, color) {
        const svg = d3.select(container)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.append("g")
            .attr("fill", color)
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.value))
            .attr("height", d => y(0) - y(d.value))
            .attr("width", x.bandwidth())
            .on("mouseover", function(event, d) {
                d3.select(this).attr("fill", "red");
                tooltip.style("display", "block")
                    .html(`Huruf: <b>${d.name}</b><br>Frekuensi: <b>${d.value.toFixed(5)}</b>`)
                    .style("left", `${event.pageX + 10}px`)
                    .style("top", `${event.pageY - 28}px`);
            })
            .on("mouseout", function() {
                d3.select(this).attr("fill", color);
                tooltip.style("display", "none");
            });

        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);
    }

    d3.selectAll(".visualisation2").each(function (d, i) {
        const colors = ["steelblue", "orange"];
        drawChart(this, colors[i]);
    });

});