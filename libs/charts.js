function drawPieChart(data, target, container, cutOthers){
    if(typeof cutOthers === "undefined"){
        cutOthers = 8;
    }
    if(data.length > cutOthers){
        var othersData = data.slice(cutOthers);
        data.splice(cutOthers, data.length - cutOthers, d3.sum(othersData));
    }
    var colors = [
        '#1f78b4','#33a02c','#e31a1c','#ff7f00','#6a3d9a','#b15928',
        '#62a3d0','#72bf5b','#ef5a5a','#fe9f37','#9a77b8','#d8ac60',
        '#a6cee3','#b2df8a','#fb9a99','#fdbf6f','#cab2d6','#ffff99'
    ];  
    var width = container.width(),
        height = container.height(),
        radius = Math.min(width, height) / 2;
    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { 
            return d;
        });
    var containerSelection = d3.select(container[0]);
    var chart= containerSelection.append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var g = chart.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");
    g.append("path")
        .attr("d", arc)
        .style("fill", function(d,i) {
            return colors[i]; 
        });
}