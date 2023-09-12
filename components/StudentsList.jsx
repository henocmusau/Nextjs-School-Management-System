'use client'
import React from 'react'
import StudentRow from './StudentRow'
import StudentsFilters from './StudentsFilters'
import useStudentsFilter from '@/hooks/useStudentsFilter'
import { useSearchParams } from 'next/navigation'

export default function StudentsList({ students }) {
    const [query, select, handleChange, handleSelectChange, filteredStudents] = useStudentsFilter({ students })
    const params = useSearchParams()

    return (
        <>
            <StudentsFilters query={query} select={select} handleChange={handleChange} handleSelectChange={handleSelectChange} />
            <section className='bg-white text-slate-900 rounded-b-xl shadow-lg w-full px-8 py-8'>
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
            </section>
        </>
    )
}
