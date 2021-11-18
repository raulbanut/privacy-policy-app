import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loggedIn: false,
    counter: 0,
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    increaseCounter(state, increment) {
      state.counter += increment;
    }
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
    increaseCounter(context, increment) {
      context.commit('increaseCounter', increment);
    }
  },
  modules: {
  }
});

export default store;


