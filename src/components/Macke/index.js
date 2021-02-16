import React, { useState } from 'react'
import styles from './style.module.css'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import cover from '../../images/1.png'
import Image from '../Image'
import gql from 'graphql-tag'



export default function Macke(){

  const data = useStaticQuery(graphql`query {
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
  }`)
  const fullData=data.allContentfulMacke.nodes
  
  
  const [arrayToShow, setArray]=useState(data.allContentfulMacke.nodes)
  const filters=[12, "Da"]

    return(
        <main>
            <Image slika={cover}/>
            <section className={styles.container}>
                <button onClick={()=>{
                  const filteredData=fullData.filter(
                    node=>node.age<=filters[0]
                  );
                  setArray(filteredData)}}>do godine dana</button>
                    <button onClick={()=>{
                  const filteredData=fullData.filter(
                    node=>node.vaxine==filters[1]
                  );
                  setArray(filteredData)}}>Cijepljen</button>

                <button className={styles.row} onClick={()=>setArray(fullData)}>Prikazi sve</button>
                <h3>Pretražite po imenu</h3>
                <input onChange={e=>{
                  const value=e.target.value;
                  const newArray=fullData.filter((node)=>node.title.includes(value));
                  setArray(newArray)
                }}/>
                {arrayToShow.map(node => {
                return (
                    <Link to={`/macke/${node.slug}`}>
                    <div className={styles.post}>
                    <Img fixed={node.picture.fixed}  />
                    <h3 className={styles.textBottom}>{node.title}/{node.age} mjeseci</h3>
                    </div>
                    </Link>
            )
          })} 
            </section>

        </main>
    )
}


 