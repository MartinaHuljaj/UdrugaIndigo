import React from 'react'
import {Link} from 'gatsby'
import styles from './style.module.css'
import {nav as navTabs} from '../../constants/const.js'



const Navigation = ({activeTab, useThisStyle})=>(
    <nav className={styles[useThisStyle || 'navigation']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
    </nav>
)
export default Navigation