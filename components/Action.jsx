import Link from 'next/link'
import React from 'react'

export default function Action({ title, icon, link, children, closeModal }) {
    return (
        <Link onClick={closeModal} href={link} className='flex items-center px-6 py-4 bg-slate-200 dark:bg-primaryDark hover:bg-slate-300 dark:hover:bg-slate-900/60 duration-300 mb-2 last:mb-0 rounded-2xl'>
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
