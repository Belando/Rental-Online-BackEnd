
const mongoose = require("mongoose")
const Schema= mongoose.Schema

const serieSchema= new Schema ({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
})

const Serie = mongoose.model("Serie", serieSchema)

module.exports = Serie