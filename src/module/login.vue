<template>
  <div class="indexbg">
    <!-- <div class="headbg"></div> -->
    <div class="indexbg-top">
      <div class="top-left">
        <div class="KTYH">
          <div style="width: 85%;">
            <div class="KTYHtxt1">累计开通用户数</div>
            <div class="KTYHtxt5">{{huanbi1}}%</div>
            <div class="KTYHtxt4">月增长率</div>
            <div class="outdiv">
              <shonum class="showtxt" :number="openusernum" :length=7></shonum>
            </div>
            <!--<div class="showtxt" id="num1">{{DQKTNUM}}</div>-->
          </div>
          <div style="display: flex; width: 85%;">
            <div class="KTYH-inner" style="margin-right: 20px;">
              <div class="KTYHtxt1 KTYHtxt2">当月开通用户数</div>
              <div class="inudiv">
                <shonum class="showtxt1" :number="dyopennum" :length=7></shonum>
              </div>
              <div class="KTYHtxt6">环比</div>
              <div class="KTYHtxt7">{{huanbi2}}%</div>
            </div>
            <div class="KTYH-inner" v-loading="loadingFlag" element-loading-background="rgba(9, 8, 52, 0.8)">
              <div class="KTYHtxt1 KTYHtxt3">当月活跃用户数</div>
              <div class="inudiv">
                <shonum class="showtxt1" :number="dyhynum" :length=7></shonum>
              </div>
              <div class="KTYHtxt6">环比</div>
              <div class="KTYHtxt7">
                {{huanbi3}}%
              </div>
            </div>
          </div>
        </div>


        <div class="each-city-open">
          <div class="indexbg-title">
            <span class="jiantou1"></span>
            <span class="GXKTLtxt">各县（市、区）总开通量</span>
          </div>
          <div class="GXKTL">
            <GXSYL :content="gxsylcontent"></GXSYL>
          </div>
        </div>
      </div>

      <div class="numstars">
        <indexstars></indexstars>
        <div class="egg"></div>
        <div class="eggtxt">
          <div class="sjzl">数据总量</div>
          <div class="sjzl2">{{sjnum1}}</div>
        </div>
        <div class="eggtxt1">
          <div class="sjzl3">社保</div>
          <div class="sjzl4">{{sjnum2}}万</div>
        </div>
        <div class="eggtxt2">
          <div class="sjzl3">公积金</div>
          <div class="sjzl4">{{sjnum3}}万</div>
        </div>
        <div class="eggtxt3">
          <div class="sjzl3">志愿者</div>
          <div class="sjzl4">{{sjnum4}}万</div>
        </div>
        <div class="eggtxt4">
          <div class="sjzl3">捐赠信息</div>
          <div class="sjzl4">{{sjnum5}}万</div>
        </div>
        <div class="eggtxt5">
          <div class="sjzl3">不良行为</div>
          <div class="sjzl4">{{sjnum6}}万</div>
        </div>
        <div class="eggtxt6">
          <div class="sjzl3">行政处罚</div>
          <div class="sjzl4">{{sjnum7}}万</div>
        </div>
        <div class="eggtxt7">
          <div class="sjzl3">省信用分</div>
          <div class="sjzl4">{{sjnum8}}万</div>
        </div>
        <div class="eggtxt8">
          <div class="sjzl3">其它</div>
          <div class="sjzl4">{{sjnum9}}万</div>
        </div>
        <div class="SJLR1">
          <SJLR1></SJLR1>
        </div>
        <div class="SJLR2">
          <SJLR2></SJLR2>
        </div>
      </div>

      <div class="CXF-content">
        <div class="CXF">
          <div class="CXF-head">
            <div class="FSFB">
              <div class="huan3-title">
                <span class="huan3"></span>
                <span class="huan3txt">分数分布</span>
              </div>
              <FSFB style="flex-grow: 1;" :content="fsfbcontent"></FSFB>
            </div>
            <div class="ZBQZ">
              <div class="huan3-title">
                <span class="huan3"></span>
                <span class="huan3txt">指标权重</span>
              </div>
              <ZBQZ style="flex-grow: 1;"></ZBQZ>
            </div>
            <div class="FSWD">
              <div class="huan3-title">
                <span class="huan3"></span>
                <span class="huan3txt">指标均值</span>
              </div>
              <FSWD style="flex-grow: 1;"></FSWD>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="indexbg-bottom">
      <div class="each-city-use">
        <div class="indexbg-title">
          <span class="jiantou1"></span>
          <span class="GXKTLtxt">各县（市、区）当月开通量及活跃用户数</span>
        </div>
        <div class="GXSYL">
          <GXKTL :content1="numcontent" :content2="gxhycontent"></GXKTL>
        </div>
      </div>

      <div class="application-use">
        <div class="indexbg-title">
          <span class="jiantou1"></span>
          <span class="GXKTLtxt">各场景查询量</span>
        </div>
        <div class="CJSY">
          <div style="flex: 1;display: flex;flex-direction: column;">
            <CJSY class="CJSYcss" :content="rmcjcontent"></CJSY>
          </div>
          <div style="flex: 1;display: flex;flex-direction: column;">
            <GCJYSYL class="GCJYSYLcss" :cjcontent="cjcontent"></GCJYSYL>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import GXKTL from "../components/GXKTL"
    import GXSYL from "../components/GXSYL"
    import CJSY from "../components/CJSY"
    import GCJYSYL from "../components/GCJYSYL"
    import QSDJFB from "../components/QSDJFB"
    import FSFB from "../components/FSFB"
    import FSWD from "../components/FSWD"
    import ZBDF from "../components/ZBDF"
    import ZBQZ from "../components/ZBQZ"
    import indexstars from "../components/indexstars"
    import SJLR1 from "../components/SJLR1"
    import SJLR2 from "../components/SJLR2"
    import shonum from "./grxy/Number.vue"
    import api from '../core/datainterface';


    export default {
        name: "login",
        data() {
            return {
                loadingFlag: true,
                sjnum1: 0,//数据总量
                sjnum2: 0,//社保数据量
                sjnum3: 0,//公积金数据量
                sjnum4: 0,//志愿者
                sjnum5: 0,//捐赠信息
                sjnum6: 0,//不良行为
                sjnum7: 0,//行政处罚
                sjnum8: 0,//逾期信息
                sjnum9: 0,//其它
                openusernum: 0,
                dyopennum: 0,
                dyhynum: 0,
                danweinum: '793万',
                sxnum: '76万',
                huanbi1: 0,
                huanbi2: 0,
                huanbi3: 0,
                numcontent: [{area: "鹿城", sumNum: 0}, {area: "龙湾", sumNum: 0}, {area: "瓯海", sumNum: 0}, {
                    area: "洞头",
                    sumNum: 0
                }, {area: "瑞安", sumNum: 0}, {area: "乐清", sumNum: 0}, {area: "永嘉", sumNum: 0}, {
                    area: "平阳",
                    sumNum: 0
                }, {area: "苍南", sumNum: 0}, {area: "文成", sumNum: 0}, {area: "泰顺", sumNum: 0}],
                gxhycontent: [{area: "鹿城", sumNum: 0}, {area: "龙湾", sumNum: 0}, {area: "瓯海", sumNum: 0}, {
                    area: "洞头",
                    sumNum: 0
                }, {area: "瑞安", sumNum: 0}, {area: "乐清", sumNum: 0}, {area: "永嘉", sumNum: 0}, {
                    area: "平阳",
                    sumNum: 0
                }, {area: "苍南", sumNum: 0}, {area: "文成", sumNum: 0}, {area: "泰顺", sumNum: 0}],
                usecontent: [],
                rmcjcontent: [],
                gxsylcontent: [{area: "鹿城", sumNum: 0}, {area: "龙湾", sumNum: 0}, {area: "瓯海", sumNum: 0}, {
                    area: "洞头",
                    sumNum: 0
                }, {area: "瑞安", sumNum: 0}, {area: "乐清", sumNum: 0}, {area: "永嘉", sumNum: 0}, {
                    area: "平阳",
                    sumNum: 0
                }, {area: "苍南", sumNum: 0}, {area: "文成", sumNum: 0}, {area: "泰顺", sumNum: 0}],
                fsfbcontent: [],
                cjcontent: [],
                cjnumcontent: [[], [], [], []],
                timecontent: [[], [], [], []],
            }
        },
        components: {
            shonum,
            GXKTL,
            GXSYL,
            CJSY,
            GCJYSYL,
            QSDJFB,
            FSFB,
            FSWD,
            ZBDF,
            ZBQZ,
            SJLR1,
            SJLR2,
            indexstars,
            api
        },
        props: {},
        methods: {},
        mounted() {
            const that = this;
            this.$parent.loadingFlag = true;
            api.presentdredgeuser().then((res1) => {
                that.openusernum = res1[0].sumNum;
                api.dredgeuseratmonth().then((res2) => {
                    that.dyopennum = res2[0].sumNum;
                    that.huanbi1 = (that.openusernum / (that.openusernum - that.dyopennum) * 100).toFixed(2);
                    api.dredgeuseratlastmonth().then((res3) => {
                        that.huanbi2 = (that.dyopennum / res3[0].sumNum * 100).toFixed(2);
                    }).catch((err3) => {
                        console.log(err3);
                    });
                }).catch((err2) => {
                    console.log(err2);
                });
            }).catch((err1) => {
                console.log(err1);
            });
            api.livelyuseratmonyh().then((res1) => {
                api.livelyuseratlastmonyh().then((res2) => {
                    that.dyhynum = res1[0].sumNum;
                    that.huanbi3 = (that.dyhynum / res2[0].sumNum * 100).toFixed(2);
                    that.loadingFlag = false;
                })
            }).catch((err) => {
                console.log(err);
            });
            api.dredgeusersumatcountry().then((res) => {
                const arr = [];
                for (var i = 0; i < that.gxsylcontent.length; i++) {
                    for (var k = 0; k < res.length; k++) {
                        if (that.gxsylcontent[i].area === res[k].area) {
                            arr.push({area: res[k].area, sumNum: res[k].sumNum});
                        }
                    }
                }
                that.gxsylcontent = arr;
            }).catch((err) => {
                console.log(err);
            });
            api.livelyuseratcountry().then((res) => {
                const arr = [];
                for (var i = 0; i < that.gxhycontent.length; i++) {
                    for (var k = 0; k < res.length; k++) {
                        if (that.gxhycontent[i].area === res[k].area) {
                            arr.push({area: res[k].area, sumNum: res[k].sumNum});
                        }
                    }
                }
                that.gxhycontent = arr;
            }).catch((err) => {
                console.log(err);
            });
            api.eachcountrydredgeuser().then((res) => {
                const arr = [];
                for (var i = 0; i < that.numcontent.length; i++) {
                    for (var k = 0; k < res.length; k++) {
                        if (that.numcontent[i].area === res[k].area) {
                            arr.push({area: res[k].area, sumNum: res[k].sumNum});
                        }
                    }
                }
                that.numcontent = arr;
            }).catch((err) => {
                console.log(err);
            });
            api.eachkindofdata().then((res) => {
                for (var i = 0; i < res.length; i++) {
                    switch (res[i].kind) {
                        case '志愿者信息':
                            that.sjnum4 = Math.round(res[i].sumNum / 10000);
                            that.sjnum1 = that.sjnum1 + res[i].sumNum;
                            break;
                        case '捐赠信息':
                            that.sjnum5 = Math.round(res[i].sumNum / 10000);
                            that.sjnum1 = that.sjnum1 + res[i].sumNum;
                            break;
                        case '不良行为信息':
                            that.sjnum6 = Math.round(res[i].sumNum / 10000);
                            that.sjnum1 = that.sjnum1 + res[i].sumNum;
                            break;
                        case '行政处罚信息':
                            that.sjnum7 = Math.round(res[i].sumNum / 10000);
                            that.sjnum1 = that.sjnum1 + res[i].sumNum;
                            break;
                        default:
                            that.sjnum9 = that.sjnum9 + res[i].sumNum;
                            that.sjnum1 = that.sjnum1 + res[i].sumNum;
                    }
                }
                that.sjnum9 = Math.round(that.sjnum9 / 10000);
                api.gjjdata().then((res1) => {
                    that.sjnum3 = Math.round(res1[0].sumNum / 10000);
                    that.sjnum1 = that.sjnum1 + res1[0].sumNum;
                    api.sbdata().then((res2) => {
                        that.sjnum2 = Math.round(res2[0].sumNum / 10000);
                        that.sjnum1 = that.sjnum1 + res2[0].sumNum;
                        api.getsplf().then((res3) => {
                            that.sjnum8 = Math.round(res3[0].sumNum / 10000);
                            that.sjnum1 = that.sjnum1 + res3[0].sumNum;
                            that.sjnum1 = that.sjnum1.toLocaleString();
                        }).catch((err3) => {
                            console.log(err3)
                        })
                    }).catch((err2) => {
                        console.log(err2)
                    })
                }).catch((err1) => {
                    console.log(err1)
                })
            }).catch((err) => {
                console.log(err)
            });
            api.sceneusenumeachmonth().then((res) => {
                that.cjcontent = res;
            }).catch((err) => {
                console.log(err);
            });
            api.sceneusenumanmonth().then((res) => {
                var ojf = 0;
                var jynum = 0;
                var jsnum = 0;
                var tcnum = 0;
                for (var k = 0; k < res.length; k++) {
                    if (res[k].app_name === '测试应用' || res[k].app_name === '温州市大数据共享平台' || res[k].app_name === '龙湾城市合伙人') {
                        res.splice(k, 1);
                        k = -1;
                    }
                }
                for (var l = 0; l < res.length; l++) {
                    switch (res[l].app_name) {
                        case '瓯江分':
                            ojf = ojf + res[l].sumNum;
                            break;
                        case '信用借阅':
                            jynum = jynum + res[l].sumNum;
                            break;
                        case '信用健身':
                            jsnum = jsnum + res[l].sumNum;
                            break;
                        case '信用停车':
                            tcnum = tcnum + res[l].sumNum;
                            break;
                        default:
                            console.log(res[l].name)
                    }
                }
                const ttlist = [
                    {sumNum: ojf, app_name: '瓯江分'},
                    {sumNum: jynum, app_name: '信用借阅'},
                    {sumNum: jsnum, app_name: '信用健身'},
                    {sumNum: tcnum, app_name: '信用停车'},];
                that.rmcjcontent = ttlist;
            }).catch((err) => {
                console.log(err);
            });
            api.fsfbanmonth().then((res) => {
                var fsfbcontent2 = [{credit_level: '待提高', sumNum: 0}, {credit_level: '一般', sumNum: 0}, {
                    credit_level: '良好',
                    sumNum: 0
                }, {credit_level: '优秀', sumNum: 0}, {credit_level: '极优', sumNum: 0}];
                for (var k = 0; k < fsfbcontent2.length; k++) {
                    for (var i = 0; i < res.length; i++) {
                        if (fsfbcontent2[k].credit_level === res[i].credit_level) {
                            fsfbcontent2[k].sumNum = res[i].sumNum;
                        }
                    }
                }
                that.fsfbcontent = fsfbcontent2
            }).catch((err) => {
                console.log(err);
            });
        }
    }
</script>
<style scoped>


  .indexbg {
    width: 100%;
    height: 100%;
    background-color: #08032A;
    padding: 33px 26px 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .indexbg-top {
    flex: 1.69;
    display: flex;
  }

  .top-left {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .KTYH {
    flex: 1.44;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .each-city-open {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .indexbg-title {
    height: 53px;
    line-height: 53px;
    width: 100%;
  }

  .indexbg-title span {
    display: inline-block;
  }

  .numstars {
    margin: 0 36px;
    height: 100%;
    flex: 1.55;
  }

  .SJLR1 {
    position: absolute;
    top: 77px;
    left: 644px;
    width: 350px;
    height: 500px;
    /*    background: url("../images/backindex.png") no-repeat;
        background-size: 100% 100%;*/
  }

  .SJLR2 {
    position: absolute;
    top: 75px;
    left: 922px;
    width: 350px;
    height: 500px;
  }

  .egg {
    position: absolute;
    top: -35px;
    width: 814px;
    height: 778px;
    background: url("../images/egg.png") no-repeat;
    background-size: 100% 100%;
  }

  .eggtxt {
    position: absolute;
    top: 254px;
    left: 896px;
  }

  .sjzl {
    text-align: center;
    line-height: 40px;
    font-size: 26px;
    color: #08032A;
  }

  .sjzl2 {
    text-align: center;
    line-height: 32px;
    font-size: 26px;
    color: #08032A;
  }

  .eggtxt1 {
    position: absolute;
    top: 95px;
    left: 636px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #09ADEF;
    box-shadow: 0 0 10px #D88B26 inset;
  }

  .eggtxt2 {
    position: absolute;
    top: 214px;
    left: 625px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #09ADEF;
    box-shadow: 0 0 10px #D88B26 inset;
  }

  .eggtxt3 {
    position: absolute;
    top: 330px;
    left: 623px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #09ADEF;
    box-shadow: 0 0 10px #D88B26 inset;
  }

  .eggtxt4 {
    position: absolute;
    top: 455px;
    left: 615px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #09ADEF;
    box-shadow: 0 0 10px #D88B26 inset;
  }

  .eggtxt5 {
    position: absolute;
    top: 95px;
    left: 1222px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #09ADEF;
    box-shadow: 0 0 10px #D88B26 inset;
  }

  .eggtxt6 {
    position: absolute;
    top: 214px;
    left: 1225px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #09ADEF;
    box-shadow: 0 0 10px #D88B26 inset;
  }

  .eggtxt7 {
    position: absolute;
    top: 330px;
    left: 1230px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #09ADEF;
    box-shadow: 0 0 10px #D88B26 inset;
  }

  .eggtxt8 {
    position: absolute;
    top: 455px;
    left: 1237px;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid #09ADEF;
    box-shadow: 0 0 10px #D88B26 inset;
  }

  .sjzl3 {
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #D88B26;
  }

  .sjzl4 {
    text-align: center;
    line-height: 0px;
    font-size: 14px;
    color: #D88B26;
  }

  .CXF-content {
    height: 100%;
    flex: 1.1;
    display: flex;
    flex-direction: column;
  }

  .indexbg-bottom {
    flex: 1;
    display: flex;
  }

  .each-city-use {
    flex: 0.805;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
  }

  .application-use {
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  .headbg {
    height: 96px;
    width: 100%;
    background: url("../images/head.png") no-repeat;
    background-size: 100% 100%;
  }

  .KTYH-inner {
    flex: 1;
  }

  .KTYHtxt1 {
    display: inline;
    line-height: 42px;
    text-align: left;
    color: rgb(48, 190, 242);
    font-size: 18px;
  }

  .KTYHtxt4 {
    margin-right: 20px;
    display: inline;
    float: right;
    line-height: 42px;
    text-align: right;
    color: #ABE7FF;
    font-size: 16px;
  }

  .KTYHtxt5 {
    display: inline;
    float: right;
    line-height: 42px;
    text-align: right;
    color: #FF6548;
    font-size: 16px;
  }

  .KTYHtxt6 {
    margin-right: 20px;
    display: inline;
    float: left;
    line-height: 42px;
    text-align: right;
    color: #ABE7FF;
    font-size: 16px;
  }

  .KTYHtxt7 {
    display: inline;
    float: left;
    line-height: 42px;
    text-align: right;
    color: #FF6548;
    font-size: 16px;
  }

  .KTYHtxt2 {
    font-size: 17px;
  }

  .KTYHtxt3 {
    font-size: 17px;
  }

  .outdiv {
    width: 100%;
    border: 3px solid rgb(3, 77, 157);
    box-sizing: border-box;
  }

  .showtxt {
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }

  .showtxt /deep/ .number-behind {
    line-height: 95px;
    font-size: 95px;
    color: rgb(31, 255, 237);
  }

  .showtxt /deep/ .number-span:before {
    line-height: 95px;
    font-size: 95px;
  }

  .inudiv {
    width: 100%;
    border: 3px solid rgb(3, 77, 157);
    box-sizing: border-box;
  }

  .showtxt1 {
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }

  .showtxt1 /deep/ .number-behind {
    line-height: 51px;
    font-size: 45px;
    color: rgb(31, 255, 237);
  }

  .showtxt1 /deep/ .number-span:before {
    line-height: 51px;
    font-size: 45px;
  }

  .jiantou1 {
    vertical-align: text-top;
    width: 25px;
    height: 18px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .jiantou2 {
    position: absolute;
    top: 734px;
    left: 32px;
    width: 25px;
    height: 18px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .jiantou3 {
    position: absolute;
    top: 734px;
    left: 598px;
    width: 25px;
    height: 18px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .GXKTLtxt {
    color: rgb(31, 255, 237);
    font-size: 18px;
  }

  .GXKTL {
    flex-grow: 1;
    height: 150%;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
  }

  .GXSYL {
    flex-grow: 1;
    height: 100%;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
  }

  .CJSY {
    display: flex;
    flex-grow: 1;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
    padding: 30px 40px 10px;
    box-sizing: border-box;
  }

  .CJSYcss, .GCJYSYLcss {
    flex-grow: 1;
  }

  .huan1 {
    position: absolute;
    top: 30px;
    left: 42px;
    width: 6px;
    height: 6px;
    background-color: #FFF;
    border-radius: 50%;
    border: 3px solid #F3A64E;
  }

  .huan1txt {
    position: absolute;
    top: 24px;
    left: 65px;
    font-size: 15px;
    color: #2FB9D7;
  }

  .huan2 {
    position: absolute;
    top: 30px;
    left: 620px;
    width: 6px;
    height: 6px;
    background-color: #FFF;
    border-radius: 50%;
    border: 3px solid #F3A64E;
  }

  .huan2txt {
    position: absolute;
    top: 24px;
    left: 640px;
    font-size: 15px;
    color: #2FB9D7;
  }

  .huan3-title {
    padding-bottom: 10px;
  }

  .huan3 {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #FFF;
    border-radius: 50%;
    border: 3px solid #F3A64E;
  }

  .huan3txt {
    display: inline-block;
    font-size: 15px;
    color: #2FB9D7;
  }

  .CXFtxt {
    position: absolute;
    top: 106px;
    right: 468px;
    color: rgb(31, 255, 237);
    font-size: 18px;
  }

  .CXF {
    padding: 23px 40px;
    box-sizing: border-box;
    flex-grow: 1;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }


  .FSFB {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75%;
  }

  .FSWD {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 60%;
  }

  .ZBQZ {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 60%;
  }

  .CXF-head {
    height: 74%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .PJZB {
    width: 100%;
    height: 26%;
    display: flex;
    flex-direction: column;
  }


  .txtindex {
    width: 100%;
    height: 100%;
    padding: 10px 20px 10px 20px;
    text-align: center;
    color: #16DDFD;
    font-size: 20px;
  }

  @-webkit-keyframes drop {
    0% {
      -webkit-transform: scale3d(0.01, 0.01, 0.01) translateY(0);
      transform: scale3d(0.01, 0.01, 0.01) translateY(0);
    }
    10% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    44% {
      -webkit-transform: scale3d(1, 1, 1) translateY(200px);
      transform: scale3d(1, 1, 1) translateY(200px);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1) translateY(200px);
      transform: scale3d(1, 1, 1) translateY(200px);
    }
  }

  @keyframes drop {
    0% {
      -webkit-transform: scale3d(0.01, 0.01, 0.01) translateY(0);
      transform: scale3d(0.01, 0.01, 0.01) translateY(0);
    }
    10% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    44% {
      -webkit-transform: scale3d(1, 1, 1) translateY(400px);
      transform: scale3d(1, 1, 1) translateY(400px);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1) translateY(400px);
      transform: scale3d(1, 1, 1) translateY(400px);
    }
  }

  @-webkit-keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    42% {
      opacity: 0;
    }
    52% {
      opacity: 1;
    }
    65% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    42% {
      opacity: 0;
    }
    52% {
      opacity: 1;
    }
    65% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes ripple {
    0% {
      -webkit-transform: rotateX(65deg) scale3d(0.2, 0.2, 0.2);
      transform: rotateX(65deg) scale3d(0.2, 0.2, 0.2);
    }
    42% {
      -webkit-transform: rotateX(65deg) scale3d(0.2, 0.2, 0.2);
      transform: rotateX(65deg) scale3d(0.2, 0.2, 0.2);
    }
    100% {
      -webkit-transform: rotateX(65deg) scale3d(0.9, 0.9, 0.9);
      transform: rotateX(65deg) scale3d(0.9, 0.9, 0.9);
    }
  }

  @keyframes ripple {
    0% {
      -webkit-transform: rotateX(65deg) scale3d(0.2, 0.2, 0.2);
      transform: rotateX(65deg) scale3d(0.2, 0.2, 0.2);
    }
    42% {
      -webkit-transform: rotateX(65deg) scale3d(0.2, 0.2, 0.2);
      transform: rotateX(65deg) scale3d(0.2, 0.2, 0.2);
    }
    100% {
      -webkit-transform: rotateX(65deg) scale3d(0.9, 0.9, 0.9);
      transform: rotateX(65deg) scale3d(0.9, 0.9, 0.9);
    }
  }

  @-webkit-keyframes border {
    0% {
      stroke-width: 6px;
    }
    42% {
      stroke-width: 6px;
    }
    100% {
      stroke-width: 2px;
    }
  }

  @keyframes border {
    0% {
      stroke-width: 6px;
    }
    42% {
      stroke-width: 6px;
    }
    100% {
      stroke-width: 2px;
    }
  }
</style>

