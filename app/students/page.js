import StudentsList from '@/components/StudentsList'
import StudentsStats from '@/components/StudentsStats'
import React from 'react'
import { getAllStudents } from "@/actions/studentsActions"
import NewStudentModal from '@/components/NewStudentModal'
import { getAllClasses } from '@/actions/classActions'
import Link from 'next/link'

export const metadata = {
    title: 'Elèves - SchoolX',
}

export default async function Students({ searchParams }) {
    const students = await getAllStudents()
    const classes = await getAllClasses()

    return (
        <div className='w-full relative h-full flex flex-col px-3 md:px-8'>
            <StudentsStats students={students} />
            {students && students.length > 0 ?
                <StudentsList students={students} classes={classes} />
                : <p>Aucun (e) élève n'a été enregistré. <Link className='underline cursor-pointer font-semibold'>veuillez cliquer ici pour commencer l'enregistrement</Link> </p>
            }
            <NewStudentModal classes={classes} />
        </div>
    )
}
