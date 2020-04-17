<template>
  <div id="scoreGradeCanvas"></div>
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
            setOption(chartData) {
                if (!this.myChart) this.myChart = echarts.init(document.getElementById('scoreGradeCanvas'));
                var chartData = chartData;
                var pushArrOrder = [{name: '饼1'}, {name: '饼2'}, {name: '饼3'}];
                var legendData = ['1分-550分(待提高)', '550分-600分(一般)', '600分-700分(良好)', '700分-750分(优秀)', '750分-1000分(极优)'];
                var titleName = ['鹿城区', '龙湾区', '瓯海区', '洞头区', '瑞安市', '乐清市', '永嘉县', '平阳县', '苍南县', '文成县', '泰顺县'];
                var titleCommonStyle = {
                    bottom: '0%',
                    textAlign: 'left',
                    textStyle: {
                        color: "rgb(50, 197, 255)",
                        fontSize: 13
                    }
                };
                var labelTextObjectColor = {
                    normal: {
                        formatter: function (params, i) {
                            return params.value + '%';
                        },
                        fontSize: 9,
                        color: 'rgb(164, 238, 255)',
                        position: 'outside',
                        show: true,
                    }
                };
                var optionsNoData = {  // 不显示饼图时的数据
                    stillShowZeroSum: false,
                    data: [{
                        value: 0,
                        label: {show: false},
                        labelLine: {show: false},
                        name: '0分-550分'
                    }, {
                        value: 0,
                        label: {show: false},
                        labelLine: {show: false},
                        name: '550分-600分'
                    }, {
                        value: 0,
                        label: {show: false},
                        labelLine: {show: false},
                        name: '600分-700分'
                    }, {
                        value: 0,
                        name: '700分-750分',
                        label: {show: false},
                        labelLine: {show: false}
                    }, {
                        value: 0,
                        name: '750分-1000分',
                        label: {show: false},
                        labelLine: {show: false}
                    }]
                }
                var titleStyle = []; // 所有title的样式和结构
                var optionsData = [];
                for (let i = 0; i < Math.ceil(titleName.length / 3) * 3; i++) {
                    var obj = {};
                    obj.text = titleName[i] ? titleName[i] : '';
                    switch (i % 3) {
                        case 0:
                            obj.left = '17%';
                            break;
                        case 1:
                            obj.left = '47%';
                            break;
                        case 2:
                            obj.left = '77%';
                            break;
                    }
                    titleStyle.push(Object.assign(obj, titleCommonStyle));
                }
                for (let i = 0; i < Math.ceil(titleName.length / 3); i++) {
                    var obj = {};
                    obj.title = titleStyle.slice(i * 3, i * 3 + 3);
                    var seriesData = chartData.slice(i * 3, i * 3 + 3);
                    while (seriesData.length < 3) {
                        seriesData.push(optionsNoData);
                    }
                    obj.series = seriesData.map((item) => {
                        if (Object.prototype.toString.call(item) === '[object Array]') {
                            return {
                                data: item.map((value, index) => {
                                    return {
                                        value: value,
                                        name: legendData[index],
                                        label: labelTextObjectColor,
                                        labelLine: {
                                            length: 3,
                                            length2: 5,
                                            lineStyle: {
                                                width: 0.5
                                            }
                                        }
                                    };
                                })
                            };
                        } else {
                            return item;
                        }
                    });
                    optionsData.push(obj);
                }
                var pieOrderSeries = []; //公用series样式

                var circleRadius = '45%';
                var center = [
                    ['20%', '50%'],
                    ['50%', '50%'],
                    ['80%', '50%']
                ];

                for (let j = 0; j < center.length; j++) {
                    pieOrderSeries.push({
                        name: pushArrOrder[j].name,
                        center: center[j],
                        radius: circleRadius,
                        type: 'pie',
                        roseType: 'radius',
                        startAngle: -30,
                        hoverAnimation: false,
                        color: ["rgba(255, 173, 136, 1)", "rgba(34, 163, 255, 1)", 'rgba(31, 255, 237, 1)', 'rgba(53, 91, 188, 1)', 'rgba(94, 116, 255, 1)']
                    })
                }
                ;
                var option = {
                    baseOption: {
                        grid: {
                            y2: '0',
                            x: '10',
                            y: '0',
                            x2: '25',
                        },
                        // graphic: {
                        //   type: 'line',
                        //   left: 'center',
                        //   shape: {
                        //       x1: 0,
                        //       y1: this.myChart.getHeight() * 0.15,
                        //       x2: this.myChart.getWidth(),
                        //       y2: this.myChart.getHeight() * 0.15
                        //   },
                        //   style: {
                        //       stroke: 'rgb(216, 216, 216, 0.3)'
                        //   },
                        //   z: 5
                        // },
                        legend: {
                            left: 0,
                            top: 0,
                            textStyle: {
                                fontSize: 10,
                                color: '#FFF',
                            },
                            icon: 'rect',
                            data: legendData
                        },
                        timeline: {
                            show: false,
                            axisType: 'category',
                            autoPlay: true,
                            playInterval: 5000,
                            data: Array.from({length: 4}),
                        },
                        series: pieOrderSeries,
                    },
                    options: optionsData
                };
                this.myChart.setOption(option);
            }
        },
        mounted() {
            this.chartData.length > 0 && this.setOption(this.chartData);
        },
        watch: {
            chartData(val) {
                val.length > 0 && this.setOption(val);
            }
        }
    }
</script>
<style scoped>
  #scoreGradeCanvas {
    width: 100%;
    height: 100%;
  }
</style>
