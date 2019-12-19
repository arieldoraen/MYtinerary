const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true},
  itinerary_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "mytinerarys" }],
  image: { type: String, required: false }
});

const Activity = mongoose.model("activities", activitySchema);
module.exports = Activity;
