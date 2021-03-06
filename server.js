'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const port = process.env.PORT;

const routes = require('./routes');
const mongo_connect = require('./lib/mongo');
const url = process.env.MONGO_DB;

const app = express();
app.use(express.json({ limit: '10kb' }));
app.use(xss());

const limit = rateLimiter({
  max: 1000,
  windowMs: 60 * 60 * 1000, // 1 Hour
  message: 'Too many requests', // message to send
});
app.use(limit);
app.use(helmet());
app.use(mongoSanitize());


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
