const { users, products } = require("./data");
const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");

const dbName = "Shopping_Circle";

const setUpDatabase = async (dbName) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = await client.db(dbName);
    console.log("connected!");
    const usersToAdd = users.map((user) => {
      user["_id"] = uuidv4();
      return user;
    });
    const productsToAdd = products.map((product) => {
      product["_id"] = uuidv4();
      return product;
    });
    // const usersAdded = await db.collection("users").insertMany(usersToAdd);
    // assert.strictEqual(10, usersAdded);
    const productsAdded = await db
      .collection("products")
      .insertMany(productsToAdd);
    assert.strictEqual(15, productsAdded);
    // console.log("users:", usersAdded);
    console.log("products:", productsAdded);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

setUpDatabase(dbName);
