
const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true, 
        unique: true,
        inmutable: true
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User