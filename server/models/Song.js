const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const songSchema = new Schema ({
    id: String,
    title: String,
})

const Song = mongoose.model(`Song`, songSchema)

module.exports = Song