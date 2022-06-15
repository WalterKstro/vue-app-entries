import { createStore } from 'vuex'
import storeDayBook from '../modules/daybook/store/index.js'
import auth from '../modules/auth/store/index.js';

const store = createStore({
  modules: {
    storeDayBook,
    auth
  }
});

export default store;