<template>
  <div class="ZBQZchart" id="ZBQZ"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/pie');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/visualMap');
    export default {
        name: "ZBQZ.vue",
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('ZBQZ'));
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} <br/>{c} ({d}%)"
                    },
                    series: [
                        {
                            name: '分数等级分布',
                            type: 'pie',
                            radius: 50,
                            center: ['45%', '55%'],
                            data: [
                                {value: 30, name: '身份特质'},
                                {value: 30, name: '遵纪守法'},
                                {value: 20, name: '商业用信'},
                                {value: 10, name: '生活用信'},
                                {value: 10, name: '社会贡献'},
                            ].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#FFF'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: '#FFF'
                                    },
                                    smooth: 0.2,
                                    length: 5,
                                    length2: 5
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        var colorList = [
                                            '#1FFFED', '#22A3FF', '#355BBC', '#5E74FF', '#FFAD88'
                                        ];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
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
  .ZBQZchart {
    width: 100%;
    height: 100%;
  }
</style>
