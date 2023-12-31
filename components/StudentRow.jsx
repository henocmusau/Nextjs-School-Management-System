import Link from "next/link"
import TableRow from "./TableRow"
import DropdownMenu from "./DropdownMenu"
import RedirectLink from "./RedirectLink"
import { replaceSpecialChars, studentLink } from "@/utils/functions"

export default function StudentRow({ student, isClass }) {

    return (
        <TableRow>
            <td
                className='py-2 pl-4 uppercase hover:text-primary dark:hover:text-primaryDark'
            >
                <Link
                    href={'/students/' + studentLink(student)}
                >
                    {student?.fullName}
                </Link>
            </td>
            {!isClass ? <td>
                {/* <RedirectLink id={student.class.id} label={student.class.label} /> */}
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
