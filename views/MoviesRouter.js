
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")

const MoviesController = require("../controllers/MoviesController")

router.get("/", MoviesController.getAllMovies)
router.post("/tittle", auth, MoviesController.postMoviesByName)
router.post("/genre", auth, MoviesController.postMoviesByGenre)
router.get("/theater/yes", auth, MoviesController.getMoviesByTheater)
router.get("/theater/no", auth, MoviesController.getMoviesByNotTheater)
router.get("/:_id", auth, MoviesController.getMovieById)
router.get("/rating/:rank", auth, MoviesController.getMovieByRating)
router.post("/new", auth, isAdmin, MoviesController.newMovie)
router.put("/modify", auth, isAdmin, MoviesController.updateMovie)
router.delete("/delete", auth, isAdmin, MoviesController.deleteMovie)

module.exports = router