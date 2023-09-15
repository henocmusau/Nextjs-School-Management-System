import React from 'react'

export default function FormOption({ label, id }) {

    return (
        <option
            className='selectOption'
            key={id}
            value={id}
        >
            {label}
        </option>
    )
}
