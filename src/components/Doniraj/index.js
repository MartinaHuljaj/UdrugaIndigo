import React from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/3.png'

const Doniraj =()=>(
    <main>
        <section className={styles.bigBox}>
            <Image slika={cover}/>
            <section className={styles.container}>
                <div className={styles.smallContainer}>
                    <p className={styles.p1}>I najmanja donacija znači puno!<br/>Uljepšaj život našim ljubimcima dok ne pronađu svoj zauvijek dom.<br/>Donacije su potpuno dobrovoljne i nepovratne.<br/><br/>Podaci za uplatu:</p>
                    <p className={styles.p2}>IBAN: HR 112XXX<br/>Donacijski halofon: 060 980 980<br/>Paypal: udruga.indigo@gmail.com<br/>Naznaka: Potrepštine</p>
                    <p className={styles.p3}>Hvala vam na vašoj pomoći!</p>
                </div>
            </section>
    </section>
    </main>
)

export default Doniraj