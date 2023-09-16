import React from 'react'
import NewTeacherModal from '@/components/NewTeacherModal'
import { getAllTeachers } from '@/actions/teachersActions'

export const metadata = {
    title: 'Professeurs - SchoolX',
}

export default async function page() {
    const teachers = await getAllTeachers
    return (
        <>
            <div>Professeurs</div>
            <NewTeacherModal />
        </>
    )
}
