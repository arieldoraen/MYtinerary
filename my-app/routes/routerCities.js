const express = require('express')
const citiesController = require("../controllers/citiesController")
const router = express.Router()

router.route('/cities')
    .get(citiesController.listCities)
    .post(citiesController.loadCity)
router.route('/cities/:id')
    .delete(citiesController.deleteCity)
    .put(citiesController.updateCity)
module.exports = router