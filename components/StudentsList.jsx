'use client'
import React from 'react'
import StudentRow from './StudentRow'
import StudentsFilters from './StudentsFilters'
import useStudentsFilter from '@/hooks/useStudentsFilter'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'

export default function StudentsList({ students, classes, isClass }) {
    const [query, select, handleChange, handleSelectChange, filteredStudents] = useStudentsFilter({ students })
    const classLabel = isClass ? 'Liste des élèves de la ' + students[0].class.label : 'Liste des élèves'

    return (
        <>
            <StudentsFilters
                classes={!isClass ? classes : null}
                query={query}
                select={select}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
            />
            <SectionWrapper>
                <SectionTitle title={classLabel} />
                <table className='text-left w-full border-collapse mt-4'>
                    <thead>
                        <tr>
                            <th className='pl-4 pb-2'>Nom complet</th>
                            {!isClass ? <th>Classe</th> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents?.map(student => (
                            <StudentRow key={student?.id} student={student} isClass={isClass} />
                        ))}
                    </tbody>
                </table>
            </SectionWrapper>
        </>
    )
}
