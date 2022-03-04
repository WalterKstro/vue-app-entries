import { createStore } from 'vuex'
import storeDayBook from '../modules/daybook/store/index.js'

const store = createStore({
  modules: {
    storeDayBook
  }
});

export default store;