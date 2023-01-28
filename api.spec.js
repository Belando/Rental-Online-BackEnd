const request = require("supertest")
const server = require ("./index")
const mongoose = require ("mongoose")



describe("Test API", () => {
    test("test", async () => {
        const res = await request(server).get("/users")
        expect(!!res.body).toBe(true)
        // console.log (res)
    })
})

afterAll(async () => {
    server.close()
    console.log("patata")
    await mongoose.disconnect()
    console.log("patata2")
})