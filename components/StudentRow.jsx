import React from 'react'

export default function StudentRow({ student }) {
    return (
        <tr className='even:bg-white odd:bg-sky-50 dark:even:bg-secondaryDark dark:odd:bg-primaryDark'>
            <td className='py-2 pl-4 uppercase'>{`${student?.lastName} ${student?.middleName} ${student?.firstName}`}</td>
            <td>{student.class.label} </td>
        </tr>
    )
}
