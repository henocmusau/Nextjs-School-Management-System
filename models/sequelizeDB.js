import { Sequelize } from "sequelize";
import * as pg from 'pg'

const schoolXDB = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectModule: pg
    }
)

export default schoolXDB