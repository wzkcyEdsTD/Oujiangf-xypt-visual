<template>
  <div :class="['mycard-content', noTitle ? '' : 'no-title-content']">
    <div :class="['mycard-title', icon ? 'icon-title' : 'no-icon-title']" v-if="noTitle">{{ title }}</div>
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'my-card',
        props: {
            title: String,
            icon: {
                type: Boolean,
                default: true
            },
            noTitle: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {}
        },
        methods: {},
        created() {
        }
    }
</script>
<style scoped>
  .mycard-content {
    width: 100%;
    height: 100%;
    padding-top: 45px;
    box-sizing: border-box;
    position: relative;
  }

  .no-title-content {
    padding-top: 0px;
  }

  .mycard-title {
    width: 100%;
    position: absolute;
    left: 0;
    top: 23px;
    transform: translateY(-50%);
    z-index: 5;
    font-size: 14px;
    font-weight: 400;
    color: rgb(31, 255, 237);
  }

  .mycard-title::before {
    content: "";
    display: inline-block;
    background: url('./imgs/mycard_icon.png') center center no-repeat;
    background-size: 100% 100%;
    width: 27px;
    height: 16px;
    vertical-align: sub;
    margin-right: 5px;
  }

  .no-icon-title::before {
    content: "";
    display: inline-block;
    background: linear-gradient(180deg, rgba(214, 123, 29, 1) 0%, rgba(246, 161, 62, 1) 100%);
    box-shadow: 0px 0px 2px 1px rgba(195, 89, 46, 0.5);
    width: 8px;
    height: 8px;
    margin-right: 5px;
    border-radius: 50% 50%;
    vertical-align: middle;
  }
</style>
