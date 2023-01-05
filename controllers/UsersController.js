
const User = require("../models/users")
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")

const authConfig = require("../config/auth")

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

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.Rounds))

    await User.create({
        name: req.body.name,
        surname: req.body.surname,
        dni: req.body.dni,
        email: req.body.email,
        password: password,
        phone: req.body.phone,
        nationality: req.body.nationality

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

UsersController.loginUser = async (req, res) => {

    try{
        await User.find({
            email: req.body.email
        })
        .then(userFound => {

            if(userFound[0].email === undefined){
                res.send("Usuario o password incorrectos")
            } else {
                if(bcrypt.compareSync(req.body.password, userFound[0].password)){

                    let token = jsonwebtoken.sign({ usuario: userFound}, authConfig.SECRET, {expiresIn: authConfig.EXPIRES})

                    let loginOk = `Bienvenido de nuevo ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        token: token
                    })
                }else{
                    res.send ("Usuario o password incorrectos")
                }
            }
        })
    }catch (error){
        res.send ("Email o password incorrectos")
    }
}

module.exports = UsersController