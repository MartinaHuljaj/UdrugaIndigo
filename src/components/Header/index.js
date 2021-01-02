import React from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import styles from './style.module.css'

const Header =()=>(
    <section className={styles.header}>
        <Logo/>
        <Navigation/>
    </section>
)
export default Header