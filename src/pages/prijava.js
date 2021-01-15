import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Prijava from '../components/PrijavaRegistracija'

const PrijavaPage =()=>(

    <main>
        <Header activeTab="Prijava/registracija"/>
        <Prijava/>
        <Footer/>
    </main>
)

export default PrijavaPage