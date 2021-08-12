const express = require("express");
const path = require("path");

const app = express();

const sequelize = require("./util/database");

app.set("view engine", "ejs");

const adminroute = require("./routes/admin");
const shoproute = require("./routes/shop");
const rootdir = require("./util/rootdir");
const pageNotFoundController = require("./controllers/error404");

const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartProduct = require("./models/cart-product");
const Order = require("./models/order");
const OrderProduct = require("./models/order-product");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootdir, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminroute);
app.use(shoproute);
app.use(pageNotFoundController.get404page);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(Cart, { through: CartProduct });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: "Bob", email: "bob1n2n3n@hotmail.com" });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    //return user.createCart();
  })
  .then(cart => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });