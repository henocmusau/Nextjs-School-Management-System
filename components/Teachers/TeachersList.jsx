'use client'
import React from 'react'
import TeacherCard from './TeacherCard'
import useFilterDatas from '@/hooks/useFilterDatas'
import DataFilter from '../DataFilter'

export default function TeachersList({ teachers: datas }) {
  const [query, handleChange, filteredDatas] = useFilterDatas({ datas })

  return (
    <>
      <DataFilter query={query} handleChange={handleChange} />

      <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 mt-6'>
        {filteredDatas.map((teacher) => <TeacherCard key={teacher?.id} teacher={teacher} />
        )}
      </div>
    </>
  )
}
