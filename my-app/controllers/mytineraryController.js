const Mytinerary = require("../models/mytineraryModel");

const mytineraryController = {
  listMYtinerarys: async (req, res) => {
    const data = await Mytinerary.find(
      ("city_id" = req.body.city_id)
    ).catch(err => res.json({ response: err }));
    res.json({ response: data });
  },
  loadMYtinerary: async (req, res) => {},

  deleteMYtinerary: async (req, res) => {},
  updateMYtinerary: async (req, res) => {}
};

module.exports = mytineraryController;
