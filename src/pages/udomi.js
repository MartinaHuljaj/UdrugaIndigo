import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UdomiForm from '../components/Udomi'

const Udomi=()=>(
    <main>
        <Header activeTab="Udomi"/>
        <UdomiForm/>
        <Footer/>
    </main>
)

export default Udomi