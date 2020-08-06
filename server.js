'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT;

const routes = require('./routes');
const mongo_connect = require('./lib/mongo');
const url = process.env.MONGO_DB;

const app = express();
app.use(morgan(':method :url :response-time'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST,DELETE,PUT');
  next();
});

app.get('/ping', (_, res) => res.send('PONG'));

app.use('/v1', routes);

async function createApp() {
  await mongo_connect(url);
  app.listen(port, () => {
    console.log(`APP is listening on ${port}`);
  });
}

createApp();
