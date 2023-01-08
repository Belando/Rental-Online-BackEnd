
const mongoose = require("mongoose")
const Schema= mongoose.Schema

const movieSchema= new Schema ({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
    },
    rank: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    theater: {
        type: String,
        required: true
    }

})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie