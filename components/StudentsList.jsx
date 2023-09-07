import React from 'react'
import StudentRow from './StudentRow'

export default function StudentsList() {
    return (
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
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                    <StudentRow />
                </tbody>
            </table>
        </section>
    )
}
