<template>
  <div class="SFTZ1chart" id="SFTZ1"></div>
</template>

<script>
    let colorList = ['rgb(94,116,255)', 'rgb(255,173,136)', 'rgb(31,255,237)', 'rgba(250,250,250,0.3)'];
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/grid');
    require('echarts/lib/chart/pie');
    export default {
        name: "SHGX",
        props: {
            content: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                kinddata: [],
                namedata: [],
            }
        },
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('SFTZ1'));
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{c}"
                    },
                    legend: {
                        top: '5%',
                        right: '5%',
                        orient: 'vertical',
                        textStyle: {
                            color: '#fff',
                            fontSize: 10,
                        },
                        itemWidth: 6,
                        itemHeight: 6,
                        padding: 0,
                        itemGap: 0,
                        icon: 'rect',
                        data: this.namedata,
                    },
                    grid: {
                        left: 15,
                        right: 40,
                        top: 40,
                        bottom: 10,
                        containLabel: true
                    },
                    series: [
                        // 主要展示层的
                        {
                            radius: ['29%', '59%'],
                            center: ['45%', '60%'],
                            type: 'pie',
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true,
                                    length: 15,
                                    length2: 15,
                                    lineStyle: {
                                        color: '#d3d3d3'
                                    },
                                    align: 'right'
                                },
                                color: "#000",
                                emphasis: {
                                    show: true
                                }
                            },
                            label: {
                                show: false,
                            },
                            data: this.kinddata,
                        },
                        // 边框的设置
                        {
                            radius: ['54%', '59%'],
                            center: ['45%', '60%'],
                            type: 'pie',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            animation: false,
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(250,250,250,0.3)'
                                }
                            },
                            data: [{
                                value: 1,
                            }],
                        }
                    ]
                })
            }
        },
        watch: {
            content(val) {
                for (var i = 0; i < val.length; i++) {
                    this.kinddata.push({name: val[i].kind, value: val[i].sumNum})
                    this.namedata.push(val[i].kind)
                }
                this.draw()
            }
        }
    }
</script>

<style scoped>
  .SFTZ1chart {
    width: 100%;
    height: 100%;
  }
</style>
