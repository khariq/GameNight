//const User = require('../../db/models/user');
const facebookPassportStrategy = require('passport-facebook').Strategy;
const config = require('config');
var passport = require('passport');
var User = require('../../../db/models/user');

module.exports = function() {
    passport.use(
        new facebookPassportStrategy({
          clientID: config.get("passport.facebook.clientId"),
          clientSecret: config.get("passport.facebook.clientSecret"),
          callbackURL: `${config.get("server.baseUrl")}/auth/facebook/callback`,
          passReqToCallback: true,
          profileFields: ['emails', 'id', 'name']
        }, 
        function(req, accessToken, refreshToken, profile, done) {
          console.log(`${JSON.stringify(profile)} received from Facebook`);

          var email = profile.emails[0].value;
          var user = User.findOrCreate({
              where: {
                  emailAddress: email
              }});

          done(null, user[0]);
        })
    );
}
