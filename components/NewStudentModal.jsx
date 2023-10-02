'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'
import FormInput from './FormInput'
import { createNewStudent } from '@/actions/studentsActions'
import FormSelect from './FormSelect'
import FormOption from './FormOption'
import SubmitButton from './SubmitButton'

export default function NewStudentModal({ classes }) {
    const [showModal, closeModal] = useNewModal()

    async function onCreate(formData) {
        if (formData.get('class').trim().length <= 0) return
        const message = await createNewStudent(formData)
        if (message.error) return
        closeModal()
    }

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouvel élève' closeModal={closeModal} key={'lol'}>
            <form action={onCreate} className='flex flex-col'>
                <FormInput name='lastName' label='Nom' />
                <FormInput name='middleName' label='Post-nom' />
                <FormInput name='firstName' label='Prénom' />
                <label htmlFor='class' className='mt-4 ml-4'>Classe </label>
                <FormSelect>
                    {classes.map((promotion) => (
                        <FormOption key={promotion?.id} label={promotion?.label} id={promotion?.id} />
                    ))}
                </FormSelect>
                <SubmitButton />
            </form>
        </ModalContent>
    )
}
