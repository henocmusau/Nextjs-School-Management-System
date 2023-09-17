'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useNewModal from '@/hooks/useNewModal'
import FormInput from './FormInput'
import { createNewCourse } from '@/actions/coursesActions'
import SubmitButton from './SubmitButton'

export default function NewCourseModal() {
    const [showModal, closeModal] = useNewModal()

    async function onCreate(formData) {
        const message = await createNewCourse(formData)

        if (message.error) return
        closeModal()
    }

    return (
        <ModalContent isOpen={showModal} title='Enregistrer nouveau cours' closeModal={closeModal} key={'newCourse'}>
            <form action={onCreate} className='flex flex-col'>
                <FormInput name='label' label='Titre' />
                <SubmitButton />
            </form>
        </ModalContent>
    )
}
