const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Users = require("./models/UserModel");

//Initializing Packages
const app = express();
dotenv.config();

//Initializing Middleware
app.use(cors());
app.use(express.json());

//Initializing Constants
const PORT = process.env.PORT || 5000;

//Creating Server
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Server");
});

//GET Server
app.get("/api/users", async (req, res) => {
  try {
    const result = await Users.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
//POST Server
app.post("/api/users", async (req, res) => {
  const users = new Users(req.body);
  try {
    await users.save();
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//Listening to Server
const start = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    app.listen(PORT, () => {
      console.log(`Server is running successfully at PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
