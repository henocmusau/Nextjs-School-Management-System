'use client'

import useNewModal from '@/hooks/useNewModal'
import React from 'react'
import ModalContent from './ModalContent'

export default function NewPaymentModal() {
    const [showModal, closeModal] = useNewModal()

    return (
        <>
            <ModalContent isOpen={showModal} closeModal={closeModal} title='Nouveau paiement :'>
                BBBBBBBBBBBBBBBBBB
            </ModalContent>
        </>

    )
}
