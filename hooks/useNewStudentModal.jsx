'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function useNewStudentModal() {
    const [showModal, setShowModal] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()

    function closeModal() {
        setShowModal(false)
        router.replace('/students')
    }

    useEffect(() => {
        const showModalParam = searchParams.get('new')
        if (showModalParam === '1') { setShowModal(true) }
        console.log(showModal)
    }, [searchParams])

    return [showModal, closeModal]
}
