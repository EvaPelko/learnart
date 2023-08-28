import Vue from 'vue'
import App from './App.vue'
import * as firebase from '@/firebase'
import router from './router'
import vuetify from './plugins/vuetify'
import Croppa from 'vue-croppa';
import './assets/css/main.css'
import 'vue-croppa/dist/vue-croppa.css';



Vue.config.productionTip = false
Vue.use(Croppa)

new Vue({
  router,
  vuetify,
  Croppa,
  render: h => h(App)
}).$mount('#app')
