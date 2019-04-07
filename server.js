const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const app = express();
const firebase = require('firebase');
const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.TESTURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.PROJECTBUCKET,
  messagingSenderId: process.env.ID
};

firebase.initializeApp(config);
const db = firebase.firestore();

const pathToBuildFolder = path.join(__dirname, 'build');
const pathToIndexHtml = path.join(pathToBuildFolder, 'index.html');

app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.get('/user', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.get('/about', (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.get('/api/finduser/:username', async function(req, res) {
  try {
    const users = await db
      .collection('commentor_stats')
      .where('commentor', '==', req.params.username)
      .get();

    if (users.empty) {
      console.log('No matching users');
      return;
    }

    let user;
    users.forEach(doc => {
      user = doc.data();
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  console.log('Get Request');
});

// db.collection('users')
//   .get()
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   });

app.listen(process.env.PORT || 3000);
