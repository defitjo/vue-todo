import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyBHwgJPoVjMAaby5bYZgZiysh_LrFTRWco",
  authDomain: "vue-todo-d3b40.firebaseapp.com",
  databaseURL: "https://vue-todo-d3b40.firebaseio.com",
  projectId: "vue-todo-d3b40",
  storageBucket: "vue-todo-d3b40.appspot.com",
  messagingSenderId: "136302388343"
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export const db = firebase.firestore()