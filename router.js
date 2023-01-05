
const router = require("express").Router()

const MoviesRouter = require("./views/MoviesRouter")

router.use("/movies", MoviesRouter)

module.exports = router