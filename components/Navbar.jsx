import { classes, navLinks } from '@/utils/design'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <section className={classes.header}>
            <Link href={'/dash'} className={classes.logo}>SchoolX</Link>
            <div className='w-full'>
                <ul className='w-full flex flex-col'>
                    {navLinks?.map((navLink, index) => (
                        <li key={index}>
                            <Link
                                href={navLink.link ? navLink.link : '/'}
                                className={classes.navLink}
                            >
                                {navLink?.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Navbar