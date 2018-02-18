"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerConfig_1 = require("./ServerConfig");
const RedisConfig_1 = require("./RedisConfig");
const DatabaseConfig_1 = require("./DatabaseConfig");
const PassportConfig_1 = require("./PassportConfig");
class GameNightConfig {
    constructor() {
        this.Server = new ServerConfig_1.ServerConfig();
        this.Redis = new RedisConfig_1.RedisConfig();
        this.Database = new DatabaseConfig_1.DatabaseConfig();
        this.Passport = new PassportConfig_1.PassportConfig();
    }
}
exports.GameNightConfig = GameNightConfig;
