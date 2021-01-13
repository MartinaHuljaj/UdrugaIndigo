import React from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import styles from './style.module.css'

const Header =({activeTab})=>(
    <section className={styles.header}>
        <Logo/>
        <Navigation activeTab={activeTab}/>
    </section>
)
export default Header