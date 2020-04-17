<template>
  <div class="seindexbg">
    <!-- <div class="headbg"></div> -->
    <div class="seindexbg-left">
      <div class="seindexbg-right-top">
        <div class="indexbg-title">
          <span class="jiantou1"></span>
          <span class="PJZBTJtxt">评价指标明细</span>
        </div>
        <div class="PJZBMX">

          <div class="PJZBMX-left">
            <div class="PJZBbg">
              <div class="secofbg" v-for="(item,index) in titleList" :key="index"
                   :class="index === titleIndex?'changeBorder':''" @click="refreshCount(index)">
                <div class="sectitle" :style="changeColor(index)">{{item[0]}}</div>
                <div class="secnum" :style="changeColor(index)">{{item[1]}}</div>
              </div>
            </div>
          </div>

          <div class="PJZBMX-right" v-if="k === 0">
            <div class="PJZBbody">
              <div class="PJZBbody1">
                <div class="onemsg" v-for="(item,index) in List1" :key="index"
                     :class="index === activeIndex?'changeColor':''" @click="gotoGood(index)">{{item}}
                </div>
              </div>
              <div class="PJZBbody3" v-if="i===0">
                <div class="PFLJNUM">年龄</div>
              </div>
              <div class="PJZBbody3" v-if="i===1">
                <div class="PFLJNUM">社保缴纳状态</div>
              </div>
              <div class="PJZBbody3" v-if="i===2">
                <div class="PFLJNUM">公积金缴纳状态</div>
              </div>
              <div class="PJZBbody3" v-if="i===3">
                <div class="PFLJNUM">职业类型</div>
              </div>
              <div class="PJZBbody3" v-if="i===4">
                <div class="PFLJNUM">是否获得技术职称</div>
              </div>
              <div class="PJZBbody3" v-if="i===5">
                <div class="PFLJNUM">信用评价分数</div>
              </div>
              <div class="PJZBbody2" v-if="t===0">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">当年龄>=80时</div>
                    <div class="spright">49分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">80>年龄>=76</div>
                    <div class="spright">44分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">76>年龄>=70</div>
                    <div class="spright">39分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">70>年龄>=67</div>
                    <div class="spright">37分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">67>年龄>=64</div>
                    <div class="spright">34分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">64>年龄>=60</div>
                    <div class="spright">32分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">60>年龄>=55</div>
                    <div class="spright">29分</div>
                  </div>
                </div>
                <div class="momsg2">
                  <div class="leftmsg1">
                    <div class="spleft">55>年龄>=50</div>
                    <div class="spright">27分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">50>年龄>=45</div>
                    <div class="spright">25分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">45>年龄>=40</div>
                    <div class="spright">22分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">40>年龄>=30</div>
                    <div class="spright">17分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">30>年龄>=20</div>
                    <div class="spright">12分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">20>年龄>=18</div>
                    <div class="spright">10分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">其它</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===1">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">社保缴纳状态=='正常'</div>
                    <div class="spright">7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===2">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">公积金缴纳状态=='正常'</div>
                    <div class="spright">7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===3">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">行业=='公务员'</div>
                    <div class="spright">28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">行业=='事业单位'</div>
                    <div class="spright">20分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">行业=='企业法人代表'</div>
                    <div class="spright">17分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">行业=='企业职工'</div>
                    <div class="spright">14分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">8分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===4">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">获得技术职称</div>
                    <div class="spright">7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===5">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">分数>=900</div>
                    <div class="spright">14分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">900>分数>=800</div>
                    <div class="spright">11分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">800>分数>=700</div>
                    <div class="spright">0分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">分数<700</div>
                    <div class="spright">-7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="PJZBMX-right" v-if="k === 1">
            <div class="PJZBbody">
              <div class="PJZBbody1">
                <div class="onemsg" v-for="(item,index) in List2" :key="index"
                     :class="index === activeIndex?'changeColor':''" @click="gotoGood(index)">{{item}}
                </div>
              </div>
              <div class="PJZBbody3" v-if="i===0">
                <div class="PFLJNUM">是否获得荣誉奖励</div>
              </div>
              <div class="PJZBbody3" v-if="i===1">
                <div class="PFLJNUM">是否A级纳税人</div>
              </div>
              <div class="PJZBbody3" v-if="i===2">
                <div class="PFLJNUM">是否海关高级认证企业</div>
              </div>
              <div class="PJZBbody3" v-if="i===3">
                <div class="PFLJNUM">是否命中黑名单</div>
              </div>
              <div class="PJZBbody3" v-if="i===4">
                <div class="PFLJNUM">是否受过行政处罚</div>
              </div>
              <div class="PJZBbody3" v-if="i===5">
                <div class="PFLJNUM">是否欠税</div>
              </div>
              <div class="PJZBbody3" v-if="i===6">
                <div class="PFLJNUM">是否考试违纪</div>
              </div>
              <div class="PJZBbody3" v-if="i===7">
                <div class="PFLJNUM">是否交通违法</div>
              </div>
              <div class="PJZBbody3" v-if="i===8">
                <div class="PFLJNUM">是否老赖</div>
              </div>
              <div class="PJZBbody2" v-if="t===0">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">获得荣誉奖励</div>
                    <div class="spright">28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===1">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">是A级纳税人</div>
                    <div class="spright">35分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===2">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">是海关高级认证企业</div>
                    <div class="spright">36分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===3">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">是公务员(事业单位)</div>
                    <div class="spright">-56分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">是企业法人代表</div>
                    <div class="spright">-35分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">是普通群众</div>
                    <div class="spright">-28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">8分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===4">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">是公务员(事业单位)</div>
                    <div class="spright">-42分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">是企业法人代表</div>
                    <div class="spright">-28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">是普通群众</div>
                    <div class="spright">-21分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===5">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">欠税</div>
                    <div class="spright">-28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===6">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">有考试违纪</div>
                    <div class="spright">-21分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===7">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">是公务员(事业单位)</div>
                    <div class="spright">-49分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">不是公务员(事业单位)</div>
                    <div class="spright">-28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===8">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">是老赖</div>
                    <div class="spright">-140分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="PJZBMX-right" v-if="k === 2">
            <div class="PJZBbody">
              <div class="PJZBbody1">
                <div class="onemsg" v-for="(item,index) in List3" :key="index"
                     :class="index === activeIndex?'changeColor':''" @click="gotoGood(index)">{{item}}
                </div>
              </div>
              <div class="PJZBbody3" v-if="i===0">
                <div class="PFLJNUM">是否登记机动车信息</div>
              </div>
              <div class="PJZBbody3" v-if="i===1">
                <div class="PFLJNUM">逾期金额</div>
              </div>
              <div class="PJZBbody3" v-if="i===2">
                <div class="PFLJNUM">逾期金额</div>
              </div>
              <div class="PJZBbody2" v-if="t===0">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">有机动车信息</div>
                    <div class="spright">7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===1">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">逾期金额>=10万</div>
                    <div class="spright">-35分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">10万>逾期金额>=5万</div>
                    <div class="spright">-28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">5万>逾期金额>=2万</div>
                    <div class="spright">-21分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">2万>逾期金额>=1万</div>
                    <div class="spright">-14分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">1万>逾期金额>=5千</div>
                    <div class="spright">-7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">5千>逾期金额>=1千</div>
                    <div class="spright">-4分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===2">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">逾期金额>=10万</div>
                    <div class="spright">-35分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">10万>逾期金额>=5万</div>
                    <div class="spright">-28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">5万>逾期金额>=2万</div>
                    <div class="spright">-21分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">2万>逾期金额>=1万</div>
                    <div class="spright">-14分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">1万>逾期金额>=5千</div>
                    <div class="spright">-7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">5千>逾期金额>=1千</div>
                    <div class="spright">-4分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="PJZBMX-right" v-if="k === 3">
            <div class="PJZBbody">
              <div class="PJZBbody1">
                <div class="onemsg" v-for="(item,index) in List4" :key="index"
                     :class="index === activeIndex?'changeColor':''" @click="gotoGood(index)">{{item}}
                </div>
              </div>
              <div class="PJZBbody3" v-if="i===0">
                <div class="PFLJNUM">是否拖欠水费</div>
              </div>
              <div class="PJZBbody3" v-if="i===1">
                <div class="PFLJNUM">是否拖欠电费</div>
              </div>
              <div class="PJZBbody3" v-if="i===2">
                <div class="PFLJNUM">是否拖欠燃气费</div>
              </div>
              <div class="PJZBbody3" v-if="i===3">
                <div class="PFLJNUM">是否拖欠运营商信息费</div>
              </div>
              <div class="PJZBbody3" v-if="i===4">
                <div class="PFLJNUM">是否拖欠有线费用</div>
              </div>
              <div class="PJZBbody2" v-if="t===0">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">拖欠水费</div>
                    <div class="spright">-7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===1">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">拖欠电费</div>
                    <div class="spright">-7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===2">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">拖欠燃气费</div>
                    <div class="spright">-7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===3">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">拖欠运营商费</div>
                    <div class="spright">-7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===4">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">拖欠有线费用</div>
                    <div class="spright">-7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="PJZBMX-right" v-if="k === 4">
            <div class="PJZBbody">
              <div class="PJZBbody1">
                <div class="onemsg" v-for="(item,index) in List5" :key="index"
                     :class="index === activeIndex?'changeColor':''" @click="gotoGood(index)">{{item}}
                </div>
              </div>
              <div class="PJZBbody3" v-if="i===0">
                <div class="PFLJNUM">是否“优秀青年志愿者”</div>
              </div>
              <div class="PJZBbody3" v-if="i===1">
                <div class="PFLJNUM">是否造血干细胞捐献</div>
              </div>
              <div class="PJZBbody3" v-if="i===2">
                <div class="PFLJNUM">是否献血</div>
              </div>
              <div class="PJZBbody3" v-if="i===3">
                <div class="PFLJNUM">劳模等级</div>
              </div>
              <div class="PJZBbody3" v-if="i===4">
                <div class="PFLJNUM">是否十佳助警市民</div>
              </div>
              <div class="PJZBbody3" v-if="i===5">
                <div class="PFLJNUM">社会捐赠总次数</div>
              </div>
              <div class="PJZBbody3" v-if="i===6">
                <div class="PFLJNUM">慈善捐赠总次数</div>
              </div>
              <div class="PJZBbody3" v-if="i===7">
                <div class="PFLJNUM">是否获得"出租车好人好事"奖励</div>
              </div>
              <div class="PJZBbody2" v-if="t===0">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">是优秀青年志愿者'</div>
                    <div class="spright">14分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===1">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">有造血干细胞捐献</div>
                    <div class="spright">35分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===2">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">献血</div>
                    <div class="spright">7分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===3">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">全国劳模</div>
                    <div class="spright">49分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">省级劳模</div>
                    <div class="spright">39分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">市级劳模</div>
                    <div class="spright">29分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">8分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===4">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">是十佳助警市民</div>
                    <div class="spright">14分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===5">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">社会捐赠次数>=20</div>
                    <div class="spright">28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">20>社会捐赠次数>=10</div>
                    <div class="spright">22分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">10>社会捐赠次数>=5</div>
                    <div class="spright">17分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">5>社会捐赠次数>=3</div>
                    <div class="spright">11分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">3>社会捐赠次数>=1</div>
                    <div class="spright">6分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===6">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">社会捐赠次数>=20</div>
                    <div class="spright">28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">20>社会捐赠次数>=10</div>
                    <div class="spright">22分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">10>社会捐赠次数>=5</div>
                    <div class="spright">17分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">5>社会捐赠次数>=3</div>
                    <div class="spright">11分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">3>社会捐赠次数>=1</div>
                    <div class="spright">6分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
              <div class="PJZBbody2" v-if="t===7">
                <div class="momsg1">
                  <div class="leftmsg1">
                    <div class="spleft">获得"出租车好人好事"</div>
                    <div class="spright">28分</div>
                  </div>
                  <div class="leftmsg1">
                    <div class="spleft">否则</div>
                    <div class="spright">0分</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="seindexbg-right-bottom">
        <div class="XYXWTJ">
          <div class="ZYST-block">
            <div class="huan3-title">
              <span class="huan3"></span>
              <span class="huan3txt">社会贡献</span>
            </div>
            <div class="ZYSX">
              <SHGX :content="shgxList"></SHGX>
            </div>
          </div>
          <div class="ZYSX-block">
            <div class="huan3-title">
              <span class="huan3"></span>
              <span class="huan3txt">生活用信</span>
            </div>
            <div class="ZYST">
              <SHYX :content="shyxList"></SHYX>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="seindexbg-right">
      <div class="PJZBTJ">
        <div class="PJZBTJ-top">
          <div class="huan3-title">
            <span class="huan3"></span>
            <span class="huan3txt">身份特质</span>
          </div>
          <div class="GXRS">
            <div class="SF1">
              <SFTZ1 :content="sftzList1"></SFTZ1>
            </div>
            <div class="SF2">
              <SFTZ2 :content="sftzList2"></SFTZ2>
            </div>
          </div>
        </div>
        <div class="PJZBTJ-bottom">
          <div class="huan3-title">
            <span class="huan3"></span>
            <span class="huan3txt">商业用信</span>
          </div>
          <div class="GHYTQRS">
            <GHYTQ :content="shanyeList"></GHYTQ>
          </div>
        </div>
        <div class="PJZBTJ-middle">
          <div class="huan3-title">
            <span class="huan3"></span>
            <span class="huan3txt">遵纪守法</span>
          </div>
          <div class="XZCFRS">
            <XZCFRS :content="zjsfList"></XZCFRS>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import XZCFRS from "../components/XZCFRS"
    import GHYTQ from "../components/GHYTQ"
    import ZYSXXW from "../components/ZYSXXW"
    import ZYSXBAR from "../components/ZYSXBAR"
    import SHYX from "../components/SHYX"
    import SHGX from "../components/SHGX"
    import SFTZ1 from "../components/SFTZ1"
    import SFTZ2 from "../components/SFTZ2"
    import api from '../core/datainterface';

    export default {
        name: "eduinfo",
        data() {
            return {
                timer: null,
                k: 0,
                i: 0,
                t: 0,
                titleIndex: 0,
                activeIndex: 0,
                sftzList1: [],
                sftzList2: [],
                zjsfList: [],
                shyxList: [],
                shanyeList: [],
                shgxList: [],
                titleList: [["身份特质", "30%"], ["遵纪守法", "30%"], ["商业用信", "20%"], ["生活用信", "10%"], ["社会贡献", "10%"]],
                List1: ["个人身份信息", "社保缴纳情况", "公积金缴纳情况", "职业信息", "专业技术职称", "省信用评价分数"],
                List2: ["政府奖励信息", "A级纳税人", "海关高级认证企业", "政府黑名单", "行政处罚信息", "纳税情况", "考试违纪信息", "严重交通违法", "老赖"],
                List3: ["机动车信息", "恶意失信信息欠费", "公积金贷款逾期"],
                List4: ["恶意拖欠水费", "恶意拖欠电费", "恶意拖欠燃气费", "运营商欠费信息", "有线欠费信息"],
                List5: ["志愿者服务", "造血干细胞捐献", "献血信息", "劳动模范", "十佳助警市民", "社会捐赠", "慈善捐赠", "出租车好人好事"],
            };
        },
        components: {
            XZCFRS, GHYTQ, ZYSXXW, ZYSXBAR, SHYX, SHGX, SFTZ1, SFTZ2
        },
        methods: {
            getKindOfNumbers() {
                this.hmdNum = 0;
                this.gdwzNum = 0;
                this.zyzNum = 0;
                this.zmwzrNum = 0;
                this.xxNum = 0;
                this.zxgxbjxNum = 0;
            }
            ,
            changeColor(index) {
                switch (index) {
                    case 0:
                        return 'color: rgb(31, 242, 244)';
                    case 1:
                        return 'color: rgb(120, 137, 235)';
                    case 2:
                        return 'color: rgb(121, 202, 234)';
                    case 3:
                        return 'color: rgb(252, 145, 92)';
                    case 4:
                        return 'color: rgb(0, 138, 243)';
                    default:
                        return 'color: #FFF';
                }
            }
            ,
            gotoGood(index) {
                clearInterval(this.timer);
                this.activeIndex = index;
                this.t = index;
                this.i = index;
            }
            ,
            refreshCount(a) {
                clearInterval(this.timer);
                this.titleIndex = a;
                this.activeIndex = 0;
                this.k = a;
                this.t = 0;
                this.i = 0;
            }
            ,
            refreshbody() {
                switch (this.titleIndex) {
                    case 0:
                        if (this.t < 5) {
                            this.activeIndex++;
                            this.t++;
                            this.i++;
                            this.k = this.titleIndex;
                        } else {
                            this.titleIndex++;
                            this.activeIndex = 0;
                            this.t = 0;
                            this.i = 0;
                            this.k = this.titleIndex;
                        }
                        break;
                    case 1:
                        if (this.t < 8) {
                            this.activeIndex++;
                            this.t++;
                            this.i++;
                            this.k = this.titleIndex;
                        } else {
                            this.titleIndex++;
                            this.activeIndex = 0;
                            this.t = 0;
                            this.i = 0;
                            this.k = this.titleIndex;
                        }
                        break;
                    case 2:
                        if (this.t < 2) {
                            this.activeIndex++;
                            this.t++;
                            this.i++;
                            this.k = this.titleIndex;
                        } else {
                            this.titleIndex++;
                            this.activeIndex = 0;
                            this.t = 0;
                            this.i = 0;
                            this.k = this.titleIndex;
                        }
                        break;
                    case 3:
                        if (this.t < 4) {
                            this.activeIndex++;
                            this.t++;
                            this.i++;
                            this.k = this.titleIndex;
                        } else {
                            this.titleIndex++;
                            this.activeIndex = 0;
                            this.t = 0;
                            this.i = 0;
                            this.k = this.titleIndex;
                        }
                        break;
                    case 4:
                        if (this.t < 7) {
                            this.activeIndex++;
                            this.t++;
                            this.i++;
                            this.k = this.titleIndex;
                        } else {
                            this.titleIndex = 0;
                            this.activeIndex = 0;
                            this.t = 0;
                            this.i = 0;
                            this.k = this.titleIndex;
                        }
                        break;
                }
            }
            ,
        }
        ,
        created() {
        }
        ,
        mounted() {
            const that = this;
            api.getpjzbmsg().then((res) => {
                for (var i = 0; i < res.length; i++) {
                    if (res[i].name === '遵纪守法') {
                        that.zjsfList.push(res[i])
                    }
                    if (res[i].name === '生活用信') {
                        that.shyxList.push(res[i])
                    }
                    if (res[i].name === '商业用信') {
                        that.shanyeList.push(res[i])
                    }
                    if (res[i].name === '社会贡献') {
                        that.shgxList.push(res[i])
                    }
                }
            }).catch((err) => {
                console.log(err)
            });
            api.getsftzmsg().then((res) => {
                for (var i = 0; i < res.length; i++) {
                    that.sftzList1.push(res[i])
                }
            }).catch((err) => {
                console.log(err)
            });
            api.getosftzmsg().then((res) => {
                for (var i = 0; i < res.length; i++) {
                    that.sftzList2.push(res[i])
                }
            }).catch((err) => {
                console.log(err)
            });
            this.timer = setInterval(() => {
                this.refreshbody();
            }, 2000);
        }
    }
    ;
</script>
<style scoped>
  .seindexbg {
    width: 100%;
    height: 100%;
    background-color: #08032A;
    padding: 0 26px 25px;
    display: flex;
    box-sizing: border-box;
    /*    background: url("../../static/PJZB.png") no-repeat;
        background-size: 100% 100%;*/
  }

  .seindexbg-right {
    flex: 1.169;
    display: flex;
    flex-direction: column;
  }

  .seindexbg-left {
    flex: 2;
    margin-right: 24px;
    display: flex;
    flex-direction: column;
  }

  .seindexbg-right-top {
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  .seindexbg-right-bottom {
    flex: 1.38;
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

  .jiantou1 {
    vertical-align: text-top;
    width: 25px;
    height: 18px;
    background: url("../images/jiantou.png") no-repeat;
    background-size: 100% 100%;
  }

  .PJZBTJtxt {
    color: rgb(31, 255, 237);
    font-size: 18px;
  }

  .PJZBTJ {
    padding-top: 53px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .PJZBTJ-top {
    padding: 15px;
    box-sizing: border-box;
    background: url("../images/PJZBTJMX.png") no-repeat;
    background-size: 100% 100%;
    flex: 2;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .PJZBTJ-bottom {
    margin-bottom: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: url("../images/PJZBTJMX.png") no-repeat;
    background-size: 100% 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .PJZBTJ-middle {
    padding: 15px;
    box-sizing: border-box;
    background: url("../images/PJZBTJMX.png") no-repeat;
    background-size: 100% 100%;
    flex: 2.4;
    display: flex;
    flex-direction: column;
  }

  .GXRS {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .SF1 {
    display: flex;
    flex: 1;
  }

  .SF2 {
    display: flex;
    flex: 1;
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

  .XZCFRS {
    flex-grow: 1;
    display: flex;
    height: 100%;
  }


  .GHYTQRS {
    flex-grow: 1;
    height: 100%;
  }

  .PJZBMX {
    padding: 26px 42px 36px 39px;
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;
    background: url("../images/PJZBTJMX.png") no-repeat;
    background-size: 100% 100%;
  }

  .PJZBMX-left {
    flex: 0.78;
    display: flex;
    flex-direction: column;
    margin-right: 55px;
  }

  .PJZBMX-right {
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  .PJZBbg {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .secofbg {
    flex: 1;
    width: 95%;
    margin-top: 20px;
    display: flex;
    border: 1px solid rgb(34, 94, 159);
    justify-content: center;
    align-items: center;
  }

  .changeBorder {
    flex: 1;
    width: 95%;
    margin-top: 20px;
    display: flex;
    border: 3px solid rgb(24, 223, 246);
    justify-content: center;
    align-items: center;
  }

  .sectitle {
    text-align: center;
    width: 55%;
    font-size: 20px;
    letter-spacing: 1px;
  }

  .secnum {
    text-align: center;
    width: 40%;
    font-size: 20px;
    letter-spacing: 1px;
  }

  .PFLJNUM {
    display: inline-block;
    margin-bottom: 2px;
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    height: 34px;
    line-height: 34px;
    font-size: 16px;
    text-align: center;
    color: #FFF;
  }

  .PJZBbody {
    position: relative;
    width: 100%;
    top: 20px;
    height: 430px;
  }

  .PJZBbody1 {
    position: absolute;
    width: 20%;
    height: 100%;
    border: 1px solid rgb(34, 94, 159);
  }

  .onemsg {
    flex: 1;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4C5079;
    font-size: 18px;
    line-height: 20px;
  }

  .changeColor {
    flex: 1;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F3A64E;
    font-size: 18px;
    line-height: 30px;
  }

  .PJZBbody3 {
    position: absolute;
    right: 0px;
    width: 77%;
    height: 8%;
  }

  .PJZBbody2 {
    position: absolute;
    right: 0px;
    width: 77%;
    height: 90%;
    top: 10%;
    border: 1px solid rgb(34, 94, 159);
  }

  .momsg1 {
    position: absolute;
    top: 5%;
    width: 50%;
    height: 90%;
    border-right: 1px solid #8487A3;
  }

  .leftmsg1 {
    width: 100%;
    flex: 1;
    margin-top: 40px;
    display: flex;
    color: #2CA9E3;
    font-size: 18px;
    line-height: 24px;
    position: relative;
    top: -40px;
  }

  .spleft {
    position: absolute;
    left: 20px;
  }

  .spright {
    position: absolute;
    right: 20px;
  }

  .momsg2 {
    position: absolute;
    top: 5%;
    right: 0px;
    width: 50%;
    height: 90%;
  }

  .XYXWTJ {
    padding-top: 20px;
    flex-grow: 1;
    display: flex;
  }

  .ZYSX-block {
    margin-left: 15px;
    flex: 1.22;
    display: flex;
    padding: 15px;
    flex-direction: column;
    box-sizing: border-box;
    background: url("../images/XYXWTJ.png") no-repeat;
    background-size: 100% 100%;
  }

  .ZYST-block {
    flex: 2;
    display: flex;
    padding: 15px;
    flex-direction: column;
    box-sizing: border-box;
    background: url("../images/XYXWTJ.png") no-repeat;
    background-size: 100% 100%;
  }

  .ZYSX {
    flex-grow: 1;
    height: 100%;
  }

  .ZYST {
    flex-grow: 1;
    height: 100%;
  }
</style>

