import React from 'react'
import {Link} from 'gatsby'
import styles from './style.module.css'


const navTabs=[
  {tab:'Psi', to:'/'},
  {tab:'Mačke', to:'/'},
  {tab:'Kontakt', to:'contact'},
  {tab:'Novosti', to:'/'},
  {tab:'Prijava/registracija', to:'/'}
]

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