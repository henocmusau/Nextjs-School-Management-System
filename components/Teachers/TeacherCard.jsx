'use client'
import Image from 'next/image'
import React from 'react'
import teacherMale from '@/assets/teacher_male.png'
import teacherFemale from '@/assets/teacher_female.png'

export default function TeacherCard({ teacher }) {
    // const picture = () => {
    //     if (teacher.image) return teacher.image
    //     if (teacher.gender && teacher.gender === "F") return teacherFemale
    //     return teacherMale
    // }
    // console.log(picture)
    return (
        <div className='flex bg-primary dark:bg-primaryDark p-4 rounded-xl'>
            <div>
                <Image
                    src={teacher.image || teacherMale}
                    height={100}
                    width={100}
                    priority
                    className='rounded-full object-cover border borderColor bg-white'
                // fill
                />
            </div>
            <div className='ml-4'>
                <h2 className='font-semibold text-xl uppercase'>
                    {teacher.fullName}
                </h2>
                <p className='text-secondary'>Professeur de Microbiologie et Mathématiques</p>
            </div>
        </div>
    )
}
