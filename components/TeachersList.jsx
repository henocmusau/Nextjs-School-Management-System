import React from 'react'
import SectionWrapper from './SectionWrapper'
import TableRow from './TableRow'
import SectionTitle from './SectionTitle'

export default function TeachersList({ teachers }) {
    return (
        <SectionWrapper>
            <SectionTitle title='Liste des promotions' />
            <table className='text-left w-full border-collapse mt-4 bg-transparent'>
                <thead>
                    <tr>
                        <th className='pl-4 pb-2'>Nom complet</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers?.map(t => (
                        <TableRow key={t?.id}>
                            <td className='py-2 pl-4 uppercase'>{t?.fullName}</td>
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </SectionWrapper>
    )
}
