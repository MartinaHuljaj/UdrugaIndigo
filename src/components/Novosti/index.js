import React from 'react'
import styles from './style.module.css'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import cover from '../../images/6.png'
import Image from '../Image'


const Naslovna =()=>{
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        nodes {
          summary 
          text{raw}
          title
          slug
          updatedAt
          coverImage {
            fixed(width:300) {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
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
                  <Img fixed={node.coverImage.fixed}  />
                  <h3>{node.title}</h3>
                  <span>{node.summary}</span>
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