import Link from "next/link"
import TableRow from "./TableRow"

export default function StudentRow({ student, isClass }) {
    return (
        <TableRow>
            <td className='py-2 pl-4 uppercase'>{`${student?.lastName} ${student?.middleName} ${student?.firstName}`}</td>
            {!isClass ? <td>
                <Link href={`/classes/${student.class.id}`} className="cursor-pointer h-full w-full hover:text-secondary duration-200">
                    {student.class.label}
                </Link>
            </td> : null}
        </TableRow>
    )
}
