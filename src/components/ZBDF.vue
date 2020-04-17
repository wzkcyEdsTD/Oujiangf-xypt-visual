<template>
  <div class="ZBDFchart" id="ZBDF"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/markPoint');
    export default {
        name: "ZBDF.vue",
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('ZBDF'));
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: 20,
                        right: 20,
                        top: 15,
                        bottom: 20,
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['身份特质', '遵纪守法', '生活用信', '商业用信', '社会贡献'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 40,
                                textStyle: {
                                    color: '#FFF',
                                    fontSize: 10,
                                }
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
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
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: 10,
                            data: [200, 50, 200, 50, 50],
                            itemStyle: {
                                normal: {
                                    //每根柱子颜色设置
                                    color: function (params) {
                                        let colorList = [
                                            "#F18C87",
                                            "#FDDD3E",
                                            "#6CCEB7",
                                            "#5BB9E3",
                                            "#A7A7A7",
                                        ];
                                        return colorList[params.dataIndex];
                                    }
                                }
                            },
                            markPoint: {
                                symbol: 'circle',
                                symbolSize: 20,
                                itemStyle: {
                                    color: '#FFF',
                                    borderColor: '#F18C87',
                                    borderWidth: 3,
                                    borderType: 'solid',
                                },
                                label: {
                                    show: true,
                                    formatter: '{c}',
                                    color: '#A7A7A7',
                                    fontSize: 5,
                                },
                                data: [
                                    {value: 200, xAxis: 0, yAxis: 200},
                                    {value: 50, xAxis: 1, yAxis: 50},
                                    {value: 200, xAxis: 2, yAxis: 200},
                                    {value: 50, xAxis: 3, yAxis: 50},
                                    {value: 50, xAxis: 4, yAxis: 50}
                                ],
                            }
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
  .ZBDFchart {
    width: 100%;
    height: 100%;
  }
</style>
