'use client'
import React, { useCallback, useState } from 'react'

export default function useStudentsFilter({ students }) {
    const [select, setSelect] = useState(0)
    const [query, setQuery] = useState('')

    function handleChange(e) {
        setQuery(e.target.value)
    }

    function handleSelectChange(e) {
        setSelect(e.target.value)
    }

    const filteredStudents = students?.filter((student) => {
        return student?.fullName.toLowerCase().includes(query.toLowerCase())
            || student?.id.toString().toLowerCase().includes(query.toLowerCase())
    })

    return [query, select, handleChange, handleSelectChange, filteredStudents]
}
