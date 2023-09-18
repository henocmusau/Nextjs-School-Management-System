import NewPaymentModal from '@/components/NewPaymentModal'
import React from 'react'

export const metadata = {
    title: 'Paiement - SchoolX',
}

export default function page() {
    return (
        <>
            <div>Paiements</div>
            <NewPaymentModal />
        </>
    )
}
