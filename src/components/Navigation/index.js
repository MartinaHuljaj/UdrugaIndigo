import React from 'react'
import {Link} from 'gatsby'
import styles from './style.module.css'
import {nav as navTabs} from '../../constants/const.js'
import {myLocalStorage} from '../../helper'

const loggedIn = () => !!myLocalStorage.getItem('loggedIn')
const Navigation = ({activeTab, useThisStyle})=>{
return (
    <nav className={styles[useThisStyle || 'navigation']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <div className={tab === activeTab ? styles.active : ''}>{tab}</div>
          </Link>)
        )}
                <Link to={'/prijava'}>
            <div onClick={loggedIn() ? () => myLocalStorage.removeItem('loggedIn') : () => {}} onKeyPress={loggedIn() ? () => myLocalStorage.removeItem('loggedIn') : () => {}} 
            role="button" aria-hidden>
                {loggedIn()=='0' ? 'Odjava' : 'Prijava/registracija'}
            </div>
        </Link>
    </nav>
)
}
export default Navigation