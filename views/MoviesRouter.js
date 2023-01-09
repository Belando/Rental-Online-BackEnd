
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")

const MoviesController = require("../controllers/MoviesController")

router.get("/", auth, MoviesController.getAllMovies)
router.post("/tittle", MoviesController.postMoviesByName)
router.post("/genre", MoviesController.postMoviesByGenre)
router.get("/theater/yes", MoviesController.getMoviesByTheater)
router.get("/theater/no", MoviesController.getMoviesByNotTheater)
router.get("/:_id", MoviesController.getMovieById)
router.post("/rating/top", MoviesController.postMovieByHighRating)
router.post("/new", MoviesController.newMovie)
router.put("/modify", MoviesController.updateMovie)
router.delete("/delete", MoviesController.deleteMovie)

module.exports = router