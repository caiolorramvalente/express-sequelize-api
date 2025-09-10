import { Router } from "express"
import ClientClass from "../models/clientClass.js"


const router = Router()

router.post("/UserPost",async(req,res)=>{

    const user = req.body

    const result = new ClientClass(user)
    
    const instace =  await result.insertClient()
    
    res.json(instace)

})
router.delete('/deleteUser/:id',async(req,res)=>{

    const id = req.params.id

    console.log(id)

    const result = ClientClass.deleteClient(id)

    res.json(result)

})
router.get('/getClient/:id',async(req,res)=>{
    const id = req.params.id

    const client = new ClientClass()

    const userByPk = await client.findUserByPk(id)

    res.json(userByPk)


})

router.get("/findAllUsers",async (req,res)=>{

    const instace =  new ClientClass()

    const users = await  instace.findAllUsers()

    res.json(users)

})

router.patch("/updateUser/:id",(req,res)=>{

    const id = req.params.id

    const {nome , email} = req.body

    const object = {}

    if(nome) object.nome = nome

    if(email) object.email = email

    console.log(Object.keys(object).length)

    if(Object.keys(object).length === 0){
         return res.json("nenhum campo foi atualizado")
    }
    res.json("tudo certo 🤡")


})

export default router