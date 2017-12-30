
var passport = require('passport');

module.exports = function(app) {
    
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function(req, res, next){
        res.locals.user = req.user;
        res.locals.authenticated = ! req.user !== undefined || req.user.anonymous;
        next();
    });

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done){
        done(null, user);
    });

    require('./strategies/Facebook')();
    require('./strategies/Google')();
}

