define( [
    "css!./css/TTL-Branded-d3-Pie-Chart.css",
    "./libs/d3.min",
    "./libs/charts",
    "./libs/legend",
    "./properties",
    "qlik"
    ],
    function (
        cssContent,
        d3,
        charts,
        legend,
        props,
        qlik
        ) {
        'use strict';

        return {
            definition: props,
            initialProperties: {
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [
                        {
                            qWidth: 10,
                            qHeight: 50
                        }
                    ]
                }
            },
            paint: function ( $element, layout ) {
                if ( !this.table ) {
                    this.table = qlik.table( this );
                }

                $element.empty();
                var _data = [], _labels = [];
                for (var i = 0 ; i < this.table.rows[0].measures.length ; i++ ){
                    var _tmp = this.table.rows.map(function(elem){
                        return elem.measures[i].qNum;
                    });
                    _data.push(_tmp);
                }
                for (var i = 0 ; i < this.table.rows[0].dimensions.length ; i++ ){
                    var _tmp = this.table.rows.map(function(elem){
                        return elem.dimensions[i].qText;
                    });
                    _labels.push(_tmp);
                }                
                drawPieChart(_data[0], _labels[0], 'd3-column-chart', $element, layout["ttl-table-props"].cutOthers, layout);
            },
        };
    } );