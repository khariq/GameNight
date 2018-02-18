import * as sequelize from 'sequelize';
import { GameNightConfig } from '../GameNightConfig';
import * as path from 'path';
import * as fs from 'fs';

export class Database {

    public Sequelize: sequelize.Sequelize;
    public Models: sequelize.Model<T, K>[];

    constructor() {
        var config = new GameNightConfig();
        this.Sequelize = new sequelize(
            config.Database.Database,
            config.Database.Username,
            config.Database.Password,
            {
                dialect: 'mssql',
                host: config.Database.Host,
                dialectOptions: {
                    encrypt: false
                },
                operatorsAliases: false
            },
        );

        this.importModels();
    }

    private importModels() {

        let modelFiles = [];

        let dir = path.resolve(__dirname, '/Models');
        fs.readdir(dir, function(err, files){
            modelFiles.concat(files);
        });

        modelFiles.forEach(function(model){

            let pathToModel = path.resolve(__dirname, '/Models', model);
            var m = this.Sequelize.import(pathToModel);

        });

        this.associate();
    }

    private associate() {

    }

}