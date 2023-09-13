import schoolXDB from "./sequelizeDB";
import { DataTypes } from "sequelize";


export const classModel = schoolXDB.define('class', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    label: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})
