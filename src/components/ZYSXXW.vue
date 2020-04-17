<template>
  <div class="ZYSXXWchart" id="ZYSXXW"></div>
</template>

<script>
    let colorList = ['rgb(32,255,244)', 'rgb(0,65,232)', 'rgb(79,52,255)', 'rgb(123,141,255)', 'rgb(255,143,92)', 'rgb(128,213,255)', 'rgb(0,145,255)', 'rgba(250,250,250,0.3)'];
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/grid');
    require('echarts/lib/chart/pie');
    export default {
        name: "ZYSXXW",
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('ZYSXXW'));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        containLabel: true
                    },
                    legend: {
                        textStyle: {
                            color: '#FFF',
                            fontSize: 13,
                        },
                        right: 20,
                        top: 30,
                        orient: 'vertical',
                        data: ['老赖', '黑名单', '行政处罚', '欠税', '恶意透支', '贷款逾期', '欠费']
                    },
                    calculable: true,
                    series: [
                        // 主要展示层的
                        {
                            radius: ['29%', '59%'],
                            center: ['35%', '60%'],
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
                                    length: 10,
                                    length2: 10,
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
                                normal: {
                                    formatter: '{d}%',
                                    //padding: [0, -90],
                                    height: 10,
                                    color: "#FFF",
                                    rich: {
                                        a: {
                                            width: 38,
                                            height: 38,
                                            lineHeight: 50,

                                            align: 'left'
                                        },
                                        b: {
                                            width: 29,
                                            height: 45,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        c: {
                                            width: 34,
                                            height: 33,
                                            lineHeight: 50,

                                            align: 'left'
                                        },
                                        nameStyle: {
                                            fontSize: 16,
                                            color: "#555",
                                            align: 'left'
                                        },
                                        rate: {
                                            fontSize: 20,
                                            color: "#1ab4b8",
                                            align: 'left'
                                        }
                                    }
                                }
                            },
                            data: [
                                {value: 105980, name: '老赖'},
                                {value: 42645, name: '黑名单'},
                                {value: 42155, name: '行政处罚'},
                                {value: 5340, name: '欠税'},
                                {value: 2, name: '恶意透支'},
                                {value: 59447, name: '贷款逾期'},
                                {value: 1047, name: '欠费'}],
                        },
                        // 边框的设置
                        {
                            radius: ['54%', '59%'],
                            center: ['35%', '60%'],
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
        mounted() {
            this.draw();
        }
    }
</script>

<style scoped>
  .ZYSXXWchart {
    width: 100%;
    height: 100%;
  }
</style>
