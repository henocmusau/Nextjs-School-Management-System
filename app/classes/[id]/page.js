import { getStudentsPerClass } from '@/actions/studentsActions'
import React from 'react'

export default async function page({ params }) {
    const datas = await getStudentsPerClass(params.id)
    console.log(datas)
    return (
        <div className='w-full relative h-full flex flex-col px-3 md:px-8'>
            <p className='text-3xl font-extrabold'>Page N° : {` ${params.id}`} </p>
        </div>
    )
}
