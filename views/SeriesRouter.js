
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")

const SeriesController = require("../controllers/SeriesController")

router.get("/", SeriesController.getAllSeries)
router.post("/tittle", auth, SeriesController.postSeriesByName)
router.post("/genre", auth, SeriesController.postSeriesByGenre)
router.get("/weekly", auth, SeriesController.getSeriesByWeek)
router.get("/finished", auth, SeriesController.getFinishedSeries)
router.get("/:_id", auth, SeriesController.getSeriesById)
router.get("/rating/:rank", auth, SeriesController.getSeriesByRating)
router.post("/new", auth, isAdmin, SeriesController.newSerie)
router.put("/modify", auth, isAdmin, SeriesController.updateSerie)
router.delete("/delete", auth, isAdmin, SeriesController.deleteSerie)

module.exports = router