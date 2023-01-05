
const User = require("../models/users")

const UsersController = {}

UsersController.getAllUsers = async(req, res) => {

    try{
        await User.find({})
        .then(users => {
            res.send(users)
        })
    } catch (error){
        console.log (error)
    }
}

UsersController.getUserById = async (req, res) => {

    let _id = req.params._id

    try{
        await User.findById(_id)
        .then(found => {
            res.send(found)
        })
    } catch (error){
        console.log (error)
    }
}

UsersController.getUsersByName = async (req, res) => {

    let name= req.params.name

    try {
        await User.find({
            name: name
        })
        .then(foundUsers => {
            res.send(foundUsers)
        })
    }catch (error){
        console.log(error)
    }
}

UsersController.newUser = async (req, res) => {

    let name = req.body.name
    let surname = req.body.surname
    let dni = req.body.dni

    await User.create({
        name: name,
        surname: surname,
        dni: dni
    }).then (user => {
        res.send({"Message": `El usuario ${user.name} se ha añadido con éxito`})
    }).catch (error => {console.log(error)})
}

UsersController.updateUser = async (req, res) => {

    let dni = req.body.dni
    let newName = req.body.name
    let newSurname = req.body.surname

    try{
        await User.findOneAndUpdate(
            {dni:dni},
            {name: newName,
            surname: newSurname}
        )
        .setOptions({ returnDocument: "after"})
        .then(userModified => {
            res.send(userModified)
        })
    }catch (error){
        console.log("Error updating user data", error)
    }
}

UsersController.deleteUser = async (req, res) => {

    let dni = req.body.dni

    try{
        await User.findOneAndDelete({
            dni: dni
        })
        .then(erased => {
            res.send({"Message": `El usuario ${erased.name} ${erased.surname} se ha eliminado con éxito`})
        })
    }catch(error){
        console.log ("Error deleting user", user)
    }
}

module.exports = UsersController