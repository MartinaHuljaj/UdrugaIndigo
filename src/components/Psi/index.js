import React from 'react'
import styles from './style.module.css'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import cover from '../../images/2.png'
import Image from '../Image'

const Psi =()=>{
    const data=useStaticQuery(graphql`
    query {
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
    }`)

    return(
        <main>
            <Image slika={cover}/>
            <section className={styles.container}>
                <div className={styles.row}>
                {data.allContentfulPsi.nodes.map(node => {
                return (
                    <Link to={`/psi/${node.slug}`}>
                    <div className={styles.post}>
                    <Img fixed={node.picture.fixed}  />
                    <h3 className={styles.textBottom}>{node.title}/{node.age}</h3>
                    </div>
                    </Link>
            )
          })}  

                </div>
            </section>

        </main>
    )
}

export default Psi