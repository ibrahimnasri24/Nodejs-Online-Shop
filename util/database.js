const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("first-node-app", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;