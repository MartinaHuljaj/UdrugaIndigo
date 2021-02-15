import React, { useState } from 'react'
import styles from './style.module.css'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import cover from '../../images/1.png'
import Image from '../Image'
import gql from 'graphql-tag'



export default function Macke(){

  const raw = gql`query {
    allContentfulMacke (filter: { node_locale: { eq: "en-US" } }){
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
  const fullData=raw.data.allContentfulMacke.nodes
  const [arrayToShow, setArray]=useState(raw.data.allContentfulMacke.nodes)
  const filters=["Axel"]

    return(
        <main>
            <Image slika={cover}/>
            <section className={styles.container}>
                <button onClick={()=>{
                  const filteredData=fullData.filter(
                    node=>node.title.find("Axel")
                  );
                  setArray(filteredData)}}>Filtriraj</button>

                <div className={styles.row} onClick={()=>setArray(fullData)}>Reset</div>
                {arrayToShow.map(node => {
                return (
                    <Link to={`/macke/${node.slug}`}>
                    <div className={styles.post}>
                    <Img fixed={node.picture.fixed}  />
                    <h3 className={styles.textBottom}>{node.title}/{node.age}</h3>
                    </div>
                    </Link>
            )
          })} 
            </section>

        </main>
    )
}


 