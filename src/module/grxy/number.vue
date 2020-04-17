<template>
  <div class="number">
		<span v-for="index of length" :key="index - 1" class="number-span">
			<span class="number-behind">{{ numbers[index - 1] }}</span>
		</span>
  </div>
</template>
<script>
    export default {
        name: 'number13',
        props: {
            length: {
                type: Number,
                default: 4
            },
            number: {
                type: Number,
                default: 0
            },
            time: {
                type: Number,
                default: 1
            }
        },
        data() {
            const numbers = Array.from({length: this.length}, () => '');
            return {
                numbers: numbers,
                animateFlag: null
            }
        },
        methods: {
            numberAnimate() {
                if (this.animateFlag) {
                    clearInterval(this.animateFlag);
                    this.animateFlag = null;
                }
                const fromNumber = parseInt(this.numbers.join('')) ? parseInt(this.numbers.join('')) : 0,
                    toNumber = parseInt(this.number) ? parseInt(this.number) : 0;
                this.numberGrow(fromNumber, toNumber);
            },
            numberGrow(currentValue, value) {
                let _this = this
                let step = ((value - currentValue) * 10) / (_this.time * 200)
                let current = currentValue;
                let start = currentValue;
                _this.animateFlag = setInterval(function () {
                    start += step
                    if ((start <= value && step < 0) || (start >= value && step >= 0)) {
                        clearInterval(_this.animateFlag);
                        start = value;
                        _this.animateFlag = null;
                    }
                    if (current === start) {
                        return
                    }
                    current = start;
                    const arr = parseInt(current).toString().split('');
                    while (arr.length < _this.length) {
                        arr.unshift('');
                    }
                    _this.numbers = arr.length > _this.length ? arr.slice(-_this.length) : arr;
                }, 10)
            }
        },
        created() {
            this.numberAnimate();
        },
        watch: {
            number(val) {
                this.numberAnimate();
            }
        }
    }
</script>
<style scoped>
  .number {
    display: inline-block;
    overflow: hidden;
  }

  .number .number-span {
    display: inline-block;
    font-family: "numberSpecial";
    font-size: 30px;
    margin: 0 1px;
    position: relative;
  }

  .number .number-span:before {
    content: "8";
    color: #0F5167;
    display: inline;
  }

  .number-behind {
    position: absolute;
    color: #1FFFED;
    top: 0;
    right: 0;
    z-index: 2;
  }
</style>
