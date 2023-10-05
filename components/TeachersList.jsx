'use client'
import React from 'react'
import SectionWrapper from './SectionWrapper'
import TableRow from './TableRow'
import SectionTitle from './SectionTitle'
import RedirectLink from './RedirectLink'
import useFilterDatas from '@/hooks/useFilterDatas'
import DataFilter from './DataFilter'

export default function TeachersList({ teachers: datas }) {
    const [query, handleChange, filteredDatas] = useFilterDatas({ datas })

    return (
        <>
            <DataFilter query={query} handleChange={handleChange} />
            <SectionWrapper>
                <SectionTitle title='Liste des professeurs' />
                <table className='text-left w-full border-collapse mt-4 bg-transparent'>
                    <thead>
                        <tr>
                            <th className='pl-4 pb-2'>Nom complet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDatas?.map(t => (
                            <TableRow key={t?.id}>
                                <td className='py-2 pl-4 uppercase'>
                                    <RedirectLink id={t.id} label={t.fullName} />
                                </td>
                            </TableRow>
                        ))}
                    </tbody>
                </table>
            </SectionWrapper>
        </>
    )
}
