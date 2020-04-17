<template>
  <div class="SHYXchart" id="SHYX"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        name: "SHYX.vue",
        props: {
            content: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                kinddata: [],
                numdata: [],
            }
        },
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('SHYX'));
                const maxstr = String(Math.max.apply(null, this.numdata));
                const b = Math.pow(10, maxstr.length - 1);
                const maxnum = (parseInt(maxstr[0]) + 1) * b;
                myChart.setOption({
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        left: 20,
                        right: 20,
                        top: 30,
                        bottom: 10,
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.kinddata,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 40,
                                textStyle: {
                                    color: '#FFF',
                                    fontSize: 16,
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
                            name: '数据量',
                            scale: true,
                            max: maxnum,
                            minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
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
                            name: '数据量',
                            type: 'bar',
                            data: this.numdata,
                            barWidth: 30,
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
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value;
                                    },
                                    position: 'top',
                                    textStyle: {
                                        color: '#FFF',
                                        fontSize: 12
                                    }
                                }
                            },
                        },
                    ]
                })
            }
        },
        watch: {
            content(val) {
                for (var i = 0; i < val.length; i++) {
                    this.kinddata.push(val[i].kind)
                    this.numdata.push(val[i].sumNum)
                }
                this.draw()
            }
        }
    }
</script>

<style scoped>
  .SHYXchart {
    width: 100%;
    height: 100%;
  }
</style>
