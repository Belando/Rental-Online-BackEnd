
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")

const SeriesController = require("../controllers/SeriesController")

router.get("/", SeriesController.getAllSeries)
router.post("/", SeriesController.postSeriesByName)
router.post("/genre", SeriesController.postSeriesByGenre)
router.get("/weekly", SeriesController.getSeriesByWeek)
router.get("/finished", SeriesController.getFinishedSeries)
router.get("/:_id", SeriesController.getSeriesById)
router.get("/rating/top", SeriesController.getSeriesByHighRating)
router.post("/", SeriesController.newSerie)
router.put("/", SeriesController.updateSerie)
router.delete("/", SeriesController.deleteSerie)

module.exports = router