const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Users = require("./models/UserModel");
const Employee = require("./models/EmployeeModel");
const bodyParser = require("body-parser");
const multer = require("multer");

//Initializing Packages
const app = express();

dotenv.config();

//Initializing Middleware
const corsOptions = {
  origin: "https://employee-ledger.vercel.app",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded());

//Initializing Constants
const PORT = process.env.PORT || 5000;

//Creating Server
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Server");
});

//Connecting to server before listining
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
//GET Server
//Getting Single user
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await Users.findById(id);
    if (!result) {
      res.status(404).send("no data found");
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Getting All the employees
app.get("/api/employee", async (req, res) => {
  try {
    const result = await Employee.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//Getting single Employee
app.get("/api/employee/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await Employee.findById(id);
    if (!result) {
      res.status(404).send("no data found");
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST Servers
//Creating User
app.post("/api/users/register", async (req, res) => {
  const users = new Users(req.body);
  try {
    await users.save();
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await Users.findOne({ email: email });
    if (result) {
      if (result.password === password) {
        res.status(200).json({ message: "Success" });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ message: "No user found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Creating Employee
app.post("/api/employee/register", async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error saving employee data", error: err.message });
  }
});

//Patch Servers
//Updating Employee
app.patch("/api/employee/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await Employee.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

//Delete Servers
//Deleting Employee
app.delete("/api/employee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Employee.deleteOne({ _id: id });
    res.status(200).json({ DeletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//Listening to Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
