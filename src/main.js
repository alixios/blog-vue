import Vue from 'vue'
import App from './App.vue'
import router from "./router";

//样式表
import './assets/css/global.css'
import './plugins/element.js'
import './plugins/semantic.js'
import './assets/css/me.css'





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
