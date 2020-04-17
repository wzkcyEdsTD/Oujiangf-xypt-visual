<template>
  <div id="viewCanvas"></div>
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
                myChart: null
            }
        },
        methods: {
            setOption() {
                if (!this.myChart) this.myChart = echarts.init(document.getElementById('viewCanvas'));
                const option = {
                    grid: {
                        width: '90%',
                        height: '60%',
                        y: '25%',
                        x: '9%'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        x: 'right',
                        y: 'top',
                        itemGap: 20,
                        selectedMode: 'single',
                        icon: 'rect',
                        itemWidth: 8,
                        itemHeight: 8,
                        textStyle: {
                            color: 'rgb(190, 205, 229)',
                            fontSize: 11
                        }
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {show: false},
                        axisLabel: {
                            color: 'rgb(164, 238, 255)',
                            fontSize: 10,
                            interval: 0
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(55, 113, 183,0.2)'
                            }
                        },
                        data: ['550以下', '550-599', '600-699', '700-749', '750及以上']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            color: 'rgb(203, 226, 248)',
                            fontSize: 9
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(55, 113, 183,0.2)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(55, 113, 183, 0.1)'
                            }
                        },
                        axisTick: {show: false}
                    },
                    series: [
                        {
                            name: '公务员',
                            type: 'line',
                            data: [35, 189, 3248, 4684, 25737],
                            itemStyle: {
                                normal: {color: '#4CC77F'}
                            }
                        },
                        {
                            name: '事业单位',
                            type: 'line',
                            data: [252, 1061, 25433, 50395, 25433],
                            itemStyle: {
                                normal: {color: '#F1A12D'}
                            }
                        },
                        {
                            name: '法定代表人',
                            type: 'line',
                            data: [19475, 16498, 521334, 93354, 21725],
                            itemStyle: {
                                normal: {color: '#09ADEF'}
                            }
                        },
                    ]
                };

                this.myChart.setOption(option);
            },
        },
        mounted() {
            this.setOption();
        },
    }
</script>
<style scoped>
  #viewCanvas {
    width: 100%;
    height: 100%;
  }
</style>
