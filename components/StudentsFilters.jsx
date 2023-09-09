'use client'

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai'

// import Listbox from './ListBox'

const promotions = [
    { id: 0, name: 'Tous' },
    { id: 1, name: '1ère Primaire' },
    { id: 2, name: '2ème Primaire' },
    { id: 3, name: '3ème Primaire' },
    { id: 4, name: '4ème Primaire' },
    { id: 5, name: '5ème Primaire' },
    { id: 6, name: '6ème Primaire' },
]

export default function StudentsFilters({ query, select, handleChange, handleSelectChange }) {

    return (
        <section className='bg-white text-slate-900 relative rounded-t-xl pt-8 px-12 mt-6 flex items-center'>
            <div className='relative basis-5/12 mr-6'>
                <input
                    type='text'
                    className="border-2 w-full border-gray-300 bg-transparent h-10 px-8 rounded-lg text-medium focus:outline-none"
                    name='filterText'
                    value={query}
                    placeholder="Entrez le nom de l'élève que vous recherchez ici..."
                    onChange={handleChange}
                    autoComplete='off'
                />
                <button
                    type="button"
                    className="absolute left-0 top-0 my-0 h-full ml-2 text-slate-400"
                >
                    <AiOutlineSearch className='text-2xl' />
                </button>
            </div>
            <select
                value={select}
                onChange={handleSelectChange}
                className='bg-transparent select rounded-lg border-2 border-gray-300 h-full px-4'
            >
                {promotions.map((promotion) => (
                    <option
                        className='p-2 text-medium flex bg-white option hover:bg-sky-800'
                        key={promotion.id}
                        value={promotion.id}
                    >
                        {promotion.name}
                    </option>
                ))}
            </select>
            {/* <Listbox /> */}
        </section>
    )
}
