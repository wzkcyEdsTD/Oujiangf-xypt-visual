<template>
  <div class="CJSYchart" id="CJSY"></div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    require('echarts/lib/component/title');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/polar');
    export default {
        name: "CJSY.vue",
        props: {
            content: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                cjdata: [],
                numdata: [],
            }
        },
        methods: {},
        mounted() {
        },
        watch: {
            content(val) {
                for (var i = 0; i < val.length; i++) {
                    this.cjdata.push(val[i].app_name);
                    this.numdata.push(val[i].sumNum);
                }
                var seriesData = [
                    {
                        "value": this.numdata[0],
                        "itemStyle": {
                            "color": "#1FFFED"
                        }
                    }, {
                        "value": this.numdata[1],
                        "itemStyle": {
                            "color": "#22A3FF"
                        }
                    }, {
                        "value": this.numdata[2],
                        "itemStyle": {
                            "color": "#FFAD88"
                        }
                    }, {
                        "value": this.numdata[3],
                        "itemStyle": {
                            "color": "#5E74FF"
                        }
                    }, {
                        "value": this.numdata[4],
                        "itemStyle": {
                            "color": "#355BBC"
                        }
                    }, {
                        "value": this.numdata[5],
                        "itemStyle": {
                            "color": "#00FF7F"
                        }
                    }
                ];
                let option = {
                    "color": ["#3cefff"],
                    "tooltip": {},
                    "grid": {
                        left: 15,
                        right: 10,
                        top: 25,
                        bottom: 20,
                        containLabel: true
                    },
                    "xAxis": [{
                        "type": "category",
                        "data": this.cjdata,
                        "axisTick": {
                            show: false,
                            "alignWithLabel": true
                        },
                        "nameTextStyle": {
                            "color": "#FFF"
                        },
                        "axisLine": {
                            interval: 0,
                            show: false,
                            "lineStyle": {
                                "color": "#82b0ec",

                            }
                        },
                        "axisLabel": {
                            interval: 0,
                            show: true,
                            "textStyle": {
                                "color": "#82b0ec"
                            }
                        }
                    }],
                    "yAxis": [{
                        "type": "value",
                        "axisLabel": {
                            show: false,
                            "textStyle": {
                                "color": "#82b0ec"
                            },
                            "formatter": "{value}"
                        },
                        "splitLine": {
                            show: false,
                            "lineStyle": {
                                "color": "#0c2c5a"
                            }
                        },
                        "axisLine": {
                            "show": false
                        },
                        axisTick: {
                            show: false
                        }
                    }],
                    "series": [{
                        "name": "",
                        "type": "pictorialBar",
                        "symbolSize": [60, 10],
                        "symbolOffset": [0, -5],
                        "symbolPosition": "end",
                        "z": 12,
                        "label": {
                            "normal": {
                                "show": true,
                                "position": "top",
                                "formatter": "{c}"
                            }
                        },
                        "data": seriesData
                    }, {
                        "type": "bar",
                        "itemStyle": {
                            "normal": {
                                "opacity": 0.7
                            }
                        },
                        "barWidth": "60",
                        "data": seriesData
                    }]
                }
                let myChart = echarts.init(document.getElementById('CJSY'));
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>
  .CJSYchart {
    width: 100%;
    height: 100%;
  }
</style>
