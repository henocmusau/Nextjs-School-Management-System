import { revalidatePath } from 'next/cache'
import { Teachers } from "@/models/relations"

export async function getAllTeachers() {
    try {
        const datas = await Teachers.findAll()
        return JSON.parse(JSON.stringify(datas))
    } catch (error) {
        return { error: true, message: 'Une erreur est survenue TTT', error: error }
    }
}

export async function createNewTeacher(formData) {
    try {
        await Teachers.create({
            lastName: formData.get('lastName'),
            middleName: formData.get('middleName'),
            firstName: formData.get('firstName'),
        })
        revalidatePath('/teachers')
        return { status: 1, message: 'Enregistré avec succes XX !' }
    } catch (error) {
        return { error: true, message: 'Une erreur est survenue TTT', error: error }
    }
}