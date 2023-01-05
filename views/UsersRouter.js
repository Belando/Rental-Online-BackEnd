
const express = require ("express")

const router = express.Router()

const UsersController = require ("../controllers/UsersController")

router.get("/", UsersController.getAllUsers)
router.get("/:_id", UsersController.getUserById)
router.get("/name:name", UsersController.getUsersByName)

router.post("/login", UsersController.loginUser)
router.post("/", UsersController.newUser)
router.put("/", UsersController.updateUser)
router.delete("/", UsersController.deleteUser)

module.exports = router