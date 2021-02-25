import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import styles from './macke.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from '../components/Image'
import cover from '../images/1.png'

const Macka =({pageContext})=>{
    const {title,text,picture,age,vaxine}=pageContext

    return(
        <main>
            <Header activeTab="Macke"/>
                <section className={styles.bigBox}>
                <Image slika={cover}/>
                <div className={styles.container}>
                    <Img fixed={picture.fixed} className={styles.slicica}/>
                    <div className={styles.container1}>                
                        <p className={styles.heading}>Ime:</p><p className={styles.heading1}>{title}</p>
                        <p className={styles.heading}>Dob (mjeseci):</p><p className={styles.heading1}>{age} </p>
                        <p className={styles.heading}>Cijepljen/a:</p><p className={styles.heading1}>{vaxine}</p>
                    </div> 
                    <div className={styles.container2}>
                        <p className={styles.heading}>Opis:</p>
                        <p className={styles.bogatiTekst}>{renderRichText(text)}</p>                
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Macka