const { Sequelize, INTEGER } = require("sequelize");
const sequelize = require("../util/database");

const OrderProduct = sequelize.define("orderproduct", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: INTEGER,
});

module.exports = OrderProduct;
