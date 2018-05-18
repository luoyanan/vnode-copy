// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'

require('./assets/iconfont/iconfont.css')
require('./assets/less/reset.less')

Vue.config.productionTip = false
Vue.use(VueRouter)

// 实例化VueRouter
const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
  // components: { App },
  // template: '<App/>'
})
