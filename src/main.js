import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import store from './store'

require('firebase/firestore');

Vue.config.productionTip = false;
Vue.config.devtools = true;

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyArkJ9um8FE0GjPx4Tvkh0rorOmK-SqQh0",
  authDomain: "vue-firebase-tutorial-d3cbc.firebaseapp.com",
  projectId: "vue-firebase-tutorial-d3cbc",
  storageBucket: "vue-firebase-tutorial-d3cbc.appspot.com",
  messagingSenderId: "859480502692",
  appId: "1:859480502692:web:bbef51cb9668f74e451131",
  measurementId: "G-QHKS4L8FDR"
});

export const db = firebase.firestore();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      firebase,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
})
