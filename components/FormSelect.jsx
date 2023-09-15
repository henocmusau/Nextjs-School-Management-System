import React from 'react'

export default function FormSelect({ children }) {
    return (
        <select
            name='class'
            className='bg-transparent dark:bg-secondaryDark p-2 rounded-lg border-2 border-gray-300 dark:border-secondary h-full px-4'
        >
            {children}
        </select>
    )
}
