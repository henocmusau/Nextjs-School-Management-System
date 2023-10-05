'use server'
import { Student, classModel } from '@/models/relations'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

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
        throw new Error('une erreur est survenue == getAllStudents')
    }
}

export async function getStudentById(id) {
    try {
        const data = await Student.findOne({
            where: {
                id: parseInt(id, 10)
            }
        })

        if (data === null) {
            throw new Error('Aucune donnée correspondante')
        }
        // console.log(data)
        return JSON.stringify(data)

    } catch (error) {
        throw new Error(error)
        // return new NextResponse({ status: 500 })
    }
}

export async function getStudentsPerClass(id) {
    try {
        const data = await Student.findAll({
            where: {
                classId: id
            },
            include: {
                model: classModel,
                attributes: ['id', 'label']
            },
            order: [['lastName', 'ASC'], ['middleName', 'ASC']]
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