import Slika from '../Image'
import cover from '../Image/naslovna1.jpg'
import React from 'react'
import styles from './style.module.css'


const Home =()=>(
    <main className={styles.container}>

      <Slika  slika={cover}  />
       <div className={styles.clanak}>Dobro došli na stranicu udruge za zaštitu životinja Indigo!<pre className={styles.pod}>→Upoznaj nas</pre></div>

    </main>
    
    
    )
export default Home