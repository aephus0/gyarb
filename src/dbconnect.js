const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/backend");
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log("Connection to MongoDB failed: ", err);
  }
};

module.exports = { connect };
