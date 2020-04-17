<template>
  <div class="my-map-canvas">
    <div id="main3D"></div>
    <div class="map-title">
      <span class="map-title-inner">{{ geoCoord[currentIndex].name }}平均分</span>
      <my-number :number="geoCoord[currentIndex].value[2]"></my-number>
    </div>
  </div>
</template>
<script>
    import {wenzhouMap} from './js/geoJson.js';
    import MyNumber from './Number.vue';

    export default {
        name: 'map-canvas',
        props: {
            mapData: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        data() {
            return {
                myChart: null,
                geoCoord: [     // 区县坐标
                    {
                        name: '鹿城区',
                        value: [120.429894, 28.082536, 0]
                    },
                    {
                        name: '龙湾区',
                        value: [120.705894, 27.900969, 0]
                    },
                    {
                        name: '瓯海区',
                        value: [120.491369, 27.936593, 0]
                    },
                    {
                        name: '洞头区',
                        value: [121.003762, 27.892626, 0]
                    },
                    {
                        name: '瑞安市',
                        value: [120.265572, 27.841998, 0]
                    },
                    {
                        name: '乐清市',
                        value: [120.878579, 28.220666, 0]
                    },
                    {
                        name: '永嘉县',
                        value: [120.542158, 28.330733, 0]
                    },
                    {
                        name: '平阳县',
                        value: [120.280537, 27.623857, 0]
                    },
                    {
                        name: '苍南县',
                        value: [120.352814, 27.451237, 0]
                    },
                    {
                        name: '文成县',
                        value: [119.882316, 27.807567, 0]
                    },
                    {
                        name: '泰顺县',
                        value: [119.747783, 27.531151, 0]
                    }
                ],
                currentIndex: 0 // 当前平均分轮播的索引
            }
        },
        components: {
            MyNumber
        },
        methods: {
            setOption() {
                const that = this;
                // DOM
                if (!this.myChart) this.myChart = echarts.init(document.getElementById('main3D'))
                // 注册地图
                echarts.registerMap('wenzhou', wenzhouMap)

                // 配置项
                const option = {
                    geo3D: {
                        map: 'wenzhou',
                        show: false,
                    },
                    series: [
                        {
                            type: 'map3D',
                            map: 'wenzhou',
                            label: {
                                show: false,
                            },
                            itemStyle: {
                                color: "#00114C",
                                opacity: 1,
                                borderWidth: 1,
                                borderColor: "#2443AC"
                            },
                            emphasis: {
                                label: {
                                    show: false
                                },
                                itemStyle: {				// 单个区域的样式设置
                                    color: "#2B91B7",
                                    opacity: 1,
                                    borderWidth: 1,
                                    borderColor: "#2B91B7"
                                },
                            },
                            zlevel: 9,
                        },
                        {
                            name: 'bar3D',
                            type: "bar3D",
                            coordinateSystem: 'geo3D',
                            barSize: 2,
                            silent: false,
                            shading: 'realistic',
                            opacity: 1,
                            bevelSize: 0.3,
                            minHeight: 2,
                            itemStyle: {
                                color: '#FF8C00'
                            },
                            label: {
                                show: true,
                                formatter: function (params) {
                                    return params.name;
                                },
                                distance: 2,
                                textStyle: {
                                    color: '#17D1C2',
                                    borderWidth: '1',
                                    borderColor: '#17D1C2',
                                    borderRadius: 0,
                                    lineHeight: 30,
                                    height: 30,
                                    backgroundColor: '#070428',
                                    fontSize: 12,
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    padding: [0, 8, 0, 8]
                                }
                            },
                            data: this.geoCoord.map(item => {
                                item.label = {
                                    distance: 3
                                };
                                return item;
                            }),
                            animation: true,
                            animationDurationUpdate: 2000,
                            zlevel: 10,
                        }]
                };
                this.myChart.setOption(option);
                this.myChart.on("click", function (param) {
                    that.currentIndex = that.geoCoord.findIndex(item => {
                        return item.name === param.name
                    });
                });
            },
            updateCanvas(map) {
                this.geoCoord = this.geoCoord.map((item, index) => {
                    item['value'][2] = map[index];
                    return {
                        name: item.name,
                        value: item.value
                    }
                });
            },
        },
        watch: {
            mapData(val) {
                this.updateCanvas(val);
                this.setOption();
            }
        }
    }
</script>
<style scoped>
  .my-map-canvas {
    height: 100%;
    width: 100%;
    position: relative;
  }

  #main3D {
    position: absolute;
    z-index: 3;
    height: 100%;
    width: 100%;
    background: url('./imgs/map_bg.png') center center no-repeat;
    background-size: 100% 100%;
  }

  .map-title {
    position: absolute;
    z-index: 4;
    left: 0;
    top: 0;
    border: 1px solid rgba(0, 145, 255, .5);
    padding: 4px 14px;
    display: flex;
    align-items: center;
  }

  .map-title-inner {
    margin-right: 26px;
    font-size: 18px;
    color: rgb(112, 214, 255);
  }
</style>
