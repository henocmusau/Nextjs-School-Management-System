import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function ClassesList({ classes }) {
    return (
        <SectionWrapper>
            <h2 className='pb-4 font-semibold text-lg ml-4 mb-4 border-b-4 border-slate-200'>Liste des élèves</h2>
            <table className='text-left w-full border-collapse mt-4'>
                <thead>
                    <tr>
                        <th className='pl-4 pb-2'>Label</th>
                    </tr>
                </thead>
                <tbody>
                    {classes?.map(c => (
                        <tr key={c?.id} className='even:bg-white odd:bg-sky-50 dark:even:bg-secondaryDark dark:odd:bg-primaryDark'>
                            <td className='py-2 pl-4 uppercase'>{c?.label}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </SectionWrapper>
    )
}
