import TableRow from "./TableRow"

export default function StudentRow({ student }) {
    return (
        <TableRow>
            <td className='py-2 pl-4 uppercase'>{`${student?.lastName} ${student?.middleName} ${student?.firstName}`}</td>
            <td>{student.class.label} </td>
        </TableRow>
    )
}
