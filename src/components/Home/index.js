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
      <Slika  slika={cover}  />
      <div className={styles.clanak}>Dobro došli na stranicu udruge za zaštitu životinja Indigo!<pre className={styles.pod}>→Upoznaj nas</pre></div>
    </section>
    <section className={styles.galerijaOkvir}>
      <div className={styles.text}>Naši ljubimci: </div>
      <div className={styles.galerija}><img src={pic1}></img></div>
      <div className={styles.galerija}><img src={pic2}></img></div>
      <div className={styles.galerija}><img src={pic3}></img></div>
      <div className={styles.galerija}><img src={pic4}></img></div>
      <div className={styles.galerija}><img src={pic5}></img></div>
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
      
    </section>
    <section>
      <p></p>
    </section>
    </main>
    
    )
export default Home