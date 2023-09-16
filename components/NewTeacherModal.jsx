'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'
import FormInput from './FormInput'
import { createNewTeacher } from '@/actions/teachersActions'
import FormSelect from './FormSelect'
import FormOption from './FormOption'
import SubmitButton from './SubmitButton'

export default function NewStudentModal({ classes }) {
    const [showModal, closeModal] = useNewModal()

    async function onCreate(formData) {
        const message = await createNewTeacher(formData)
        if (message.error) return
        closeModal()
    }

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouvel professeur' closeModal={closeModal} key={'lol'}>
            <form action={onCreate} className='flex flex-col'>
                <FormInput name='lastName' label='Nom' />
                <FormInput name='middleName' label='Post-nom' />
                <FormInput name='firstName' label='Prénom' />
                <SubmitButton text='Enregistrer' />
            </form>
        </ModalContent>
    )
}
