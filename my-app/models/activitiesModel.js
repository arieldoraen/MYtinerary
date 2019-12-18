const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true},
  itinerary_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "mytinerarys" }],
  image: { type: String, required: true }
});

const Activity = mongoose.model("activities", activitySchema);
module.exports = Activity;
