# GameNight
Web app for managing game night events

# Config file
Create a config directory and add default.json to it.  Current structure looks like:
{
    "server": {
        "baseUrl" : "http://localhost:3000"
    },
    "database" : {
        "host" : "",
        "db": "",
        "username": "",
        "password" : ""
    },
    "redis": {
        "secret" : ""
    },
    "passport": {
        "facebook" : {
            "clientId": "",
            "clientSecret": "",
            "callback": ""
        },
        "google" : {
            "clientId" : "",
            "clientSecret": "",
            "callback" : ""
        }
    }
}