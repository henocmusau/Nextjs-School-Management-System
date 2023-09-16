import schoolXDB from "./sequelizeDB";
import { DataTypes } from "sequelize";

export const Teachers = schoolXDB.define('teacher', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
