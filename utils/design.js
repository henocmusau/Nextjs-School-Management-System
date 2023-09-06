import { AiOutlineBarChart, AiOutlineBank, AiOutlineUsergroupAdd, AiOutlineUser, AiOutlineBook, AiOutlineAudit, } from 'react-icons/ai'

export const classes = {
    header: 'basis-1/6 border-r border-gray-200 flex flex-col pl-6 pr-2',
    logo: 'text-2xl font-semibold ml-4 my-12',
    navLink: "text-black px-4 py-2 cursor-pointer hover:bg-blue-500 duration-300 flex items-center",
}

export const navLinkClass = {
    active: 'text-slate-800 border-t-2 border-gray-700 px-4 py-3 rounded-full cursor-pointer bg-slate-500 hover:bg-blue-100 duration-300 flex items-center',
    notActive: 'text-slate-800 px-6 py-3 rounded-full cursor-pointer hover:bg-blue-100 duration-300 flex items-center'
}

export const navLinks = [
    {
        label: 'Dashboard',
        link: '/',
        icon: <AiOutlineBarChart className='text-2xl mr-2' />
    },
    {
        label: 'Paiement',
        link: '/payments',
        icon: <AiOutlineBank className='text-2xl mr-2' />
    },
    {
        label: 'Elèves',
        link: '/students',
        icon: <AiOutlineUser className='text-2xl mr-2' />
    },
    {
        label: 'Cours',
        link: '/courses',
        icon: <AiOutlineBook className='text-2xl mr-2' />
    },
    {
        label: 'Classes',
        link: '/classes',
        icon: <AiOutlineUsergroupAdd className='text-2xl mr-2' />
    },
    {
        label: 'Professeurs',
        link: '/teachers',
        icon: <AiOutlineAudit className='text-2xl mr-2' />
    },
]