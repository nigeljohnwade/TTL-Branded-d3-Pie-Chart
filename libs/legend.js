function drawLegend(data, labels, colors, container, layout){
    console.log(data);
    console.log(labels);
    console.log(container);
    console.log(colors);
    var legendContainer = $("<div class='legend'></div>");
    legendContainer.addClass(layout["ttl-piechart-props"].legendPosition)
    var ul = $("<ul></ul>");
    $.each(labels, function(idx, elem){
        var li = "<li class='legend-item'><span class='legend-indicator' style='background-color: " + colors[idx] + "'></span>" + elem + "<br/></li>";
        ul.append(li);
    });
    console.log(ul);
    legendContainer.append(ul);
    container.append(legendContainer);
}