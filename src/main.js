import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'
import mock2 from './mock-reviews.js'

let data = {
  recipes: mock,
  reviews: mock2
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
