import React from 'react'

export default function PageLoading() {
    return (
        <section className='text-4xl animate-pulse h-full w-full flex flex-col'>
            <div className='loadingBg w-1/3 h-12 rounded-lg mt-8 mx-8' />
            <div className='loadingBg w-full my-4 h-16 rounded-lg mx-8' />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-8 w-full'>
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
                <div className='loadingBg w-full rounded-3xl shadow-lg h-36' />
            </div>
        </section>
    )
}