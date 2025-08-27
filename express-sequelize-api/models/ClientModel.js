import { Model,DataTypes} from "sequelize"
import sequelize from "../db/db.js"

class ClientModel extends Model {}

ClientModel.init({
    id_client:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(200),
        allowNull:true
    },
    senha:{
        type:DataTypes.STRING(150),
        allowNull:true
    }
},{
    sequelize,
    modelName:'client',
    tableName:"client"
    
})

export default ClientModel