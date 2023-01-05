
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")

const UsersController = require ("../controllers/UsersController")

//ENDPOINTS

router.get("/", UsersController.getAllUsers)
router.post("/login", UsersController.loginUser)
router.post("/", UsersController.newUser)
router.put("/", UsersController.updateUser)
router.delete("/", UsersController.deleteUser)

//ENDPOINTS CON MIDDLEWARE

router.post("/name", isAdmin, auth, UsersController.getUsersByName)
router.get("/profile/:_id", auth, UsersController.getUserById)
router.delete("/admin/deleteuser", isAdmin, auth, UsersController.deleteUser)

module.exports = router