<template>
  <div id="wzScoreGradeCanvas"></div>
</template>
<script>
    export default {
        name: 'pie-canvas',
        props: {
            chartData: {
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
                if (!this.myChart) this.myChart = echarts.init(document.getElementById('wzScoreGradeCanvas'));
                var colorList = ["rgba(255, 173, 136, 0.9)", "rgba(34, 163, 255, 0.9)", 'rgba(31, 255, 237, 0.9)', 'rgba(53, 91, 188, 0.9)', 'rgba(94, 116, 255, 0.9)'];
                var option = {
                    title: {
                        text: '全市',
                        x: 'center',
                        y: 'bottom',
                        textStyle: {
                            fontSize: 13,
                            color: 'rgb(50, 197, 255)'
                        }
                    },
                    grid: {
                        width: '100%',
                        height: '100%'
                    },
                    series: [
                        // 主要展示层的
                        {
                            name: 'innerPie',
                            radius: '45%',
                            center: ['50%', '50%'],
                            type: 'pie',
                            startAngle: -30,
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            label: {
                                normal: {
                                    formatter: function (params) {
                                        return params.value + '%';
                                    },
                                    position: 'inside',
                                    color: '#fff',
                                    fontSize: 10
                                }
                            },
                            data: [0, 0, 0, 0, 0],
                        },
                        // 边框的设置
                    ]
                };
                this.myChart.setOption(option);
            },
            updateData(chartData) {
                this.myChart.setOption({
                    series: [{
                        name: 'innerPie',
                        data: chartData
                    }]
                })
            }
        },
        mounted() {
            this.$el.style.width = this.$el.parentElement.clientHeight + 'px';
            this.setOption();
            this.chartData.length > 0 && this.updateData(this.chartData);
        },
        watch: {
            chartData(val) {
                this.updateData(val);
            }
        }
    }
</script>
<style scoped>
  #wzScoreGradeCanvas {
    width: 100%;
    height: 100%;
  }
</style>
