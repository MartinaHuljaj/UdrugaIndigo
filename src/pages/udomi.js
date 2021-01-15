import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UdomiForm from '../components/Udomi'
import Image from '../components/Image'
import cover from '../images/4.png'
const Udomi=()=>(
    <main>
        <Header />
        <Image slika={cover}/>
        <UdomiForm/>
        <Footer activeTab="Udomi"/>
    </main>
)

export default Udomi