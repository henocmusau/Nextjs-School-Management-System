import StudentsList from '@/components/StudentsList'
import StudentsStats from '@/components/StudentsStats'
import React from 'react'
import { getAllStudents } from "@/actions/studentsActions"
import NewStudentModal from '@/components/NewStudentModal'
import { getAllClasses } from '@/actions/classActions'

export const metadata = {
    title: 'Elèves - SchoolX',
}

export default async function Students({ searchParams }) {
    const students = await getAllStudents()
    const classes = await getAllClasses()

    return (
        <div className='w-full h-full flex flex-col px-8'>
            <StudentsStats />
            {students && students.length > 0 ?
                <StudentsList students={JSON.parse(JSON.stringify(students))} />
                : null
            }
            <NewStudentModal classes={JSON.parse(JSON.stringify(classes))} />
        </div>
    )
}
