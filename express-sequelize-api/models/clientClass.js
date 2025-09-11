import ClientModel from "./ClientModel.js";

class ClientClass {

    constructor(User={}){
        this.nome=User.nome,
        this.email=User.email,
        this.senha=User.senha
    }

    async insertClient(){

        const result = await ClientModel.create({nome:this.nome,email:this.email,senha:this.senha})

        return result


    }

    static async deleteClient(id){

        const result = await ClientModel.destroy({
            where:{
                id_client:id
            }

        })
        return result
        
    }

    async findUserByPk(id){

        const user = await ClientModel.findOne({where:{
            id_client:id
        }})
        return user

    }
    async findAllUsers(){

        const users = await ClientModel.findAll()

        return users

    }

    async updateUserPatch(id,Object){

        const user = await ClientModel.findByPk(id)

       if(!user){
        return "o usuario não foi encontrado"

       }

        const result = await user.update(Object)

        return result

        
    }
}
export default ClientClass
