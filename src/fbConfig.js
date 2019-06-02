const firebase = require('firebase/app');
require('firebase/firestore');

//Firebase configuration
firebase.initializeApp({
  apiKey: 'AIzaSyDMrnsvujDZ1VeimRwhYOXB0xAhQ7SPF8M',
  authDomain: 'toxic-hackers.firebaseapp.com',
  databaseURL: 'https://toxic-hackers.firebaseio.com',
  projectId: 'toxic-hackers',
  storageBucket: 'toxic-hackers.appspot.com',
  messagingSenderId: '393394024642',
  appId: '1:393394024642:web:ddd9021d6d0d634e'
});
const db = firebase.firestore();

export default db;
