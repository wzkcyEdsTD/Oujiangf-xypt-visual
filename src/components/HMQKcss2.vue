<template>
  <div class="HMQKcss2chart" id="HMQKcss2"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        name: "HMQKcss2",
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('HMQKcss2'));
                myChart.setOption({
                    title: {
                        text: '各月场景使用量',
                        x: 10,//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                        y: 10,//垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                        textStyle: {
                            //文字颜色
                            color: '#ccc',
                            //字体风格,'normal','italic','oblique'
                            fontStyle: 'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight: 'bold',
                            //字体系列
                            fontFamily: 'sans-serif',
                            //字体大小
                            fontSize: 18
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: 40,
                        right: 60,
                        top: 50,
                        bottom: 20,
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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
                            scale: true,
                            max: 8000,
                            min: 0,
                            boundaryGap: [0.2, 0.2],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(128,128,128,0.5)',
                                    width: 1,
                                    type: 'solid'
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
                        }
                    ],
                    series: [
                        {
                            name: '单位',
                            type: 'bar',
                            barWidth: 40,
                            data: [0, 0, 0, 0, 0, 0, 0, 6284, 193, 0, 0, 0],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#77F0E8'
                                    }, {
                                        offset: 1,
                                        color: '#38C0CB'
                                    }]),
                                }
                            },
                        }
                    ]
                })
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>

<style scoped>
  .HMQKcss2chart {
    width: 100%;
    height: 100%;
  }
</style>
