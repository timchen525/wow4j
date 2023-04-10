import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/gloable.css'
import request from '../utils/request'

import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI, {size: "mini"});

Vue.prototype.request = request
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
