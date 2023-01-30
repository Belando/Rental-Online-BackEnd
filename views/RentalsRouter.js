const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const RentalsController = require('../controllers/RentalsController');


router.get("/admin", auth, RentalsController.AllUsersAdmin);

router.post("/newrental", auth, RentalsController.newRental);

router.get("/user", auth, RentalsController.allRentalsUser);


module.exports = router;