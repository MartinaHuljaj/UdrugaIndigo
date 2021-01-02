import React from 'react'
import picture from './logo.png'
import styles from './style.module.css'

const Logo =()=> (
    <section className={styles.logo}>
        <img src={picture} alt="Logo" className={styles.logo}/>
    </section>
)
export default Logo