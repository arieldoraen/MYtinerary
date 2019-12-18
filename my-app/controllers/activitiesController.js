const Activity = require('../models/activityModels');

const activitycontroller = {
	listActivities: async (req, res) => {
		const data = await Activity.find(
            ("itinerary_id" = req.params.itinerary_id)
          ).catch(err => res.json({ response: err }));
          res.json({ response: data });
    },
    loadActivity: async (req, res) => {

		var name = req.body.name;
        var image = req.body.image;
        var itinerary_id = req.params.itinerary_id;

        const newActivity = new Activity({
        name: name,
        image: image,
        itinerary_id: itinerary_id
        });

        await newActivity.save().catch(err => res.json({ response: err }));
        res.json({ response: "OK" });
	},
	deleteActivity: async (req, res) => {
		var id = req.params.id;
		await Activity.findOneAndDelete({ _id: id }),
			res.json('Done'); 
	}, 
	updateActivity: async (req, res) => {}
};

module.exports = activitycontroller;