
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")

const MoviesController = require("../controllers/MoviesController")

router.get("/", auth, MoviesController.getAllMovies)
router.post("/", MoviesController.postMoviesByName)
router.post("/genre", MoviesController.postMoviesByGenre)
router.get("/theater/yes", MoviesController.getMoviesByTheater)
router.get("/theater/no", MoviesController.getMoviesByNotTheater)
router.get("/:_id", MoviesController.getMovieById)
router.post("/rating/top", MoviesController.postMovieByHighRating)
router.post("/", MoviesController.newMovie)
router.put("/", MoviesController.updateMovie)
router.delete("/", MoviesController.deleteMovie)

module.exports = router