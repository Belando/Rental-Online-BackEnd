
const Movie = require("../models/movie")

const MoviesController = {}

MoviesController.getAllMovies = async (req, res) => {

    try {
        let movies = await Movie.find({})

        if (movies.length > 0) {
            res.send(movies)
        } else {
            res.send({ "Msg": "Lo sentimos, no hemos encontrado ninguna película." })
        }
    } catch (error) {
        console.log(error)
    }
}

MoviesController.postMoviesByName = async (req, res) => {

    let name = req.body.name
    try {
        let foundMovies = await Movie.find({
            name: name
        })
        if (foundMovies.length === 0) {
            res.send(`La película ${name} no se ha encontrado`)
        } else {
            res.send(foundMovies)
        }
    } catch (error) {
        console.log(error)
    }
}

MoviesController.postMoviesByGenre = async (req, res) => {

    let genre = req.body.genre
    try {
        let foundMovies = await Movie.find({
            genre: genre
        })
        if (foundMovies.length === 0) {
            res.send(`El género ${genre} no se ha encontrado`)
        } else {
            res.send(foundMovies)
        }
    } catch (error) {
        console.log(error)
    }
}

MoviesController.getMoviesByTheater = async (req, res) => {

    try {
        let theaterMovies = await Movie.find({
            theater: "En cines"
        })
        if (theaterMovies.length === 0) {
            res.send("No hay películas en el cine")
        } else {
            res.send(theaterMovies)
        }
    } catch (error) {
        console.log(error)
    }
}

MoviesController.getMoviesByNotTheater = async (req, res) => {

    try {
        let notTheaterMovies = await Movie.find({
            theater: "No en cines"
        })
        if (notTheaterMovies.length === 0) {
            res.send("Ha ocurrido un error")
        } else {
            res.send(notTheaterMovies)
        }
    } catch (error) {
        console.log(error)
    }
}

MoviesController.getMovieById = async (req, res) => {

    try {
        let moviesId = await Movie.find({
            _id: req.params._id
        })
        if (moviesId.length === 0) {
            res.send("No hay ninguna serie con esa ID")
        } else {
            res.send(moviesId)
        }
    } catch (error) {
        console.log(error)
    }
}

MoviesController.postMovieByHighRating = async (req, res) => {

    try {
        const rank = req.body.rank
        const foundMovies = await Movie.find({
            rank : rank
        })
        if(rank >= 80){
            res.send(foundMovies)
        }else{
            res.send("Error")
        }
    } catch (error) {
        console.log(error);
    }
}

MoviesController.newMovie = async (req, res) => {

    try {
        let movie = await Movie.create({
            name: req.body.name,
            year: req.body.year,
            duration: req.body.duration,
            rank: req.body.rank,
            genre: req.body.genre,
            theater: req.body.theater
        })
        if (movie?.name) {
            res.send({ "Msg": `La película ${movie.name} se ha añadido con éxito` })
        }
    } catch (error) {
        console.log(error)
    }
}

MoviesController.updateMovie = async (req, res) => {

    let _id = req.body._id
    let newName = req.body.name
    let newDuration = req.body.duration
    let newRank = req.body.rank
    let newGenre = req.body.genre
    let newYear = req.body.year
    let newTheater = req.body.theater

    try {
        let result = await Movie.findByIdAndUpdate(_id, {
            $set: {
                name: newName,
                year: newYear,
                genre: newGenre,
                rank: newRank,
                duration: newDuration,
                theater: newTheater
            }
        }).setOptions({ returnDocument: "after" })

        if (result?.name) {
            res.send(result)
        }
    } catch (error) {
        console.log(error)
    }
}

MoviesController.deleteMovie = async (req, res) => {
    let _id = req.body._id

    try {
        let movie = await Movie.findByIdAndDelete(_id)
        res.send({ "Message": `La película ${movie.name} se ha eliminado con éxito` })
    } catch (error) {
        console.log("Error borrando la película", error)
    }
}

module.exports = MoviesController