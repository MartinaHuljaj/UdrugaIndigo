import React from 'react'
import {Link} from 'gatsby'
import styles from './style.module.css'
import {nav as navTabs} from '../../constants/const.js'

const loggedIn = () => !!localStorage.getItem('loggedIn')

const Navigation = ({activeTab, useThisStyle})=>(
    <nav className={styles[useThisStyle || 'navigation']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
                <Link to={'/prijava'}>
            <li onClick={loggedIn() ? () => localStorage.removeItem('loggedIn') : () => {}}>
                {loggedIn() ? 'Odjava' : 'Prijava/registracija'}
            </li>
        </Link>
    </nav>
)
export default Navigation