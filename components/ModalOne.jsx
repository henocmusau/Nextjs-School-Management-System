'use client'

import { useState } from 'react'
import ModalContent from './ModalContent'
import Link from 'next/link'

export default function MyModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <Link href={'/classes'}>Classes</Link>
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>
            <ModalContent isOpen={isOpen} closeModal={closeModal} />

        </>
    )
}
