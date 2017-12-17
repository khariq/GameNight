'use strict';

const config = require('config');
const Sequelize = require('sequelize');

const dbName = config.get('database.db');
const username = config.get('database.username');
const password = config.get('database.password');
const host = config.get('database.host');

const db = new Sequelize(
	dbName, username, password,
	{
		dialect: 'mssql',
		host: host,
		dialectOptions: {
			encrypt : true
		},
		operatorAliases: false
	}
);

module.exports = db;
