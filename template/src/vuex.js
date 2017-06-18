import Vue from 'vue'
import Vuex from 'vuex'
import actions from './vuex/actions'
import ADD_TODO from './vuex/mutations'

Vue.use(Vuex);

const state = {
  todos: []
}

let store = new Vuex.Store({
  state,
  mutations: {
    ADD_TODO (state, payload) {
        state.todos.push(payload.text);
    }
  }
})

store.actions = actions

export default store
