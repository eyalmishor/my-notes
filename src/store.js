import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
  },

  mutations: {
    addNewNote(state, note) {
      state.notes.push(note);
    },
  },
  actions: {

  },
});
