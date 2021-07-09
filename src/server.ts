import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import DbConnection from './database/dbConnection'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

console.log('\x1b[33m-Starting servers -------------------')

app.listen(process.env.PORT || 3333, () => {
    console.log(`\x1b[32m-Server express started on port 3333. \x1b[0m`)
}).on('error', (error: string) => {
    console.log(`\x1b[31m-Error connecting to express server: ${error} \x1b[0m`)
})

DbConnection.mongodbConnection().then(() => {
    console.log(`\x1b[32m-Server MongoDB started. \x1b[0m`)
}).catch((error: string) => {
    console.log(`\x1b[31m-Error when stablishing database connection MongoDB: ${error} \x1b[0m`)
})