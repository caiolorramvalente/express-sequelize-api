import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
import path from "path"
dotenv.config({
    path:path.resolve('env/.env')
})
console.log(process.env.NAME)

const sequelize = new Sequelize({
    dialect:process.env.DIALECT,
    database:process.env.DATABASE,
    username:process.env.NAME,
    password:process.env.PASSWORD,  
    host:process.env.HOST,
    port:process.env.PORTDB
})

export default sequelize