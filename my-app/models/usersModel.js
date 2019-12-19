const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  profile_picture: { type: String, required: false , default: ''},
  password: { type: String, required: true },
  email: { type: String, required: true },
  isDeleted: {type: Boolean, default: false}
});

 userSchema.methods.generateHash = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 };

 userSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.password);
 };

const User = mongoose.model("users", userSchema);
module.exports = User;
