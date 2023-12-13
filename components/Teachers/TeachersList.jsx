import React from 'react'
import TeacherCard from './TeacherCard'

export default function TeachersList({ teachers }) {
  return (
    <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 mt-6'>
      {teachers.map((teacher) => <TeacherCard teacher={teacher} />
      )}
    </div>
  )
}
