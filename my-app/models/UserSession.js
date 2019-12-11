const mongoose = require("mongoose");

const userSessionSchema = new mongoose.Schema({
  userId: { type: Number, default: -1},
  timestamp: { type: Date, default: Date.now()}, 
  isDeleted: {type: Boolean, default: false}
});

const userSession = mongoose.model("userSession", userSessionSchema);
module.exports = userSession;
