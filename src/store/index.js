import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    increaseCounter(state, increment) {
      state.counter += increment;
    }
  },
  actions: {
    increaseCounter(context, increment) {
      context.commit('increaseCounter', increment);
    }
  },
  modules: {
  }
});

export default store;
 

