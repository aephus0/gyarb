const mongoose = require("mongoose");

const { Schema } = new Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema, "users");
