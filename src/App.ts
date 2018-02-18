import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { GameNightConfig } from './GameNightConfig';
import * as ExpressSession from 'express-session';
import { UsePassport } from './Passport';
import { Routes } from './Routers';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  private Config: GameNightConfig;

  //Run configuration methods on the Express instance.
  constructor() {
    this.Config = new GameNightConfig();
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    
    this.express.use(ExpressSession({
      name: 'GameNight',
      resave: false, // the session is not resaved on every call
      saveUninitialized: false, // dont allow uninitalized sessions to be saved
      secret: this.Config.Server.SessionSecret
    }));
    
    this.express.use(bodyParser.json());
    
    this.express.use(bodyParser.urlencoded({ extended: false }));

    UsePassport(this.express);

    this.express.use(express.static(path.resolve(__dirname, '../public')))
  }
 

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.sendFile(path.resolve(__dirname, '../public/index.html'));
    });

    this.express.use('/', router);
    
    let routes = new Routes();
    this.express.use('/auth', routes.Auth);

  }

}

export default new App().express;