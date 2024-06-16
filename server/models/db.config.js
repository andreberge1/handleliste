require("dotenv").config({ path: __dirname + '/./../.env' });
const { Sequelize } = require("sequelize");

const db = process.env.DB_DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(db, user, password, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

module.exports = sequelize;