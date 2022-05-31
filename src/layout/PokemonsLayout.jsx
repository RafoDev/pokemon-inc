import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/sections/Header'

const PokemonsLayout = () => {
    const applicationName = "PokémonInc"
    return (
        <>
            <Header
                applicationName={applicationName}
            />
            <main className='pt-16 pb-8'>
                <Outlet />
            </main>
            <footer className="mt-auto text-center">
                Rafo 👽
            </footer>
        </>
    )
}

export default PokemonsLayout