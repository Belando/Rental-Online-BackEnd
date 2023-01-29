
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
        type: String
    },
    nameUser:{
        type: String
    },
    rentalDate: {
        type: Date
    },
    returnDate: {
        type: Date
    },
    price: { 
        type: Number
    }

});

const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;