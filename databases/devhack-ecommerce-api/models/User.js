const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^[a-zA-Z0-9_%+]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone_number: String,
  },
  {
    timestamps: true,
  },
);

module.exports = new mongoose.model('User', userSchema);
