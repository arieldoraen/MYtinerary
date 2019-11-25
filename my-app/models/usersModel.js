const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profile_picture: { type: String, required: false },
  password: { type: String, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model("users", userSchema);
module.exports = User;
