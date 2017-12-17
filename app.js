'use strict';
const config = require('config');
const express = require('express');
const app = express();
const { resolve } = require('path');
const db = require('./db');
const server = require('./server');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const passport = require('passport');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const auth = require('./server/auth/Facebook');

app.use(session({
  store: new RedisStore({
    url: config.redis.url
  }),
  secret: config.redis.secret,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());

auth(app, passport, session);

 app.use(passport.session());

// logging middleware
app.use(morgan('dev'));

// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// prepend '/api' to URIs
app.use('/api', server);

// serve static files from public
app.use(express.static(resolve(__dirname, 'public')))

// request any page and receive index.html
app.get('/*', (req, res) => res.sendFile(resolve(__dirname, 'public/index.html')));

// server listening!
app.listen(process.env.PORT || 3000, () => {
  console.log(chalk.cyan('Server is listening'), chalk.yellow('http://localhost:3000'));
  db.sync({force: false})
  .then(() => {
    console.log(chalk.cyan('Database is running'));
  })
  .catch(err => console.error(err));
});
