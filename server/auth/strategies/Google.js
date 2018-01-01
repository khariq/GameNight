const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('config');
var passport = require('passport');
var User = require('../../../db/models/user');

module.exports = function() {
    passport.use(new GoogleStrategy({
            clientID: '46468617510-nafqhb33liit72mvpnhgcvgsm0re6g0q.apps.googleusercontent.com',
            clientSecret: 'Sdz5ei401zSZW2-ZZmwWL6_P',
            callbackURL: `${config.get("server.baseUrl")}/auth/google/callback`
        },
        function(accessToken, refreshToken, profile, done){
            
            console.log(`${JSON.stringify(profile)} received from Google`)
            var email = profile.emails[0].value;

            var user = User.findOrCreate({
                where: {
                    emailAddress: email
                }});

            done(null, user[0]);
        }
    ));
}