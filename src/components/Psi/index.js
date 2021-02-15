import React from 'react'
import styles from './style.module.css'
import Img from 'gatsby-image'
import cover from '../../images/2.png'
import Image from '../Image'
import {useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useLazyQuery } from '@apollo/client'
import {Link} from 'gatsby'



const Psi = ()=>{
  const get_data=gql `query {
    allContentfulPsi(filter: { node_locale: { eq: "en-US" } }){
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


  const vaxxine=gql `query{
    allContentfulPsi{
      nodes (filter: { vaxine: {eq: "Da"}}){
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

  const mladi=gql `query{
    allContentfulPsi(filter: {age: {eq: "12 mjeseci"}, node_locale: { eq: "en-US" }}){
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
  const [Do,{data: datavaxxine} ] = useLazyQuery(vaxxine);
  const [Filter,{data: dataage} ] = useLazyQuery(mladi);
  if(loading)return 'Loading..'
  if(error) return 'error'
  
  return(
    <main>
      <Image slika={cover}/>
      <section className={styles.container}>
        {datavaxxine && datavaxxine.allContentfulPsi?
         ( (datavaxxine.allContentfulPsi.nodes.map(node=>{
            return(
              <Link to={`/psi/${node.slug}`}>
              <div key={node.title} className={styles.post}>
              <Img fixed={node.picture.fixed}  />
              <h3 className={styles.textBottom}>{node.title}/{node.age}</h3>
              </div>
              </Link>
            )
          }))): (data.allContentfulPsi.nodes.map(node=>{
            return(
              <Link to={`/psi/${node.slug}`}>
              <div key={node.title} className={styles.post}>
              <Img fixed={node.picture.fixed}  />
              <h3 className={styles.textBottom}>{node.title}/{node.age}</h3>
              </div>
              </Link>
            )
          }))} 
        {dataage && dataage.allContentfulPsi ? 
         ( (dataage.allContentfulPsi.nodes.map(node=>{
            return(
              <Link to={`/psi/${node.slug}`}>
              <div key={node.title} className={styles.post}>
              <Img fixed={node.picture.fixed}  />
              <h3 className={styles.textBottom}>{node.title}/{node.age}</h3>
              </div>
              </Link>
            )
          }))): null}  
        <button id="b1" onClick={() =>
          Do({
            variables: {vaxine:"Da"}
          })
        }>cijepljen</button> 

       <button id="b2" onClick={() =>
          Filter({
            variables: {age:"12 mjeseci"}
          })
        }>MLADI</button>

        </section>
      

    </main>
  )
}

export default Psi