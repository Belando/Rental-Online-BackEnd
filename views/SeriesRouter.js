
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")

const SeriesController = require("../controllers/SeriesController")

router.get("/", SeriesController.getAllSeries)
router.post("/tittle", SeriesController.postSeriesByName)
router.post("/genre", SeriesController.postSeriesByGenre)
router.get("/weekly", SeriesController.getSeriesByWeek)
router.get("/finished", SeriesController.getFinishedSeries)
router.get("/:_id", SeriesController.getSeriesById)
router.post("/rating/top", SeriesController.postSeriesByHighRating)
router.post("/new", SeriesController.newSerie)
router.put("/modify", SeriesController.updateSerie)
router.delete("/delete", SeriesController.deleteSerie)

module.exports = router