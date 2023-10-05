import Link from "next/link"
import TableRow from "./TableRow"
import DropdownMenu from "./DropdownMenu"
import RedirectLink from "./RedirectLink"

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
                <RedirectLink id={student.class.id} label={student.class.label} />
            </td> : null}
            <td className="items-start">
                <DropdownMenu />
            </td>
        </TableRow>
    )
}
