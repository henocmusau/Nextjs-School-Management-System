'use server'
import { Student, classModel } from '@/models/relations'
import { revalidatePath } from 'next/cache'

export async function getAllStudents() {
    try {
        const users = await Student.findAll({
            order: [['createdAt', 'DESC']],
            include: {
                model: classModel,
                attributes: ['id', 'label']
            },
        })
        return users
    } catch (error) {
        return { message: 'Une erreur est survenue !' }
    }
}

export async function createNewStudent(formData) {
    try {
        const newStudent = await Student.create({
            lastName: formData.get('lastName'),
            middleName: formData.get('middleName'),
            firstName: formData.get('firstName'),
            classId: formData.get('class'),
        })
        revalidatePath('/students')
        return { status: 1, message: 'Enregistré avec succes XX !' }
    } catch (error) {
        return { status: 0, message: 'Une erreur est survenue TTT', error }
    }
}