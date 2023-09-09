import { Student } from '@/models/students'

export async function getAllStudents() {
    try {
        const users = await Student.findAll()
        // console.log(users)
        return users
    } catch (error) {
        return 'Une erreur est survenue'
    }
}