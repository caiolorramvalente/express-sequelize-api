
import ServiceClient from "../service/ServiceClient.js"
export default{

    async insertClient(req,res){

        const {nome,email,senha} =  req.body

        if(!nome || !email || !senha){

            return res.status(400).json("não foram inserido todos os campos necessarios !")

        }

        const Result =  await ServiceClient.insertClient({nome,email,senha})

         return res.status(201).json({Usuario:Result})


    

    },
    async deleteUser(req,res){

        const id_client  = Number(req.params.id)

        const result = await ClientClass.deleteClient(id_client)

        return res.status(200).json(result)

    },
    async getUserByPk(req,res){
        const id = req.params.id
        
            const client = await ServiceClient.findUserByPk(id)

            return res.status(200).json({user:client})

    },
    async UpdatePatchUser(req,res){

    const id = req.params.id

    const {nome , email} = req.body

    const object = {}

    if(nome) object.nome = nome

    if(email) object.email = email

    console.log(Object.keys(object).length)

    if(Object.keys(object).length === 0){
         return res.status(400).json("nenhum campo foi atualizado")
    }

    try{
        const result  = await ServiceClient.serviceUpadatePatch(id,object)

        
    return res.status(200).json(result)
    }catch(erro){
        console.log("log do catch",erro.message)
        if(erro.message.includes('email ja utilizado!')){
            return res.status(400).json({message:"esse email ja foi cadastrado no sistema!,por favor utilize outro"})

        }

    }


    } , async getAllusers(req,res){

        const users = await ServiceClient.getAllClients()

        return res.status(200).json({usuarios:users})


    }

}