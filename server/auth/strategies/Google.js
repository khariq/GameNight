const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('config');
var passport = require('passport');

module.exports = function() {
    passport.use(new GoogleStrategy({
            clientID: config.get("passport.google.clientId"),
            clientSecret: config.get("passport.google.clientSecret"),
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        function(accessToken, refreshToken, profile, done){
            
            console.log(`${JSON.stringify(profile)} received from Google`)
            var user = {};
            user.email = profile.emails[0].value;
            user.displayName = `${profile.name.givenName} ${profile.name.familyName}`;
            done(null, user);
            done(null, user);
        }
    ));
}