import { getAllStudents, getStudentById } from '@/actions/studentsActions'
import { replaceSpecialChars, studentLink } from '@/utils/functions'
import React from 'react'

export default async function page({ params }) {
    const id = params.id.split('-')

    const student = JSON.parse(JSON.stringify(await getStudentById(id[id.length - 1])))

    return (
        <div>
            {/* Student ID : {params.id} */}
            <div>{student} </div>
        </div>
    )
}

export async function generateStaticParams() {
    const students = await getAllStudents()

    return students.map((student) => ({
        id: studentLink(student)
    }))
}