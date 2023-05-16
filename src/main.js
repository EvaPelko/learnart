import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
//import Croppa from './plugins/vue-croppa';
import './assets/css/main.css'


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  //Croppa,
  render: h => h(App)
}).$mount('#app')
