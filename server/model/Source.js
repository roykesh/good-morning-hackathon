const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sourceSchema = new Schema({
    name: String,
    url: String,
    checked: String      
})

const Source = mongoose.model('Source', sourceSchema)

module.exports = Source