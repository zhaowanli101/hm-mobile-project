import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from '@/router'
// 导入vuex
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
