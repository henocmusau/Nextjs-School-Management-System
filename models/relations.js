import schoolXDB from "./sequelizeDB";
import { classModel } from "./classes";
import { Student } from "./students";
import { Courses } from "./courses";
import { Teachers } from "./teachers";

classModel.hasMany(Student)
Student.belongsTo(classModel)

schoolXDB.sync({ alter: true })

export { classModel, Student, Courses, Teachers }