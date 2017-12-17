const User = require('../../db/models/user');
const facebookPassportStrategy = require('passport-facebook').Strategy;
const config = require('config');

function setupFacebook(app, passport, session) {
    passport.use(
        new facebookPassportStrategy({
          clientID: config.get("passport.facebook.clientId"),
          clientSecret: config.get("passport.facebook.clientSecret"),
          callbackURL: config.get("passport.facebook.callback"),
          profileFields : [
            "id", "name", "first_name", "last_name", "username", "gender", "age_range", "displayName", "email"
          ]
        }, 
        function(accessToken, refreshToken, profile, done) {
          console.log(`${JSON.stringify(profile)} received from Facebook`)
          profile.emails.forEach(email => {
            User.find({emailAddress: email}).then(function(err, user){
              console.log(`${user} logged in`);
              done(err, user);
              
            })
          });
        
        }));

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email'] }));
    app.get(
        config.get("passport.facebook.callback"), 
        passport.authenticate('facebook', { 
            successRedirect: '/',
            failureRedirect: '/login'
        },
        function(req, res) {
            // Successful authentication, redirect home.
            //res.redirect('/');
            console.log("Succesful authentication");
        }
        )
    );

}

module.exports = setupFacebook;