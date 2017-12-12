'use strict'

const Sequelize = require('sequelize');
const db = require('../_db.js');

const User = db.define('users', {  
  Id : {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: false,
    primaryKey: true
   },
  emailAddress: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }
}, {
  schema: 'GameNight',
  timestamps: false
});

module.exports = User;
