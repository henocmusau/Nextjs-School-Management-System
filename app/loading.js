import React from 'react'

export default function PageLoading() {
    return (
        <section className='text-4xl animate-pulse h-full w-full flex flex-col'>
            <div className='loadingBg basis-1/6 w-full rounded-3xl mt-6 mx-8 shadow-lg' />
            <div className='loadingBg grow w-full rounded-3xl shadow-lg mt-6 mx-8' />
        </section>
    )
}
