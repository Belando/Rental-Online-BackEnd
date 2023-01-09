# Rental-Online-Reto
Proyecto Backend: Buscador de Películas

Funciones de JavaScript para realizar endpoints en base de datos de mongodb, usando Docker y Postman para el CRUD de usuarios, series y películas. Es necesario estar logeado para poder realizar estas operaciones. 


Dependencias usadas: 

bcrypt, dotenv, express, jsonwebtoken, mongoose, nodemon


Endpoints Usuario:

Obtener todos los usuarios: http://localhost:5500/users/ GET
Login usuario: http://localhost:5500/users/login POST
Añadir usuario: http://localhost:5500/users/newuser POST
Modificar usuario: http://localhost:5500/users/modify PUT
Borrar usuario: http://localhost:5500/users/delete DELETE
Obtener usuario por nombre: http://localhost:5500/users/name POST
Obtener usuario por ID: http://localhost:5500/users/profile/:id GET
Borrar usuario con isAdmin: http://localhost:5500/users//admin/deleteuser DELETE


Endpoints Peliculas:

Obtener todas las películas: http://localhost:5500/movies GET
Añadir película: http://localhost:5500/movies/new POST
Modificar película: http://localhost:5500/movies/modify PUT
Borrar película: http://localhost:5500/movies/delete DELETE
Buscar por título: http://localhost:5500/movies/tittle POST
Buscar por género: http://localhost:5500/movies/genre POST
Películas en cartelera: http://localhost:5500/movies/theater/yes GET
Películas no en cartelera: http://localhost:5500/movies/theater/no GET
Buscar por ID: http://localhost:5500/movies/:_id GET
Listado por Rating: http://localhost:5500/movies/rating/top POST


Endpoints Series:

Obtener todas las series: http://localhost:5500/series GET
Añadir serie: http://localhost:5500/series/new POST
Modificar serie: http://localhost:5500/series/modify PUT
Borrar serie: http://localhost:5500/series/delete DELETE
Buscar por título: http://localhost:5500/series/tittle POST
Buscar por género: http://localhost:5500/series/genre POST
Series en emisión: http://localhost:5500/series/weekly GET
Series finalizadas: http://localhost:5500/series/finished GET
Buscar por ID: http://localhost:5500/series/:_id GET
Listado por Rating: http://localhost:5500/series/rating/top POST


Errores conocidos y mejoras futuras:

Problema al autentificar con isAdmin y auth: No me valida el token en Postman
Endpoints de altas valoraciones no funcionan correctamente: he intentado probar con .slice, .sort para que me devuelva listado de las 5 mejores y no funciona.
Error al implementar el axios de la database de películas: todos los datos han sido introducidos a mano.

Francisco Belando Carrión - GeeksHub Academy
