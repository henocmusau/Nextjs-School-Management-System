import StudentsList from '@/components/StudentsList'
import StudentsStats from '@/components/StudentsStats'
import React from 'react'
import { getAllStudents } from "@/actions/serverActions"
import NewStudentModal from '@/components/NewStudentModal'

export const metadata = {
    title: 'Elèves - SchoolX',
}

export default async function Students({ searchParams }) {
    const students = await getAllStudents()

    return (
        <div className='w-full h-full flex flex-col px-8'>
            <StudentsStats />
            {students && students.length > 0 ?
                <StudentsList students={JSON.parse(JSON.stringify(students))} />
                : null
            }
            <NewStudentModal />
        </div>
    )
}
