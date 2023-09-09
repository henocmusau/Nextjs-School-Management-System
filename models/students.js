import { Sequelize, DataType, DataTypes } from "sequelize";
import mysql2 from 'mysql2'

export const schoolXDB = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: 3306,
        dialect: 'mysql',
        dialectModule: mysql2
    }
)

export const Student = schoolXDB.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.lastName} ${this.middleName} ${this.firstName}`
        }
    }
})

// await schoolXDB.sync({ force: true })
