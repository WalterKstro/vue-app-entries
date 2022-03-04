import { createStore } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

const module = createStore({
  namespaced: true,
  state,
  mutations,
  actions,
  getters
})

export default module