import Link from "next/link"
import TableRow from "./TableRow"
import DropdownMenu from "./DropdownMenu"

export default function StudentRow({ student, isClass }) {
    return (
        <TableRow>
            <td
                className='py-2 pl-4 uppercase hover:text-primary dark:hover:text-primaryDark'
            >
                <Link href={`/students/${student?.id}`}>
                    {student?.fullName}
                </Link>
            </td>
            {!isClass ? <td>
                <Link
                    href={`/classes/${student.class.id}`}
                    className="cursor-pointer h-full w-full hover:text-secondary duration-200"
                >
                    {student.class.label}
                </Link>
            </td> : null}
            <td className="items-start">
                <DropdownMenu />
            </td>
        </TableRow>
    )
}
