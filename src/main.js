import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/common.css"
import api from './api'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Tabs from './components/tabs'


Vue.prototype.$api = api;

Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
