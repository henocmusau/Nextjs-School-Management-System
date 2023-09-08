'use client'

import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Listbox from './ListBox'



export default function StudentsFilters() {
    function handleChange() {

    }
    return (
        <section className='bg-white text-slate-900 relative rounded-t-xl pt-8 px-12 mt-6 flex items-center'>
            <div className='relative basis-5/12 mr-6'>
                <input
                    type='text'
                    className="border-2 w-full border-gray-300 bg-white h-10 px-8 rounded-lg text-sm focus:outline-none"
                    name='filterText'
                    value={''}
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
            <Listbox />
        </section>
    )
}
