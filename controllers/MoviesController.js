
const Movie = require("../models/movie")

const MoviesController = {}

MoviesController.getAllMovies = async (req, res) => {

    try{
        let movies = await Movie.find({})

        if(movies.length > 0){
            res.send(movies)
        }else{
            res.send({"Msg":"Lo sentimos, no hemos encontrado ninguna película."})
        }
    } catch (error){
        console.log (error)
    }
}

MoviesController.newMovie = async (req, res) => {

    let name = req.body.name;
    let year = req.body.year;

    try{
        let result = await Movie.create({
            name: name,
            year: year
        })
        if(result?.name){
            res.send({"Msg": `La película ${result.name} se ha añadido con éxito`})
        }
    }catch (error) {
        console.log(error)
    }
}

MoviesController.updateMovie = async (req, res) => {

    let _id = req.body._id
    let newName = req.body.name
    let newYear = req.body.year

    try{
        let result = await Movie.findByIdAndUpdate(_id, {
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

MoviesController.deleteMovie = async (req, res) => {
    let _id = req.body._id
    
    try{
        let result = await Movie.findByIdAndDelete(_id)
        res.send({"Message": `La película ${movie.name} se ha eliminado con éxito`})
    } catch (error){
        console.log("Error borrando la película", error)
    }
}

module.exports = MoviesController