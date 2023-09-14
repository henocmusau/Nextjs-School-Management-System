import schoolXDB from "./sequelizeDB";
import { classModel } from "./classes";
import { Student } from "./students";


classModel.hasMany(Student)
Student.belongsTo(classModel)

// schoolXDB.sync({ force: true })

export { classModel, Student }