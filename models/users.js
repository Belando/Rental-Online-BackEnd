
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
        unique: true,
        inmutable: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        
    },
    phone: {
        type: Number
    },
    nationality: {
        type: String
    },
    rol: {
        type: String,
        required: false
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User