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
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGE_ID_SENDER,
  appId: process.env.VUE_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
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
