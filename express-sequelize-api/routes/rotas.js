import { Router } from "express"
import ClientClass from "../models/clientClass.js"

import UserControllers from "../controllers/UserControllers.js"


const router = Router()

router.post("/UserPost",UserControllers.insertClient)

router.delete('/deleteUser/:id',UserControllers.deleteUser)

router.get('/getClient/:id',UserControllers.getUserByPk)

router.get("/findAllUsers",async (req,res)=>{

    const instace =  new ClientClass()

    const users = await  instace.findAllUsers()

    res.json(users)

})

router.patch("/updateUser/:id",UserControllers.UpdatePatchUser)

export default router