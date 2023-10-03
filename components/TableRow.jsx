export default function TableRow({ children }) {
    return (
        <tr className='even:bg-white relative odd:transparent dark:even:bg-secondaryDark/60 dark:odd:bg-transparent'>
            {children}
        </tr>
    )
}
