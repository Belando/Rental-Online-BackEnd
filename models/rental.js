
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    idUser: {
        type: Schema.Types.ObjectId,
        required: true
    },
    idSerie: {
        type: Schema.Types.ObjectId,
        required: true
    },
    nameSerie:{
        type: String,
        required: true
    },
    nameUser:{
        type: String,
        required: true
    },
    rentalDate: {
        type: String,
        required: true
    },
    returnDate: {
        type: String,
        required: true
    },
    price: { 
        type: String,
        required: true
    }

});

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;