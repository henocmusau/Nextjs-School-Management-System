import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/utils/design'
import NavLink from './NavLink'

export default function LeftMenu() {
    return (
        <section className='basis-1/6 flex flex-col px-6 shadow-xl'>
            <Link href={'/'} className='text-2xl text-sky-500 font-bold ml-4 my-12'>SchoolX</Link>
            <nav className='w-full'>
                <ul className='w-full flex flex-col'>
                    {navLinks.map((navLink) => (
                        <li key={navLink.link}>
                            <NavLink link={navLink.link} label={navLink.label} icon={navLink.icon} />
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
