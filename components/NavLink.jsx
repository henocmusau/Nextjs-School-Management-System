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
            className={isActiveTab ? navLinkClass.active : navLinkClass.notActive}
        >
            {icon}
            <span className='ml-2'>{label}</span>
        </Link>
    )
}
