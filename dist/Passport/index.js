"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const Facebook_1 = require("./Strategies/Facebook");
function UsePassport(app) {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
    Facebook_1.FacebookStrategy();
}
exports.UsePassport = UsePassport;
