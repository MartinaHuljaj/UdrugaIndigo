import React from 'react'
import styles from './style.module.css'
import inst from './instagram.png'
import face from './facebook.png'


const Footer = ()=>(
    <footer className={styles.footer}>
    <ul className={styles.address}>
        <li className={styles.title}>
            UDRUGA INDIGO
        </li>
        <li>Rakitje, Radnička 9</li>
        <li>10000 Zagreb</li>

    </ul>
    <nav className={styles.navigation}>
        <li className={styles.active}></li>
        <li>Udomi</li>
        <li>Volontiraj</li>
        <li>Doniraj</li>

    </nav>
    <nav >
        <img src={inst} alt="Instagram" className={styles.logo}/>
        <img src={face} alt="Facebook" className={styles.logo2}/>
    </nav>

</footer>
)
export default Footer