<template>
  <div class="svg-number" :class="[vertical ? 'vertical-number' : '']">
    <span class="svg-number-title">{{ title }}</span>
    <span ref="numberGrow" :data-time="time" class="number-grow txt" :data-value="value">0</span>
    <!-- 		<svg xmlns="http://www.w3.org/200/svg" height="30" width="80">
          <text x="40" y="17" id="J_txt" class="txt" fill="#f95c06">0分</text>
        </svg> -->
  </div>
</template>
<script>
    export default {
        name: 'svg-number',
        props: {
            time: {
                type: Number,
                default: 1
            },
            value: {
                type: Number,
                default: 0
            },
            title: {
                type: String,
                default: ''
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                flag: null
            }
        },
        methods: {
            numberGrow(ele) {
                let _this = this
                let step = (_this.value * 10) / (_this.time * 200)
                let current = 0
                let start = 0
                let t = setInterval(function () {
                    start += step
                    if (start >= _this.value) {
                        clearInterval(t);
                        start = _this.value;
                        t = null;
                    }
                    if (current === start) {
                        return
                    }
                    current = start;
                    ele.innerHTML = current.toFixed(0) + (_this.vertical ? '' : '分');
                }, 10)
            },
            countUp(elem, endVal, startVal = 0, duration, decimal) {
                //传入参数依次为 数字要变化的元素，最终显示数字，数字变化开始值，变化持续时间，小数点位数
                let startTime = 0;
                let dec = Math.pow(10, decimal);//返回10的decimal次幂
                let progress, value;
                const vm = this;

                function startCount(timestamp) {            // 参数是该回调函数被触发的时间
                    if (!startTime) startTime = timestamp;
                    progress = timestamp - startTime;
                    value = startVal + (endVal - startVal) * (progress / duration);
                    value = (value > endVal) ? endVal : value;
                    value = Math.floor(value * dec) / dec;
                    elem.innerHTML = value.toFixed(decimal) + this.vertical ? '' : '分';
                    // requestAnimationFrame告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画
                    if (progress < duration && vm.flag) vm.flag = requestAnimationFrame(startCount);
                }

                this.flag = requestAnimationFrame(startCount)
            },
            animateStart(number) {
                const text = document.getElementById('J_txt');
                text && number > 0 && this.countUp(text, number, null, 2000, 0);
            }
        },
        mounted() {
            // this.animateStart(this.number);
            this.numberGrow(this.$refs.numberGrow)
        },
        watch: {
            value(val) {
                this.numberGrow(this.$refs.numberGrow)
                // this.animateStart(val);
            }
        }
    }
</script>
<style scoped>
  .svg-number {
    height: 100%;
    display: flex;
    padding: 10px 15px;
    box-sizing: border-box;
    border: 1px solid rgba(50, 197, 255, 0.3);
    background-color: rgba(0, 145, 255, 0.1);
    justify-content: space-between;
    align-items: center;
  }

  .vertical-number {
    flex-direction: column;
  }

  .svg-number-title {
    font-size: 18px;
    color: #fff;
  }

  .txt {
    text-anchor: middle; /* 文本水平居中 */
    dominant-baseline: middle; /* 文本垂直居中 */
    font-size: 18px;
  }
</style>
