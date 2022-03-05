import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

const storeDayBook = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default storeDayBook