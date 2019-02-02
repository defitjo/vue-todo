import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBHwgJPoVjMAaby5bYZgZiysh_LrFTRWco",
  authDomain: "vue-todo-d3b40.firebaseapp.com",
  databaseURL: "https://vue-todo-d3b40.firebaseio.com",
  projectId: "vue-todo-d3b40",
  storageBucket: "vue-todo-d3b40.appspot.com",
  messagingSenderId: "136302388343"
};
firebase.initializeApp(config);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true })

export default db
