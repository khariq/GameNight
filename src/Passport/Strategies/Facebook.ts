import * as Facebook from 'passport-facebook';
import * as passport from 'passport';
import { GameNightConfig } from '../../GameNightConfig';
import * as express from 'express';

function loginFacebook(req: express.Request, accessToken: string, refreshToken: string, 
    profile: Facebook.Profile, done: (error: any, user?: any, info?: any) => void) {
    console.log(`${JSON.stringify(profile)} received from Facebook`);

    var email = profile.emails[0].value;
    try {
    //   var user = User.findOrCreate({
    //     where: {
    //       emailAddress: email
    //     }
    //   });
    //   done(null, user[0]);
    } catch (e) {
      console.log(e);
      done(e, null);
    }
}

export function FacebookStrategy() {
    var cfg = new GameNightConfig();
    let strategy = new Facebook.Strategy({
        clientID: cfg.Passport.Facebook.ClientId,
        clientSecret: cfg.Passport.Facebook.ClientSecret,
        callbackURL: `${cfg.Server.BaseUrl}/auth/facebook/callback`,
        passReqToCallback: true,
        profileFields: ['emails', 'id', 'name']
      },
     loginFacebook
    );
 
    passport.use(strategy);

}