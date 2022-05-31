import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = ({ applicationName }) => {
    return (
        <header className='font-mono fixed z-100 top-0 left-0 w-full bg-zinc-800 shadow-lg shadow-zinc-500/10'>
            <nav className='py-4 flex items-center justify-between container mx-auto px-8 md:px-4'>
                <Link to=""
                    className='text-cyan-300 text-2xl font-black  hover:text-white transition-colors'
                >
                    {applicationName}
                </Link>
                <ul className='flex'>
                    <li className='flex'>
                        <NavLink to="create"
                            className={({ isActive }) => {
                                return isActive ?
                                    'bg-cyan-300 text-black rounded-xl text-xl font-bold px-2 hover:bg-white transition-colors ' :
                                    'bg-white text-black rounded-xl text-xl font-bold px-2 hover:bg-cyan-300 transition-colors ';
                            }}
                        >Crear</NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Header