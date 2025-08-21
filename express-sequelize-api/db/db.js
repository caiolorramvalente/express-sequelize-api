import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sequelize = new Sequelize({
    dialect:PostgresDialect,
    database:"postgres",
    user:"postgres",
    password:"senai",
    host:"localhost",
    port:5432,
})
 console.time("conexão")
try{
    await sequelize.authenticate()
    console.timeEnd('conexão')
    console.log("conexão estabelecida")

}catch(error){
    console.log("algun erro :",error)

}