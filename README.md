# Rental-Online-Reto
Proyecto Backend: Buscador de Películas

Funciones de JavaScript para realizar endpoints en base de datos de mongodb, usando Docker y Postman para el CRUD de usuarios, series y películas. Es necesario estar logeado para poder realizar estas operaciones menos la obtención de todas las películas, series o usuarios. Para todo lo demás usamos middlewares isAdmin y Auth para dar seguridad en las acciones de nuestra base de datos.


Dependencias usadas: bcrypt, dotenv, express, jsonwebtoken, mongoose, nodemon




ENDPOINTS USUARIOS:



Obtener todos los usuarios: http://localhost:5500/users/ GET -> No es necesario estar logeado.

Login usuario: http://localhost:5500/users/login POST -> No es necesario estar logeado.

Añadir usuario: http://localhost:5500/users/newuser POST -> No es necesario estar logeado.

Modificar usuario: http://localhost:5500/users/modify PUT -> Es necesario estar logeado. Y sólo puedes modificar el usuario que está logeado a sí mismo.

Borrar usuario: http://localhost:5500/users/delete DELETE -> Es necesario estar logeado. Y sólo puedes eliminar el usuario que está logeado a sí mismo.

Obtener usuario por nombre: http://localhost:5500/users/name POST -> Es necesario estar logeado y ser Admin.

Obtener usuario por ID: http://localhost:5500/users/profile/:id GET -> Es necesario estar logeado y ser Admin.

Borrar usuario con isAdmin: http://localhost:5500/users//admin/deleteuser DELETE -> Es necesario estar logeado y ser Admin.




ENDPOINTS PELÍCULAS:



Obtener todas las películas: http://localhost:5500/movies GET -> No es necesario estar logeado.

Añadir película: http://localhost:5500/movies/new POST -> Es necesario estar logeado y ser Admin.

Modificar película: http://localhost:5500/movies/modify PUT -> Es necesario estar logeado y ser Admin.

Borrar película: http://localhost:5500/movies/delete DELETE -> Es necesario estar logeado y ser Admin.

Buscar por título: http://localhost:5500/movies/tittle POST  -> Es necesario estar logeado.

Buscar por género: http://localhost:5500/movies/genre POST  -> Es necesario estar logeado.

Películas en cartelera: http://localhost:5500/movies/theater/yes GET  -> Es necesario estar logeado.

Películas no en cartelera: http://localhost:5500/movies/theater/no GET  -> Es necesario estar logeado.

Buscar por ID: http://localhost:5500/movies/:_id GET  -> Es necesario estar logeado.

Listado por Rating: http://localhost:5500/movies/rating/:rank GET  -> Es necesario estar logeado.


 

ENDPOINTS SERIES:



Obtener todas las series: http://localhost:5500/series GET -> No es necesario estar logeado.

Añadir serie: http://localhost:5500/series/new POST -> Es necesario estar logeado y ser Admin.

Modificar serie: http://localhost:5500/series/modify PUT -> Es necesario estar logeado y ser Admin.

Borrar serie: http://localhost:5500/series/delete DELETE -> Es necesario estar logeado y ser Admin.

Buscar por título: http://localhost:5500/series/tittle POST -> Es necesario estar logeado.

Buscar por género: http://localhost:5500/series/genre POST -> Es necesario estar logeado.

Series en emisión: http://localhost:5500/series/weekly GET -> Es necesario estar logeado.

Series finalizadas: http://localhost:5500/series/finished GET -> Es necesario estar logeado.

Buscar por ID: http://localhost:5500/series/:_id GET -> Es necesario estar logeado.

Listado por Rating: http://localhost:5500/series/rating/:rank GET -> Es necesario estar logeado.


ERRORES CONOCIDOS Y MEJORAS PENDIENTES:

Mejora de endpoints de altas valoraciones para que el listado se limite a las 5 mejores y no a las que sean más altas que cierto Rating.
Error al implementar el axios de la database de películas: todos los datos han sido introducidos a mano.

ERRORES CORREGIDOS:

Corregido error al autentificar con isAdmin y auth: funciona en Postman


Francisco Belando Carrión - GeeksHub Academy
