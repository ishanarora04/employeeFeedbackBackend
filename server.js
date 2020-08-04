'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('config');

const port = process.env.PORT || config.get('port');
const mongo_url = config.get('mongo.url');
const mongo_db = config.get('mongo.database');
const mongo_user = config.get('mongo.username');
const mongo_password = config.get('mongo.password');

const routes = require('./routes');
const mongo_connect = require('./lib/mongo');
const url = `mongodb://${mongo_user}:${mongo_password}@${mongo_url}/${mongo_db}`;
const app = express();
app.use(morgan(':method :url :response-time'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST,DELETE,PUT');
  next();
});

app.use('/v1', routes);

async function createApp() {

  await mongo_connect(url);

  app.listen(port, () => {
    console.log(`APP is listening on ${port}`);
  });

}

createApp();
