<template>
  <div class="SJLR2hart" id="SJLR2"></div>
</template>

<script>
    export default {
        name: "SJLR2",
        data() {
            return {}
        },
        methods: {
            draw() {
                const targetCoord = [1500, 0];
                const curveness = 0.2;
                const linesData = [];
                const categories = [{
                    name: '流入中',
                    label: {
                        normal: {
                            fontSize: '14',
                            distance: -2,
                        }
                    },
                }, {
                    name: '暂无流入',
                    label: {
                        normal: {
                            fontSize: '14',
                            distance: 2,
                        }
                    },
                }]

                const item = {
                    name: "数据中心",
                    value: targetCoord,
                    symbolSize: [1, 1],
                    //symbol: 'image://' + data_clound,
                    symbolOffset: ['-20%', '-20%'],
                    symbolKeepAspect: true,
                    z: 22,
                    label: {
                        normal: {
                            fontSize: '16'
                        }
                    },
                }
                var items = []; //let a = 0;a<graphData.length;a++
                var graphData = [{
                    "name": '社保',
                }, {
                    "name": '公积金',
                }, {
                    "name": '行政处罚',
                }, {
                    "name": '黑名单',
                }];
                for (let a = graphData.length - 1; a >= 0; a--) {
                    let objectGraph = {};
                    //得到社保的判断
                    var valueMax = (graphData.length - 1 - a) * 100; //valueMax的值影响输入的值
                    if (graphData[a].speed == "undefined" || graphData[a].speed == "") {
                        objectGraph = {
                            name: graphData[a].name,
                            category: 1,
                            value: [0, valueMax],
                            symbolSize: [1, 1],
                            //symbol: 'image://' + graphData[a].imgUrl,
                            symbolOffset: ['-90%', '50%'],
                            symbolKeepAspect: true,
                        }
                    } else {
                        objectGraph = {
                            name: graphData[a].name,
                            category: 0,
                            active: true,
                            value: [0, valueMax],
                            symbolSize: [1, 1],
                            //symbol: 'image://' + graphData[a].imgUrl,
                            symbolOffset: ['-90%', '50%'],
                            symbolKeepAspect: true
                        }
                    }
                    items.push(objectGraph)
                }

                const data = items.concat([item]);
                items.forEach(function (el) {
                    if (el.active) {
                        linesData.push([{
                            coord: el.value
                        }, {
                            coord: targetCoord
                        }])
                    }
                })

                const links = items.map((el) => {
                    return {
                        source: el.name,
                        target: item.name,
                        speed: el.speed,
                        lineStyle: {
                            normal: {
                                color: el.speed ? '#20b4f4' : '#20b4f4',
                                curveness: curveness,
                            }
                        },
                    }
                })

                var option = {
                    grid: {
                        top: "16%",
                        bottom: "16%",
                    },
                    color: [
                        '#20b4f4',
                        '#f9f48e'
                    ],
                    xAxis: {
                        show: false,
                        type: 'value',
                        inverse:true
                    },
                    yAxis: {
                        show: false,
                        type: 'value'
                    },
                    series: [{
                        type: 'graph',
                        layout: 'none',
                        coordinateSystem: 'cartesian2d',
                        symbolSize: 60,
                        z: 1,
                        edgeLabel: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize: 14,
                                    color: "#fff",//50kb的文字
                                },
                                formatter: function (params) {
                                    let txt = ''
                                    if (params.data.speed !== undefined) {
                                        txt = params.data.speed
                                    }
                                    return txt
                                },
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                curveness: 0.3,
                                shadowColor: 'none'
                            },
                        },
                        edgeSymbol: ['none', 'none'],
                        edgeSymbolSize: 8,
                        data: data,
                        links: links,
                        categories: categories
                    }, {
                        name: 'A',
                        type: 'lines',
                        coordinateSystem: 'cartesian2d',
                        z: 1,
                        effect: {
                            show: true,
                            smooth: false,
                            trailLength: 0,
                            symbol: "arrow",
                            color: 'rgba(32,180,244,0.8)',
                            symbolSize: 12
                        },
                        lineStyle: {
                            normal: {
                                curveness: curveness,
                                color: 'transparent'
                            }
                        },
                        data: linesData
                    }]
                }
                let myChart = echarts.init(document.getElementById('SJLR2'));
                myChart.setOption(option);
            }
        },
        mounted() {
            this.draw();
        },
    }
</script>

<style scoped>
  .SJLR2hart {
    width: 100%;
    height: 100%;
  }
</style>
