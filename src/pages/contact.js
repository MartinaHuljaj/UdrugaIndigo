import React from 'react'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import Footer from '../components/Footer'


const ContactPage =()=>(
    <main>
        <Header activeTab="Kontakt"/>
        <ContactForm/>
        <Footer/>

    </main>
)

export default ContactPage