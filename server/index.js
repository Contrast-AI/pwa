import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import DataDAO from "./dao/dataDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

// allow 20 connections at one time
MongoClient.connect(
    process.env.PWACONTRASTAI_DB_URI,
    {
        maxPoolSize: 20,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
}).then(async client => {
    //this is how you get initial reference to data collection in the database
    await DataDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})