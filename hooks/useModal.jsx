'use client'
import { useState } from 'react'

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        if (!isOpen) return
        setIsOpen(false)
    }

    function openModal() {
        if (isOpen) return
        setIsOpen(true)
    }
    return [
        isOpen,
        openModal,
        closeModal,
    ]
}

export default useModal