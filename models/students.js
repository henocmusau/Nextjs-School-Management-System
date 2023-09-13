import { DataTypes } from "sequelize";
import schoolXDB from "./sequelizeDB";

export const Student = schoolXDB.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    middleName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: ''
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.lastName} ${this.middleName} ${this.firstName}`
        }
    },
})

