'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'
import FormInput from './FormInput'
import { createNewStudent } from '@/actions/studentsActions'
import { getAllClasses } from '@/actions/classActions'

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
                <select
                    name='class'
                    className='bg-transparent p-2 rounded-lg border-2 border-gray-300 h-full px-4'
                // defaultValue={classes[0].id}
                >
                    {classes.map((promotion) => (
                        <option
                            className='p-2 text-xl font-sans flex bg-white option hover:bg-blue-800'
                            key={promotion.id}
                            value={promotion.id}
                        >
                            {promotion.label}
                        </option>
                    ))}
                </select>
                <button type='submit' className='bg-blue-700 px-4 py-2 rounded-lg text-white mt-4 w-full'>Enregistrer</button>
            </form>
        </ModalContent>
    )
}
