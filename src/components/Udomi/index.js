import React, {useState} from 'react'
import {navigate} from 'gatsby'
import styles from './style.module.css'
import {myLocalStorage} from '../../helper'
import Image from '../Image'
import cover from '../../images/4.png'


const Udomi =()=>{
    const [user, setUser] = useState(myLocalStorage.getItem('loggedIn'))

    if (!user) {
      setTimeout(() => navigate('/prijava'), 4000)
      return(
      <main>
            <section className={styles.redirectContainer}>
            <Image slika={cover}/>
                <p className={styles.failedLogin}>
                    Za udomiti ljubimca potrebna je prijava.<br/>Preusmjeravamo vas na stranicu za prijavu...
                </p>
            </section>
      </main>
      )
    }
  

return(
    <main>
        <section className={styles.goodContainer}>
        <Image slika={cover}/>
        <section >
            <p className={styles.p}>Želiš udomiti jednog od naših ljubimaca?<br/> Ispuni formu za udomljavanje i mi ćemo ti se javiti s terminom za upoznavanje s ljubimcem što prije!</p>
        </section>
        <form className={styles.form}>
            <div>
                <label className={styles.label} htmlFor="ime">Ime ljubimca:</label>
                <br/>
                <input  name="ime" type="text" placeholder="Ime željenog ljubimca..."/>
            </div>
            <div>
                <label className={styles.label} htmlFor="kontakt">E-mail:</label>
                <br/>
                <input name="kontakt" type="text" placeholder="Vaša e-mail adresa ovdje..."/>
            </div>
            <div>
                <label className={styles.label} htmlFor="drugi">Drugi ljubimci?</label>
                <br/>
                <input name="drugi" type="text" placeholder="Imate li drugih ljubimaca?"/>
            </div>
            <div>
                <label className={styles.label} htmlFor="vrijeme">Datum upoznavanja:</label>
                <br/>
                <input name="vrijeme" type="date"/>
            </div>
            <button className={styles.button}>Udomi</button>
        </form>
        </section>
    </main>  
)}

export default Udomi
