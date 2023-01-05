
const Movie = require("../models/movie")

const MoviesController = {}

MoviesController.getAllMovies = async (req, res) => {

    try{
        await Movie.find({})
        .then(movies => {
            res.send(movies)
        })
    } catch (error){
        console.log (error)
    }
}

MoviesController.newMovie = async (req, res) => {

    let name = req.body.name;
    let year = req.body.year;

    await Movie.create({
        name: name,
        year: year
    }).then(movie => {
        res.send({"Message": `La película ${movie.name} se ha añadido con éxito`})
    }).catch(error => {console.log(error)})
}

MoviesController.updateMovie = async (req, res) => {

    let _id = req.body._id
    let newName = req.body.name

    try{
        await Movie.findByIdAndUpdate(_id, {
            $set: {
                name: newName
            }
        }).setOptions({ returnDocument: "after" })
        .then(movieModified => {
            res.send(movieModified)
        })
    } catch (error){
        console.log("Error updating movie name", error)
    }
}

MoviesController.deleteMovie = async (req, res) => {
    let _id = req.body._id
    
    try{
        await Movie.findByIdAndDelete(_id)
        .then (movie => {
            res.send({"Message": `La película ${movie.name} se ha eliminado con éxito`})
        })
    } catch (error){
        console.log("Error deleting movie", error)
    }
}

module.exports = MoviesController