import React from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/5.png'

const ContactForm=()=>(
    <main>
        <section className={styles.container}>
            <Image slika={cover}/>
            <p className={styles.p}>Imaš pitanja za nas? Slobodno nam se javi!<br/>Na upit odgovaramo putem unesenog e-maila.</p>
            <form className={styles.form}>
                <div>
                    <label className={styles.label} htmlFor="ime">Ime:</label>

                    <input className={styles.field} name="ime" type="text" placeholder="Vaše ime ovdje..."/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="prezime">Prezime:</label>

                    <input className={styles.field} name="prezime" type="text" placeholder="Vaše prezime ovdje..."/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="mail">Mail:</label>

                    <input className={styles.field} name="mail" type="email" placeholder="Vaša e-mail adresa ovdje..."/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="poruka">Poruka:</label>

                    <input className={styles.poruka} name="poruka" type="text" placeholder="Vaša poruka ovdje..."/>
                </div>
                <button className={styles.button}>Pošalji</button>
            </form>
        </section>
    </main>
)

export default ContactForm