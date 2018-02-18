import * as passport from 'passport';
import * as express from 'express';
import { FacebookStrategy } from './Strategies/Facebook'

export function UsePassport(app: express.Application) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done){
        done(null, user);
    });

    FacebookStrategy();

}