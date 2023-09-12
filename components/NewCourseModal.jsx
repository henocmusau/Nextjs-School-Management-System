'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'

export default function NewCourseModal() {
    const [showModal, closeModal] = useNewModal()

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouveau cours' closeModal={closeModal} key={'lol'}>
            NEW COURSE
        </ModalContent>
    )
}
