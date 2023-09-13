'use client'

import React, { useState } from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'
import FormInput from './FormInput'
import { createNewStudent } from '@/actions/studentsActions'
import { getAllClasses } from '@/actions/classActions'

export default function NewStudentModal() {
    const [showModal, closeModal] = useNewModal()
    const [classes, setClasses] = useState([])

    async function onCreate(formData) {
        const message = await createNewStudent(formData)
        if (message.error) return
        closeModal()
    }

    const getClass = async () => {
        const c = await getAllClasses()
        setClasses(c)
    }

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouvel élève' closeModal={closeModal} key={'lol'}>
            <form action={onCreate} className='flex flex-col'>
                <FormInput name='lastName' label='Nom' />
                <FormInput name='middleName' label='Post-nom' />
                <FormInput name='firstName' label='Prénom' />
                <button type='submit' className='bg-blue-700 px-4 py-2 rounded-lg text-white mt-4 w-full'>Enregistrer</button>
            </form>
            <select
                name='class'
                className='bg-transparent select rounded-lg border-2 border-gray-300 h-full px-4'
            >
                {classes.map((promotion) => (
                    <option
                        className='p-2 text-medium flex bg-white option hover:bg-sky-800'
                        key={promotion.id}
                        value={promotion.id}
                    >
                        {promotion.name}
                    </option>
                ))}
            </select>
        </ModalContent>
    )
}
