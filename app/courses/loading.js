import React from 'react'

export default function PageLoading() {
    return (
        <section className='text-4xl animate-pulse h-full w-full flex flex-col'>
            <div className='loadingBg w-1/3 h-12 rounded-lg mt-8 mx-8' />
            <div className='flex flex-col gap-y-2 mt-8 mx-8 w-full'>
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
                <div className='loadingBg w-full rounded-xl h-12' />
            </div>
        </section>
    )
}