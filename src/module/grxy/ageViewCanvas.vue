<template>
  <div id="ageViewCanvas"></div>
</template>
<script>
    export default {
        name: 'pie-canvas',
        props: {
            pieData: {
                type: Array,
                default: function () {
                    return [0, 0, 0, 0, 0, 0];
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
                if (!this.myChart) this.myChart = echarts.init(document.getElementById('ageViewCanvas'));
                const option = {
                    grid: {
                        show: 'true',
                        borderWidth: '0',
                        height: "90%",
                        width: "70%",
                        x: "22%",
                        y: "5%"
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
                        data: ['18岁-24岁', '25岁-30岁', '30岁-39岁', '40岁-49岁', '50岁-59岁', '60岁以上']
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
                                        color: 'rgba(119,240,232,1)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(56,192,203,1)'
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
                                            return param.value + 600 + '分';
                                        },
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
                                    color: 'rgba(56,192,203,0.4)' //rgba设置透明度0.14
                                }
                            },
                            barGap: '-100%',
                            z: 0,
                            barWidth: 13,
                            data: [80, 80, 80, 80, 80, 80]
                        }
                    ]
                };
                this.myChart.setOption(option);
            },
            updateData(pieData) {
                this.myChart.setOption({
                    series: [{
                        name: '数据内框',
                        data: pieData
                    }]
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
  #ageViewCanvas {
    width: 100%;
    height: 100%;
  }
</style>
