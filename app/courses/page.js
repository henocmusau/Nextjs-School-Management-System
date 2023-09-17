import React from 'react'
import { getAllCourses } from '@/actions/coursesActions'
import CoursesList from '@/components/CoursesList'
import NewCourseModal from '@/components/NewCourseModal'
import Empty from '@/components/Empty'

export const metadata = {
    title: 'Cours - SchoolX',
}

export default async function page() {
    const courses = await getAllCourses()

    return (
        <>
            <div className='w-full relative h-full flex flex-col px-3 md:px-8'>
                {courses && courses.length > 0 ?
                    <CoursesList courses={courses} />
                    : <Empty
                        text="Aucun cours n'a été enregistré. Cliquez sur le bouton ci-dessous pour débuter l'enregistrement."
                        link='courses'
                    />
                }
            </div>
            <NewCourseModal />
        </>
    )
}
