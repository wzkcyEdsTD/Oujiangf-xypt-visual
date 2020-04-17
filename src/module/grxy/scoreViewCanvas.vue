<template>
  <div id="scoreViewCanvas"></div>
</template>
<script>
    export default {
        name: 'pie-canvas',
        props: {
            pieData: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        data() {
            return {
                myChart: null,
                kindList: [],
                numList: [],
            }
        },
        methods: {
            setOption() {
                if (!this.myChart) this.myChart = echarts.init(document.getElementById('scoreViewCanvas'));
                const option = {
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        left: 20,
                        right: 20,
                        top: 40,
                        bottom: 0,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: this.kindList,
                        axisTick: {show: false},
                        axisLine: {show: false},
                        axisLabel: {
                            rotate: 45,
                            color: 'rgb(164, 238, 255)',
                            interval:0,
                            fontSize: 9,
                            margin: 20
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name:'人数（万人）',
                        scale: true,
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
                    series: [{
                        name: '人数',
                        data: this.numList,
                        type: 'line',
                        symbol: 'line',
                        smooth: true,
                        itemStyle: {
                            opacity: 0
                        },
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(66, 148, 255, 1)'
                            },
                                {
                                    offset: 1,
                                    color: 'rgba(82, 110, 255, 1)'
                                }])
                        }
                    }]
                };
                this.myChart.setOption(option);
            },
        },
        watch: {
            pieData(val) {
                for (var i = 0; i < val.length; i++) {
                    this.kindList.push(val[i].kind)
                    this.numList.push((val[i].sumNum / 10000))
                }
                this.setOption();
            }
        }
    }
</script>
<style scoped>
  #scoreViewCanvas {
    width: 100%;
    height: 100%;
  }
</style>
