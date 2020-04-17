<template>
  <div class="YKTSYchart" id="YKTSY"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/component/title');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/grid');
    require('echarts/lib/chart/line');
    export default {
        name: "YKTSY.vue",
        props: {
            content1: {
                type: Array,
                default: []
            },
            content2: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                monthdata: [],
                usedata: [],
                opendata: [],
            }
        },
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('YKTSY'));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        right: 20,
                        bottom: 30,
                        top: 80,
                        left: 20,
                        containLabel: true
                    },
                    legend: {
                        textStyle: {
                            color: '#FFF',
                            fontSize: 13,
                        },
                        right: 40,
                        top: 30,
                        data: ['开通', '使用']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.monthdata,
                            axisTick: {
                                alignWithLabel: true
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
                        }
                    ],
                    yAxis: [
                        {
                            name: '开通量',
                            type: 'value',
                            max: 2000,
                            min: 0,
                            boundaryGap: [0.2, 0.2],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(128,128,128,0.5)',
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#FFF',
                                    fontSize: 10,
                                }
                            },
                            axisLine: {
                                lineStyle: {color: 'rgba(255,255,255,0.5)'}
                            }
                        },
                        {
                            name: '使用量',
                            type: 'value',
                            scale: true,
                            max: 4000000,
                            min: 0,
                            boundaryGap: [0.2, 0.2],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(128,128,128,0.5)',
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#FFF',
                                    fontSize: 10,
                                }
                            },
                            axisLine: {
                                lineStyle: {color: 'rgba(255,255,255,0.5)'}
                            }
                        },
                    ],
                    series: [
                        {
                            name: '开通',
                            type: 'bar',
                            data: this.opendata,
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#18E5F7'
                                    }, {
                                        offset: 1,
                                        color: '#1963E2'
                                    }]),
                                }
                            },
                        },
                        {
                            name: '使用',
                            type: 'line',
                            data: this.usedata,
                            yAxisIndex: 1,
                            itemStyle: {
                                normal: {color: '#F1A12D'}
                            }
                        },
                    ]
                })
            }
        },
        mounted() {
        },
        watch: {
            content1(val) {
                for (var i = 0; i < val.length; i++) {
                    this.monthdata.push(val[i].usedate);
                    this.usedata.push(val[i].sumNum);
                }
                this.draw()
            },
            content2(val) {
                for (var i = 0; i < val.length; i++) {
                    this.opendata.push(val[i].sumNum);
                }
                this.draw()
            },
        }
    }
</script>

<style scoped>
  .YKTSYchart {
    width: 100%;
    height: 100%;
  }
</style>
