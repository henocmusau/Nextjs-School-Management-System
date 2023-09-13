
export default function SectionWrapper({ children }) {
    return (
        <section className='bg-secondary rounded-b-xl shadow-lg w-full px-8 py-8 first:mt-6'>
            {children}
        </section>
    )
}
