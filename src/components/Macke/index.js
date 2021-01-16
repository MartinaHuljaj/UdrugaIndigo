import React from 'react'
import styles from './style.module.css'
import Image from '../Image'
import cover from '../../images/1.png'
import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'
import pic4 from './4.jpg'


const Macke =()=>(
    <main>
        <section>
            <Image slika={cover}/>
        </section>
        <section>
            <div className={styles.row}>
                <div className={styles.galerija}>
                    <button className={styles.picFrame}><img src={pic1} alt=""></img>
                        <h2 className={styles.textTop}>Smile Cat/ 2 mjeseca</h2>
                        <div className={styles.textBottom}>Preparing to pop!</div>
                    </button>
                    <button className={styles.picFrame}><img src={pic2} alt=""></img>
                        <h2 className={styles.textTop}>Pop Cat / 2 mjeseca</h2>
                        <div className={styles.textBottom}>He pop!</div>   
                    </button>
                    <button className={styles.picFrame}><img src={pic3} alt=""></img>
                        <h2 className={styles.textTop}>Joey / 2 mjeseca</h2>
                        <div className={styles.textBottom}>Očišćen je od nametnika, a uskoro že biti i čipiran...</div>
                    </button>
                    <button className={styles.picFrame}><img src={pic4} alt=""></img>
                        <h2 className={styles.textTop}>Doge / 8 mjesec</h2>
                        <div className={styles.textBottom}>Očišćen je od nametnika, a uskoro će biti i čipiran...</div>
                    </button>
                </div>
                <div className={styles.forma}>
                    <div><input name="filter" type="text"></input></div>
                    <div className={styles.filterTextTop}>Filteri:</div>
                    <div className={styles.filterText}>vrsta</div>
                    <div className={styles.filterText}>dob (mjeseci)</div>
                </div>
            </div>
        </section>
        <section className={styles.bottomBorder}>

        </section>
    </main>
)


export default Macke 