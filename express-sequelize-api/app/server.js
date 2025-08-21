import express from "express"

import rotas from "../routes/rotas.js"

const app = express()

app.use(express.json())

app.use(rotas)

app.listen(3000,()=>{
    console.log('rodando na porta 3000')
})