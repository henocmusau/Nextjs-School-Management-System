'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function RedirectLink({ id, label }) {
    const path = usePathname()
    return (
        <Link
            href={`${path}/${id}`}
            className="cursor-pointer h-full w-full hover:text-secondary duration-200"
        >
            {label}
        </Link>
    )
}
