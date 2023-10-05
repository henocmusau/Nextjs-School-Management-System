import { getStudentById } from '@/actions/studentsActions'
import React from 'react'

export default async function page({ params }) {
    const student = JSON.parse(JSON.stringify(await getStudentById(params.id)))

    return (
        <div>
            {/* Student ID : {params.id} */}
            <div>{student} </div>
        </div>
    )
}
