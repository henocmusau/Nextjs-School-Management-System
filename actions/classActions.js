'use server'

import { classModel } from '@/models/relations'
import { revalidatePath } from 'next/cache'

export async function getAllClasses() {
    try {
        const classes = await classModel.findAll()
        return JSON.parse(JSON.stringify(classes))
    } catch (error) {
        return { message: 'Une erreur est survenue !', error }
    }
}

export async function createNewClass(formData) {
    try {
        const newClass = await classModel.create({
            label: formData.get('label'),
        })
        revalidatePath('/classes')
        return { status: 1, message: 'Enregistré avec succes !' }
    } catch (error) {
        return { status: 0, message: 'Une erreur est survenue', error }
    }
}