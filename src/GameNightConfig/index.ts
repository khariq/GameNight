import * as config from 'config'
import { ServerConfig } from './ServerConfig'
import { RedisConfig } from './RedisConfig'
import { DatabaseConfig } from './DatabaseConfig'
import { PassportConfig } from './PassportConfig';

export class GameNightConfig {

    public Server: ServerConfig;
    public Redis: RedisConfig;
    public Database: DatabaseConfig;
    public Passport: PassportConfig;

    constructor() {
        this.Server = new ServerConfig();
        this.Redis = new RedisConfig();
        this.Database = new DatabaseConfig();
        this.Passport = new PassportConfig();
    }
    
}