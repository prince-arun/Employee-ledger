const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  workingHours: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  isAgree: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
