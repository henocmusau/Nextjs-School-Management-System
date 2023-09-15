'use client'
import React from 'react'
import StudentRow from './StudentRow'
import StudentsFilters from './StudentsFilters'
import useStudentsFilter from '@/hooks/useStudentsFilter'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'

export default function StudentsList({ students, classes }) {
    const [query, select, handleChange, handleSelectChange, filteredStudents] = useStudentsFilter({ students })

    return (
        <>
            <StudentsFilters classes={classes} query={query} select={select} handleChange={handleChange} handleSelectChange={handleSelectChange} />
            <SectionWrapper>
                <SectionTitle title='Liste des élèves' />
                <table className='text-left w-full border-collapse mt-4'>
                    <thead>
                        <tr>
                            <th className='pl-4 pb-2'>Nom complet</th>
                            <th>Classe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents?.map(student => (
                            <StudentRow key={student?.id} student={student} />
                        ))}
                    </tbody>
                </table>
            </SectionWrapper>
        </>
    )
}
