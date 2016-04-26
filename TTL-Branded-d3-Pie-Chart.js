define( [
    "css!./css/TTL-Branded-d3-Line-Chart.css",
    "./libs/d3.min",
    "./libs/charts",
    "./properties",
    "qlik"
    ],
    function (
        cssContent,
        d3,
        charts,
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
                var hc = layout.qHyperCube;
                if ( !this.table ) {
                    this.table = qlik.table( this );
                }

                $element.empty();
                var _data = [];
                for (var i = 0 ; i < this.table.rows[0].measures.length ; i++ ){
                    var _tmp = this.table.rows.map(function(elem){
                        return elem.measures[i].qNum;
                    });
                    _data.push(_tmp);
                }
                drawPieChart(_data[0], 'd3-column-chart', $element, layout["ttl-table-props"].cutOthers);
            },
        };
    } );