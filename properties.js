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
    var customSection = {
        component: "expandable-items",
        label: "Labels",
        items: {
            chartTile: chartTitle,
            captionText: captionText,
            cutOthers: cutOthers,
            displayLegend: displayLegend,
            legendPosition: legendPosition
        }
    };
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorthing: sorting,
            customSection: customSection
        }
    };
})