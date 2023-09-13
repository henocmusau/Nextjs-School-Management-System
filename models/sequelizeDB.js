import { Sequelize } from "sequelize";
import mysql2 from 'mysql2'

const schoolXDB = new Sequelize(
    process.env.DB_NAME_DEV,
    process.env.DB_USERNAME_DEV,
    process.env.DB_PASSWORD_DEV,
    {
        host: process.env.DB_HOST_DEV,
        port: process.env.DB_PORT_DEV,
        dialect: 'mysql',
        dialectModule: mysql2
    }
)

export default schoolXDB