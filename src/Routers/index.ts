
import * as express from 'express';
import { AuthRouter } from './Auth';

export class Routes {

    public Auth: express.Router;

    constructor() {
        this.Auth = AuthRouter();
    }

}