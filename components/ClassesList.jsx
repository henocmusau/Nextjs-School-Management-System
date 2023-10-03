import React from 'react'
import SectionWrapper from './SectionWrapper'
import TableRow from './TableRow'
import SectionTitle from './SectionTitle'

export default function ClassesList({ classes }) {
    return (
        <SectionWrapper>
            <div>
                <SectionTitle title='Liste des promotions' />
            </div>
            <table className='text-left w-full border-collapse mt-4 bg-transparent'>
                <thead>
                    <tr>
                        <th className='pl-4 pb-2'>Label</th>
                    </tr>
                </thead>
                <tbody>
                    {classes?.map(c => (
                        <TableRow key={c?.id}>
                            <td className='py-2 pl-4 uppercase'>{c?.label}</td>
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </SectionWrapper>
    )
}
