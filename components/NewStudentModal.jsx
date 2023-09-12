'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'
import FormInput from './FormInput'
import { createNewStudent } from '@/actions/serverActions'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function NewStudentModal() {
    const [showModal, closeModal] = useNewModal()
    const router = useRouter()
    const path = usePathname()

    async function onCreate(formData) {
        const message = await createNewStudent(formData)
        if (message.error) return
        closeModal()
        // router.push(path, { scroll: false })
    }

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouvel élève' closeModal={closeModal} key={'lol'}>
            <form action={onCreate} className='flex flex-col'>
                <FormInput name='lastName' label='Nom' />
                <FormInput name='middleName' label='Post-nom' />
                <FormInput name='firstName' label='Prénom' />
                <button type='submit' className='bg-blue-700 px-4 py-2 rounded-lg text-white mt-4 w-full'>Enregistrer</button>
            </form>

        </ModalContent>
    )
}
