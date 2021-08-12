const { Sequelize, INTEGER } = require("sequelize");
const sequelize = require("../util/database");

const CartProduct = sequelize.define("cartproduct", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: INTEGER
});

module.exports = CartProduct;