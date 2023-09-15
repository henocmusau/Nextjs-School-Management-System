'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'
import FormInput from './FormInput'
import { createNewStudent } from '@/actions/studentsActions'
import { getAllClasses } from '@/actions/classActions'
import FormSelect from './FormSelect'
import FormOption from './FormOption'

export default function NewStudentModal({ classes }) {
    const [showModal, closeModal] = useNewModal()

    async function onCreate(formData) {
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
                <button type='submit' className='bg-blue-700 px-4 py-2 rounded-lg text-white mt-4 w-full'>Enregistrer</button>
            </form>
        </ModalContent>
    )
}
