"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
class DatabaseConfig {
    constructor() {
        this.Host = config.get('database.host');
        this.Database = config.get('database.db');
        this.Username = config.get('database.username');
        this.Password = config.get('database.password');
    }
}
exports.DatabaseConfig = DatabaseConfig;
