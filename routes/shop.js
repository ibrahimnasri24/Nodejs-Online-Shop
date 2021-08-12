const express = require("express");

const Router = express.Router();

const shopController = require('../controllers/shop');

Router.get("/", shopController.getIndex);

Router.get("/products", shopController.getProducts);
Router.get("/products/:productid", shopController.getProduct);

Router.get("/cart", shopController.getCart);
Router.post("/cart", shopController.postCart);
Router.post("/cart-delete-product", shopController.postDeleteCartProduct)

Router.get("/orders", shopController.getOrders);
Router.post("/create-order", shopController.postOrder);

module.exports = Router;
