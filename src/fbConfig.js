const firebase = require('firebase/app');
require('firebase/firestore');

//Firebase configuration
firebase.initializeApp({
  apiKey: 'AIzaSyCAUlq3XK2lXeTFsQThdL4GyivWx-c5DCQ',
  authDomain: 'winterrose-nlp.firebaseapp.com',
  databaseURL: 'https://winterrose-nlp.firebaseio.com',
  projectId: 'winterrose-nlp',
  storageBucket: 'winterrose-nlp.appspot.com',
  messagingSenderId: '468502233263'
});
const db = firebase.firestore();

export default db;
