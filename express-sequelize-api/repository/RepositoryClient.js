import ClientModel from "../models/ClientModel.js";

class RepositoryClient{


    static async findUserByPk(id){

        const result = await ClientModel.findByPk(id)

        return result

    }
    static async repoGetAllClient(){
        
        const result = await ClientModel.findAll()

        return result
    }
    static async repoUpdatePatchUser(id,obj){
        console.log(id,obj)

        const user = await ClientModel.findByPk(id)//<- Procura o usuario par aser atualizado
        if(!user){
            return "deu paul"

        }

        const newinfosUser = await user.update({
            nome:obj.nome,
            email:obj.email
        })//<-atuliza o usuario ja cadastrado

        return newinfosUser


    }

    static async findByEmail(obj){
        const result = await ClientModel.findOne({
            where:{
                email:obj
            }
        })
        return
    

    }
}

export default RepositoryClient