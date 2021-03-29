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
  client.close();
  console.log("disconnected");
};

const getSomeProducts = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("connected");
  const db = await client.db("Shopping_Circle");
  const allProducts = await db.collection("products").find().toArray();
  const someProducts = allProducts.slice(1, 7);
  if (someProducts === []) {
    res.status(400).json({
      status: 400,
      data: someProducts,
      error,
      message: "Unable to get products",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: someProducts,
      message: "Success!",
    });
  }
  client.close();
  console.log("disconnected");
};

const getSellers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = await client.db("Shopping_Circle");
  console.log("connected");
  const users = await db.collection("users").find().toArray();
  const sellersOnly = users.filter((user) => {
    return user.type === "seller";
  });
  res.status(200).json({
    status: 200,
    data: sellersOnly,
    message: "Success!",
  });
  client.close();
  console.log("disconnected");
};

const getSeller = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const _id = req.params._id;
  await client.connect();
  const db = await client.db("Shopping_Circle");
  console.log("connected");
  await db
    .collection("users")
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

const getProduct = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const _id = req.params._id;
  await client.connect();
  const db = await client.db("Shopping_Circle");
  console.log("connected");
  await db
    .collection("products")
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
  const newProduct = req.body.newProduct;
  const sellerId = req.body.sellerId;
  const productId = uuidv4();

  await db
    .collection("products")
    .insertOne({
      _id: productId,
      name: newProduct.name,
      brand: newProduct.brand,
      category: newProduct.category,
      price: newProduct.price,
      description: newProduct.description,
      imageSrc: newProduct.imageSrc,
      sellerId: sellerId,
    })
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
        message: "Successfully added a new item for sale!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        error,
        data: newProduct,
        message: "Unable to add new item for sale",
      });
    })
    .finally(() => {
      client.close();
      console.log("disconnected");
    });
};

const createAccount = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = await client.db("Shopping_Circle");
  console.log("connected");
  const newUser = req.body;
  const _id = uuidv4();
  await db
    .collection("users")
    .insertOne({
      _id: _id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      type: newUser.type,
      imageSrc: newUser.imageSrc,
    })
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
        account: { newUser, _id },
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

// const verifyInfo = () => {
//   const emailToTest = userInfo.email.normalize();
//   const passwordToTest = userInfo.password.normalize();
//   const correctEmail = result.data.email.normalize();
//   const correctPassword = result.data.password.normalize();
//   console.log("emailToTest:", emailToTest);
//   console.log("correctEmail:", correctEmail);
//   console.log("passwordToTest:", passwordToTest);
//   console.log("correctPassword:", correctPassword);
//   if (
//     emailToTest === correctEmail &&
//     passwordToTest === correctPassword
//   ) {
//     console.log("yay!");
//   } else {
//     console.log("Login credentials are incorrect");
//   }
// };

const login = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = await client.db("Shopping_Circle");
  console.log("connected");
  const userInfo = req.body;
  console.log("req.body:", req.body);
  await db
    .collection("users")
    .findOne({ email: userInfo.email })
    .then((result) => {
      // if (
      //   result.data.email == userInfo.email &&
      //   result.data.password == userInfo.password
      // ) {
      console.log("yay!");
      res.status(200).json({
        status: 200,
        data: result,
        message: "User found",
      });
      // }
    })
    .catch((error) => {
      res.status(400).json({
        status: 400,
        error,
        message: "User not found. Please check login credentials",
      });
    })
    .finally(() => {
      client.close();
      console.log("disconnected");
    });
};

module.exports = {
  getProducts,
  getSomeProducts,
  getSellers,
  getSeller,
  getProduct,
  addProduct,
  createAccount,
  login,
};
