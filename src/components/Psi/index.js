import React, { useState } from 'react'
import styles from './style.module.css'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import cover from '../../images/2.png'
import Image from '../Image'




export default function Psi(){

  const data = useStaticQuery(graphql`query {
    allContentfulPsi (filter: { node_locale: { eq: "en-US" } }){
      nodes {
          vaxine
          title
          slug
          age
          picture {
            fixed(width: 300, height:300) {
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
  const fullData=data.allContentfulPsi.nodes
  
  const [arrayToShow, setArray]=useState(data.allContentfulPsi.nodes)
  const filters=[12, "Da"]

    return(
      <main>
        <section className={styles.container}>
        <Image slika={cover}/>
        <div className={styles.boxContainer}>
          <div className={styles.buttonContainer}>
          <p className={styles.filterText}>Pretražite po imenu</p>
            <input className={styles.inputBar} onChange={e=>{
              const value=e.target.value;
              const newArray=fullData.filter((node)=>node.title.includes(value));
              setArray(newArray)
            }}/>

            <button onClick={()=>{
            const filteredData=fullData.filter(
              node=>node.age<=filters[0]
            );setArray(filteredData)}}>Do godine dana</button>

            <button onClick={()=>{
            const filteredData=fullData.filter(
            node=>node.vaxine==filters[1]
            );setArray(filteredData)}}>Cijepljeni</button>

            <button onClick={()=>setArray(fullData)}>Prikaži sve</button>
              
          </div>
          <div className={styles.gallery}>
            {arrayToShow.map(node => {
            return (
                <Link to={`/psi/${node.slug}`}>
                <div className={styles.post}>
                <Img fixed={node.picture.fixed} className={styles.imgObj} />
                <h3 className={styles.textBottom}>{node.title}/mjeseci: {node.age}</h3>
                </div>
                </Link>
              )
            })} 
          </div>
         </div>
        </section>

      </main>
    )
}


 