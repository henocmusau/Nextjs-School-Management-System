import Link from 'next/link'
import React from 'react'

export default function Action({ title, icon, link, children, closeModal }) {
    return (
        <Link onClick={closeModal} href={link} className='actionLink'>
            <span className='h-full text-3xl font-thin opacity-60 mr-3'>
                {icon}
            </span>
            <div>
                <h2 className='font-semibold text-lg'>{title}</h2>
                <p className='text-sm text-secondary'>{children} </p>
            </div>
        </Link>
    )
}
