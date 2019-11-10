const City = require('../models/citiesModel')

const cityController = {
    listCities: (req, res) => {

    },
    loadCity: (req, res) => {
        var name = req.body.name
        var country = req.body.country

        const newCity = new City({
            name: name,
            country: country
        })

        await newCity.save()
        res.json({'response': 'OK'})
    },
    deleteCity: (req, res) => {

    },
    updateCity: (req, res) => {

    }
}

module.exports = cityController