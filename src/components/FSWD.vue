<template>
  <div class="FSWDcharts" id="FSWD"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    // 引入雷达图组件
    require('echarts/lib/chart/radar')
    // 引入提示框和title组件
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require('echarts/lib/component/radar')
    export default {
        name: "FSWD.vue",
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('FSWD'));
                var lineStyle = {
                    normal: {
                        width: 1,
                        opacity: 0.7
                    }
                };
                myChart.setOption({
                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        center: ['50%', '55%'],
                        radius: 50,
                        splitNumber: 5,
                        name: {
                            textStyle: {
                                color: 'rgb(238, 197, 102)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: [
                                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                                ].reverse()
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(238, 197, 102, 0.5)'
                            }
                        },
                        indicator: [
                            {name: '身份特质', max: 10, min: -10},
                            {name: '社会贡献', max: 10, min: -10},
                            {name: '生活用信', max: 20, min: 0},
                            {name: '商业用信', max: 20, min: 0},
                            {name: '遵纪守法', max: 20, min: 0},
                        ],
                    },
                    series: [{
                        name: '分数(mark)',
                        type: 'radar',
                        lineStyle: lineStyle,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: '#F9713C'
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: 0.4
                            }
                        },
                        data: [
                            {
                                value: [5, 1, 9, 10, 10],
                                name: '分数(mark)'
                            },
                        ]
                    }]
                })
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>

<style scoped>
  .FSWDcharts {
    width: 100%;
    height: 100%;
  }
</style>
