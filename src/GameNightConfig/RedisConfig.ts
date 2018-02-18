import * as config from 'config'

export class RedisConfig {

    public Secret: string

    constructor() {
        this.Secret = config.get("redis.secret");

    }

}