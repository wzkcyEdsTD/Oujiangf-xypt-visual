<template>
  <div id="warningCanvas"></div>
</template>
<script>
    export default {
        name: 'pie-canvas',
        props: {
            barLineData: {
                type: Object,
                default: function () {
                    return null;
                }
            }
        },
        data() {
            return {
                myChart: null
            }
        },
        methods: {
            setOption() {
                if (!this.myChart) this.myChart = echarts.init(document.getElementById('warningCanvas'));
                const option = {
                    grid: {
                        left: 15,
                        right: 40,
                        top: 40,
                        bottom: 20,
                        containLabel: true
                    },
                    legend: {
                        textStyle: {
                            fontSize: 10,
                            color: '#FFF',
                        },
                        right: 50,
                        top: 10,
                        data: ['实际值']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['550以下', '550-599', '600-699', '700-749', '750及以上'],
                            axisLabel: {
                                interval: 0,
                                textStyle: {
                                    color: 'rgba(164,238,255,1)',
                                    fontSize: '10',
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            interval: 10,
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(55, 113, 183, 0.1)'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: 'rgba(203,226,248,1)',
                                    fontSize: '9',
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgba(55, 113, 183, 0.2)', // 颜色
                                }
                            },
                            axisTick: {show: false}
                        },
                        {
                            show: false
                        }
                    ],
                    series: [
                        {
                            name: '实际值',
                            type: 'bar',
                            barWidth: 20,
                            data: [0, 0, 0, 0, 0],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "rgba(80,176,253,1)" // 0% 处的颜色
                                    },
                                        {
                                            offset: 1,
                                            color: "rgba(39,120,250,1)" // 100% 处的颜色
                                        }], false),
                                    label: {
                                        show: true, //开启显示
                                        offset: [0, 5],
                                        position: 'top', //在上方显示
                                        textStyle: { //数值样式
                                            color: '#d9efff',
                                            fontSize: 9,
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
                this.myChart.setOption(option);
            },
            updateData(barLineData) {
                this.myChart.setOption({
                    series: [
                        {
                            name: '实际值',
                            data: barLineData.bar
                        },
                    ]
                })
            }
        },
        mounted() {
            this.setOption();
            this.barLineData && this.updateData(this.barLineData);
        },
        watch: {
            barLineData(val) {
                this.updateData(val);
            }
        }
    }
</script>
<style scoped>
  #warningCanvas {
    width: 100%;
    height: 100%;
  }
</style>
