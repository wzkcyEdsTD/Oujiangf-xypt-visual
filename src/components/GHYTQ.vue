<template>
  <div class="GHYTQchart" id="GHYTQ"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        name: "GHYTQ",
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
                let myChart = echarts.init(document.getElementById('GHYTQ'));
                const maxstr = String(Math.max.apply(null, this.numdata));
                const b = Math.pow(10, maxstr.length - 1);
                const maxnum = (parseInt(maxstr[0]) + 1) * b;
                myChart.setOption({
                    grid: {
                        left: 0,
                        right: 10,
                        top: 0,
                        bottom: 0,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: "{b0}: {c0}"
                    },
                    xAxis: {
                        max: maxnum,
                        splitLine: {
                            show: false,//去除网格线
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        }
                    },
                    yAxis: {
                        type: 'category',
                        inverse: true,               //让y轴数据逆向
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#FFF',      //y轴字体颜色
                                fontSize: 18,
                            },
                        },
                        splitLine: {show: false},   //横向的线
                        axisTick: {show: false},    //y轴的端点
                        axisLine: {show: false},    //y轴的线
                        data: this.kinddata,
                    },
                    series: [
                        {
                            name: '数据内框',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: '#00b5eb',
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value;
                                    },
                                    position: 'right',
                                    textStyle: {
                                        color: '#32C5FF',
                                        fontSize: 16
                                    }
                                }
                            },
                            barWidth: 20,
                            data: this.numdata,
                        },
                        {
                            name: '外框',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(255, 255, 255, 0.14)' //rgba设置透明度0.14
                                }
                            },
                            barGap: '-100%',
                            z: 0,
                            barWidth: 20,
                            data: [maxnum, maxnum],
                        }
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
  .GHYTQchart {
    width: 100%;
    height: 100%;
  }
</style>
