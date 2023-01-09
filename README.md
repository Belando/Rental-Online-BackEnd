# Rental-Online-Reto
Proyecto Backend: Buscador de Películas

Funciones de JavaScript para realizar endpoints en base de datos de mongodb, usando Docker y Postman para el CRUD de usuarios, series y películas. Es necesario estar logeado para poder realizar estas operaciones. 


Dependencias usadas: 

bcrypt, dotenv, express, jsonwebtoken, mongoose, nodemon


Endpoints Usuario:

router.get("/", auth, UsersController.getAllUsers)
router.post("/login", auth, UsersController.loginUser)
router.post("/", auth,UsersController.newUser)
router.put("/", auth, UsersController.updateUser)
router.delete("/", auth, UsersController.deleteUser)
router.post("/name", isAdmin, auth, UsersController.getUsersByName)
router.get("/profile/:_id", auth, UsersController.getUserById)
router.delete("/admin/deleteuser", isAdmin, auth, UsersController.deleteUser)


Endpoints Peliculas

router.get("/", auth, MoviesController.getAllMovies)
router.post("/", auth, MoviesController.postMoviesByName)
router.post("/genre", auth, MoviesController.postMoviesByGenre)
router.get("/theater/yes", auth, MoviesController.getMoviesByTheater)
router.get("/theater/no", auth, MoviesController.getMoviesByNotTheater)
router.get("/:_id", auth, MoviesController.getMovieById)
router.post("/rating/top", auth, MoviesController.postMovieByHighRating)
router.post("/", auth, MoviesController.newMovie)
router.put("/", auth, MoviesController.updateMovie)
router.delete("/", auth, MoviesController.deleteMovie)


Endpoints Series

router.get("/", auth, SeriesController.getAllSeries)
router.post("/", auth, SeriesController.postSeriesByName)
router.post("/genre", auth, SeriesController.postSeriesByGenre)
router.get("/weekly", auth, SeriesController.getSeriesByWeek)
router.get("/finished", auth, SeriesController.getFinishedSeries)
router.get("/:_id", auth, SeriesController.getSeriesById)
router.post("/rating/top", auth, SeriesController.postSeriesByHighRating)
router.post("/", auth, SeriesController.newSerie)
router.put("/", auth, SeriesController.updateSerie)
router.delete("/", auth, SeriesController.deleteSerie)


Errores conocidos y mejoras futuras

Problema al autentificar con isAdmin y auth: No me valida el token en Postman
Endpoints de altas valoraciones no funcionan correctamente: he intentado probar con .slice, .sort para que me devuelva listado de las 5 mejores y no funciona.
Error al implementar el axios de la database de películas: todos los datos han sido introducidos a mano.

Francisco Belando Carrión - GeeksHub Academy
