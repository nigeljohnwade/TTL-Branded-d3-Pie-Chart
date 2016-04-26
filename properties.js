define( [], function () {
    'use strict';
    var dimensions = {
        uses: "dimensions",
    };
    var measures = {
        uses: "measures",
    };
    var sorting = {
        uses: "sorting",
    };    
    var chartTitle = {
        ref: "ttl-piechart-props.chartTitle",
        label: "Chart Title",
        type: "string"
    };
    var captionText = {
        ref: "ttl-piechart-props.captionText",
        label: "Caption Text",
        type: "string",
        component: "textarea"
    };
    var cutOthers = {
        ref: "ttl-piechart-props.cutOthers",
        label: "Cut Others",
        type: "number"
    };
    var innerRadius = {
        ref: "ttl-piechart-props.innerRadius",
        label: "Inner Radius % (Donut Chart)",
        type: "number",
        min: 0,
        max: 100,
        component: 'slider',
        defaultValue: 0
    };   
    var displayLegend = {
        ref: "ttl-piechart-props.displayLegend",
        label: "Display Legend?",
        type: "boolean",
        defaultValue: false
    }
    var legendPosition = {
        ref: "ttl-piechart-props.legendPosition",
        component: "dropdown",
        label: "Legend Position",
        type: "string",
        options: [{
                value: "e",
                label: "East"
            },{
                value: "w",
                label: "West"
            }],
    };
    var labelSection = {
        component: "expandable-items",
        label: "Labels & Legend",
        items: {
            chartTile: chartTitle,
            captionText: captionText,
            displayLegend: displayLegend,
            legendPosition: legendPosition
        }
    };
    var optionSection = {
        component: "expandable-items",
        label: "Options",
        items: {
            cutOthers: cutOthers,
            innerRadius: innerRadius
        }
    };
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorthing: sorting,
            labelSection: labelSection,
            optionSection: optionSection
        }
    };
})