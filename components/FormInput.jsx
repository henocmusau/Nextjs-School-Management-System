'us client'

import React from 'react'

export default function FormInput({ type, name, label }) {
    return (
        <>
            <label htmlFor={name} className='mt-4 ml-4'>{label} </label>
            <input
                type={type ? type : 'text'}
                className="border-2 w-full border-gray-300 bg-transparent h-10 px-4 py-2 rounded-lg text-medium focus:outline-none"
                name={name}
                autoComplete='off'
            />
        </>
    )
}
