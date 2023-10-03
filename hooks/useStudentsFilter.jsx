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
        const studentFullname = student?.fullName.toLowerCase()
        const studentId = student?.id.toString()

        if (select == 0) {
            return studentFullname.includes(query.toLowerCase())
                || studentId.toLowerCase().includes(query.toLowerCase())
        }
        return studentFullname.includes(query.toLowerCase()) && student?.class.id == select
            || studentId.toLowerCase().includes(query.toLowerCase()) && student?.class.id == select
    })

    return [query, select, handleChange, handleSelectChange, filteredStudents]
}
