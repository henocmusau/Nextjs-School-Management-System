import schoolXDB from "./sequelizeDB";
import { DataTypes } from "sequelize";

export const Courses = schoolXDB.define('course', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    label: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, { timestamps: false })
