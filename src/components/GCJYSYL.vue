<template>
  <div class="GCJYSYLchart" id="GCJYSYL"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/component/title');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/grid');
    require('echarts/lib/chart/line');
    export default {
        name: "GCJYSYL.vue",
        props: {
            cjcontent: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                cjarr: ["瓯江分", "信用借阅", "信用停车", "信用健身"],
                timearr: [[], [], [], []],
                numarr: [[], [], [], []],
            }
        },
        methods: {
            draw() {
                const that = this;
                let myChart = echarts.init(document.getElementById('GCJYSYL'));
                myChart.setOption({
                    tooltip: {
                        trigger: "axis"
                    },
                    grid: {
                        right: 10,
                        bottom: 20,
                        top: 35,
                        left: 25,
                        containLabel: true
                    },
                    legend: {
                        orient: 'horizontal',
                        textStyle: {
                            color: '#FFF',
                            fontSize: 13,
                        },
                        left: 'right',
                        top: 'top',
                        selectedMode: 'single',
                        data: this.cjarr
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.timearr[0],
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
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#808080',
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
                        },
                    ],
                    series: [
                        {
                            name: this.cjarr[0],
                            type: 'line',
                            data: this.numarr[0],
                            itemStyle: {
                                normal: {color: '#4CC77F'}
                            }
                        },
                        {
                            name: this.cjarr[1],
                            type: 'line',
                            data: this.numarr[1],
                            itemStyle: {
                                normal: {color: '#4CC77F'}
                            }
                        }, {
                            name: this.cjarr[2],
                            type: 'line',
                            data: this.numarr[2],
                            itemStyle: {
                                normal: {color: '#4CC77F'}
                            }
                        }, {
                            name: this.cjarr[3],
                            type: 'line',
                            data: this.numarr[3],
                            itemStyle: {
                                normal: {color: '#4CC77F'}
                            }
                        },
                    ]
                });
                myChart.on('legendselectchanged', function (obj) {
                    const i = that.cjarr.indexOf(obj.name);
                    var option = myChart.getOption();
                    option.xAxis[0].data = that.timearr[i];
                    myChart.setOption(option, true);
                });
            }
        },
        mounted() {
        },
        watch: {
            cjcontent(val) {
                for (var k = 0; k < this.cjarr.length; k++) {
                    for (var i = 0; i < val.length; i++) {
                        if (this.cjarr[k] === val[i].app_name) {
                            this.timearr[k].push(val[i].updatime);
                            this.numarr[k].push(val[i].sumNum);
                        }
                    }
                }
                this.draw();
            }
        }
    }
</script>

<style scoped>
  .GCJYSYLchart {
    width: 100%;
    height: 100%;
  }
</style>
