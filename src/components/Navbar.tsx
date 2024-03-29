import {useState} from "react";
import {Link} from "@tanstack/react-router";
import {IoClose} from "react-icons/io5";
import {HiMenuAlt3} from "react-icons/hi";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

const pages = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    }
];
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className='top-0 z-10 flex items-center justify-between border-b border-slate-300 bg-slate-200 px-6 py-4 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'>
                <div className='flex items-center'>
                    <Link
                        to='/'
                        className={`font-lab text-5xl font-bold`}
                    >
                        Stocker
                    </Link>
                    <nav className='mx-4 hidden md:flex'>
                        {pages.map((page) => (
                            <Link
                                activeProps={{className: 'bg-slate-300 text-teal-700 dark:bg-slate-800 dark:text-teal-300'}}
                                key={page.name} to={page.path}
                                className="mx-2 rounded px-4 py-2.5 transition duration-200 hover:bg-slate-300 dark:hover:bg-slate-800">
                                {page.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className='flex items-center'>
                    <ThemeSwitcher/>
                    <button aria-label={'Open Menu icon'} onClick={() => setIsOpen(true)}>
                        <HiMenuAlt3 className='ml-4 inline-block md:hidden' size={24}/>
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center pt-4 md:hidden'>
                <nav
                    className={`fixed inset-y-0 right-0 top-0 z-50 flex w-1/2 transform flex-col border-l border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-900 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out md:hidden`}
                >
                    <button
                        aria-label='Close icon'
                        className='mt-4 flex justify-start py-2'
                        onClick={() => setIsOpen(false)}
                    >
                        <IoClose className='ml-4 inline-block md:hidden' size={24}/>
                    </button>
                    {pages.map((page) => (

                        <Link
                            onClick={() => setIsOpen(false)}
                            activeProps={{className: 'bg-slate-300 text-teal-700 dark:bg-slate-800 dark:text-teal-300'}}
                            key={page.name} to={page.path}
                            className="mx-2 rounded px-4 py-2.5 transition duration-200 hover:bg-slate-300 dark:hover:bg-slate-800">
                            {page.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
