import StudentsFilters from '@/components/StudentsFilters'
import StudentsList from '@/components/StudentsList'
import StudentsStats from '@/components/StudentsStats'
import React from 'react'
import { getAllStudents } from "@/actions/serverActions"

export const metadata = {
    title: 'Elèves - SchoolX',
}

export default async function Students() {
    const students = await getAllStudents()
    console.log(students)

    return (
        <div className='w-full h-full flex flex-col px-8'>
            <StudentsStats />
            <StudentsFilters />
            <StudentsList students={students} />

        </div>
    )
}
