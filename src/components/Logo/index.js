import React from 'react'
import picture from './logo.png'
import styles from './style.module.css'

const Logo =()=> (
    <section className={styles.logo}>
        <a href="http://localhost:8000/novosti" target="_self" rel="noopener noreferrer"><img src={picture} alt="Logo" className={styles.logo}/></a>
    </section>
)
export default Logo