import ClientModel from "./ClientModel.js";

class ClientClass {

    constructor(User){
        this.nome=User.nome,
        this.email=User.email,
        this.senha=User.senha
    }

    async insertClient(){

        const result = await ClientModel.create({nome:this.nome,email:this.email,senha:this.senha})

        return result


    }
}
export default ClientClass
