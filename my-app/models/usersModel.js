const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  profile_picture: { type: String, required: false , default: ''},
  password: { type: String, required: true },
  email: { type: String, required: true },
  isDeleted: {type: Boolean, default: false}
});

// UserSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

const User = mongoose.model("users", userSchema);
module.exports = User;
