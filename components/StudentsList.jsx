'use client'
import React from 'react'
import StudentRow from './StudentRow'
import StudentsFilters from './StudentsFilters'
import useStudentsFilter from '@/hooks/useStudentsFilter'
import SectionWrapper from './SectionWrapper'

export default function StudentsList({ students }) {
    const [query, select, handleChange, handleSelectChange, filteredStudents] = useStudentsFilter({ students })

    return (
        <>
            <StudentsFilters query={query} select={select} handleChange={handleChange} handleSelectChange={handleSelectChange} />
            <SectionWrapper>
                <h2 className='pb-4 font-semibold text-lg ml-4 mb-4 border-b-4 border-slate-200'>Liste des élèves</h2>
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
