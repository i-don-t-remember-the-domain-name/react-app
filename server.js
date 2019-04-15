const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const firebase = require('firebase');

//DbConfig
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

//Paths
const pathToBuildFolder = path.join(__dirname, 'build');
const pathToIndexHtml = path.join(pathToBuildFolder, 'index.html');

function ensureSecure(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    // OK, continue
    return next();
  }
  res.redirect('https://' + req.hostname + req.url);
}

app.use(express.static(pathToBuildFolder));
app.use(helmet());
app.use(cors());
app.use(express.json());

//Routes
app.get('/', ensureSecure, (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.get('/about', ensureSecure, (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.get('/:hacker', ensureSecure, (req, res) => {
  res.sendFile(pathToIndexHtml);
});

app.get('/api/hacker/:hacker', ensureSecure, async function(req, res) {
  try {
    const hackers = await db
      .collection('commentor_stats')
      .where('commentor', '==', req.params.hacker)
      .get();

    if (hackers.empty) {
      console.log('No matching hacker');
      return;
    }

    let hacker;
    hackers.forEach(doc => {
      hacker = doc.data();
    });

    res.status(200).json(hacker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  console.log('Get Request');
});

app.listen(process.env.PORT || 3000);
