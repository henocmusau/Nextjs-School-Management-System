import SectionWrapper from './SectionWrapper'
import TableRow from './TableRow'
import SectionTitle from './SectionTitle'

export default function CoursesList({ courses }) {
    return (
        <SectionWrapper>
            <SectionTitle title='Liste des cours' />
            <table className='text-left w-full border-collapse mt-4 bg-transparent'>
                <thead>
                    <tr>
                        <th className='pl-4 pb-2'>Label</th>
                    </tr>
                </thead>
                <tbody>
                    {courses?.map(t => (
                        <TableRow key={t?.id}>
                            <td className='py-2 pl-4 uppercase'>{t?.label}</td>
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </SectionWrapper>
    )
}
