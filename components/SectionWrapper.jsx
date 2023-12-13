
export default function SectionWrapper({ children, isClass }) {
    return (
        <section
            style={
                {
                    width: isClass ? '50%' : '100%'
                }
            }
            className='bg-secondary/30 dark:bg-secondaryDark/60 rounded-b-xl shadow-lg w-full px-4 md:px-8 py-8 first:rounded-t-xl first:mt-6'
        >
            {children}
        </section>
    )
}
