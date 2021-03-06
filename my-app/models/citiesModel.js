const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    image: {type: String, required: false}
})

const City = mongoose.model('cities', citySchema)
module.exports = City