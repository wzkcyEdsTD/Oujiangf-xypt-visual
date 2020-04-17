<template>
  <div class="grxy-content">
    <div class="grxy-content-top">
      <div class="score">
        <my-card title="分数分布">
          <div class="card-block grxy-block-bg">
            <div class="score-max-avg">
              <svg-number title="最高分" :value="maxScore" class="score-max"></svg-number>
              <svg-number title="平均分" :value="avgScore" class="score-avg"></svg-number>
            </div>
            <div style="flex-grow: 1;display: flex;flex-direction: column;">
              <div class="score-view">
                <my-card title="瓯江分正态趋势" :icon="false" style="position: absolute;">
                  <score-view-canvas :pie-data="scoreViewData"></score-view-canvas>
                </my-card>
              </div>
              <div class="each-score-account">
                <my-card title="各分数段人数（单位：万人）" :icon="false" style="position: absolute;">
                  <pie-canvas :pie-data="eachScoreData"></pie-canvas>
                </my-card>
              </div>
            </div>
          </div>
        </my-card>
      </div>
      <div class="city-avg-score">
        <my-card title="各县市诚信分平均分分布">
          <map-canvas :map-data="mapData"></map-canvas>
        </my-card>
      </div>
      <div class="sex-score">
        <div class="sex-avg">
          <my-card title="男女分数平均分">
            <div class="grxy-block-bg">
              <sex-canvas :sex-data="sexData"></sex-canvas>
            </div>
          </my-card>
        </div>
        <div class="sex-view">
          <my-card title="行业分数分布">
            <div class="grxy-block-bg">
              <view-canvas></view-canvas>
            </div>
          </my-card>
        </div>
      </div>
    </div>
    <div class="grxy-content-bottom">
      <div class="score-grade-view">
        <my-card title="分数等级分布">
          <div class="grxy-block-bg grade-view-block">
            <div class="all-city">
              <wz-score-grade-canvas :chart-data="wzScoreGradeData"></wz-score-grade-canvas>
            </div>
            <div class="each-city">
              <score-grade-canvas :chart-data="scoreGradeData"></score-grade-canvas>
            </div>
          </div>
        </my-card>
      </div>
      <div class="credit-warning">
        <my-card title="信用预警">
          <div class="grxy-block-bg">
            <my-card title="失信信息" :icon="false">
              <warning-canvas :bar-line-data="warningData"></warning-canvas>
            </my-card>
          </div>
        </my-card>
      </div>
      <div class="age-score-view">
        <my-card title="年龄段平均分">
          <div class="grxy-block-bg">
            <age-view-canvas :pie-data="ageViewData"></age-view-canvas>
          </div>
        </my-card>
      </div>
    </div>
  </div>
</template>
<script>
    import myCard from './myCard.vue';
    import svgNumber from './svgNumber.vue';
    import pieCanvas from './pieCanvas.vue';
    import sexCanvas from './sexcanvas.vue';
    import viewCanvas from './viewCanvas.vue';
    import ageViewCanvas from './ageViewCanvas.vue';
    import scoreViewCanvas from './scoreViewCanvas.vue';
    import warningCanvas from './warningCanvas.vue';
    import scoreGradeCanvas from './scoreGradeCanvas.vue';
    import wzScoreGradeCanvas from './wzScoreGradeCanvas.vue';
    import mapCanvas from './mapCanvas.vue';
    import api from '@/core/u_qypjd.js';
    import {sum} from '@/util/index.js';

    export default {
        name: 'grxy',
        data() {
            return {
                maxScore: 0, // 最高分
                avgScore: 0, // 平均分
                mapData: [], // 地图的数据
                scoreViewData: [], // 分数分布的数据
                eachScoreData: [], // 各分数段人数的数据
                sexData: [0, 0], // 男女分数平均分数据
                viewData: [ // 分数维度的数据
                    {product: '商业用信（男）', max: 700, avg: 600},
                    {product: '商业信用（女）', max: 700, avg: 600},
                    {product: '城市贡献（男）', max: 700, avg: 600},
                    {product: '城市贡献（女）', max: 700, avg: 600}
                ],
                wzScoreGradeData: [], // 温州全市分数分布的数据
                scoreGradeData: [], // 各个县市区分数分布的数据
                warningData: { // 信用预警的数据
                    bar: [98, 78, 58, 69, 52],
                },
                ageViewData: [] // 年龄段分数分布的数据
            }
        },
        components: {
            myCard,
            svgNumber,
            pieCanvas,
            sexCanvas,
            viewCanvas,
            ageViewCanvas,
            scoreViewCanvas,
            warningCanvas,
            scoreGradeCanvas,
            wzScoreGradeCanvas,
            mapCanvas
        },
        methods: {
            getscorezt() {
                api.ztfb().then((res) => {
                    this.scoreViewData = res;
                }).catch((err) => {
                    console.log(err)
                })
            },
            getMaxAvg() {
                api.scoreMaxAvg().then((res) => {
                    if (res && res.length > 0) {
                        this.maxScore = parseInt(res[0]['max']);
                        this.avgScore = parseInt(res[0]['avg'].toFixed(0));
                    } else {
                        this.maxScore = 0;
                        this.avgScore = 0;
                    }
                }).catch((err) => {
                    this.maxScore = 0;
                    this.avgScore = 0;
                    console.log(err);
                });
            },
            getSexAvgScore() {
                api.sexAvgScore().then((res) => {
                    let manScore = 0,
                        womanScore = 0;
                    res && res.length > 0 && res.map((item) => {
                        if (item['sex'] === '男') manScore = item['score'];
                        else if (item['sex'] === '女') womanScore = item['score'];
                    });
                    this.sexData = [manScore, womanScore];
                }).catch((err) => {
                    this.sexData = [0, 0];
                    console.log(err);
                });
            },
            getEachCityScore() {
                api.eachCityScore().then((res) => {
                    if (res && res.length > 0) {
                        function City() {
                            this.lucheng = Array.from({length: 5});
                            this.longwan = Array.from({length: 5});
                            this.ouhai = Array.from({length: 5});
                            this.dongtou = Array.from({length: 5});
                            this.ruian = Array.from({length: 5});
                            this.yueqing = Array.from({length: 5});
                            this.yongjia = Array.from({length: 5});
                            this.pingyang = Array.from({length: 5});
                            this.cangnan = Array.from({length: 5});
                            this.wencheng = Array.from({length: 5});
                            this.taishun = Array.from({length: 5});
                        }

                        const city = new City(),
                            objCity = {
                                '鹿城': 'lucheng',
                                '龙湾': 'longwan',
                                '瓯海': 'ouhai',
                                '洞头': 'dongtou',
                                '瑞安': 'ruian',
                                '乐清': 'yueqing',
                                '永嘉': 'yongjia',
                                '平阳': 'pingyang',
                                '苍南': 'cangnan',
                                '文成': 'wencheng',
                                '泰顺': 'taishun'
                            },
                            objCityIndex = {
                                'lucheng': 0,
                                'longwan': 1,
                                'ouhai': 2,
                                'dongtou': 3,
                                'ruian': 4,
                                'yueqing': 5,
                                'yongjia': 6,
                                'pingyang': 7,
                                'cangnan': 8,
                                'wencheng': 9,
                                'taishun': 10
                            };
                        res.map((item) => {
                            if (item['area'] === '其他') return;
                            switch (item['credit_level']) {
                                case '待提高':
                                    city[objCity[item['area']]][0] = item['sumNum'];
                                    break;
                                case '一般':
                                    city[objCity[item['area']]][1] = item['sumNum'];
                                    break;
                                case '良好':
                                    city[objCity[item['area']]][2] = item['sumNum'];
                                    break;
                                case '优秀':
                                    city[objCity[item['area']]][3] = item['sumNum'];
                                    break;
                                case '极优':
                                    city[objCity[item['area']]][4] = item['sumNum'];
                                    break;
                            }
                        });
                        this.scoreGradeData = Array.from({length: 11});
                        for (let key in city) {
                            if (city.hasOwnProperty(key)) {
                                city[key] = city[key].map((v, index, arr) => {
                                    return (v / sum(arr) * 100).toFixed(2);
                                });
                                this.scoreGradeData[objCityIndex[key]] = city[key];
                            }
                        }
                    } else {
                        this.scoreGradeData = [];
                    }
                }).catch((err) => {
                    this.scoreGradeData = [];
                    console.log(err);
                });
            },
            getCityScore() {
                api.cityScore().then((res) => {
                    this.wzScoreGradeData = [];
                    if (res && res.length > 0) {
                        let arr = Array.from({length: 5});
                        res.map((item) => {
                            switch (item['credit_level']) {
                                case '待提高':
                                    arr[0] = item['sumNum'];
                                    break;
                                case '一般':
                                    arr[1] = item['sumNum'];
                                    break;
                                case '良好':
                                    arr[2] = item['sumNum'];
                                    break;
                                case '优秀':
                                    arr[3] = item['sumNum'];
                                    break;
                                case '极优':
                                    arr[4] = item['sumNum'];
                                    break;
                            }
                        });
                        this.eachScoreData = arr.map(v => {
                            return (v / 10000).toFixed(2);
                        });
                        arr = arr.map((v, i, a) => {
                            return (v / sum(a) * 100).toFixed(2);
                        });
                        this.wzScoreGradeData = arr;
                    }
                }).catch((err) => {
                    this.wzScoreGradeData = [];
                    console.log(err);
                });
            },
            getEachCityAvgScore() {
                api.eachCityAvgScore().then((res) => {
                    this.mapData = [];
                    if (res && res.length > 0) {
                        const objCityIndex = {
                            '鹿城': 0,
                            '龙湾': 1,
                            '瓯海': 2,
                            '洞头': 3,
                            '瑞安': 4,
                            '乐清': 5,
                            '永嘉': 6,
                            '平阳': 7,
                            '苍南': 8,
                            '文成': 9,
                            '泰顺': 10
                        };
                        this.mapData = Array.from({length: 11});
                        res.map((item) => {
                            if (item['area'] === '其他') return;
                            this.mapData[objCityIndex[item['area']]] = parseInt(item['avgnum'].toFixed(0));
                        });
                    }
                }).catch((err) => {
                    this.mapData = [];
                    console.log(err);
                })
            },
            getEachAgeScore() {
                api.eachAgeScore().then((res) => {
                    this.ageViewData = [];
                    if (res && res.length > 0) {
                        res.map((item) => {
                            if (item['age_range'] === 'others') return;
                            this.ageViewData.push(parseInt(item['avgscore'].toFixed(0)) - 600);
                        });
                    }
                }).catch((err) => {
                    this.ageViewData = [];
                    console.log(err);
                });
            }
        },
        created() {
            this.getscorezt();
            this.getMaxAvg(); // 获取最高分和平均分
            this.getSexAvgScore(); // 获取男女平均分
            this.getEachCityScore(); // 获取各区县的分数分布数据
            this.getCityScore(); // 获取全市的分数分布数据
            this.getEachCityAvgScore(); // 获取各县市区的平均分
            this.getEachAgeScore(); // 获取各年龄段的分数分布
        },
        mounted() {
        }
    }
</script>
<style scoped>
  .grxy-content {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0 26px 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .grxy-block-bg {
    padding: 16px 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: url('./imgs/card_bg.png') 0 0 no-repeat;
    background-size: 100% 100%;
  }

  .grxy-content-top, .grxy-content-bottom {
    width: 100%;
  }

  .grxy-content-top {
    flex: 1.75;
    display: flex;
  }

  .score, .sex-score {
    flex: 1.02;
  }

  .card-block {
    display: flex;
    flex-direction: column;
  }

  .score-max-avg {
    height: 45px;
    display: flex;
  }

  .score-max {
    flex: 1;
    margin-right: 8px;
  }

  .score-avg {
    flex: 1;
    margin-left: 8px;
  }

  .score-max /deep/ .txt {
    color: rgb(255, 77, 44);
  }

  .score-avg /deep/ .txt {
    color: rgb(31, 255, 237);
  }

  .score-view {
    flex: 1;
    position: relative;
  }

  .score-view /deep/ .mycard-content, .each-score-account /deep/ .mycard-content {
    padding-top: 30px;
  }

  .score-view /deep/ .mycard-title, .each-score-account /deep/ .mycard-title {
    top: 15px;
  }

  .each-score-account {
    flex: 1;
    position: relative;
  }


  .city-avg-score {
    flex: 2;
    margin: 0 18px;
  }

  .sex-score {
    display: flex;
    flex-direction: column;
  }

  .sex-avg {
    flex: 1;
  }

  .topnan {
    position: absolute;
    top: 80px;
    right: 326px;
    color: rgb(61, 168, 255);
    line-height: 20px;
    font-size: 15px;
  }

  .topnv {
    position: absolute;
    top: 80px;
    right: 145px;
    color: rgb(255, 84, 135);
    line-height: 20px;
    font-size: 15px;
  }

  .sex-view {
    flex: 1;
  }

  .grxy-content-bottom {
    flex: 1;
    display: flex;
  }

  .score-grade-view {
    flex: 2;
  }

  .grade-view-block {
    display: flex;
  }

  .all-city {
    height: 100%;
    margin-right: 20px;
  }

  .each-city {
    flex-grow: 1;
  }

  .credit-warning, .age-score-view {
    flex: 1.07;
    margin-left: 38px;
  }

  .credit-warning .grxy-block-bg /deep/ .mycard-content {
    padding-top: 20px;
  }

  .credit-warning .grxy-block-bg /deep/ .mycard-content .mycard-title {
    top: 10px;
  }

  .age-score-view {
    margin-left: 38px;
  }
</style>
