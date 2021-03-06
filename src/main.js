// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/fonts/roboto/Roboto-Regular.woff'

import search from './components/search/search'
import newsCards from './components/cards/newsCards'

Vue.use(materialize)
Vue.use(VueAxios, axios)

Vue.component('app-search', search)
Vue.component('app-news', newsCards)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App)

})
