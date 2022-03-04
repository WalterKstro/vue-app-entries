import { createStore } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

const storeDayBook = createStore({
  namespaced: true,
  state,
  mutations,
  actions,
  getters
})

export default storeDayBook