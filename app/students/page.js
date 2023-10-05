import StudentsList from '@/components/StudentsList'
import StudentsStats from '@/components/StudentsStats'
import React from 'react'
import { getAllStudents } from "@/actions/studentsActions"
import NewStudentModal from '@/components/NewStudentModal'
import { getAllClasses } from '@/actions/classActions'
import Empty from '@/components/Empty'

export const metadata = {
    title: 'Elèves - SchoolX',
}

export default async function Students() {
    const students = await getAllStudents()
    const classes = await getAllClasses()

    return (
        <div className='w-full relative h-full flex flex-col px-3 md:px-8'>
            {students && students.length > 0 ?
                <>
                    <StudentsStats students={students} />
                    <StudentsList students={students} classes={classes} />
                </>
                : <Empty
                    text="Aucun (e) élève n'a été enregistré. Cliquez sur le bouton ci-dessous pour débuter l'enregistrement."
                    link='students'
                />
            }
            <NewStudentModal classes={classes} />
        </div>
    )
}
