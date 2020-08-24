const express = require("express");
const bodyParser = require("body-parser");
const { getAllProduct, getProductByCode } = require("./services/products/product-service");
const { getCheckout } = require("./services/checkout/checkout");
var cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/product", (req, res) => {
  res.json(getAllProduct());
});

app.get("/product/:code", (req, res) => {
  const product = getProductByCode(req.params.code);
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

//Need to calculate total and discount
app.post("/checkout", (req, res) => {
  // const result = {
  //   total: 0,
  //   totalDiscount: 0,
  //   totalToPay: 0,
  //   product: [],
  // };
  const result = getCheckout(req.body.codes);
  res.json(result);
});

app.listen(4000);
console.log("Express started on port 3000");
