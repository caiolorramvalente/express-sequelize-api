import sequelize from "../db/db.js";
import { DataTypes, Model } from "sequelize";
import ModelPedido from "./ModelPedido.js";


class ModelProduto extends Model {} 

ModelProduto.init({
    id_produto:{
        type:DataTypes.INTEGER,
        allowNull:false, 
        primaryKey:true,
        autoIncrement:true
    },
    fk_id_pedido:{
        type:DataTypes.INTEGER,
        references:{
            model:ModelPedido,
            key:'id_pedido'
        }
    },
    nomeProduto:{
        type:DataTypes.STRING,
        allowNull:false
    },
    quantidade:{
        type:DataTypes.INTEGER,
        allow:false
    },
    precoUnitario:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{
    sequelize,
    timestamps:false,
    tableName:"produtos",
    modelName:"ModelProduto"
}
)

export default ModelProduto