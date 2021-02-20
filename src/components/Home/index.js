import Slika from '../Image'
import cover from '../Image/naslovna1.jpg'
import React from 'react'
import styles from './style.module.css'
import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'
import pic4 from './4.jpg'
import pic5 from './5.jpg'


const Home =()=>(
    <main>
    <section  className={styles.container}>
      <Slika  slika={cover}  className={styles.coverImage}/>
      <div className={styles.clanak}>Dobro došli na stranicu udruge za zaštitu životinja Indigo!<pre className={styles.pod}>→Upoznaj nas</pre></div>
    <div className={styles.text}>Naši ljubimci: </div>
    <section className={styles.galerijaOkvir}>
      <div className={styles.ljubimciFrame}>
        <div className={styles.galerijaDiv}><a href="http://localhost:8000/psi" target="_self" rel="noopener noreferrer" className={styles.galerija}><img src={pic1} alt="Psi"></img></a></div>
        <div className={styles.galerijaDiv}><a href="http://localhost:8000/macke" target="_self" rel="noopener noreferrer" className={styles.galerija}><img src={pic2} alt="Macke"></img></a></div>
        <div className={styles.galerijaDiv}><a href="http://localhost:8000/macke" target="_self" rel="noopener noreferrer" className={styles.galerija}><img src={pic3} alt="Macke"></img></a></div>
        <div className={styles.galerijaDiv}><a href="http://localhost:8000/psi" target="_self" rel="noopener noreferrer" className={styles.galerija}><img src={pic4} alt="Psi"></img></a></div>
        <div className={styles.galerijaDiv}><a href="http://localhost:8000/psi" target="_self" rel="noopener noreferrer" className={styles.galerija}><img src={pic5} alt="Psi"></img></a></div>
      </div>
    </section>
    <section className={styles.citat}>
      <div>
        "Kada sam prvi put otišla na šetnju po Marjanu sas ekipom iz Indiga, zaljubila sam se u malog <br/>
        labradora s imenom Rio. Dvije godine kasnije, rio i ja smo još uvijek najbolji prijatelji i neizmjerno <br/>
        smo zahvalni udruzi indigo što nas je spojila"
      </div>
      <p className={styles.autor}>Hana, Split</p>
    </section>
    <section>
      <div className={styles.text}>Novosti:</div>
      
      {/* Dodaj novosti! */}
      
    </section>
    <section>
      <p></p>
    </section>
    </section>
    </main>
    
    )
export default Home