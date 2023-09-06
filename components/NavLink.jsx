'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { navLinkClass } from '@/utils/design'

export default function NavLink({ label, link, icon }) {
    const isActiveTab = usePathname()

    return (
        <Link
            href={link}
            className='text-slate-800 px-6 py-3 rounded-full cursor-pointer hover:bg-blue-100 duration-300 flex items-center'
        >
            {icon}
            <span className='ml-2'>{label}</span>
        </Link>
    )
}
