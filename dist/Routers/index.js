"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_1 = require("./Auth");
class Routes {
    constructor() {
        this.Auth = Auth_1.AuthRouter();
    }
}
exports.Routes = Routes;
