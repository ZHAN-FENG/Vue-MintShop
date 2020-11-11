import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.config.productionTip = false
Fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
