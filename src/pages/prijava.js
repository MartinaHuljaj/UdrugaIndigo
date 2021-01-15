import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Prijava from '../components/Prijava'

const PrijavaPage =()=>(

    <main>
        <Header activeTab="Prijava/registracija"/>
        <Prijava/>
        <Footer/>
    </main>
)

export default PrijavaPage