'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SectionTitle({ title }) {
    const path = usePathname()

    return (
        <div className="flex items-start justify-between mx-4 border-b-4 borderColor">
            <h2 className='pb-4 font-semibold text-lg grow mb-4'>{title}</h2>
            <Link
                href={`./${path}?new=1`}
                className='bg-blue-700 hover:bg-blue-500 px-4 py-2 rounded-lg text-white duration-150'
            >
                + Nouveau
            </Link>
        </div>
    )
}
