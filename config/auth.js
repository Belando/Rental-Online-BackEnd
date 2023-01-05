
module.exports = {
    SECRET: process.env.AUTH_SECRET || "zA27PUHiLoTT",
    EXPIRES: process.env.AUTH_EXPIRES || "24H",
    ROUNDS: process.env.AUTH_ROUNDS || 10
}