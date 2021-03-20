"use strict";

const express = require("express");
const morgan = require("morgan");

const PORT = 8000;

const {
  getProducts,
  getSomeProducts,
  getSellers,
  getProduct,
  addProduct,
  createAccount,
  addItemToCart,
} = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  // get all products
  .get("/products", getProducts)

  // get some products for homepage
  .get("/some_products", getSomeProducts)

  // get sellers for homepage
  .get("/sellers/explore", getSellers)

  // get a single product
  .get("/products/:_id", getProduct)

  // add new product
  // NOT WORKING
  .post("/products/addNew", addProduct)

  // add new account
  // NEEDS TO BE TESTED
  .post("/account/addNew", createAccount)

  // add item to cart
  .post("/cart/addNew", addItemToCart)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "Not found",
    });
  })

  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
