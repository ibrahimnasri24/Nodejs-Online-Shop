const express = require("express");
const path = require("path");

const Router = express.Router();

const adminController = require('../controllers/admin');

//admin/add-product => GET
Router.get("/add-product", adminController.getAddProductPage);

Router.get("/edit-product/:productId", adminController.getEditProductPage);

//admin/products => GET
Router.get("/products", adminController.getProducts);

//admin/add-product => POST
Router.post("/add-product", adminController.postAddProduct);

Router.post("/edit-product", adminController.postEditProduct);

Router.post("/delete-product", adminController.postDeleteProduct);

module.exports = Router;