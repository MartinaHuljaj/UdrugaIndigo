import React from 'react'
import styles from './style.module.css'
import cover from '../../images/7.png'
import Image from '../Image'

const Volontiraj=()=>(
    <main>
    <Image slika={cover}/>
    <section >
        <p className={styles.p}>Želiš se pridružiti našem timu volontera?<br/>Ispuni prijavnicu i mi ćemo ti se javiti što prije! :)</p>
    </section>
    <form className={styles.form}>
        <div>
            <label className={styles.label} htmlFor="ime">Ime</label>
            <br/>
            <input  name="ime" type="text"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="prezime">Prezime</label>
            <br/>
            <input name="prezime" type="text"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="dob">Dob</label>
            <br/>
            <input name="dob" type="age"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="grad">Grad</label>
            <br/>
            <input name="grad" type="text"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="kontakt">Kontakt</label>
            <br/>
            <input name="kontakt" type="text"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="poruka">Ukratko nam recite zašto se želite pridružiti našem timu?</label>
            <br/>
            <input className={styles.poruka} name="poruka" type="text"/>
        </div>
        <button className={styles.button}>Pošalji</button>
    </form>
    </main>
)

export default Volontiraj