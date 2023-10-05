import React from 'react'
import { getStudentsPerClass } from '@/actions/studentsActions'
import Empty from '@/components/Empty'
import StudentsList from '@/components/StudentsList'

export default async function page({ params }) {
    const students = await getStudentsPerClass(params.id)

    return (
        <div className='w-full relative h-full flex flex-col px-3 md:px-8'>
            {students && students.length > 0 ?
                <StudentsList students={students} isClass={true} />
                : <Empty
                    text="Aucun (e) élève n'a été enregistré pour cette classe. Cliquez sur le bouton ci-dessous pour débuter l'enregistrement."
                    link='students'
                />
            }
        </div>
    )
}
