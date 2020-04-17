<template>
  <div class="GNLSYchart" id="GNLSY"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    export default {
        name: "GNLSY.vue",
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('GNLSY'));
                myChart.setOption({
                    grid: {
                        left: 30,
                        right: 30,
                        top: 30,
                        bottom: 10,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: "{b0}: {c0}"
                    },
                    xAxis: {
                        show: false,                //是否显示x轴
                        type: 'value',
                        max: 35000,
                    },
                    yAxis: {
                        type: 'category',
                        inverse: true,               //让y轴数据逆向
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: 'rgb(174,143,19)'       //y轴字体颜色
                            },
                            //定义富文本标签
                            rich: {
                                lg: {
                                    fontWeight: 'bold',
                                    fontSize: 12,       //字体默认12
                                    color: '#08C',
                                    padding: [0, 5, 0, 0]
                                },
                                title: {
                                    color: '#fff',
                                    fontWeight: 'lighter',
                                    // borderWidth: 1,
                                    // borderColor: '#08c'
                                    // textareaBorderColor: '#08c',
                                }
                            }
                        },
                        splitLine: {show: false},   //横向的线
                        axisTick: {show: false},    //y轴的端点
                        axisLine: {show: false},    //y轴的线
                        data: ['18-24   ', '25-30   ', '30-39   ', '40-49   ', '50-59   ', '60以上   ']
                    },
                    series: [
                        {
                            name: '数据内框',
                            type: 'bar',
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value;
                                    },
                                    position: 'right',
                                    textStyle: {
                                        color: '#32C5FF',
                                        fontSize: 16
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 30,
                                    color: '#00b5eb',
                                }
                            },
                            barWidth: 15,
                            data: [16550, 7048, 16622, 27201,13516,26442]
                        },
                        {
                            name: '外框',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 30,
                                    color: 'rgba(255, 255, 255, 0.14)' //rgba设置透明度0.14
                                }
                            },
                            barGap: '-100%',
                            z: 0,
                            barWidth: 15,
                            data: [35000, 35000, 35000, 35000,35000,35000]
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
  .GNLSYchart {
    width: 100%;
    height: 100%;
  }
</style>
