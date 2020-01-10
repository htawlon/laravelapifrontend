import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "jquery"
import "bootstrap"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
