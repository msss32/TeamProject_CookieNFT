const Sequelize = require("sequelize");

const config = require("../config");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const DB = {};
DB.sequelize = sequelize;

module.exports = DB;
