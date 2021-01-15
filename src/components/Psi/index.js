import React from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/2.png'
import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'
import pic4 from './4.jpg'
const Psi =()=>(
    <main>
        <section>
            <Image slika={cover}/>
        </section>
        <section>
            <div className={styles.row}>
                <div className={styles.galerija}>
                    <div className={styles.picFrame}><img src={pic1}></img>
                        <h2 className={styles.textTop}>Joey / 2 mjeseca</h2>
                        <div className={styles.textBottom}>Očišćen je od nametnika, a uskoro že biti i čipiran...</div>
                    </div>
                    <div className={styles.picFrame}><img src={pic2}></img>
                        <h2 className={styles.textTop}>Joey / 2 mjeseca</h2>
                        <div className={styles.textBottom}>Očišćen je od nametnika, a uskoro že biti i čipiran...</div>   
                    </div>
                    <div className={styles.picFrame}><img src={pic3}></img>
                        <h2 className={styles.textTop}>Joey / 2 mjeseca</h2>
                        <div className={styles.textBottom}>Očišćen je od nametnika, a uskoro že biti i čipiran...</div>
                    </div>
                    <div className={styles.picFrame}><img src={pic4}></img>
                        <h2 className={styles.textTop}>Doge / 8 mjesec</h2>
                        <div className={styles.textBottom}>Očišćen je od nametnika, a uskoro će biti i čipiran...</div>
                    </div>
                </div>
                <div className={styles.forma}>
                    <div><input name="filter" type="text"></input></div>
                    <p className={styles.filterTextTop}>Filteri:</p>
                    <p className={styles.filterText}>vrsta</p>
                    <p className={styles.filterText}>dob</p>
                </div>
            </div>
        </section>
        <section className={styles.bottomBorder}>

        </section>
    </main>
)

export default Psi