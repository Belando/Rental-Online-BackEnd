
const Series = require("../models/series")

const SeriesController = {}

SeriesController.getAllSeries = async (req, res) => {

    try {
        let series = await Series.find({})

        if (Series.length > 0) {
            res.send(series)
        } else {
            res.send({ "Msg": "Lo sentimos, no hemos encontrado ninguna serie." })
        }
    } catch (error) {
        console.log(error)
    }
}

SeriesController.getSeriesByName = async (req, res) => {

    let name = req.params.name
    try {
        let foundSeries = await Series.find({
            name: name
        })
        if (foundSeries.length === 0) {
            res.send(`La serie ${name} no se ha encontrado`)
        } else {
            res.send(foundSeries)
        }
    } catch (error) {
        console.log(error)
    }
}

SeriesController.postSeriesByGenre = async (req, res) => {

    let genre = req.body.genre
    try {
        let foundSeries = await Series.find({
            genre: genre
        })
        if (foundSeries.length === 0) {
            res.send(`El género ${genre} no se ha encontrado`)
        } else {
            res.send(foundSeries)
        }
    } catch (error) {
        console.log(error)
    }
}

SeriesController.getSeriesByWeek = async (req, res) => {

    try {
        let weeklySeries = await Series.find({
            nextweek: "En emisión"
        })
        if (weeklySeries.length === 0) {
            res.send("No hay series en emisión")
        } else {
            res.send(weeklySeries)
        }
    } catch (error) {
        console.log(error)
    }
}

SeriesController.getFinishedSeries = async (req, res) => {

    try {
        let finishedSeries = await Series.find({
            nextweek: "Finalizada"
        })
        if (finishedSeries.length === 0) {
            res.send("Ha ocurrido un error")
        } else {
            res.send(finishedSeries)
        }
    } catch (error) {
        console.log(error)
    }
}

SeriesController.getSeriesById = async (req, res) => {

    try {
        let seriesId = await Series.find({
            _id: req.params._id
        })
        if (seriesId.length === 0) {
            res.send("No hay ninguna serie con esa ID")
        } else {
            res.send(seriesId)
        }
    } catch (error) {
        console.log(error)
    }
}

SeriesController.getSeriesByRating = async (req, res) => {

    try {
        const rank = req.params.rank
        const foundSeries = await Series.find({
            rank: {$gte:rank}
        })
        if (rank >= 80) {
            res.send(foundSeries)
        } else {
            res.send("Error")
        }
    } catch (error) {
        console.log(error);
    }
}
    SeriesController.newSerie = async (req, res) => {

        try {
            let serie = await Series.create({
                name: req.body.name,
                year: req.body.year,
                chapter: req.body.chapter,
                genre: req.body.genre,
                rank: req.body.rank,
                nextweek: req.body.nextweek
            })
            if (serie?.name) {
                res.send({ "Message": `La serie ${serie.name} se ha añadido con éxito` })
            }
        } catch (error) {
            console.log(error)
        }
    }

    SeriesController.updateSerie = async (req, res) => {

        let _id = req.body._id
        let newName = req.body.name
        let newGenre = req.body.genre
        let newRank = req.body.rank
        let newNextweek = req.body.nextweek
        let newYear = req.body.year
        let newChapter = req.body.chapter
        let newposter_path = req.body.poster_path

        try {
            let result = await Series.findByIdAndUpdate(_id, {
                $set: {
                    name: newName,
                    year: newYear,
                    genre: newGenre,
                    rank: newRank,
                    chapter: newChapter,
                    nextweek: newNextweek,
                    poster_path: newposter_path
                }
            }).setOptions({ returnDocument: "after" })

            if (result?.name) {
                res.send(result)
            }
        } catch (error) {
            console.log(error)
        }
    }

    SeriesController.deleteSerie = async (req, res) => {
        let _id = req.body._id

        try {
            let serie = await Series.findByIdAndDelete(_id)
            res.send({ "Message": `La serie ${serie.name} se ha eliminado con éxito` })
        } catch (error) {
            console.log("Error borrando la serie", error)
        }
    }

    module.exports = SeriesController