'use server'

import { Courses } from '@/models/relations'
import { revalidatePath } from 'next/cache'

export async function getAllCourses() {
    try {
        const courses = await Courses.findAll()
        return JSON.parse(JSON.stringify(courses))
    } catch (error) {
        return { error: true, message: 'Une erreur est survenue !' }
    }
}

export async function createNewCourse(formData) {
    try {
        await Courses.create({
            label: formData.get('label'),
        })
        revalidatePath('/courses')
        return { status: 1, message: 'Enregistré avec succes !' }
    } catch (error) {
        return { error: true, message: 'Une erreur est survenue' }
    }
}