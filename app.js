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
const facebookPassportStrategy = require('passport-facebook').Strategy;

passport.use(
  new facebookPassportStrategy({
    clientID: config.get("passport.facebook.clientId"),
    clientSecret: config.get("passport.facebook.clientSecret"),
    callbackURL: config.get("passport.facebook.callback")
  }, 
  function(accessToken, refreshToken, profile, done) {
    const User = require('./db/models/user');
    profile.emails.forEach(email => {
      User.find({emailAddress: email}).then(function(err, user){
        if (!err) {
          done(null, user);
        }
      })
    });
    
  }));

// logging middleware
app.use(morgan('dev'));

// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// prepend '/api' to URIs
app.use('/api', server);

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get(config.get("passport.facebook.callback"), passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login'}));

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
