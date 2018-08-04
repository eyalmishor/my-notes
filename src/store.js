import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB23twuMtHAynM2_MfBkMiwyfY8XDQ6y5c',
  authDomain: 'my-notes-d80c9.firebaseapp.com',
  databaseURL: 'https://my-notes-d80c9.firebaseio.com',
  projectId: 'my-notes-d80c9',
  storageBucket: 'my-notes-d80c9.appspot.com',
  messagingSenderId: '734947361437',
};
firebase.initializeApp(config);
const database = firebase.database();
const notesRef = database.ref('notes');

export default new Vuex.Store({
  state: {
    notes: [],
    user: null,
  },

  mutations: {
    addNewNote(state, note) {
      state.user = note.user;
      state.notes.push(note);
      notesRef.push(note);
    },
  },
  actions: {
    created() {
      notesRef.on('child_added', (snapshot) => {
        if (snapshot.val().user !== this.state.user) {
          this.state.notes.push(snapshot.val());
        }
      });
    },
  },
});
