import { Router } from "express"
import UserControllers from "../controllers/UserControllers.js"


const router = Router()

router.post("/UserPost",UserControllers.insertClient)

router.delete('/deleteUser/:id',UserControllers.deleteUser)

router.get('/getClient/:id',UserControllers.getUserByPk)

router.get("/findAllUsers",UserControllers.getAllusers)

router.patch("/updateUser/:id",UserControllers.UpdatePatchUser)

export default router