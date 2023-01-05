
const express = require ("express")

const router = express.Router()

const SeriesController = require("../controllers/SeriesController")

router.get("/", SeriesController.getAllSeries)
router.post("/", SeriesController.newSerie)
router.put("/", SeriesController.updateSerie)
router.delete("/", SeriesController.deleteSerie)

module.exports = router