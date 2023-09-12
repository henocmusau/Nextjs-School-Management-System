'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewStudentModal from '@/hooks/useNewStudentModal'

export default function NewStudentModal() {
    const [showModal, closeModal] = useNewStudentModal()

    return (
        <ModalContent isOpen={showModal} closeModal={closeModal} key={'lol'}>
            NEW STUDENT jjjjj
        </ModalContent>
    )
}
