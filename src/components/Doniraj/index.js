import React from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/3.png'

const Doniraj =()=>(
    <main>
    <Image slika={cover}/>
    <section className={styles.section}>
        <p className={styles.p1}>I najmanja donacija znači puno!<br/>Uljepšaj život našim ljubimcima dok ne pronađu svoj zauvijek dom.</p>
    </section>
    <section className={styles.section}>
        <p className={styles.p2}>Podaci za uplatu<br/><br/>IBAN: HR 112XXX<br/>Donacijski halofon: 060 980 980<br/>Paypal: udruga.indigo@gmail.com<br/><br/>S naznakom: za potrebštine</p>
    </section>
    <section className={styles.section}>
        <p className={styles.p3}>Hvala vam na vašoj pomoći!</p>
    </section>
    </main>
)

export default Doniraj