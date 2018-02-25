import newsService from '../services/newsService'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {

  },
  mutations: {

  },
  actions: {
    topStoriesByCountry({commit}, payload) {

      // newsService.getTopStoriesByCountry(payload)
      //   .then(res => {
      //     console.log(res)
      //     return res
      //
      //   })
      //   .catch(e => {
      //     console.log(e)
      //   })
    },

  }

})
