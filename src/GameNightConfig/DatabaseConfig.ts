import * as config from 'config'

export class DatabaseConfig {

    public Host: string;
    public Database: string;
    public Username: string;
    public Password: string;

    constructor() {
        this.Host = config.get('database.host');
        this.Database = config.get('database.db');
        this.Username = config.get('database.username');
        this.Password = config.get('database.password');
        
    }

}