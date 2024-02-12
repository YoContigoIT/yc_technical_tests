const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

const databaseUrl = process.env.DB_URL;

const sequelize = new Sequelize(databaseUrl)

module.exports = sequelize