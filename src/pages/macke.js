import React from 'react'
import Macke from '../components/Macke'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CatsPage =()=>(
    <main>
        <Header activeTab="Mačke"/>
        <Macke/>
        <Footer/>
    </main>
)

export default CatsPage