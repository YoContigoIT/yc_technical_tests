const Sequelize = require("sequelize");
const env = require("../config/env");

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  dialect: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
});

module.exports = sequelize;
