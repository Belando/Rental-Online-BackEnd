
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")

const UsersController = require ("../controllers/UsersController")


router.get("/", UsersController.getAllUsers)
router.post("/login", UsersController.loginUser)
router.post("/register",UsersController.newUser)
router.put("/profile/modify", auth, UsersController.updateUser)
router.delete("/profile/delete", auth, UsersController.deleteUser)
router.post("/name", auth, isAdmin, UsersController.getUsersByName)
router.get("/profile/:_id", auth, isAdmin, UsersController.getUserById)
router.delete("/admin/deleteuser", auth, isAdmin, UsersController.deleteUser)



module.exports = router