import React from 'react'
import styles from './style.module.css'
/* import inst from './instagram.png'
import face from './facebook.png' */
import {Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {nav2 as navFooter} from '../../constants/const.js'


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
        <a href="https://www.facebook.com/Indigo.udruga" className={styles.logo} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} size="3x" /></a>

        <a href="https://www.instagram.com/udruga.indigo/" className={styles.logo2} target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon icon={faInstagram} size="3x" /></a>
    </nav>

</footer>
)
export default Footer