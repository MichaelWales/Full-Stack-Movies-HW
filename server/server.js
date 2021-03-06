const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/createRouter.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('film_hub');
  const filmCollection = db.collection('films');
  const filmRouter = createRouter(filmCollection);
  app.use('/api/films', filmRouter);
})
.catch(console.error);

app.listen(3000, function() {
  console.log('Listening on port 3000');
})
