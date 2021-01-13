import React from 'react'
import styles from './style.module.css'
import Image from '../Image'
import glavna from './5.png'

const ContactForm=()=>(
    <main>
    <Image slika={glavna}/>
    <section className={styles.form}>
        <p className={styles.p}>Imaš pitanja za nas?<pre>Slobodno nam se javi! :D</pre></p>
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
            <label className={styles.label} htmlFor="mail">Mail</label>
            <br/>
            <input name="mail" type="email"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="poruka">Poruka</label>
            <br/>
            <input className={styles.poruka} name="poruka" type="text"/>
        </div>
        <button className={styles.button}>Pošalji</button>
    </form>
    </main>
)

export default ContactForm