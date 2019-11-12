const City = require('../models/citiesModel')

const cityController = {
    listCities: async (req, res) => {
        const data  = await City.find()
        .catch(err => res.json({ 'response': err }))
        res.json({ 'response': data })
    },
    loadCity: async(req, res) => {
        var name = req.body.name
        var country = req.body.country
        var image  = req.body.image || ' '

        const newCity = new City({
            name: name,
            country: country,
            image: image
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
                country: req.body.newCountry || req.body.country,
                image: req.body.newImage || req.body.image || ' '
            }, {
                new: true
            })
            .then(res => res.json({ 'response': 'OK' }))
            .catch(err => res.json({ 'response': err }))
    }
}

module.exports = cityController