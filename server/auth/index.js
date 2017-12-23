var fb = require('./Facebook');

const config = require('config');

var auth = function(app, passport, session) {
    
    var MemoryStore = require('session-memory-store')(session);    

    app.use(session({
        name: 'session-cookie',
        secret: config.session.secret,
        resave: true,
        saveUninitialized: true,
        store: new MemoryStore()
    }));
  
    
    app.use(passport.initialize());
    app.use(passport.session());
    fb(app, passport, session);

    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');
        console.log(user);
        done(null, user._id);
      });
    
    passport.deserializeUser(function(id, done) {
        user.findById(id, function(err, user) {
            console.log('no im not serial');
            done(err, user);
        });
    });
}

module.exports = auth;