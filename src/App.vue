<style>
/*公共样式--开始*/

html,
body,
div,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dt,
dd,
ol,
form,
input,
textarea,
th,
td,
select {
  margin: 0;

  padding: 0;
}

* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}

body {
  font-family: "Microsoft YaHei";

  font-size: 14px;

  color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

ul,
ol {
  list-style: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  width: 100%;

  height: 100%;

  position: absolute;

  top: 0;

  bottom: 0;

  left: 0;

  right: 0;

  overflow: auto;
}

.project-boxes {
  color: black;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  font-size: 2rem;
}
.project-boxes .box-left {
  width: 50%;
  padding: 1rem;
  text-align: left;
}
.project-boxes .img-div {
  width: 80%;
  margin: auto;
  padding: 1rem;
}
.project-boxes .img-div img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.project-boxes .box-right {
  width: 50%;
  padding: 1rem;
}

.plan-boxes {
  color: black;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  font-size: 1.5rem;
}
.plan-boxes .title {
  border-left: 10px solid #2d8cf0;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
}
.plan-boxes .bold {
  font-weight: bold;
}
.plan-boxes .plan-box {
  height: 20%;
  display: flex;
  padding: 1rem;
  border-bottom: 1px dashed #d0c7c7;
  margin: 10px 60px;
}

.plan-boxes .plan-left {
  padding: 1rem;
  width: 10%;
  text-align: left;
}
.plan-boxes .plan-right {
  overflow: auto;
  width: 90%;
}
.plan-boxes .plan-now .now-title {
  text-align: left;
  padding: 1rem;
}
.plan-boxes .plan-now .now-box {
  padding: 1rem;
  text-align: left;
}
.plan-boxes .plan-now .now-box span {
  padding-right: 1rem;
  /* word-break: keep-all; */
}
.plan-boxes .plan-week .week-right {
  display: flex;
  padding: 1rem;
}
.plan-boxes .plan-week .week-right .e-box {
  padding: 1rem;
}
.plan-boxes .plan-week .charts-all {
  background-color: #1874cd;
  width: 4rem;
  height: 100%;
  margin: auto;
}
.plan-boxes .plan-week .charts-one {
  background-color: #d2d2d2;
  /* border-bottom: 2px solid #104e8b; */
  width: 100%;
  height: 50%;
}
.plan-boxes .plan-right .ex-box {
  height: 100%;
  overflow: auto;
  padding: 0 150px 0 50px;
}
.plan-boxes .plan-right .ex-box .ex-event,
.plan-boxes .plan-right .ex-box .ex-date {
  position: relative;
  height: 38px;
}
.plan-boxes .plan-right .ex-box .ex-date {
  padding-top: 11px;
}
.plan-boxes .plan-right .ex-box .ex-data-item {
  position: absolute;
  word-break: keep-all;
  transform: translateX(-50%);
  font-size: 20px;
  line-height: 20px;
}
.plan-boxes .plan-right .ex-box .ex-charts {
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  /* margin-bottom: 2%; */
  border-radius: 50px;
}
.plan-boxes .plan-right .ex-box .ex-charts .ex-inner {
  background-color: #1890ff;
  width: 50%;
  height: 100%;
  border-radius: 50px;
}
.plan-boxes .plan-right .ex-box .ex-charts .ex-now {
  border-right: 4px solid #ee0000;
  height: 100%;
}
#app .btnBox {
  position: fixed;
  bottom: 0;
  padding: 1rem;
  right: 60px;
}
.btnBox button {
  border: 0;
  border-radius: 10px;
  background-color: #1890ff;
  color: #fff;
  width: 5rem;
  height: 2rem;
}
table td {
  min-width: 12rem;
}
.s-line {
  position: absolute;
  bottom: -10px;
  left: 50%;
  display: inline-block;
  height: 10px;
  z-index: 111;
  color: #d0c7c7;
  font-size: 12px;
}
.s-line-top {
  top: -12px;
}
.leftTable tr td,
.table-3 tr td {
  border-bottom: 1px solid #d2d2d2;
  font-size: 1.5rem;
  line-height: 2.5rem;
}
</style>
<template>
  <div id="app">
    <div class="project-boxes" style="padding:20px" v-show="!planShow">
      <div class="btnBox">
        <button @click="stopView(false)">停止</button>
        <button @click="viewChange">开始</button>
      </div>
      <div class="box-left" style=" border-right: 1px dashed #d0c7c7;">
        <table class="leftTable" cellspacing='0px'>
          <tr>
            <td> <strong> 项目名称：</strong></td>
            <td>{{dataArr.projectInfo.name}}</td>
          </tr>
          <tr>
            <td><strong>质检人员：</strong></td>
            <td>{{dataArr.projectInfo.qaName}}</td>
          </tr>
          <tr>
            <td><strong>质检内容：</strong></td>
            <td>
              <div v-for="(ele,idx) in dataArr.projectInfo.qualityList" >
                {{idx+1}}.{{ele}}
              </div>
            </td>
          </tr>
        </table>
        <div class="img-div">
          <img src="./images/bg.jpg" alt="">
        </div>
      </div>
      <div class="box-right" style=" border-left: 1px dashed #d0c7c7; margin-left:-1px">
        <div style="font-size:3rem;">曝光台</div>
        <table style="width:100%;margin:1rem auto;text-align: center; font-size:1.5rem;">
          <tr>
            <td>时间：{{dataArr.exposureInfo.date}}</td>
            <td>区域：{{dataArr.exposureInfo.region}}</td>
            <td>部位：{{dataArr.exposureInfo.position}}</td>
          </tr>
        </table>
        <table  cellspacing='0px' class="table-3" style="margin:1rem auto;text-align: left;">
          <tr>
            <td><strong>质量缺陷：</strong></td>
            <td>{{dataArr.exposureInfo.question}}</td>
          </tr>
          <tr>
            <td><strong>责任人：</strong></td>
            <td>{{dataArr.exposureInfo.liable}}</td>
          </tr>
          <tr>
            <td><strong>整改要求：</strong></td>
            <td>{{dataArr.exposureInfo.rectification}}</td>
          </tr>
          <tr>
            <td><strong>复查人：</strong></td>
            <td>{{dataArr.exposureInfo.inspector}}</td>
          </tr>
        </table>
        <div class="img-div">
          <img src="./images/bg2.png" alt="">
        </div>     
      </div>
    </div>
    <div class="plan-boxes" v-show="planShow">
      <div class="btnBox">
        <button @click="stopView(true)">停止</button>
        <button @click="viewChange">开始</button>
      </div>
      <div class="plan-now plan-box">
        <div class="plan-left">
          <div class=" bold title">{{nowDate}}</div>
        </div>
        
        <div class="plan-right">
          <div class="now-title bold">
            目前进展：
          </div>
          <div class="now-box">
            <span v-for="(ele,index) in dataArr.chartsInfo.progressData">
              {{index+1 +'. '+ele.event}}
            </span>
          </div>
        </div>
      </div>
      <div class="plan-all plan-box">
        <div class="plan-left">
          <div class="bold title">总进度计划</div>
          <div style=" margin-top:10px">总工期：<span  class="bold" style="color:#1874cd;">1000</span>天</div>
        </div>
        <div class="plan-right">
          <div class="ex-box">
            <div class="ex-event">
              <span class="ex-data-item" :style='{left:ele.left}' :title="ele.event" v-for="ele in dataArr.chartsInfo.allDate.list">
                {{ele.event}}
                <small class="s-line">|</small>
              </span>
            </div>
            <div class="ex-charts">
              <div class="ex-inner">
                <div class="ex-now" :style='{width:dataArr.chartsInfo.allDate.now}'></div>
              </div>
            </div>
            <div class="ex-date">
              <span class="ex-data-item" :style='{left:ele.left}' :title="ele.date" v-for="ele in dataArr.chartsInfo.allDate.list">
                {{ele.date}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="plan-sesson plan-box" style="height:35%">
        <div class="plan-left">
          <div class="bold title">{{dataArr.chartsInfo.quarterDate.quarter}}季度考核节点</div>
        </div>
        <div class="plan-right">
          <div class="ex-box">
            <div v-for="item in dataArr.chartsInfo.quarterDate.eventlist" style="height:10rem;">
              <div class="ex-event">
                <div class="ex-data-item" :style='{left:ele.left}' :title="ele.event" v-for="ele in item.list">
                  {{ele.event}}
                  <small class="s-line">|</small>
                </div>
              </div>
              <div class="ex-charts">
                <div class="ex-inner">
                  <div class="ex-now" :style='{width:item.now}'></div>
                </div>
              </div>
            </div>
            <div class="ex-date">
              <div class="ex-data-item" :style='{left:ele.left}' :title="ele.date" v-for="ele in dataArr.chartsInfo.quarterDate.dateList">
                {{ele.date}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="plan-week plan-box">
        <div class="plan-left">
          <div class="bold title">本周计划</div>
        </div>
        <div class="plan-right week-right">
          <div class="e-box" v-for="ele in dataArr.chartsInfo.weekDate.list">
            <div>{{ele.event}}</div> 
            <div class="charts-all">
              <div class="charts-one" :style='{height:ele.completionRate}'></div>
            </div>
          </div>
        </div>        
      </div>
    </div>
    
  </div>
</template>

<script>
var moment = require("moment");
var $ = require("jquery");

import DATA from "../data.js";

export default {
  name: "app",

  data() {
    return {
      ws: null,
      wsParam: {},
      planShow: true,
      viewInterval: null,
      nowDate: "",
      dataArr: {}
    };
  },

  created() {
    this.nowDate = moment().format("YYYY-MM-DD");
    this.dataArr = DATA;
    this.viewChange();
  },

  mounted() {},

  methods: {
    init() {},

    websocketEvent() {
      this.ws = new WebSocket("wss://echo.websocket.org");

      this.ws.onopen = evt => {
        this.ws.send(JSON.stringify(this.wsParam));

        // setInterval(() => {

        //   this.ws.send("北京时间：" + moment().format("YY-HH-dd hh:mm:ss"));

        // }, 1000);
      };

      this.ws.onmessage = evt => {
        console.log(evt.data);

        // this.formatData(eval('(' + evt.data + ')'))

        // this.formatData(data); //evt.data
      };

      this.ws.onclose = evt => {};
    },
    //页面切换开始
    viewChange() {
      this.viewInterval = setInterval(() => {
        if (this.planShow) {
          $(".plan-boxes").fadeOut();
          $(".project-boxes").fadeIn();
        } else {
          $(".project-boxes").fadeOut();
          $(".plan-boxes").fadeIn();
        }
        this.planShow = !this.planShow;
      }, 5000); //五秒一次换屏
    },
    //页面切换关闭
    stopView(type) {
      clearInterval(this.viewInterval);
      this.planShow = type;
    }
  },

  components: {}
};
</script>


