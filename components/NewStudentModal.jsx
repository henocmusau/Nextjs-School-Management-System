'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'

export default function NewStudentModal() {
    const [showModal, closeModal] = useNewModal()

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouvel élève' closeModal={closeModal} key={'lol'}>
            NEW STUDENT jjjjj
        </ModalContent>
    )
}