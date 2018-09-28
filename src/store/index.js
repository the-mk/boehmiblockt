import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import accounts from './modules/accounts'

export default new Vuex.Store({
  modules: {
    accounts
  }
})