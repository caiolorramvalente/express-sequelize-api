import ClientClass from "../models/clientClass.js";

export default{

    async insertClient(req,res){

        const {nome,email,senha} =  req.body

        if(!nome || !email || !senha){

            return res.status(400).json("não foram inserido todos os campos necessarios !")

        }

        const result = new ClientClass({nome,email,senha})

         const User = await result.insertClient()

         return res.status(201).json({User})


    

    },
    async deleteUser(req,res){

        const id_client  = Number(req.params.id)

        const result = await ClientClass.deleteClient(id_client)

        return res.status(200).json(result)

    },
    async getUserByPk(req,res){
        const id = req.params.id
        
            const client = new ClientClass()
        
            const userByPk = await client.findUserByPk(id)
        
            res.status(200).json(userByPk)
        

    },
    async UpdatePatchUser(req,res){

    const id = req.params.id

    const {nome , email} = req.body

    const object = {}

    if(nome) object.nome = nome

    if(email) object.email = email

    console.log(Object.keys(object).length)

    if(Object.keys(object).length === 0){
         return res.json("nenhum campo foi atualizado")
    }

    const instace = new ClientClass()

    const result = await instace.updateUserPatch(id,object)
        
    return res.status(200).json(result)


    }

}