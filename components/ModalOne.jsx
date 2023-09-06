'use client'

import ModalContent from './ModalContent'
import Link from 'next/link'

export default function MyModal({ isOpen, closeModal }) {

    return (
        <>

            <ModalContent isOpen={isOpen} closeModal={closeModal} />

        </>
    )
}
