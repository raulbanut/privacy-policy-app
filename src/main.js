import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase'
import router from './router'
import store from './store'

require('firebase/firestore');

Vue.config.productionTip = false;

/**
 * This is for the Vue extension from Chrome. You can find more here: 
 * https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en
 */
Vue.config.devtools = true;

let app = '';

/**
 * The setup for the firebase web-app.
 */
firebase.initializeApp({
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
});

export const db = firebase.firestore();

/**
 * The connection with firebase.
 */
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
