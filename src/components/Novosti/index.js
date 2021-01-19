import React from 'react'
import styles from './style.module.css'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import cover from '../../images/6.png'
import Image from '../Image'


const Naslovna =()=>{
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          summary 
          text{raw}
          title
          slug
          createdAt
          coverImage {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
              
            }
          }
          
        }
      }
    }`)
 
    return (
    <main>
      <Image slika={cover}/>
      <section className={styles.container}>
        <div className={styles.list}>
          {data.allContentfulBlogPost.nodes.map(node => {
            return (
              <Link to={`/novosti/${node.slug}`}>
                <div className={styles.post}>
                  <Img fluid={node.coverImage.fluid}  />
                  <h3 className={styles.datum}>{node.createdAt}</h3>
                  <h3 className={styles.naslov}>{node.title}</h3>
                  <span className={styles.sazetak}>{node.summary}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
     </main>
  )

}

export default Naslovna