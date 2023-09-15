
export default function SectionWrapper({ children }) {
    return (
        <section className='bg-secondary/30 dark:bg-secondaryDark/80 rounded-b-xl shadow-lg w-full px-4 md:px-8 py-8 first:rounded-t-xl first:mt-6'>
            {children}
        </section>
    )
}
