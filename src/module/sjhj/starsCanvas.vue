<template>
    <div class="stars-canvas">
        <canvas class="stars" ref="star">该浏览器不支持canvas</canvas>
        <div class="circle">
            <div class="circle-inner">
                <div class="circle-1"></div>
<!--                 <div class="circle-2"></div>
                <div class="circle-3"></div> -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "indexstars",
        components: {},
        methods: {
            drawCanvas () {
                const vm = this;
                var stars = vm.$refs.star;
                var context = stars.getContext("2d");
                var arr = new Array();
                var rains = new Array();
                var rainCount = 5;
                /*流星雨开始*/
                var MeteorRain = function () {
                    this.x = -1;
                    this.y = -1;
                    this.length = -1;//长度
                    this.angle = 30; //倾斜角度
                    this.width = -1;//宽度
                    this.height = -1;//高度
                    this.speed = 1;//速度
                    this.offset_x = -1;//横轴移动偏移量
                    this.offset_y = -1;//纵轴移动偏移量
                    this.alpha = 1; //透明度
                    this.color1 = "";//流星的色彩
                    this.color2 = ""; //流星的色彩
                    /****************初始化函数********************/
                    this.init = function () //初始化
                    {
                        this.getPos();
                        this.alpha = 1;//透明度
                        this.getRandomColor();
                        //最小长度，最大长度
                        var x = Math.random() * 10 + 100;
                        this.length = Math.ceil(x);
                        //         x = Math.random()*10+30;
                        this.angle = -90; //流星倾斜角
                        x = Math.random() + 0.5;
                        this.speed = Math.ceil(x); //流星的速度
                        var cos = Math.cos(this.angle * 3.14 / 180);
                        var sin = Math.sin(this.angle * 3.14 / 180);
                        this.width = this.length * cos; //流星所占宽度
                        this.height = this.length * sin;//流星所占高度
                        this.offset_x = this.speed * cos;
                        this.offset_y = this.speed * sin;
                    }
                    /***************重新计算流星坐标的函数******************/
                    this.countPos = function ()//
                    {
                        //往左下移动,x减少，y增加
                        this.x = this.x - this.offset_x;
                        this.y = this.y + this.offset_y;
                    }
                    /*****************获取随机坐标的函数*****************/
                    this.getPos = function () //
                    {
                        //横坐标200--1200
                        this.x = Math.random() * vm.$el.clientWidth; //窗口高度
                        //纵坐标小于600
                        this.y = Math.random() * vm.$el.clientHeight; //窗口宽度
                    }
                    /**************获取随机颜色函数*****************/
                    this.getRandomColor = function () {
                        var a = Math.ceil(255 - 240 * Math.random());
                        //中段颜色
                        this.color1 = "rgba(" + a + "," + a + "," + a + ",1)";
                        //结束颜色
                        this.color2 = "#090723";
                    }
                    /****绘制流星***************************/
                    this.draw = function () //绘制一个流星的函数
                    {
                        context.save();
                        context.beginPath();
                        context.lineWidth = 1; //宽度
                        context.globalAlpha = this.alpha; //设置透明度
                        //创建横向渐变颜色,起点坐标至终点坐标
                        var line = context.createLinearGradient(this.x, this.y,
                            this.x + this.width,
                            this.y - this.height);
                        //分段设置颜色
                        line.addColorStop(0, "rgba(63,135,255,1)");
                        line.addColorStop(0.3, "rgba(63,135,255,0.5)");
                        line.addColorStop(0.6, "rgba(8,13,63,1)");
                        context.strokeStyle = line;
                        //起点
                        context.moveTo(this.x, this.y);
                        //终点
                        context.lineTo(this.x + this.width, this.y - this.height);
                        context.closePath();
                        context.stroke();
                        context.restore();
                    }
                    this.move = function () {
                        //清空流星像素
                        var x = this.x + this.width - this.offset_x;
                        var y = this.y - this.height;
                        context.clearRect(x - 3, y - 3, this.offset_x + 5, this.offset_y + 5);
                        //         context.strokeStyle="red";
                        //         context.strokeRect(x,y-1,this.offset_x+1,this.offset_y+1);
                        //重新计算位置，往左下移动
                        this.countPos();
                        //透明度增加
                        this.alpha -= 0.002;
                        //重绘
                        this.draw();
                    }
                }

                //绘制流星
                function playRains() {
                    for (var n = 0; n < rainCount; n++) {
                        var rain = rains[n];
                        rain.move();//移动
                        if (rain.y < -100) {//超出界限后重来
                            context.clearRect(rain.x, rain.y - rain.height, rain.width, rain.height);
                            rains[n] = new MeteorRain();
                            rains[n].init();
                        }
                    }
                    setTimeout(playRains, 2);
                }

                /*流星雨结束*/

                for (var i = 0; i < rainCount; i++) {
                    var rain = new MeteorRain();
                    rain.init();
                    rain.draw();
                    rains.push(rain);
                }
                playRains();//绘制流星
            }
        },
        mounted () {
            this.drawCanvas();
        }
    }
</script>

<style scoped>
   .stars-canvas {
    position: relative;
    height: 100%;
    width: 100%;
   }
  .stars {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
  }
  .circle {
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    transform-style: preserve-3d;
    transform: rotateX(75deg);
    transform-origin: bottom;
  }
  .circle-inner {
    width: 70%;
    height: 0;
    padding-bottom: 70%;
    margin: auto;
    position: relative;
  }
  .circle-1 {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50% 50%;
    /*border: 1px solid red;*/
    background: url('./images/bottom_circle.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .circle-2 {
    position: absolute;
    z-index: 2;
    width: 80%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50% 50%;
    border: 1px solid blue;
  }
  .circle-3 {
    position: absolute;
    z-index: 1;
    width: 90%;
    height: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50% 50%;
    border: 1px solid yellow;
  }
</style>
