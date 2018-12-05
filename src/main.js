import Vue from 'vue'
import './plugins/vuetify'
import '@babel/polyfill'
import '@babel/preset-env'
import App from './App.vue'
import router from './router'
import store from './store'
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
