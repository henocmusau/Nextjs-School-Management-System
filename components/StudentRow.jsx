import React from 'react'

export default function StudentRow({ student }) {
    return (
        <tr className='even:bg-white odd:bg-sky-50'>
            <td className='py-2 pl-4 uppercase'>`{student?.lastName} {student?.middleName} {student?.firstName}`</td>
            <td>1ère Scientifique</td>
        </tr>
    )
}
