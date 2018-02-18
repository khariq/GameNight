"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const GameNightConfig_1 = require("./GameNightConfig");
const ExpressSession = require("express-session");
const Passport_1 = require("./Passport");
const Routers_1 = require("./Routers");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.Config = new GameNightConfig_1.GameNightConfig();
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(ExpressSession({
            name: 'GameNight',
            resave: false,
            saveUninitialized: false,
            secret: this.Config.Server.SessionSecret
        }));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        Passport_1.UsePassport(this.express);
        this.express.use(express.static(path.resolve(__dirname, '../public')));
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.sendFile(path.resolve(__dirname, '../public/index.html'));
        });
        this.express.use('/', router);
        let routes = new Routers_1.Routes();
        this.express.use('/auth', routes.Auth);
    }
}
exports.default = new App().express;
