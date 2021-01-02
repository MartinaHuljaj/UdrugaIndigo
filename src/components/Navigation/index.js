import React from 'react'
import styles from './style.module.css'

const Navigation = ()=>(
    <nav className={styles.navigation}>
        <li className={styles.active}>Psi</li>
        <li>Mačke</li>
        <li>Kontakt</li>
        <li>Novosti</li>
        <li>Prijava/Registracija</li>
    </nav>
)
export default Navigation