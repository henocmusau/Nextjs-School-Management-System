'use client'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function DataFilter({ query, handleChange, }) {
    return (
        <section className='bg-secondary/30 dark:bg-secondaryDark/60 relative rounded-t-xl pt-8 px-4 md:px-12 mt-6 flex flex-col md:flex-row items-center'>
            <div className='relative w-full md:basis-5/12 mr-0 md:mr-6 mb-2 md:mb-0'>
                <input
                    type='text'
                    className="inputBorder w-full bg-transparent h-10 px-8 rounded-lg text-medium focus:outline-none"
                    name='filterText'
                    value={query}
                    placeholder="Rechercher..."
                    onChange={handleChange}
                    autoComplete='off'
                />
                <button
                    type="button"
                    className="absolute left-0 top-0 my-0 h-full ml-2 text-secondary"
                >
                    <AiOutlineSearch className='text-2xl' />
                </button>
            </div>

        </section>
    )
}
