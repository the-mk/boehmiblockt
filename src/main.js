import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma-extensions/dist/css/bulma-extensions.min.css'
import 'animate.css/animate.min.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(App)
}).$mount('#app')
