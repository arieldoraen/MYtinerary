const express = require('express');
const mytineraryController = require('../controllers/mytineraryController');

const router = express.Router();

router
	.route('/itinerarys/:city_id')
	.get(mytineraryController.listMYtinerarys)
	.post(mytineraryController.loadMYtinerary);

router
	.route('/itinerarys/:id')
	.delete(mytineraryController.deleteMYtinerary)
	.put(mytineraryController.updateMYtinerary);

module.exports = router;