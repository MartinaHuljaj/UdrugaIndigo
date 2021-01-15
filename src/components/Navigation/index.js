import React from 'react'
import {Link} from 'gatsby'
import styles from './style.module.css'
import {nav as navTabs} from '../../constants/const.js'

const loggedIn = () => !!localStorage.getItem('loggedIn')

const Navigation = ({activeTab, useThisStyle})=>(
    <nav className={styles[useThisStyle || 'navigation']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <div className={tab === activeTab ? styles.active : ''}>{tab}</div>
          </Link>)
        )}
                <Link to={'/prijava'}>
            <div onClick={loggedIn() ? () => localStorage.removeItem('loggedIn') : () => {}} onKeyPress={loggedIn() ? () => localStorage.removeItem('loggedIn') : () => {}} 
            role="button" aria-hidden>
                {loggedIn() ? 'Odjava' : 'Prijava/registracija'}
            </div>
        </Link>
    </nav>
)
export default Navigation