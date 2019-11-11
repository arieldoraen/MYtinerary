const City = require('../models/citiesModel')

const cityController = {
    listCities: (req, res) => {
        var Cities = City.find()
    },
    loadCity: (req, res) => {
        var name = req.body.name
        var country = req.body.country

        const newCity = new City({
            name: name,
            country: country
        })

        await newCity.save()
        res.json({ 'response': 'OK' })
    },
    deleteCity: (req, res) => {
        City.findOneAndRemove({
                id: req.body.id
            })
            .then(res => res.json({ 'response': 'OK' }))
            .catch(err => res.json({ 'response': err }))
    },
    updateCity: (req, res) => {
        City.findOneAndUpdate({
                id: req.body.id
            }, {
                name: req.body.newName || req.body.name,
                country: req.body.newCountry || req.body.country
            }, {
                new: true
            })
            .then(res => res.json({ 'response': 'OK' }))
            .catch(err => res.json({ 'response': err }))
    }
}

module.exports = cityController