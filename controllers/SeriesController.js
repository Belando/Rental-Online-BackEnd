
const Series = require("../models/series")

const SeriesController = {}

SeriesController.getAllSeries = async (req, res) => {

    try{
        let series = await Series.find({})

        if(MoviesController.length > 0){
            res.send(series)
        }else{
            res.send({"Msg":"Lo sentimos, no hemos encontrado ninguna serie."})
        }  
    } catch (error){
        console.log (error)
    }
}

SeriesController.newSerie = async (req, res) => {

    let name = req.body.name;
    let year = req.body.year;

    try{
        let result = await Series.create({
            name: name,
            year: year
        })
        if(result?.name){
            res.send({"Message": `La serie ${serie.name} se ha añadido con éxito`})
        }
    }catch(error){
        console.log(error)
    }
}

SeriesController.updateSerie = async (req, res) => {

    let _id = req.body._id
    let newName = req.body.name
    let newYear = req.body.year

    try{
        let result = await Series.findByIdAndUpdate(_id, {
            $set: {
                name: newName,
                year: newYear
            }
        }).setOptions({ returnDocument: "after" })

        if(result?.name){
            res.send(result)
        }
    } catch (error){
        console.log(error)
    }
}

SeriesController.deleteSerie = async (req, res) => {
    let _id = req.body._id
    
    try{
        let result = await Series.findByIdAndDelete(_id)
        res.send({"Message": `La serie ${serie.name} se ha eliminado con éxito`})
    } catch (error){
        console.log("Error borrando la serie", error)
    }
}

module.exports = SeriesController