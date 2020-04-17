<template>
  <div class="sjhj">
    <div class="sjhj-top">
      <div class="sjhj-left">
        <data-canvas></data-canvas>
      </div>
      <div class="sjhj-right" style="    height: 134px;">
        <div class="grxy-block-bg sjhj-data">
          <svg-number title="数据量" class="sjhj-data-td" :vertical="true" :value="dataNumber"></svg-number>
          <svg-number title="事项数" class="sjhj-data-td" :vertical="true" :value="eventNumber"></svg-number>
          <svg-number title="单位数" class="sjhj-data-td" :vertical="true" :value="institutionNumber"></svg-number>
        </div>
      </div>
    </div>
    <div class="sjhj-middle">
      <div class="sjhj-left">
        <div class="source-channel grxy-block-bg">
          <div class="secofbg" v-for="(item,index) in kindList" :key="index">
            <div class="sectitle">{{item.kind}}</div>
            <div class="dwtt">单位数：{{item.unit}}</div>
            <div class="secnum">数据量：{{item.sumNum}}</div>
          </div>
        </div>
      </div>
      <div class="sjhj-right">
        <div class="grxy-block-bg" style="         height: 785px;
    position: absolute;
    top: -188px;">
          <my-card title="数据更新动态" :icon="false">
            <el-table
              style="width: 100%;height:100%;background-color: transparent;"
              :data="shareStatusData"
              :row-style="rowStyle"
              :header-row-style="rowStyle"
              :cell-style="cellStyle"
              :header-cell-style="headerCellStyle"
              stripe
              class="status-table"
              ref="statusTable"
            >
              <el-table-column prop="name" label="事项名称" min-width="30%"></el-table-column>
              <el-table-column prop="count" label="接收数据量" min-width="15%"></el-table-column>
              <el-table-column prop="date" label="接收时间" min-width="30%"></el-table-column>
              <el-table-column prop="status" label="推送单位" min-width="25%"></el-table-column>
            </el-table>
          </my-card>
        </div>
      </div>
    </div>
    <div class="sjhj-bottom">
      <div class="sjhj-left grxy-block-bg">
        <div class="xy-grade">
          <my-card :icon="false" title="信用公开等级占比">
            <xy-grade-canvas :pie-data="xyGradeData"></xy-grade-canvas>
          </my-card>
        </div>
        <div class="data-strategy">
          <my-card :icon="false" title="数据交换策略占比">
            <data-strategy-canvas :pie-data="strategyData"></data-strategy-canvas>
          </my-card>
        </div>
        <div class="data-rate">
          <my-card :icon="false" title="数据交换频率占比">
            <data-rate-canvas :pie-data="rateData"></data-rate-canvas>
          </my-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import myCard from '../grxy/myCard.vue';
    import svgNumber from '../grxy/svgNumber.vue';
    import monthCountCanvas from './monthCountCanvas.vue';
    import channelCanvas from './channelCanvas.vue';
    import institutionCanvas from './institutionCanvas.vue';
    import xyGradeCanvas from './xyGradeCanvas.vue';
    import dataStrategyCanvas from './dataStrategyCanvas.vue';
    import dataRateCanvas from './dataRateCanvas.vue';
    import dataCanvas from './dataCanvas.vue';
    import api from '@/core/u_qypjd.js';
    import {sum} from '@/util/index.js';

    export default {
        name: 'sjhj',
        components: {
            myCard,
            svgNumber,
            monthCountCanvas,
            channelCanvas,
            institutionCanvas,
            xyGradeCanvas,
            dataStrategyCanvas,
            dataRateCanvas,
            dataCanvas
        },
        data() {
            return {
                showindex: 12,
                eventNumber: 0, // 事项数
                dataNumber: 0, // 数据量
                institutionNumber: 0, // 接入单位数
                channelData: [8120765, 8120765, 188548], // 来源渠道数据  (暂时写死)  272459892
                institutionData: [1, 1, 309], // 来源单位数据   (暂时写死)
                shareStatusData: [],
                loadlist: [],
                xyGradeData: [ // 信用公开等级的数据
                    {
                        'name': '非受限共享',
                        'value': 0
                    },
                    {
                        'name': '部门共享',
                        'value': 0
                    },
                    {
                        'name': '部门授权共享',
                        'value': 0
                    },
                    {
                        'name': '非共享',
                        'value': 0
                    }
                ],
                strategyData: [ // 数据交换策略的数据
                    {
                        'name': '全量',
                        'value': 0
                    },
                    {
                        'name': '增量',
                        'value': 0
                    }
                ],
                rateData: [ // 数据交换频率的数据
                    {
                        'name': '实时',
                        'value': 0
                    },
                    {
                        'name': '日报',
                        'value': 0
                    },
                    {
                        'name': '周报',
                        'value': 0
                    },
                    {
                        'name': '月报',
                        'value': 0
                    },
                    {
                        'name': '季报',
                        'value': 0
                    },
                    {
                        'name': '半年',
                        'value': 0
                    },
                    {
                        'name': '年度',
                        'value': 0
                    }
                ],
                monthCountData: [0, 0, 0, 0, 0, 0, 0, 0, 3688, 0, 0, 0], // 每月数据统计的数据
                rowStyle: {
                    'background-color': 'transparent'
                },
                headerCellStyle: {
                    'padding': '0',
                    'border': 'none',
                    'height': '30px',
                    'background-color': 'transparent',
                    'font-size': '10px',
                    'color': 'rgba(50,197,255,1)',
                    'border-top': '2px solid rgba(50, 197, 255, 0.5)',
                    'border-bottom': '2px solid rgba(50, 197, 255, 0.5)'
                },
                cellStyle: {
                    'padding': '0',
                    'border': 'none',
                    'height': '53px',
                    'font-size': '16px',
                    'color': 'rgba(216,255,254,1)',
                    'background-color': 'rgba(17, 47, 97, 1)'
                },
                kindList: [],
            }
        },
        methods: {
            // 设置表格滚动动画
            change() {
                if (this.showindex < this.loadlist.length - 1) {
                    this.showindex++;
                    this.shareStatusData.shift();//删除数组中第一条数据
                    this.shareStatusData.push(this.loadlist[this.showindex]);//把第一条数据插入数组最有一条
                } else {
                    this.showindex = 0;
                    this.shareStatusData.shift();//删除数组中第一条数据
                    this.shareStatusData.push(this.loadlist[this.showindex]);//把第一条数据插入数组最有一条
                }
            },
            paly() {
                setInterval(this.change, 2000);//每两秒执行一次插入删除操作
            },
            animateTableStart() {
                this.$nextTick(() => {
                    const table = this.$refs.statusTable.$el,
                        tableHeader = table.querySelector('.el-table__header-wrapper'),
                        tableBody = table.querySelector('.el-table__body-wrapper');
                    if (table.offsetHeight < tableHeader.offsetHeight + tableBody.offsetHeight) {
                        const clientHeight = table.offsetHeight - tableHeader.offsetHeight, // 可视高度
                            times = Math.ceil(tableBody.offsetHeight / clientHeight),
                            tableBodyInner = tableBody.querySelector('.el-table__body'); // 滚动的次数
                        let i = 1;
                        tableBody.style.height = clientHeight + 'px';

                        function animationTable() {
                            if (i >= times) {
                                tableBodyInner.style.transition = 'margin 0s';
                                tableBodyInner.style.marginTop = 0;
                                i = 0;
                            } else {
                                tableBodyInner.style.transition = 'margin 1.5s';
                                tableBodyInner.style.marginTop = -clientHeight * i + 'px';
                                i++;
                            }
                            setTimeout(animationTable, 5000);
                        }

                        setTimeout(animationTable, 5000);
                    }
                })
            },
            getSjhjNumbers() {
                this.eventNumber = 0;
                this.institutionNumber = 0;
                api.getSjhjNumbers().then((res) => {
                    if (res && res.length > 0) {
                        const data = res[0];
                        this.eventNumber = data.sxs;
                        this.institutionNumber = data.jrdws;
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
            getXyGrade() {
                api.getXyGrade().then((res) => {
                    if (res && res.length > 0) {
                        const arr = res.sort((v, i) => {
                            return v.open_level - i.open_level;
                        }).map((item, index, arrs) => {
                            return (item['sumNum'] / sum(arrs.map(item => item['sumNum'])) * 100).toFixed(2);
                        });
                        this.xyGradeData = this.xyGradeData.map((item, index) => {
                            return {
                                name: item['name'],
                                value: parseFloat(arr[index])
                            }
                        });
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
            getsjupmeg() {
                const that = this;
                api.getupsj().then((res) => {
                    if (res && res.length > 0) {
                        for (var i = 0; i < res.length; i++) {
                            that.loadlist.push({
                                name: res[i].table_name,
                                count: res[i].sumNum,
                                date: res[i].uptime,
                                status: res[i].ownername
                            });
                            if (i < 13) {
                                that.shareStatusData.push({
                                    name: res[i].table_name,
                                    count: res[i].sumNum,
                                    date: res[i].uptime,
                                    status: res[i].ownername
                                });
                            }
                        }
                    }
                })
            },
            getDataStrategy() {
                api.getDataStrategy().then((res) => {
                    if (res && res.length > 0) {
                        const arr = res.sort((v, i) => {
                            return v.data_exchange_type - i.data_exchange_type;
                        }).map((item, index, arrs) => {
                            return (item['sumNum'] / sum(arrs.map(item => item['sumNum'])) * 100).toFixed(2);
                        });
                        this.strategyData = this.strategyData.map((item, index) => {
                            return {
                                name: item['name'],
                                value: parseFloat(arr[index])
                            }
                        });
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
            getkindmeg() {
                const that = this;
                api.getkindmeg().then((res) => {
                    api.gjjdata().then((res1) => {
                        that.dataNumber = that.dataNumber + res1[0].sumNum;
                        this.kindList.push({kind: "公积金", sumNum: res1[0].sumNum, unit: 1})
                    }).catch((err1) => {
                        console.log(err1)
                    })
                    api.sbdata().then((res2) => {
                        that.dataNumber = that.dataNumber + res2[0].sumNum;
                        this.kindList.push({kind: "社保信息", sumNum: res2[0].sumNum, unit: 1})
                    }).catch((err2) => {
                        console.log(err2)
                    })
                    api.getsplf().then((res3) => {
                        that.dataNumber = that.dataNumber + res3[0].sumNum;
                        this.kindList.push({kind: "省信用分", sumNum: res3[0].sumNum, unit: 1})
                    }).catch((err3) => {
                        console.log(err3)
                    })
                    for (var i = 0; i < res.length; i++) {
                        that.dataNumber = that.dataNumber + res[i].sumNum;
                        this.kindList.push(res[i]);
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            getDataRate() {
                api.getDataRate().then((res) => {
                    if (res && res.length > 0) {
                        res.map((item, index, arrs) => {
                            this.rateData[item['data_exchange_rate'] - 1]['value'] = parseFloat((item['sumNum'] / sum(arrs.map(item => item['sumNum'])) * 100).toFixed(2));
                        });
                        this.$set(this.rateData);
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
        },
        created() {
            this.getSjhjNumbers(); // 获取数据量、事项数、接入单位数、共享数据量
            this.getXyGrade(); // 获取信用公开等级
            this.getDataStrategy(); // 获取数据交换策略
            this.getDataRate(); // 获取数据交换频率
            this.getsjupmeg();// 获取数据更新动态
            this.getkindmeg();//各类数据量
            this.paly();
        },
        mounted() {
            //this.animateTableStart();
        }
    }
</script>
<style scoped>
  .sjhj {
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

  .secofbg {
    flex: 1;
    width: 46%;
    margin-top: 11px;
    display: inline-flex;
    border: 1px solid rgb(34, 94, 159);
    justify-content: center;
    align-items: center;
    margin-left: 30px;
  }

  .sectitle {
    text-align: left;
    margin-left: 10px;
    width: 27%;
    font-size: 20px;
    letter-spacing: 1px;
    color: #FFF;
  }

  .dwtt {
    text-align: left;
    width: 30%;
    font-size: 20px;
    letter-spacing: 1px;
    color: rgb(121, 202, 234);
  }

  .secnum {
    text-align: left;
    width: 40%;
    font-size: 20px;
    letter-spacing: 1px;
    color: rgb(247, 181, 0);
  }

  .sjhj-top {
    margin-top: 18px;
    flex: 1.12;
    display: flex;
  }

  .sjhj-data {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .sjhj-data .sjhj-data-td {
    height: 90%;
    width: 30%;
    justify-content: space-around;
  }

  .sjhj-data .sjhj-data-td /deep/ .svg-number-title {
    font-size: 19px;
    color: rgb(101, 211, 255);
  }

  .sjhj-data .sjhj-data-td /deep/ .txt {
    font-size: 19px;
    color: rgb(247, 181, 0);
  }


  .sjhj-middle {
    flex: 1.2;
    display: flex;
    margin-top: 18px;
  }

  .source-channel {
    flex: 1;
    margin-right: 19px;
  }

  .source-institution {
    flex: 1;
  }

  .status-table::before {
    height: 0px;
  }

  .status-table /deep/ .el-table__body tr.el-table__row--striped td {
    background-color: transparent !important;
  }

  .status-table /deep/ .cell {
    line-height: inherit;
  }

  .sjhj-bottom {
    flex: 0.8;
    display: flex;
    margin-top: 18px;
    width: 60%;
  }

  .sjhj /deep/ .mycard-content {
    padding-top: 30px;
  }

  .sjhj /deep/ .mycard-title {
    top: 8px;
  }

  .sjhj-bottom .sjhj-left /deep/ .mycard-content {
    padding-top: 0px;
  }

  .sjhj-bottom .sjhj-left /deep/ .mycard-title {
    top: 5px;
  }

  .xy-grade {
    flex: 1;
  }

  .data-strategy {
    flex: 1;
  }

  .data-rate {
    flex: 1;
  }

  .sjhj-left {
    flex: 1.55;
    display: flex;
    position: relative;
    margin-right: 19px;
  }

  .sjhj-right {
    flex: 1;
    position: relative;
  }

  .sjhj-right > :first-child {
    position: absolute;
  }
</style>
