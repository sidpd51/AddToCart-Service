import express from 'express'
import { PORT } from './config/serverConfig'
const app = express()


app.listen(PORT, ()=>{
    console.log(`server running on port no: ${PORT}`)
})