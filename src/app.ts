import express, { Application, json } from 'express'
import { startDatabase } from "./database/connection";
import {createDeveloper, createDeveloperExtraInformation, readAllDevelopers, readDeveloperWithId} from './logics/developers.logics'
import {ensureEmailExists, ensureIdExists} from './middlewares/middlewares.developers'

const app: Application = express()
app.use(express.json())

app.post('/developers', ensureEmailExists,createDeveloper)
app.get('/developers', readAllDevelopers)
app.get('/developers/:id',ensureIdExists, readDeveloperWithId)
app.post('/developers/:id/infos',ensureIdExists, createDeveloperExtraInformation)

app.listen('3000', async () => {
    console.log('Server is running')
    await startDatabase()
})