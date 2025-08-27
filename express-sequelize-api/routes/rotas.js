import { Router } from "express"
import ClientClass from "../models/clientClass.js"


const router = Router()

router.post("/UserPost",async(req,res)=>{

    const user = req.body

    const result = new ClientClass(user)
    
    const instace =  await result.insertClient()
    console.log(instace)

    res.json(instace)

})

export default router