<template>
  <div class="showindex">
    <!-- <div class="headbg"></div> -->

    <div class="showindex-left">
      <div class="showindex-left-top">
        <div class="showindex-use-content">
          <div class="indexbg-title">
            <span class="jiantou3"></span>
            <span class="HMQKTJtxt">应用场景</span>
          </div>
          <div class="YYCJ">
            <div class="YYCJnum">
              <div class="zsnum">应用场景地点总数</div>
              <div class="numzs">117个</div>
            </div>

            <div class="button-group">
              <div class="leftbtn"></div>
              <div class="inneltxt">
                <div class="oneofYYJC" v-for="(item,index) in List1" :key="index"
                     :class="index === titleIndex?'changeBorder':''" @click="refreshCount(index)"><span
                  style="color: #FFF">{{item[0]}}</span><span
                  style="color: rgb(31, 255, 237);">{{item[1]}}</span>
                </div>
              </div>
              <div class="rightbtn"></div>
            </div>
            <div class="YYCJca" v-if="t===0">
              <YYCJts></YYCJts>
            </div>
            <div class="YYCJca" v-if="t===1">
              <YYCJtc></YYCJtc>
            </div>
            <div class="YYCJca" v-if="t===2">
              <YYCJly></YYCJly>
            </div>
          </div>
        </div>
        <div class="showindex-map">
          <iframe class="centerbg" src="http://10.36.199.119:8011/public/echartsMap/index.html"
                  frameborder="0"></iframe>
        </div>
      </div>
      <div class="showindex-left-bottom">
        <div class="indexbg-title">
          <span class="jiantou3"></span>
          <span class="HMQKTJtxt">瓯江分惠民情况统计</span>
        </div>
        <div class="HMQKTJ">
          <HMQKcss1 class="HM1"></HMQKcss1>
          <HMQKcss2 class="HM2"></HMQKcss2>
        </div>
      </div>
    </div>

    <div class="showindex-right">
      <div class="age-use">
        <div class="indexbg-title">
          <span class="jiantou3"></span>
          <span class="HMQKTJtxt">各年龄段使用</span>
        </div>
        <div class="GNLSY">
          <GNLSY></GNLSY>
        </div>
      </div>
      <div class="yingyong">
        <div class="use-instruction">
          <div class="indexbg-title">
            <span class="jiantou3"></span>
            <span class="HMQKTJtxt">使用情况</span>
          </div>
          <div class="SYQK">
            <div class="SYQK-inner">
              <div class="SYQKtxt1">当月开通</div>
              <shonum class="showtxt1" :number="dyopennum" :length=7></shonum>
              <div class="KTYHtxt6">环比</div>
              <div class="KTYHtxt7">{{huanbi2}}%</div>
            </div>
            <div class="SYQK-inner" v-loading="loadingFlag" element-loading-background="rgba(9, 8, 52, 0.8)">
              <div class="SYQKtxt1">当月使用</div>
              <shonum class="showtxt1" :number="dyhynum" :length=7></shonum>
              <div class="KTYHtxt6">环比</div>
              <div class="KTYHtxt7">{{huanbi3}}%</div>
            </div>
            <div class="SYQK-inner">
              <div class="SYQKtxt1">当月反馈</div>
              <shonum class="showtxt1" :number="543" :length=7></shonum>
              <div class="KTYHtxt6">环比</div>
              <div class="KTYHtxt7">100%</div>
            </div>
          </div>
        </div>

        <div class="month-open">
          <div class="indexbg-title">
            <span class="jiantou3"></span>
            <span class="HMQKTJtxt">月开通、使用</span>
          </div>
          <div class="YKTSY">
            <YKTSY :content1="ucontent" :content2="ocontent"></YKTSY>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import GNLSY from "../components/GNLSY"
    import YKTSY from "../components/YKTSY"
    import HMQKcss1 from "../components/HMQKcss1"
    import HMQKcss2 from "../components/HMQKcss2"
    import YYCJts from "../components/YYCJ"
    import YYCJtc from "../components/YYCJ1"
    import YYCJly from "../components/YYCJ2"
    import QXmap from "../components/QXmap"
    import api from '../core/yycj';
    import apk from '../core/datainterface';
    import shonum from "./grxy/Number.vue"

    export default {
        name: "YYCJ",
        data() {
            return {
                loadingFlag: true,
                t: 0,
                titleIndex: 0,
                ucontent: [],
                ocontent: [],
                List1: [["图书馆", "105"], ["停车场", "10"], ["旅游", "2"]],
                dyopennum: 0,
                huanbi2: 0,
                dyhynum: 0,
                huanbi3: 0,
            }
        },
        components: {GNLSY, YKTSY, HMQKcss1, HMQKcss2, YYCJts, YYCJly, YYCJtc, QXmap, api, shonum},
        methods: {
            refreshCount(index) {
                this.titleIndex = index;
                this.t = index;
            },
        },
        mounted() {
            const that = this;
            apk.presentdredgeuser().then((res1) => {
                apk.dredgeuseratmonth().then((res2) => {
                    that.dyopennum = res2[0].sumNum;
                    apk.dredgeuseratlastmonth().then((res3) => {
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
            apk.livelyuseratmonyh().then((res1) => {
                apk.livelyuseratlastmonyh().then((res2) => {
                    that.dyhynum = res1[0].sumNum;
                    that.huanbi3 = (that.dyhynum / res2[0].sumNum * 100).toFixed(2);
                    that.loadingFlag = false;
                })
            }).catch((err) => {
                console.log(err);
            });
            api.everyapplyusersum().then((res) => {
                that.ucontent = res;
            }).catch((err) => {
                console.log(err);
            });
            api.everyusersum().then((res) => {
                that.ocontent = res;
            }).catch((err) => {
                console.log(err);
            });
        }
    }
</script>
<style scoped>
  .showindex {
    width: 100%;
    height: 100%;
    background-color: #08032A;
    padding: 0 26px 25px;
    display: flex;
    box-sizing: border-box;
    /*    background: url("../../static/YYCJindex.png") no-repeat;
        background-size: 100% 100%;*/
  }

  .indexbg-title {
    height: 53px;
    line-height: 53px;
    width: 100%;
  }

  .indexbg-title span {
    display: inline-block;
  }

  .showindex-left {
    flex: 2;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
  }

  .showindex-left-top {
    flex: 2;
    display: flex;
  }

  .showindex-use-content {
    flex: 1.08;
    margin-right: 29px;
    display: flex;
    flex-direction: column;
  }

  .use-instruction, .month-open {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .showindex-map {
    flex: 2;
  }

  .showindex-left-bottom {
    flex: 1.09;
    display: flex;
    flex-direction: column;
  }

  .showindex-right {
    flex: 0.67;
    display: flex;
    flex-direction: column;
  }

  .age-use {
    flex: 0.86;
    flex-direction: column;
    display: flex;
  }

  .yingyong {
    flex: 2;
    flex-direction: column;
    display: flex;
  }

  .headbg {
    height: 96px;
    width: 100%;
    background: url("../images/head.png") no-repeat;
    background-size: 100% 100%;
  }

  .centerbg {
    width: 100%;
    height: 100%;
  }

  .jiantou1 {
    position: absolute;
    top: 110px;
    left: 32px;
    width: 25px;
    height: 16px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .jiantou2 {
    position: absolute;
    top: 402px;
    left: 32px;
    width: 25px;
    height: 16px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .jiantou3 {
    vertical-align: text-top;
    width: 25px;
    height: 18px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .jiantou4 {
    position: absolute;
    top: 110px;
    left: 1423px;
    width: 25px;
    height: 16px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .jiantou5 {
    position: absolute;
    top: 401px;
    left: 1423px;
    width: 25px;
    height: 16px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .SYQKtxt {
    position: absolute;
    top: 104px;
    left: 68px;
    color: rgb(31, 255, 237);
    font-size: 17px;
    letter-spacing: 1px;
  }

  .SYQKtxt1 {
    width: 30%;
    display: inline-block;
    font-size: 17px;
    color: #33CAF6;
  }


  .showtxt1 {
    display: inline-block;
    width: 40%;
    text-align: center;
    letter-spacing: 2px;
    font-family: 'numberSpecial';
    font-size: 36px;
    color: rgb(31, 255, 237);
    border: 1px solid rgb(3, 77, 157);
  }

  .KTYHtxt6 {
    margin-left: 24px;
    display: inline;
    float: left;
    line-height: 42px;
    text-align: right;
    color: #ABE7FF;
    font-size: 16px;
  }

  .KTYHtxt7 {
    margin-left: 10px;
    display: inline;
    float: left;
    line-height: 42px;
    text-align: right;
    color: #FF6548;
    font-size: 16px;
  }

  .SYQKtxt2 {
    position: absolute;
    top: 94px;
    left: 33px;
    font-size: 17px;
    color: #33CAF6;
  }


  .showtxt2 {
    position: absolute;
    top: 86px;
    left: 137px;
    text-align: center;
    letter-spacing: 2px;
    font-family: 'numberSpecial';
    font-size: 36px;
    color: rgb(31, 255, 237);
    border: 1px solid rgb(3, 77, 157);
    padding-left: 5px;
    padding-right: 5px;
  }

  .SYQKtxt3 {
    position: absolute;
    top: 158px;
    left: 33px;
    font-size: 17px;
    color: #33CAF6;
  }


  .showtxt3 {
    position: absolute;
    top: 150px;
    left: 137px;
    text-align: center;
    letter-spacing: 2px;
    font-family: 'numberSpecial';
    font-size: 36px;
    color: rgb(31, 255, 237);
    border: 1px solid rgb(3, 77, 157);
    padding-left: 5px;
    padding-right: 5px;
  }

  .SYQK {
    flex-grow: 1;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 35px;
    box-sizing: border-box;
  }

  .SYQK-inner {
    flex: 1;
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .YKTSYtxt {
    position: absolute;
    top: 397px;
    left: 68px;
    color: rgb(31, 255, 237);
    font-size: 17px;
    letter-spacing: 1px;
  }

  .YKTSY {
    flex-grow: 1;
    height: 100%;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
  }

  .HMQKTJtxt {
    color: rgb(31, 255, 237);
    font-size: 18px;
  }

  .HMQKTJ {
    flex-grow: 1;
    display: flex;
    background: url("../images/HMQK.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .HM1 {
    flex: 1;
    height: 100%;
  }

  .HM2 {
    height: 100%;
    flex: 2;
  }

  .GNLSYtxt {
    position: absolute;
    top: 105px;
    left: 1459px;
    color: rgb(31, 255, 237);
    font-size: 17px;
    letter-spacing: 1px;
  }

  .GNLSY {
    flex-grow: 1;
    height: 100%;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
  }

  .YYCJtxt {
    position: absolute;
    top: 397px;
    left: 1459px;
    color: rgb(31, 255, 237);
    font-size: 17px;
    letter-spacing: 1px;
  }

  .YYCJ {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 45px 17px;
    box-sizing: border-box;
    background: url("../images/backindex.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }

  .YYCJnum {
    width: 80%;
    margin: 0 auto;
    height: 69px;
    background: #0B1654;
    padding: 0 20px 0 28px;
    box-sizing: border-box;
    margin-bottom: 25px;
  }

  .zsnum {
    float: left;
    line-height: 69px;
    font-size: 24px;
    color: rgb(31, 255, 237);
  }

  .numzs {
    float: right;
    font-size: 24px;
    line-height: 69px;
    color: rgb(31, 255, 237);
  }

  .button-group {
    position: relative;
    width: 100%;
    height: 50px;
  }

  .leftbtn {
    position: absolute;
    width: 16px;
    height: 18px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: url("../images/leftbtn.png") no-repeat;
    background-size: 100% 100%;
  }

  .rightbtn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 16px;
    height: 18px;
    background: url("../images/rightbtn.png") no-repeat;
    background-size: 100% 100%;
  }

  .inneltxt {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .oneofYYJC {
    width: 30%;
    height: 100%;
    background: #0B1654;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
  }

  .changeBorder {
    width: 30%;
    height: 100%;
    background: #0B1654;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    border: 3px solid rgb(3, 77, 157)
  }

  .YYCJca {
    flex: 1;
    height: 100%;
  }
</style>
