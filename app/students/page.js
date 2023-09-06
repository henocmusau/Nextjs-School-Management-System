import StudentsFilters from '@/components/StudentsFilters'
import StudentsList from '@/components/StudentsList'
import StudentsStats from '@/components/StudentsStats'
import React from 'react'

export const metadata = {
    title: 'Elèves - SchoolX',
}

export default function Students() {
    return (
        <div className='w-full h-full flex flex-col px-8'>
            <StudentsStats />
            <StudentsFilters />
            <StudentsList />
        </div>
    )
}
