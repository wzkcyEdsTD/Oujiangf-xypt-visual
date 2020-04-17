<template>
  <div class="data-canvas">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" ref="mysvg">
      <defs>
        <marker id="arrow" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
          <path d="M2,2 L10,6 L2,10 Z" style="fill: rgb(6, 193, 204);"/>
        </marker>
      </defs>
      <path style="fill:none;stroke:rgba(33, 209, 255, 0.5);stroke-width:1px;" stroke-dasharray="2,1"
            id="xuxian1"></path>
      <path style="fill:none;stroke:rgba(33, 209, 255, 1);stroke-width:1px;marker-end: url(#arrow);"
            stroke-dasharray="340" stroke-dashoffset="340" id="shixian1">
        <animate
          attributeName="stroke-dashoffset"
          attributeType="XML"
          from="340"
          to="0"
          begin="0"
          dur="5s"
          repeatCount="indefinite">
        </animate>
      </path>
      <path style="fill:none;stroke:rgba(33, 209, 255, 0.5);stroke-width:1px;" stroke-dasharray="2,1"
            id="xuxian2"></path>
      <path style="fill:none;stroke:rgba(33, 209, 255, 1);stroke-width:1px;marker-end: url(#arrow);"
            stroke-dasharray="340" stroke-dashoffset="340" id="shixian2">
        <animate
          attributeName="stroke-dashoffset"
          attributeType="XML"
          from="340"
          to="0"
          begin="0s"
          dur="5s"
          repeatCount="indefinite">
        </animate>
      </path>
    </svg>
    <div class="data-canvas-left">
      <div class="cloud">
        <div class="container">
          <div class="circle-container">
            <div class="circle"></div>
          </div>
          <div class="circle-container">
            <div class="circle"></div>
          </div>
          <div class="circle-container">
            <div class="circle"></div>
          </div>
          <div class="circle-container">
            <div class="circle"></div>
          </div>
          <div class="circle-container">
            <div class="circle"></div>
          </div>
          <div class="circle-container">
            <div class="circle"></div>
          </div>
          <div class="circle-container">
            <div class="circle"></div>
          </div>
          <div class="circle-container">
            <div class="circle"></div>
          </div>
          <div class="circle-container">
            <div class="circle"></div>
          </div>
        </div>
        <text-animate
          :texts="['公安局', '省大数据中心', '人力社保局', '省公共信用评价信息', '法院', '温州银行', '住房公积金管理中心', '温州电力局', '公用集团', '电信温州分公司', '移动温州分公司', '联通温州分公司', '中广有线温州分公司', '卫生健康委员会', '团委', '红十字会', '宣传部', '慈善总会']"
          style="position: absolute;z-index: 3;left: 0;right: 0;bottom: 0;top: 0;"></text-animate>
      </div>
      <div class="tree"></div>
      <div class="danwei">接入单位</div>
      <!-- 			<tree-canvas style="position: absolute;width: 100%;height: 20%;left: 50%;bottom: 17%;transform: translateX(-50%);z-index: 3"></tree-canvas> -->
      <light-canvas
        style="position: absolute;width: 10%;height: 40%;left: 50%;bottom: 17%;transform: translateX(-50%);z-index: 3"></light-canvas>
      <stars-canvas class="left-stars-canvas"></stars-canvas>
    </div>
    <div class="data-canvas-middle">
      <loading class="middle-loading" title="瓯江分"></loading>
      <rotate-canvas class="middle-rotate"></rotate-canvas>
      <div class="pftx">瓯江分评分体系</div>
    </div>
    <div class="data-canvas-right">
      <div class="data-canvas-right-icon" id="jparticle-container"></div>
      <span class="data-canvas-right-span">应用场景</span>
      <stars-canvas
        style="position: absolute;width: 100%;height: 105%;transform: translateY(-10%); z-index: 2"></stars-canvas>
    </div>
  </div>
</template>
<script>
    const SVG_XMLNS = 'http://www.w3.org/2000/svg';
    import loading from './loading.vue';
    import rotateCanvas from './rotateCanvas.vue';
    import starsCanvas from './starsCanvas.vue';
    import lightCanvas from './lightCanvas.vue';
    import textAnimate from './textAnimate.vue';

    export default {
        name: 'data-canvas',
        components: {
            loading,
            rotateCanvas,
            starsCanvas,
            lightCanvas,
            textAnimate
        },
        data() {
            return {}
        },
        methods: {
            drawLine() {
                const svg = this.$refs.mysvg,
                    height = svg.clientHeight,
                    width = svg.clientWidth;
                const xx1 = document.getElementById('xuxian1');
                const xx2 = document.getElementById('xuxian2');
                const sx1 = document.getElementById('shixian1');
                const sx2 = document.getElementById('shixian2');
                xx1.setAttribute('d', `M${width * 0.13},${height * 0.15}
				C${width / 2 * 0.4},${height * 0.01}
				${width / 2 * 0.8},${height * 0.01}
				${width / 2 * 0.9},${height * 0.15} `);
                sx1.setAttribute('d', `M${width * 0.13},${height * 0.15}
				C${width / 2 * 0.4},${height * 0.01}
				${width / 2 * 0.8},${height * 0.01}
				${width / 2 * 0.9},${height * 0.15} `);
                xx2.setAttribute('d', `M${width / 2 * 0.05 + width / 2},${height * 0.23}
				C${width / 2 * 0.2 + width / 2},${height * 0.01}
				${width / 2 * 0.5 + width / 2},${height * 0.01}
				${width - width * 0.15},${height * 0.2} `);
                sx2.setAttribute('d', `M${width / 2 * 0.05 + width / 2},${height * 0.23}
				C${width / 2 * 0.2 + width / 2},${height * 0.01}
				${width / 2 * 0.5 + width / 2},${height * 0.01}
				${width - width * 0.15},${height * 0.2} `);
            }
        },
        mounted() {
            this.drawLine();
            $('#jparticle-container').jParticle({
                background: "rgba(0,0,0,0)",//背景颜色
                color: "#FFA24E",//粒子和连线的颜色
                particlesNumber: 5,//粒子数量
                // disableLinks:true,//禁止粒子间连线
                //disableMouse:true,//禁止粒子间连线(鼠标)
                width: 50,
                height: 40,
                particle: {
                    minSize: 2,//最小粒子
                    maxSize: 4,//最大粒子
                    speed: 30,//粒子的动画速度
                }
            });
        },
        created() {
        }
    }
</script>
<style scoped>
  .data-canvas {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
  }

  .data-canvas svg {
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 100%;
  }

  .data-canvas-left {
    flex: 1;
    position: relative;
    z-index: 3;
  }

  .data-canvas-left /deep/ .circle-1 {
    background-image: url('./images/bottom_circle2.png');
  }

  .cloud {
    position: absolute;
    width: 100%;
    height: 50%;
    top: 13%;
    left: 50%;
    z-index: 4;
    transform: translateX(-50%);
    background: url('./images/cloud.png') center center no-repeat;
    background-size: 100% 100%;
  }

  .data-canvas-left .left-stars-canvas {
    position: absolute;
    width: 100%;
    height: 110%;
    transform: translateY(-10%);
    z-index: 2;
  }

  .data-canvas-left .tree {
    position: absolute;
    z-index: 6;
    width: 40%;
    height: 50%;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('./images/tree.png') center center no-repeat;
    background-size: contain;
  }

  .danwei {
    position: absolute;
    top: 270px;
    left: 110px;
    line-height: 24px;
    font-size: 14px;
    color: #6ACAFF;
  }

  .pftx {
    position: absolute;
    top: 305px;
    left: 240px;
    line-height: 24px;
    font-size: 14px;
    color: #6ACAFF;
  }

  .data-canvas-middle {
    flex: 2;
    position: relative;
    z-index: 10;
  }

  .data-canvas-middle .middle-loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    width: 90px;
    height: 90px;
  }

  .data-canvas-middle .middle-rotate {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  .data-canvas-right {
    flex: 1;
    position: relative;
    z-index: 3;
  }

  .data-canvas-right-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    width: 40%;
    height: 40%;
    background: url('./images/right_icon.png') center center no-repeat;
    background-size: contain;
  }

  .data-canvas-right-icon /deep/ canvas {
    margin: auto;
  }

  .data-canvas-right-span {
    font-size: 14px;
    color: #6ACAFF;
    position: absolute;
    left: 50%;
    bottom: 12%;
    transform: translateX(-50%);
    z-index: 3;
    text-align: center;
  }

  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .circle-container {
    position: absolute;
    -webkit-transform: translateY(-3vh);
    transform: translateY(-3vh);
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }

  .circle-container .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mix-blend-mode: screen;
    background-image: radial-gradient(#99ffff, #99ffff 10%, rgba(153, 255, 255, 0) 56%);
    -webkit-animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
    animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
  }

  @keyframes fade-frames {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scale-frames {
    0% {
      -webkit-transform: scale3d(0.4, 0.4, 1);
      transform: scale3d(0.4, 0.4, 1);
    }
    50% {
      -webkit-transform: scale3d(2.2, 2.2, 1);
      transform: scale3d(2.2, 2.2, 1);
    }
    100% {
      -webkit-transform: scale3d(0.4, 0.4, 1);
      transform: scale3d(0.4, 0.4, 1);
    }
  }

  .circle-container:nth-child(1) {
    width: 10px;
    height: 10px;
    -webkit-animation-name: move-frames-1;
    animation-name: move-frames-1;
    -webkit-animation-duration: 8441ms;
    animation-duration: 8441ms;
    -webkit-animation-delay: 4544ms;
    animation-delay: 4544ms;
  }

  @keyframes move-frames-1 {
    from {
      top: 100%;
      left: 50%;
    }
    to {
      top: 0;
      left: 10%;
    }
  }

  .circle-container:nth-child(1) .circle {
    -webkit-animation-delay: 3734ms;
    animation-delay: 3734ms;
  }

  .circle-container:nth-child(2) {
    width: 10px;
    height: 10px;
    -webkit-animation-name: move-frames-2;
    animation-name: move-frames-2;
    -webkit-animation-duration: 9921ms;
    animation-duration: 9921ms;
    -webkit-animation-delay: 5982ms;
    animation-delay: 5982ms;
  }

  @keyframes move-frames-2 {
    from {
      top: 100%;
      left: 40%;
    }
    to {
      top: 0;
      left: 15%;
    }
  }

  .circle-container:nth-child(2) .circle {
    -webkit-animation-delay: 2516ms;
    animation-delay: 2516ms;
  }

  .circle-container:nth-child(3) {
    width: 3px;
    height: 3px;
    -webkit-animation-name: move-frames-3;
    animation-name: move-frames-3;
    -webkit-animation-duration: 10427ms;
    animation-duration: 10427ms;
    -webkit-animation-delay: 3649ms;
    animation-delay: 3649ms;
  }

  @keyframes move-frames-3 {
    from {
      top: 100%;
      left: 70%;
    }
    to {
      top: 0;
      left: 90%;
    }
  }

  .circle-container:nth-child(3) .circle {
    -webkit-animation-delay: 731ms;
    animation-delay: 731ms;
  }

  .circle-container:nth-child(4) {
    width: 6px;
    height: 6px;
    -webkit-animation-name: move-frames-4;
    animation-name: move-frames-4;
    -webkit-animation-duration: 10951ms;
    animation-duration: 10951ms;
    -webkit-animation-delay: 8909ms;
    animation-delay: 8909ms;
  }

  @keyframes move-frames-4 {
    from {
      top: 100%;
      left: 14%;
    }
    to {
      top: 0;
      left: 23%;
    }
  }

  .circle-container:nth-child(4) .circle {
    -webkit-animation-delay: 2526ms;
    animation-delay: 2526ms;
  }

  .circle-container:nth-child(5) {
    width: 5px;
    height: 5px;
    -webkit-animation-name: move-frames-5;
    animation-name: move-frames-5;
    -webkit-animation-duration: 7642ms;
    animation-duration: 7642ms;
    -webkit-animation-delay: 2502ms;
    animation-delay: 2502ms;
  }

  @keyframes move-frames-5 {
    from {
      top: 100%;
      left: 45%;
    }
    to {
      top: 0;
      left: 4%;
    }
  }

  .circle-container:nth-child(5) .circle {
    -webkit-animation-delay: 2755ms;
    animation-delay: 2755ms;
  }

  .circle-container:nth-child(6) {
    width: 6px;
    height: 6px;
    -webkit-animation-name: move-frames-6;
    animation-name: move-frames-6;
    -webkit-animation-duration: 8439ms;
    animation-duration: 8439ms;
    -webkit-animation-delay: 455ms;
    animation-delay: 455ms;
  }

  @keyframes move-frames-6 {
    from {
      top: 100%;
      left: 90%;
    }
    to {
      top: 0;
      left: 65%;
    }
  }

  .circle-container:nth-child(6) .circle {
    -webkit-animation-delay: 3506ms;
    animation-delay: 3506ms;
  }

  .circle-container:nth-child(7) {
    width: 8px;
    height: 8px;
    -webkit-animation-name: move-frames-7;
    animation-name: move-frames-7;
    -webkit-animation-duration: 7539ms;
    animation-duration: 7539ms;
    -webkit-animation-delay: 3595ms;
    animation-delay: 3595ms;
  }

  @keyframes move-frames-7 {
    from {
      top: 100%;
      left: 79%;
    }
    to {
      top: 0;
      left: 35%;
    }
  }

  .circle-container:nth-child(7) .circle {
    -webkit-animation-delay: 749ms;
    animation-delay: 749ms;
  }

  .circle-container:nth-child(8) {
    width: 4px;
    height: 4px;
    -webkit-animation-name: move-frames-8;
    animation-name: move-frames-8;
    -webkit-animation-duration: 7480ms;
    animation-duration: 7480ms;
    -webkit-animation-delay: 2680ms;
    animation-delay: 2680ms;
  }

  @keyframes move-frames-8 {
    from {
      top: 100%;
      left: 61%;
    }
    to {
      top: 0;
      left: 17%;
    }
  }

  .circle-container:nth-child(8) .circle {
    -webkit-animation-delay: 1888ms;
    animation-delay: 1888ms;
  }

  .circle-container:nth-child(9) {
    width: 2px;
    height: 2px;
    -webkit-animation-name: move-frames-9;
    animation-name: move-frames-9;
    -webkit-animation-duration: 9087ms;
    animation-duration: 9087ms;
    -webkit-animation-delay: 9461ms;
    animation-delay: 9461ms;
  }

  @keyframes move-frames-9 {
    from {
      top: 100%;
      left: 34%;
    }
    to {
      top: 0;
      left: 43%;
    }
  }

  .circle-container:nth-child(9) .circle {
    -webkit-animation-delay: 1721ms;
    animation-delay: 1721ms;
  }
</style>
