<template>
  <div id="pieCanvas"></div>
</template>
<script>
    export default {
        name: 'pie-canvas',
        props: {
            pieData: {
                type: Array,
                default: function () {
                    return [0, 0, 0, 0, 0];
                }
            }
        },
        data() {
            return {
                myChart: null
            }
        },
        methods: {
            setOption(pieData) {
                if (!this.myChart) this.myChart = echarts.init(document.getElementById('pieCanvas'));
                const option = {
                    grid: {
                        show: 'true',
                        borderWidth: '0',
                        height: "100%",
                        width: "65%",
                        x: "32%",
                        y: "0%"
                    },
                    tooltip: {
                        show: false
                    },
                    backgroundColor: 'transparent',        //背景色
                    xAxis: {
                        show: false,                //是否显示x轴
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        inverse: true,               //让y轴数据逆向
                        axisLabel: {
                            show: true,
                            interval: 0,
                            textStyle: {
                                color: 'rgb(247, 181, 0)'       //y轴字体颜色
                            },
                            formatter: function (value) {
                                return value;
                            }
                        },
                        splitLine: {show: false},   //横向的线
                        axisTick: {show: false},    //y轴的端点
                        axisLine: {show: false},    //y轴的线
                        data: ['1-550(待提高)', '550-600(一般)', '600-700(良好)', '700-750(优秀)', '750-1000(极优)']
                    },
                    series: [
                        {
                            name: '数据内框',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 18,
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: 'rgba(136,216,255,1)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(80,176,253,1)'
                                        }]),
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    distance: 10,
                                    offset: [0, 2],
                                    color: 'rgb(136, 216, 255)',
                                    fontSize: 13,
                                    formatter:
                                        function (param) {
                                            return param.value;
                                        }
                                }
                            },
                            barWidth: 13,
                            data: pieData
                        },
                        {
                            name: '外框',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 18,
                                    color: 'rgba(80, 176, 253, 0.4)' //rgba设置透明度0.14
                                }
                            },
                            barGap: '-100%',
                            z: 0,
                            barWidth: 13,
                            data: [400, 400, 400, 400, 400]
                        }
                    ]
                };
                this.myChart.setOption(option);
            },
            updateData(pieData) {
                this.myChart.setOption({
                    series: [
                        {
                            name: '数据内框',
                            data: pieData
                        },
                        {
                            name: '外框',
                            data: Array.from({length: 5}, () => {
                                return parseInt(Math.max.apply(Math, pieData) * 4 / 2);
                            })
                        }
                    ]
                })
            }
        },
        mounted() {
            this.setOption(this.pieData);
        },
        watch: {
            pieData(val) {
                this.updateData(val);
            }
        }
    }
</script>
<style scoped>
  #pieCanvas {
    width: 100%;
    height: 100%;
  }
</style>
