const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./data/database');

const port = process.env.PORT || 3000;
const app = express();



app.use('/', require('./routes' ));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
