
export default function FormSelect({ children }) {
    return (
        <select
            name='class'
            className='select'
        >
            {children}
        </select>
    )
}
