'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { navLinks } from '@/utils/design'
import NavLink from './NavLink'
import { PiSunBold, PiMoonBold } from 'react-icons/pi'
import ThemeContext from '@/utils/context/theme'

export default function LeftMenu() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <section className='basis-1/6 flex flex-col px-6 shadow-xl dark:bg-secondaryDark dark:text-secondaryDark'>
            <div className='flex justify-between w-full items-center'>
                <Link href={'/'} className='text-2xl text-sky-500 font-bold ml-4 my-12'>SchoolX</Link>
                {theme === 'dark' ?
                    <PiSunBold
                        onClick={() => setTheme('light')}
                        className='cursor-pointer p-4 h-12 w-12 rounded-full dark:hover:bg-gray-700 dark:bg-primaryDark bg-primary hover:bg-sky-200 duration-200 text-primary dark:text-secondaryDark'
                    />
                    : <PiMoonBold
                        onClick={() => setTheme('dark')}
                        className='cursor-pointer p-4 h-12 w-12 rounded-full dark:hover:bg-gray-700 dark:bg-primaryDark bg-primary hover:bg-sky-200 duration-200 text-primary dark:text-secondaryDark'
                    />}
            </div>
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
