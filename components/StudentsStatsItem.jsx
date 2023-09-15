import React from 'react'

export default function StudentsStatsItem({ stat }) {

    return (
        <div className=' py-3 px-8 w-full'>
            <p className='text-3xl font-bold mb-2'>{stat ? stat : '359'}</p>
            <h2 className='text-secondary text-sm'>Elèves inscrits</h2>
        </div>
    )
}
