<template>
  <div id="warningCanvas"></div>
</template>
<script>
    export default {
        name: 'pie-canvas',
        props: {
            barData: {
                type: Array,
                default: function () {
                    return [];
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
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        y2: '30',
                        x: '30',
                        y: '10',
                        x2: '10',
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(55, 113, 183, 0.1)'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: 'rgba(164, 238, 255, 1)',
                                    fontSize: '10',
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
                            name: '当月初始数据量',
                            type: 'bar',
                            stack: '数据量',
                            data: [0, 0, 0, 0, 0, 0, 0, 4236, 4236, 0, 0, 0],
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
                                }
                            }
                        },
                        {
                            name: '当月增长数据量',
                            type: 'bar',
                            stack: '数据量',
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 321, 0, 0, 0],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: "#FFA07A" // 0% 处的颜色
                                    },
                                        {
                                            offset: 1,
                                            color: "#FF4500" // 100% 处的颜色
                                        }], false),
                                }
                            }
                        }
                    ]
                };
                this.myChart.setOption(option);
            },
            /*		updateData (barData) {
                  this.myChart.setOption({
                    series: [
                      {
                        name: '每月数据统计',
                        data: barData
                      }
                    ]
                  })
                }*/
        },
        mounted() {
            this.setOption();
            //this.barData.length > 0 && this.updateData(this.barData);
        },
        watch: {
            /*		barData (val) {
                  this.updateData(val);
                }*/
        }
    }
</script>
<style scoped>
  #warningCanvas {
    width: 100%;
    height: 100%;
  }
</style>
