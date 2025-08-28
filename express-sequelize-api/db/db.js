import { Sequelize } from 'sequelize';
import { PostgresDialect } from '@sequelize/postgres';

const sequelize = new Sequelize({
    dialect:"postgres",
    database:"postgres",
    username:"postgres",
    password:"180607",  
    host:"localhost",
    port:5432,
})

export default sequelize