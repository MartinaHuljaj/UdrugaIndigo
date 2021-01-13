import React from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/4.png'

const Udomi =()=>(
    <main>
    <section>
        <Image slika={cover}/>
    </section>
    <section >
        <p className={styles.p}>Želiš udomiti jednog od naših ljubimaca?<br/> Ispuni formu za udomljavanje i mi ćemo ti se javiti s terminom za upoznavanje s ljubimcem što prije!</p>
    </section>
    <form className={styles.form}>
        <div>
            <label className={styles.label} htmlFor="ime">Ime ljubimca</label>
            <br/>
            <input  name="ime" type="text"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="kontakt">Kontakt</label>
            <br/>
            <input name="kontakt" type="text"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="drugi">Imate li drugih ljubimaca?</label>
            <br/>
            <input name="drugi" type="text"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="vrijeme">Kada biste mogli pokupiti ljubimca?</label>
            <br/>
            <input name="vrijeme" type="date"/>
        </div>
        <button className={styles.button}>Udomi</button>
    </form>
    </main>  
)

export default Udomi
