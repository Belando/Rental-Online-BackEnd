
const express = require ("express")

const router = express.Router()

const MoviesController = require("../controllers/MoviesController")

router.get("/", MoviesController.getAllMovies)
router.post("/", MoviesController.newMovie)
router.put("/", MoviesController.updateMovie)
router.delete("/", MoviesController.deleteMovie)

module.exports = router