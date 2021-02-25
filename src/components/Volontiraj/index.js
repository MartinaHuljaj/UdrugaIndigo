import React from 'react'
import styles from './style.module.css'
import cover from '../../images/7.png'
import Image from '../Image'

const Volontiraj=()=>(
    <main>
        <section className={styles.container}>
            <Image slika={cover}/>
            <section >
                <p className={styles.p}>Želiš se pridružiti našem timu volontera?<br/>Ispuni prijavnicu i mi ćemo ti se javiti što prije! :)</p>
            </section>
            <form className={styles.form}>
                <div>
                    <label className={styles.label} htmlFor="ime">Ime:</label>
                    <br/>
                    <input  name="ime" type="text" placeholder="Vaše ime ovdje..."/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="prezime">Prezime:</label>
                    <br/>
                    <input name="prezime" type="text" placeholder="Vaše prezime ovdje..."/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="dob">Dob:</label>
                    <br/>
                    <input name="dob" type="age" placeholder="Vaša dob adresa ovdje..."/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="grad">Grad:</label>
                    <br/>
                    <input name="grad" type="text" placeholder="Grad u kojem stanujete ovdje..."/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="kontakt">E-mail:</label>
                    <br/>
                    <input name="kontakt" type="text" placeholder="Vaša e-mail adresa ovdje..."/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="poruka">Motivacija:</label>
                    <br/>
                    <textarea className={styles.poruka} name="poruka" type="text"  placeholder="Što vas motivira..?"/>
                </div>
                <button className={styles.button}>Pošalji</button>
            </form>
    </section>
    </main>
)

export default Volontiraj