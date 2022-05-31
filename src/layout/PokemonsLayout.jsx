import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/sections/Footer'
import Header from '../components/sections/Header'
import Loader from '../components/sections/Loader'

const PokemonsLayout = () => {
    const applicationName = "PokémonInc"
    const credits = {
        year : new Date().getFullYear(),
        author: 'Rafo 👽'
    }
    return (
        <>
            {
                true && <Loader/>
            }
            <Header
                applicationName={applicationName}
            />
            <main className='pt-16 pb-8'>
                <Outlet />
            </main>
            <Footer
            credits={credits}>
            </Footer>
        </>
    )
}

export default PokemonsLayout