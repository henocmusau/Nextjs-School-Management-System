import React from 'react'

export const metadata = {
    title: 'Page non trouvée !'
}

export default function notFound() {
    return (
        <div className='h-full flex flex-col justify-center text-center'>
            <h1 className='text-5xl font-semibold mb-6'>Erreur 404 !</h1>
            <p>Sorry ! La page que vous recherchez est introuvale.</p>
        </div>
    )
}
