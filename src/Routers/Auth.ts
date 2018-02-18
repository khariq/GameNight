import * as express from 'express';
import * as passport from 'passport';

export function AuthRouter() {
    let authRouter = express.Router();

    authRouter
        .route('/user')
        .get(function (req, res) {
            console.log(`${JSON.stringify(req.user)}`);
            if (req.user === undefined) {
                res.json({});
            } else {
                res.json({
                    email: req.user.email,
                    name: req.user.displayName
                });
            }
        });

    authRouter
        .route('/facebook')
        .get(passport.authenticate('facebook', {
            scope: ['email']
        }));

    authRouter
        .route('/facebook/callback')
        .get(passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/'
        }));

    authRouter
        .route('/google')
        .get(passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/userinfo.email']
        }));

    authRouter
        .route('/google/callback')
        .get(passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/'
        }));
    
    return authRouter;
}