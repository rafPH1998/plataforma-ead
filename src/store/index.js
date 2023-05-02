import { createStore } from 'vuex'

import users from './users';
import courses from './courses';
import supports from './supports';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    courses,
    supports
  }
})
