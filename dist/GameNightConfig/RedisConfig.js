"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
class RedisConfig {
    constructor() {
        this.Secret = config.get("redis.secret");
    }
}
exports.RedisConfig = RedisConfig;
