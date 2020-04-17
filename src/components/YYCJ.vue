<template>
  <div class="YYCJchart" id="YYCJ"></div>
</template>

<script>
    let colorList = ['rgb(94,116,255)', 'rgb(255,173,136)', 'rgb(31,255,237)', 'rgba(250,250,250,0.3)'];
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/grid');
    require('echarts/lib/chart/pie');
    export default {
        name: "YYCJ",
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('YYCJ'));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        left: 15,
                        right: 40,
                        top: 40,
                        bottom: 10,
                        containLabel: true
                    },
                    series: [
                        // 主要展示层的
                        {
                            radius: ['29%', '59%'],
                            center: ['45%', '60%'],
                            type: 'pie',
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true,
                                    length: 15,
                                    length2: 15,
                                    lineStyle: {
                                        color: '#d3d3d3'
                                    },
                                    align: 'right'
                                },
                                color: "#000",
                                emphasis: {
                                    show: true
                                }
                            },
                            label: {
                                normal: {
                                    formatter: function (params) {
                                        var str = '';
                                        switch (params.name) {
                                            case '公共图书馆':
                                                str = '公共图书馆' + params.value + '%';
                                                break;
                                            case '城市书房':
                                                str = '城市书房' + params.value + '%';
                                                break;
                                            case '百姓书屋':
                                                str = '百姓书屋' + params.value + '%';
                                                break;
                                        }
                                        return str
                                    },
                                    height: 35,
                                    rich: {
                                        a: {
                                            width: 38,
                                            height: 38,
                                            lineHeight: 50,

                                            align: 'left'
                                        },
                                        b: {
                                            width: 29,
                                            height: 45,
                                            lineHeight: 50,
                                            align: 'left'
                                        },
                                        c: {
                                            width: 34,
                                            height: 33,
                                            lineHeight: 50,

                                            align: 'left'
                                        },
                                        nameStyle: {
                                            fontSize: 16,
                                            color: "#555",
                                            align: 'left'
                                        },
                                        rate: {
                                            fontSize: 20,
                                            color: "#1ab4b8",
                                            align: 'left'
                                        }
                                    }
                                }
                            },
                            data: [
                                {value: 13, name: '公共图书馆'},
                                {value: 43, name: '城市书房'},
                                {value: 49, name: '百姓书屋'}],
                        },
                        // 边框的设置
                        {
                            radius: ['54%', '59%'],
                            center: ['45%', '60%'],
                            type: 'pie',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            animation: false,
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color:'rgba(250,250,250,0.3)'
                                }
                            },
                            data: [{
                                value: 1,
                            }],
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
  .YYCJchart {
    width: 100%;
    height: 100%;
  }
</style>
