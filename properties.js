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
        ref: "ttl-table-props.chartTitle",
        label: "Chart Title",
        type: "string"
    };
    var captionText = {
        ref: "ttl-table-props.captionText",
        label: "Caption Text",
        type: "string",
        component: "textarea"
    };
    var cutOthers = {
        ref: "ttl-table-props.cutOthers",
        label: "Cut Others",
        type: "number"
    };
    var customSection = {
        component: "expandable-items",
        label: "Labels",
        items: {
            chartTile: chartTitle,
            captionText: captionText,
            cutOthers: cutOthers
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