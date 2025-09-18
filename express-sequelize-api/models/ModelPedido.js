import { Model,DataTypes } from "sequelize";
import ClientModel from "./ClientModel.js";
import ModelProduto from "./ModelProduto.js";
import sequelize from "../db/db.js";

class ModelPedido extends Model{}

ModelPedido.init({
    id_pedido:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
   fk_id_client:{
    type:DataTypes.INTEGER,
    references:{
        model:ClientModel,
        key:'id_client'

    }

   },
   fk_id_produto:{
    type:DataTypes.INTEGER,
    references:{
        model:ModelProduto,
        key:'id_produto'
    }
   }


},{
    sequelize,
    tableName:"pedidos",
    modelName:"ModelPedido",
    timestamps:false

})

export default ModelPedido