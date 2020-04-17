<template>
  <canvas id="starts" class="stars">该浏览器不支持canvas
  </canvas>
</template>

<script>
    var context;
    var arr = new Array();
    var rains = new Array();
    var rainCount = 10;
    export default {
        name: "indexstars",
        components: {},
        methods: {
            canvas(id, starscolor, starsamount, starsradius, movrange, speed, trailing) {
                //宇宙特效
                "use strict";
                var canvas = document.getElementById(id),
                    ctx = canvas.getContext('2d'),
                    w = canvas.width = canvas.clientWidth,
                    h = canvas.height = canvas.clientHeight,
                    hue = starscolor,//230
                    stars = [],
                    count = 0,
                    maxStars = starsamount;//星星数量
                var canvas2 = document.createElement('canvas'),
                    ctx2 = canvas2.getContext('2d');
                canvas2.width = 100;
                canvas2.height = 100;
                var half = canvas2.width / 2,
                    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
                gradient2.addColorStop(0.025, '#CCC');
                gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
                gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
                gradient2.addColorStop(1, 'transparent');
                ctx2.fillStyle = gradient2;
                ctx2.beginPath();
                ctx2.arc(half, half, half, 0, Math.PI * 2);
                ctx2.fill();

                // End cache
                function random(min, max) {
                    if (arguments.length < 2) {
                        max = min;
                        min = 0;
                    }
                    if (min > max) {
                        var hold = max;
                        max = min;
                        min = hold;
                    }
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                function maxOrbit(x, y) {
                    var max = Math.max(x, y),
                        diameter = Math.round(Math.sqrt(max * max + max * max));
                    return diameter / movrange;
                    //星星移动范围，值越大范围越小，
                }

                var Star = function () {
                    this.orbitRadius = random(maxOrbit(w, h));
                    this.radius = random(starsradius, this.orbitRadius) / 8;
                    //星星半径大小
                    this.orbitX = w / 2;
                    this.orbitY = h / 2;
                    this.timePassed = random(0, maxStars);
                    this.speed = random(this.orbitRadius) / speed;
                    //星星移动速度
                    this.alpha = random(2, 10) / 10;
                    count++;
                    stars[count] = this;
                }
                Star.prototype.draw = function () {
                    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                        twinkle = random(10);
                    if (twinkle === 1 && this.alpha > 0) {
                        this.alpha -= 0.05;
                    } else if (twinkle === 2 && this.alpha < 1) {
                        this.alpha += 0.05;
                    }
                    ctx.globalAlpha = this.alpha;
                    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
                    this.timePassed += this.speed;
                }
                for (var i = 0; i < maxStars; i++) {
                    new Star();
                }

                function animation() {
                    ctx.globalCompositeOperation = 'source-over';
                    ctx.globalAlpha = trailing; //尾巴
                    ctx.fillStyle = "#08032A";
                    ctx.fillRect(0, 0, w, h)
                    ctx.globalCompositeOperation = 'lighter';
                    for (var i = 1, l = stars.length; i < l; i++) {
                        stars[i].draw();
                    }
                    ;
                    window.requestAnimationFrame(animation);
                }

                animation();
            }
        },
        mounted() {
            var stars = document.getElementById("starts");
            context = stars.getContext("2d");
//canvas的id名，星星颜色(hsla的hue色调)，星星数量，星星半径比，星星移动范围(值越大范围越小)，星星移动速度(值越大速度越慢),星星拖尾效果(0~1值越小拖尾越明显)
            this.canvas("starts", 230, 200, 60, 2, 200000, 0.5);
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
                    this.x = Math.random() * 720; //窗口高度
                    //纵坐标小于600
                    this.y = Math.random() * 580; //窗口宽度
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
    }
</script>

<style scoped>
  .stars {
    width: 100%;
    height: 100%;
  }
</style>
