const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");

const getProducts = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected");
    const db = await client.db("Shopping_Circle");
    const allProducts = await db.collection("products").find().toArray();
    if (allProducts === []) {
      res.status(404).json({
        status: 404,
        message: "Products not found",
        data: allProducts,
        error,
      });
    } else {
      res.status(200).json({
        status: 200,
        data: allProducts,
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("disconnected");
  }
};

const getProduct = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const _id = req.params._id;
  await client.connect();
  const db = await client.db("Shopping_Circle");
  console.log("connected");
  db.collection("products")
    .findOne({ _id: _id })
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: 404,
        message: "Product not found",
        data: _id,
        error,
      });
    })
    .finally(() => {
      client.close();
      console.log("disconnected");
    });
};

const addProduct = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = await client.db("Shopping_Circle");
  console.log("connected");
  const newProduct = req.body;
  const productId = uuidv4();
  console.log(newProduct);

  // db.collection("products")
  //   .insertOne({ _id: productId, newProduct })
  //   .then((result) => {
  //     res.status(200).json({
  //       status: 200,
  //       data: result,
  //       message: "Successfully added a new item for sale!",
  //     });
  //   })
  //   .catch((error) => {
  //     res.status(400).json({
  //       status: 400,
  //       error,
  //       data: newProduct,
  //       message: "Unable to add new item for sale",
  //     });
  //   })
  //   .finally(() => {
  //     client.close();
  //     console.log("disconnected");
  //   });
};

const createAccount = async (res, req) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = await client.db("Shopping_Circle");
  console.log("connected");
  const newUser = req.body;
  const _id = uuidv4();

  db.collection("users")
    .insertOne({ _id: _id, newUser })
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
        message: "New account successfully created!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        error,
        message: "Account was not created. Please try again",
      });
    })
    .finally(() => {
      client.close();
      console.log("disconnected");
    });
};

module.exports = { getProducts, getProduct, addProduct, createAccount };
