import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UdomiForm from '../components/Udomi'


const Udomi=()=>(
    <main>
        <Header />
        <UdomiForm/>
        <Footer activeTab="Udomi"/>
    </main>
)

export default Udomi