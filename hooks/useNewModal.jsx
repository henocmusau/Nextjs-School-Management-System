'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function useNewModal() {
    const [showModal, setShowModal] = useState(false)
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()

    function closeModal() {
        setShowModal(false)
        router.replace(pathName)
    }

    useEffect(() => {
        const showModalParam = searchParams.get('new')
        if (showModalParam === '1') { setShowModal(true) }
    }, [searchParams])

    return [showModal, closeModal]
}
