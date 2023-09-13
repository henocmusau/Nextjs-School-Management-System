'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'
import { createNewClass } from '@/actions/classActions'
import FormInput from './FormInput'

export default function NewClassModal() {
    const [showModal, closeModal] = useNewModal()

    async function onCreate(formData) {
        const message = await createNewClass(formData)
        if (message.error) return
        closeModal()
    }

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouvelle promotion' closeModal={closeModal} key={'lol'}>
            <form action={onCreate} className='flex flex-col'>
                <FormInput name='label' label='Titre' />
                <button type='submit' className='bg-blue-700 px-4 py-2 rounded-lg text-white mt-4 w-full'>Enregistrer</button>
            </form>
        </ModalContent>
    )
}
