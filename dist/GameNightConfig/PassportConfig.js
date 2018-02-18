"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
class PassportConfig {
    constructor() {
        this.Facebook = new FacebookConfig();
        this.Google = new GoogleConfig();
    }
}
exports.PassportConfig = PassportConfig;
class OAuthConfig {
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
