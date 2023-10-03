import { Sequelize } from "sequelize";
import * as pg from 'pg'

const schoolXDB = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectModule: pg,
        // ssl: true
    }
)

export default schoolXDB