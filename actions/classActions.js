'use server'

import { classModel } from '@/models/relations'

export async function getAllClasses() {
    try {
        const classes = await classModel.findAll()
        return classes
    } catch (error) {
        console.log('Erreur classes')
        return { message: 'Une erreur est survenue !' }
    }
}

export async function createNewClass(formData) {
    try {
        const newClass = await classModel.create({
            label: formData.get('label'),
        })
        console.log(newClass)
        return { status: 1, message: 'Enregistré avec succes !' }
    } catch (error) {
        console.log(error)
        return { status: 0, message: 'Une erreur est survenue', error }
    }
}