'use client'

import React from 'react'
import StudentsStatsItem from './StudentsStatsItem'

export default function StudentsStats({ students }) {

    return (
        <section className='flex w-full relative mt-6 bg-secondary/30 dark:bg-secondaryDark/60 shadow-lg justify-evenly text-center divide-x-2 divide-slate-200 dark:divide-secondary/40 rounded-3xl p-6'>
            <StudentsStatsItem stat={students.length} />
            <StudentsStatsItem stat={students.length} />
            <StudentsStatsItem stat={students.length} />
        </section>
    )
}
