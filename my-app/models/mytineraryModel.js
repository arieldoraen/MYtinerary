const mongoose = require("mongoose");

const mytinerarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  user_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  city_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "cities" }],
  rating: { type: Number, required: false },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  hashtag: { type: String, required: false }
});

const Mytinerary = mongoose.model("mytinerarys", mytinerarySchema);
module.exports = Mytinerary;
