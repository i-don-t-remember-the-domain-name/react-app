const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const firebase = require('firebase');

const app = express();
app.all(/.*/, function(req, res, next) {
  let host = req.header('host');
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, 'http://www.' + host + req.url);
  }
});

app.use('/', express.static('public'));

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
const pathToIndexHtmlInBuildFolder = path.join(pathToBuildFolder, 'index.html');

app.use('/', express.static(pathToBuildFolder));
app.use(helmet());
app.use(cors());
app.use(express.json());

//Routes
if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.sendFile(pathToIndexHtmlInBuildFolder);
  });

  app.get('/about', (req, res) => {
    res.sendFile(pathToIndexHtmlInBuildFolder);
  });

  app.get('/:hacker', (req, res) => {
    res.sendFile(pathToIndexHtmlInBuildFolder);
  });
}

app.get('/api/hacker/:hacker', async function(req, res) {
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

app.listen(process.env.PORT || 2222);
