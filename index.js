
const express = require("express")
const app = express ()
const dbconnect = require ("./db/dbconnect")

const PORT = 5500

app.use(express.json())

const router = require("./router")

const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(router)

app.listen(PORT, () => console.log(`Node server levantado en http://localhost:${PORT}`))

dbconnect()