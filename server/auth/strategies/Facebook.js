//const User = require('../../db/models/user');
const facebookPassportStrategy = require('passport-facebook').Strategy;
const config = require('config');
var passport = require('passport');

module.exports = function() {
    passport.use(
        new facebookPassportStrategy({
          clientID: config.get("passport.facebook.clientId"),
          clientSecret: config.get("passport.facebook.clientSecret"),
          callbackURL: `${config.get("server.baseUrl")}/auth${config.get("passport.facebook.callback")}`,
          passReqToCallback: true,
          profileFields: ['emails', 'id', 'name']
        }, 
        function(req, accessToken, refreshToken, profile, done) {
          console.log(`${JSON.stringify(profile)} received from Facebook`)
          var user = {};
          user.email = profile.emails[0].value;
          user.displayName = `${profile.name.givenName} ${profile.name.familyName}`;
          done(null, user);
        })
    );
}
