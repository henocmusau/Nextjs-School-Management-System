import Link from "next/link";
import { TbMoodEmpty } from "react-icons/tb";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Empty({ link, text }) {
    return (
        <section className='h-full flex flex-col items-center justify-center'>
            <TbMoodEmpty className='text-9xl dark:text-secondary text-slate-400' />
            <p className="text-secondary">{text}</p>
            <Link
                href={'/' + link + '?new=1'}
                className='cursor-pointer duration-200 mt-4 font-semibold bg-blue-700 hover:bg-sky-600 py-2 px-6 rounded-lg text-primaryDark shadow-lg'
            >
                Debuter l'enregistrement
            </Link>
        </section>
    )
}
