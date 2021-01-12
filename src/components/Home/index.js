import Slika from '../Image'
import naslovna from '../Image/naslovna1.jpg'
import React from 'react'
import styles from './style.module.css'

const Home =()=>(
    <section className={styles.container} >
       <Slika  slika={naslovna}/>
       <div className={styles.clanak}>Dobro došli na stranicu udruge za zaštitu životinja Indigo!<pre className={styles.pod}>→Upoznaj nas</pre></div>
    </section>
    )
export default Home