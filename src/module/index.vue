<template>
  <div class="home">
    <div class="home-top">
      <nav class="tabs">
        <ul>
          <li v-for="(value, index) of tabs" :key="index" @click="changeCurrentPageIndex(index, value.route)"
              :class="[currentPageIndex === index ? 'current-li' : '']">{{ value.name }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="home-body">
      <!-- <transition :name="direction"> -->
      <router-view class="route-body"/>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
    export default {
        name: 'home',
        data() {
            return {
                direction: 'slide-right',
                currentPageIndex: 0,
                tabs: [
                    {
                        name: '领导驾驶舱',
                        route: 'ldjsc',
                    },
                    {
                        name: '数据汇聚',
                        route: 'sjhj',
                    },
                    {
                        name: '评价指标',
                        route: 'pjzb',
                    },
                    {
                        name: '个人信用',
                        route: 'grxy',
                    },
                    {
                        name: '应用场景',
                        route: 'yycj',
                    }
                ]
            }
        },
        methods: {
            changeCurrentPageIndex(index, route) {
                if (this.currentPageIndex === index) return;
                this.currentPageIndex = index;
                if (route) this.$router.push({name: route});
            }
        },
        created() {
            this.currentPageIndex = this.$route.meta['index'] >= 0 ? this.$route.meta['index'] : 0;
        },
        // watch: {
        //     $route (to, from) {
        //     	if (to.meta.index < from.meta.index) {
        // 	    	this.direction = "slide-right";
        // 	    } else {
        // 	    	this.direction = "slide-left";
        // 	    }
        // 	}
        // }
    }
</script>
<style scoped>
  .home {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: rgb(8, 3, 42);
  }

  .home-top {
    width: 100%;
    height: 96px;
    background: url('../assets/top_bg.png') 0 0 no-repeat;
    background-size: 100% 100%;
    position: relative;
    z-index: 3;
  }

  .tabs {
    line-height: 73px;
    height: 73px;
    position: absolute;
    left: 52%;
    transform: translateX(-50%);
  }

  .tabs ul, .tabs ul li {
    height: 100%;
    line-height: inherit;
  }

  .tabs ul li {
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    margin: 0 25px;
    box-sizing: border-box;
  }

  .tabs ul li:hover {
    color: rgb(247, 181, 0);
  }

  .tabs ul .current-li {
    color: rgb(247, 181, 0);
    position: relative;
  }

  .tabs ul .current-li:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    transform: translateY(50%);
    background: linear-gradient(180deg, rgba(247, 181, 0, 1) 0%, rgba(250, 100, 0, 1) 100%);
    box-shadow: 0px -1px 10px 1px #FA6400;
  }

  .home-body {
    flex-grow: 1;
    width: 100%;
    position: relative;
  }

  .route-body {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transition: transform 0.3s ease-out;
  }

  .slide-left-enter {
    transform: translate(100%, 0);
  }

  .slide-left-leave-to {
    transform: translate(-100%, 0);
  }

  .slide-right-enter {
    transform: translate(-100%, 0);
  }

  .slide-right-leave-to {
    transform: translate(100%, 0);
  }
</style>
