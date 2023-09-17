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
        return JSON.parse(JSON.stringify(users))
    } catch (error) {
        return { error: true, message: 'Une erreur est survenue TTT' }
    }
}

export async function getStudentsPerClass(id) {
    try {
        const data = await Student.findAll({
            where: {
                classId: id
            }
        })
        return JSON.parse(JSON.stringify(data))
    } catch (error) {
        return { error: true, message: 'Une erreur est survenue TTT' }
    }
}

export async function createNewStudent(formData) {
    try {
        await Student.create({
            lastName: formData.get('lastName'),
            middleName: formData.get('middleName'),
            firstName: formData.get('firstName'),
            classId: formData.get('class'),
        })
        revalidatePath('/students')
        return { status: 1, message: 'Enregistré avec succes XX !' }
    } catch (error) {
        return { error: true, message: 'Une erreur est survenue TTT' }
    }
}