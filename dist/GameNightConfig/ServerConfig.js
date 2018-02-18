"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
class ServerConfig {
    constructor() {
        this.BaseUrl = config.get("server.baseUrl");
        this.SessionSecret = config.get("server.sessionSecret");
    }
}
exports.ServerConfig = ServerConfig;
