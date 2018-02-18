"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Facebook = require("passport-facebook");
const passport = require("passport");
const GameNightConfig_1 = require("../../GameNightConfig");
function loginFacebook(req, accessToken, refreshToken, profile, done) {
    console.log(`${JSON.stringify(profile)} received from Facebook`);
    var email = profile.emails[0].value;
    try {
        //   var user = User.findOrCreate({
        //     where: {
        //       emailAddress: email
        //     }
        //   });
        //   done(null, user[0]);
    }
    catch (e) {
        console.log(e);
        done(e, null);
    }
}
function FacebookStrategy() {
    var cfg = new GameNightConfig_1.GameNightConfig();
    let strategy = new Facebook.Strategy({
        clientID: cfg.Passport.Facebook.ClientId,
        clientSecret: cfg.Passport.Facebook.ClientSecret,
        callbackURL: `${cfg.Server.BaseUrl}/auth/facebook/callback`,
        passReqToCallback: true,
        profileFields: ['emails', 'id', 'name']
    }, loginFacebook);
    passport.use(strategy);
}
exports.FacebookStrategy = FacebookStrategy;
