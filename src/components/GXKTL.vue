<template>
  <div class="GXKTLchart" id="GXKTL"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        name: "GXKTL.vue",
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
                areadata: [],
                numdata1: [],
                numdata2: [],
            }
        },
        methods: {
            draw() {
                const matarr = [];
                for (var i = 0; i < this.content1.length; i++) {
                    matarr.push(this.content1[i].sumNum);
                }
                const maxstr = String(Math.max.apply(null, matarr));
                const b = Math.pow(10, maxstr.length - 1);
                const maxnum = (parseInt(maxstr[0]) + 1) * b;
                let myChart = echarts.init(document.getElementById('GXKTL'));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        left: 15,
                        right: 40,
                        top: 50,
                        bottom: 5,
                        containLabel: true
                    },
                    legend: {
                        textStyle: {
                            fontSize: 10,
                            color: '#FFF',
                        },
                        right: 50,
                        top: 10,
                        data: ['开通用户数', '活跃用户数'],
                        selectedMode: 'single',
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.areadata,
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
                            type: 'value',
                            name: '人数(量)',
                            scale: true,
                            //max: maxnum,
                            //min: 0,
                            minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
                            //interval: maxnum / 5, //间隔
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
                            name: '开通用户数',
                            type: 'bar',
                            data: this.numdata1,
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
                            name: '活跃用户数',
                            type: 'bar',
                            data: this.numdata2,
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
                    ]
                })
            }
        },
        mounted() {
        },
        watch: {
            content1(val) {
                for (var i = 0; i < val.length; i++) {
                    this.areadata.push(val[i].area);
                    this.numdata1.push(val[i].sumNum);
                }
                this.draw()
            },
            content2(val) {
                for (var i = 0; i < val.length; i++) {
                    this.numdata2.push(val[i].sumNum);
                }
                this.draw()
            },
        }
    }
</script>

<style scoped>
  .GXKTLchart {
    width: 100%;
    height: 100%;
  }
</style>
