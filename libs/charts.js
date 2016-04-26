function drawPieChart(data, labels, target, container, cutOthers, layout){
    console.log(layout["ttl-piechart-props"].innerRadius);
    if(typeof cutOthers === "undefined"){
        cutOthers = 8;
    }
    if(data.length > cutOthers){
        var othersData = data.slice(cutOthers);
        data.splice(cutOthers, data.length - cutOthers, d3.sum(othersData));
    }
    if(labels.length > cutOthers){
        labels.splice(cutOthers, labels.length - cutOthers, "Others");
    }    
    var colors = [
        '#1f78b4','#33a02c','#e31a1c','#ff7f00','#6a3d9a','#b15928',
        '#62a3d0','#72bf5b','#ef5a5a','#fe9f37','#9a77b8','#d8ac60',
        '#a6cee3','#b2df8a','#fb9a99','#fdbf6f','#cab2d6','#ffff99'
    ];  
    var width = container.width(),
        height = container.height(),
        radius = Math.min(width, height) / 2,
        innerRadius = Math.min(layout["ttl-piechart-props"].innerRadius * 0.01 * radius, radius -1);
    console.log(innerRadius, radius);
    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(innerRadius - 10);
    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { 
            return d;
        });
    var translation = "translate(" + width / 2 + "," + height / 2 + ")";
    if(layout["ttl-piechart-props"].displayLegend){
        switch(layout["ttl-piechart-props"].legendPosition){
            case 'w':
                translation = "translate(" + (width - radius) + "," + (height / 2)  + ")";
                break;
            case 'e':
                translation = "translate(" + radius + "," + height / 2 + ")";
                break;
            }
    }
    var containerSelection = d3.select(container[0]);
    var chart = containerSelection.append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", translation);
    var g = chart.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");
    g.append("path")
        .attr("d", arc)
        .style("fill", function(d,i) {
            return colors[i]; 
        });
    if(layout["ttl-piechart-props"].displayLegend){
        drawLegend(data, labels, colors, container, layout);
    }
}