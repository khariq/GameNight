var express = require('express');
var authRouter = express.Router();
var config = require('config');
var passport = require('passport');

authRouter
    .route('/user')
    .get(function(req, res) {
        console.log(`${JSON.stringify(req.user)}`);
       if (req.user === undefined)  {
           res.json({});
       } else{           
           res.json({
               email: req.user.email,
               name: req.user.displayName
           });
       }
    });

authRouter
    .route('/facebook')
    .get(passport.authenticate('facebook', { 
            scope: [ 'email']
    }));

authRouter
    .route(config.get('passport.facebook.callback'))
    .get(passport.authenticate('facebook', {
        successRedirect: '/',
        failure: '/'
    }));



module.exports = authRouter;