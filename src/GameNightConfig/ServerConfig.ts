import * as config from 'config'

export class ServerConfig {
    public BaseUrl: string;
    public SessionSecret: string;

    constructor() {
        this.BaseUrl = config.get("server.baseUrl");
        this.SessionSecret = config.get("server.sessionSecret");
    }
}