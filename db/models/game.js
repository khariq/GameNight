'use strict'

const Sequelize = require('sequelize');
const db = require('../_db.js');

const Game = db.define('games', {
    Id : {
     type: Sequelize.INTEGER,
     allowNull: false,
     defaultValue: false,
     primaryKey: true
    },
    Name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    Image: {
        type:  Sequelize.STRING,
        allowNull: false
    },
    PlayerMin: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PlayerMax: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    EstimatedPlaytime: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    schema: 'GameNight',
    timestamps: false
});

module.exports = Game;