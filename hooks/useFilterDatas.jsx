'use client'
import { useState } from 'react'

export default function useFilterDatas({ datas }) {
    const [query, setQuery] = useState('')

    function handleChange(e) {
        setQuery(e.target.value)
    }

    const filteredDatas = datas?.filter((data) => {
        const dataLabel = data?.fullName.toLowerCase()
        const dataId = data?.id.toString().toLowerCase()

        return dataLabel.includes(query.toLowerCase())
            || dataId.includes(query.toLowerCase())
    })

    return [query, handleChange, filteredDatas]
}
