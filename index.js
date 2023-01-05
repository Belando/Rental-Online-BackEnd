
const express = require("express")

const app = express ()

const dbconnect = require ("./db/dbconnect")

const PORT = 5500

app.use(express.json())

const router = require("./router")

app.use(router)

app.listen(PORT, () => console.log(`Node server levantado en http://localhost:${PORT}`))

dbconnect()