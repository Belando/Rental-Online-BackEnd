
const dbconnect = () => {

    const mongoose = require("mongoose")
    mongoose.set ("strictQuery", true)

    const conn_str = "mongodb+srv://adminFran:PblGWd1JrHmGFeAo@cluster0.de7b7yg.mongodb.net/moviesMadrid?retryWrites=true&w=majority";

    mongoose.connect(
        conn_str,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err) => {
            if (err){
                console.log("Error connecting to database", err);
            }else {
                console.log("mongodb database is connected")
            }
        }
    )
}

module.exports = dbconnect;