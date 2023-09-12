'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'

export default function NewClassModal() {
    const [showModal, closeModal] = useNewModal()

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouvelle promotion' closeModal={closeModal} key={'lol'}>
            NEW Class
        </ModalContent>
    )
}
