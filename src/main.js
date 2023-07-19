import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'


// 本地mock的时候解开该注释
// require('./mock.js')


Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
