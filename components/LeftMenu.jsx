'use client'

import Link from 'next/link'
import { navLinks } from '@/utils/design'
import NavLink from './NavLink'
import { PiSunBold, PiMoonBold } from 'react-icons/pi'
import { useThemeContext } from '@/utils/context/ThemeProvider'

export default function LeftMenu() {
    const { theme, toggleTheme } = useThemeContext()

    return (
        <section className='basis-1/6 md:flex hidden flex-col px-6 shadow-xl dark:bg-secondaryDark/60 dark:text-secondaryDark'>
            <div className='flex justify-between w-full items-center'>
                <Link href={'/'} className='text-2xl text-sky-500 font-bold ml-4 my-12'>SchoolX</Link>
                {theme === 'dark' ?
                    <PiSunBold
                        onClick={toggleTheme}
                        className='cursor-pointer p-4 h-12 w-12 rounded-full dark:hover:bg-gray-700 dark:bg-primaryDark bg-primary hover:bg-sky-200 duration-200 text-primary dark:text-secondaryDark'
                    />
                    : <PiMoonBold
                        onClick={toggleTheme}
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
