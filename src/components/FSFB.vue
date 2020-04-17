<template>
  <div class="FSFBchart" id="FSFB"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/line');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        name: "FSFB.vue",
        props: {
            content: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                fbdata: [],
                numdata: [],
            }
        },
        methods: {
            draw() {
                const matarr = [];
                for (var i = 0; i < this.content.length; i++) {
                    matarr.push(Math.ceil(this.content[i].sumNum / 10000));
                }
                const maxstr = String(Math.max.apply(null, matarr));
                const b = Math.pow(10, maxstr.length - 1);
                const maxnum = (parseInt(maxstr[0]) + 1) * b;
                let myChart = echarts.init(document.getElementById('FSFB'));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        left: 20,
                        right: 20,
                        top: 50,
                        bottom: 30,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: this.fbdata,
                        axisLabel: {
                            interval: 0,
                            rotate: 40,
                            textStyle: {
                                color: '#FFF',
                                fontSize: 10,
                            }
                        },
                        axisLine: {
                            show: false,
                        }
                    },
                    yAxis: {
                        name: '人数(万人)',
                        type: 'value',
                        max: maxnum,
                        min: 0,
                        minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
                        interval: maxnum / 5, //间隔
                        splitLine: {
                            show: true,
                            interval: 0,
                            lineStyle: {
                                color: 'rgba(128, 128, 128, 0.2)',
                            }
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
                    series: [{
                        data: this.numdata,
                        type: 'line',
                        color: '#0AB3F6',
                        smooth: true
                    }]
                })
            }
        },
        mounted() {
        },
        watch: {
            content(val) {
                for (var i = 0; i < val.length; i++) {
                    this.numdata.push(val[i].sumNum / 10000);
                    this.fbdata.push(val[i].credit_level);
                }
                this.draw()
            }
        }
    }
</script>

<style scoped>
  .FSFBchart {
    width: 100%;
    height: 100%;
  }
</style>
