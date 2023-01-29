
module.exports = async (req, res, next) => {
    console.log(req.User)
    if (req.User && req.User.rol == "admin") {
        next();
    } else {
        res.status(401).send("Forbidden access")
    }
}

