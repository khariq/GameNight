import * as config from 'config'

export class PassportConfig {
    public Facebook: FacebookConfig;
    public Google: GoogleConfig;

    constructor() {
        this.Facebook = new FacebookConfig();
        this.Google = new GoogleConfig();
    }

}

class OAuthConfig {
    public ClientId: string;
    public ClientSecret: string;
    public Callback: string;
}

class FacebookConfig extends OAuthConfig {
    constructor() {
        super();
        this.ClientId = config.get("passport.facebook.clientId");
        this.ClientSecret = config.get("passport.facebook.clientSecret");
        this.Callback = config.get("passport.facebook.callback");
    }
}

class GoogleConfig extends OAuthConfig {
    constructor() {
        super();
        this.ClientId = config.get("passport.google.clientId");
        this.ClientSecret = config.get("passport.google.clientSecret");
        this.Callback = config.get("passport.google.callback");
    }
}