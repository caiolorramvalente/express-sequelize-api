
import RepositoryClient from "../repository/RepositoryClient.js"

class ServiceClient{

     static async insertClient(User){

        // regra de negocio
        const result = await ClientModel.create(User)

        return result
        


    }
    static async findUserByPk(id){
        
        const Usuario = await RepositoryClient.findUserByPk(id)

        return Usuario
        
    }
    static async getAllClients(){

        const result =  await RepositoryClient.repoGetAllClient()
        
        return result

    }
    static async serviceUpadatePatch(id,obj){
        console.log("service: ",obj)

        const emailDuplicado = await RepositoryClient.findByEmail(obj.email)

        if(!emailDuplicado){

            throw new Error('email ja utilizado!,por favor utilize outro')
        }

        const UpdateUser = await RepositoryClient.repoUpdatePatchUser(id,obj)

        return UpdateUser

    }
}
export default ServiceClient