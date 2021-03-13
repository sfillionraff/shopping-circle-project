"use strict";

const express = require("express");
// const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 8000;

const {
  getProducts,
  getProduct,
  addProduct,
  createAccount,
} = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  // .use(bodyParser.json())
  // get all products
  .get("/products", getProducts)

  // get a single product
  .get("/products/:_id", getProduct)

  // add new product
  // NOT WORKING
  .post("/products/addNew", addProduct)

  // add new account
  // NEEDS TO BE TESTED
  .post("/account/addNew", createAccount)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "Not found",
    });
  })

  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
