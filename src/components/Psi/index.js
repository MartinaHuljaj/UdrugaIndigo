import React from 'react'
import styles from './style.module.css'
import Img from 'gatsby-image'
import cover from '../../images/2.png'
import Image from '../Image'
import {useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import {Link} from 'gatsby'



const Psi = ()=>{
  const get_data = gql`query{
    allContentfulPsi (filter: { node_locale: { eq: "en-US" } }) {
      nodes {
          vaxine
          title
          slug
          age
          picture {
            fixed(width: 300) {
              aspectRatio
              base64
              height
              src
              srcSet
              srcSetWebp
              srcWebp
              width
            }
          }
          text {
            raw
          }
        }
    }
  }`
  const { loading, error, data }=useQuery(get_data)
  if(loading)return 'Loading..'
  if(error) return 'error'

  return(
    <main>
      <Image slika={cover}/>
      <section className={styles.container}>
        {data.nodes.map(node=>{
          return(
            <Link to={`/psi/${node.slug}`}>
            <div key={node.title} className={styles.post}>
            <h3 className={styles.textBottom}>{node.title}/{node.age}</h3> 
            </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}

export default Psi