'use client'
import React, { useState } from 'react'

export default function useStudentsFilter({ students }) {
    const [select, setSelect] = useState(0)
    const [query, setQuery] = useState('')
    const [datas, setDatas] = useState(students)

    function handleChange(e) {
        setQuery(e.target.value)
    }

    function handleSelectChange(e) {
        setSelect(e.target.value)
    }

    const filteredStudents = datas?.filter((student) => {
        return student?.fullName.toLowerCase().includes(query.toLowerCase())
            || student?.id.toString().toLowerCase().includes(query.toLowerCase())
    })

    return [query, select, handleChange, handleSelectChange, filteredStudents]
}
