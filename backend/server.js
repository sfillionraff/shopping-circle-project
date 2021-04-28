"use strict";

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8000;

const {
  getProducts,
  getSomeProducts,
  getSellers,
  getSeller,
  getProduct,
  addProduct,
  createAccount,
  login,
  updateProducts,
  updateItem,
  deleteItem,
  updateAccount,
  deleteAccount,
} = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(cors())
  .use(express.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use("/", express.static(__dirname + "/"))
  // get all products
  .get("/products", getProducts)

  // get some products for homepage
  .get("/some_products", getSomeProducts)

  // get sellers for homepage and selling homepage
  .get("/sellers/explore", getSellers)

  // get a seller
  .get("/sellers/:_id", getSeller)

  // get a single product
  .get("/products/:_id", getProduct)

  // add new product
  .post("/products/addNew", addProduct)

  // add new account
  .post("/account/addNew", createAccount)

  // log into existing account
  .post("/account/login", login)

  // update purchased products
  .patch("/updateProducts", updateProducts)

  // update a single item for sale
  .put("/update-item", updateItem)

  .put("/update-account", updateAccount)

  // delete a single item
  .delete("/delete-item/:_id", deleteItem)

  .delete("/delete-account", deleteAccount)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "Not found",
    });
  })

  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
