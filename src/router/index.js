import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/module/index.vue'], resolve),
      children: [
        {
          path: 'grxy',
          name: 'grxy',
          meta: {
            index: 3
          },
          component: resolve => require(['@/module/grxy/index.vue'], resolve)
        },
        {
          path: 'sjhj',
          name: 'sjhj',
          meta: {
            index: 1
          },
          component: resolve => require(['@/module/sjhj/index.vue'], resolve)
        },
        {
          path: 'ldjsc',
          name: 'ldjsc',
          meta: {
            index: 0
          },
          component: resolve => require(['@/module/login.vue'], resolve)
        },
        {
          path: 'pjzb',
          name: 'pjzb',
          meta: {
            index: 2
          },
          component: resolve => require(['@/module/eduinfo.vue'], resolve)
        },
        {
          path: 'yycj',
          name: 'yycj',
          meta: {
            index: 4
          },
          component: resolve => require(['@/module/carinfo.vue'], resolve)
        }
      ]
    }
  ]
})
