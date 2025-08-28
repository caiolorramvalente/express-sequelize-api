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

export default router