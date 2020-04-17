<template>
  <div class="ZYSXBARchart" id="ZYSXBAR"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        name: "ZYSXBAR",
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('ZYSXBAR'));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        left: 15,
                        right: 0,
                        top: 20,
                        bottom: 20,
                        containLabel: true
                    },
                    legend: {
                        textStyle: {
                            fontSize: 10,
                            color: '#FFF',
                        },
                        right: 50,
                        top: 0,
                        data: ['老赖', '行政处罚', '黑名单']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['鹿城', '龙湾', '瓯海', '乐清', '瑞安', '永嘉', '平阳', '苍南', '泰顺', '洞头', '文成'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#A4EEFF',
                                    fontSize: 12,
                                }
                            },
                            axisLine: {
                                lineStyle: {color: '#FFF'}
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            max: 40000,
                            min: 0,
                            boundaryGap: [0.2, 0.2],
                            splitLine: {
                                show: false,//去除网格线
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#FFF',
                                    fontSize: 10,
                                }
                            },
                            axisLine: {
                                lineStyle: {color: '#FFF'}
                            }
                        },
                    ],
                    series: [
                        {
                            name: '老赖',
                            type: 'bar',
                            stack: '失信行为',
                            data: [7466, 1702, 2665, 3538, 3316, 8907, 9684, 18254, 9612, 1664, 3982],
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: "rgb(32,255,244)",
                                }
                            },
                        },
                        {
                            name: '行政处罚',
                            type: 'bar',
                            stack: '失信行为',
                            data: [1569, 478, 785, 373, 665, 3089, 2257, 5978, 381, 1096, 5938],
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: "rgb(79,52,255)",
                                }
                            },
                        },
                        {
                            name: '黑名单',
                            type: 'bar',
                            stack: '失信行为',
                            data: [3437, 703, 1418, 820, 1715, 3423, 3706, 5454, 577, 513, 3665],
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: "rgb(0,65,232)",
                                }
                            },
                        },
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
  .ZYSXBARchart {
    width: 100%;
    height: 100%;
  }
</style>
