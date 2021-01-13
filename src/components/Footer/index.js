import React from 'react'
import styles from './style.module.css'
import inst from './instagram.png'
import face from './facebook.png'
import {Link} from 'gatsby'

const navFooter=[
    {tab:'Udomi', to:'/'},
    {tab:'Volontiraj', to:'/'},
    {tab:'Doniraj', to:'/'}
]


const Footer = ({activeTab,useThisStyle})=>(
    <footer className={styles.footer}>
    <ul className={styles.address}>
        <li className={styles.title}>
            UDRUGA INDIGO
        </li>
        <li>Rakitje, Radnička 9</li>
        <li>10000 Zagreb</li>

    </ul>
    <nav className={styles[useThisStyle || 'navigation']}>
        {navFooter.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
    </nav>
    <nav >
        <img src={inst} alt="Instagram" className={styles.logo}/>
        <img src={face} alt="Facebook" className={styles.logo2}/>
    </nav>

</footer>
)
export default Footer