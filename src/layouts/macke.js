import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import styles from './style.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from '../components/Image'
import cover from '../images/1.png'

const Macka =({pageContext})=>{
    const {title,text,picture,age,vaxine}=pageContext

    return(
        <main>
            <Header activeTab="Macke"/>
            <Image slika={cover}/>
            <Img fixed={picture.fixed}/>
            <h1>Ime: {title}</h1>
            <h1>Dob: {age}</h1>
            <h1>Cijepljen/a: {vaxine}</h1>
            <article>
                {renderRichText(text)}
            </article>
            <Footer/>

            
        </main>
    )
}

export default Macka