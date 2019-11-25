const Mytinerary = require("../models/mytineraryModel");

const mytineraryController = {
  listMYtinerarys: async (req, res) => {
    const data = await Mytinerary.find(
      ("city_id" = req.body.city_id)
    ).catch(err => res.json({ response: err }));
    res.json({ response: data });
  },
  loadMYtinerary: async (req, res) => {
    var title = req.body.title;
    var user_id = req.body.user_id;
    var city_id = req.body.city_id;
    var duration = req.body.duration;
    var price = req.body.price;
    var hashtag = req.body.hashtag;

    const newMytinerary = new Mytinerary({
      title: title,
      user_id: user_id,
      city_id: city_id,
      duration: duration,
      price: price,
      hashtag: hashtag
    });

    await newMytinerary.save().catch(err => res.json({ response: err }));
    res.json({ response: "OK" });
  },
  deleteMYtinerary: async (req, res) => {},
  updateMYtinerary: async (req, res) => {}
};

module.exports = mytineraryController;
