import React from 'react'
import StudentsStatsItem from './StudentsStatsItem'

export default function StudentsStats() {
    return (
        <section className='flex w-full mt-6 bg-white shadow-lg justify-evenly text-center divide-x-2 divide-slate-200 rounded-3xl p-6'>
            <StudentsStatsItem />
            <StudentsStatsItem />
            <StudentsStatsItem />
        </section>
    )
}
