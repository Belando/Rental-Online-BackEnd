
const Series = require("../models/series")

const SeriesController = {}

SeriesController.getAllSeries = async (req, res) => {

    try{
        await Series.find({})
        .then(series => {
            res.send(series)
        })
    } catch (error){
        console.log (error)
    }
}

SeriesController.newSerie = async (req, res) => {

    let name = req.body.name;
    let year = req.body.year;

    await Series.create({
        name: name,
        year: year
    }).then(serie => {
        res.send({"Message": `La serie ${serie.name} se ha añadido con éxito`})
    }).catch(error => {console.log(error)})
}

SeriesController.updateSerie = async (req, res) => {

    let _id = req.body._id
    let newName = req.body.name

    try{
        await Series.findByIdAndUpdate(_id, {
            $set: {
                name: newName
            }
        }).setOptions({ returnDocument: "after" })
        .then(serieModified => {
            res.send(serieModified)
        })
    } catch (error){
        console.log("Error updating serie name", error)
    }
}

SeriesController.deleteSerie = async (req, res) => {
    let _id = req.body._id
    
    try{
        await Series.findByIdAndDelete(_id)
        .then (serie => {
            res.send({"Message": `La serie ${serie.name} se ha eliminado con éxito`})
        })
    } catch (error){
        console.log("Error deleting serie", error)
    }
}

module.exports = SeriesController