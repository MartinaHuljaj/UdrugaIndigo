import React from 'react'
import styles from './style.module.css'


const Image=function Imagefun({slika}){
    return <img src={slika} alt='pic' className={styles.image}/>
    
}

/*const HomeImage = () =>(
   /* <section className={styles.image}></section>
    Image(naslovna)
)*/
export default Image