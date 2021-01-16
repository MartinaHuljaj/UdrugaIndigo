import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Novosti from '../components/Novosti'

const NovostiStranica=()=>(

    <main>
        <Header activeTab="Novosti"/>
        <Novosti/>
        <Footer/>
    </main>

)

export default NovostiStranica