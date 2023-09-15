import React from 'react'

export default function FormOption({ label, id }) {

    return (
        <option
            className='p-2 font-sans flex bg-white dark:bg-primaryDark h-full option hover:bg-blue-800'
            key={id}
            value={id}
        >
            {label}
        </option>
    )
}
