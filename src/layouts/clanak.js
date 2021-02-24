import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import styles from './clanak.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

 
const BlogPost = ({ pageContext }) => {
    const { text, title, coverImage, createdAt } = pageContext

    return (
        
        <main >
            <Header/>
            <section className={styles.bigBox}>   
            <Img fluid={coverImage.fluid} className={styles.image} />
            <div className={styles.borderContainer}>
                <div className={styles.container}>
                    <h1 className={styles.naslov}>{title}</h1>
                    
                    <article className={styles.clanak}>
                        {renderRichText(text)}
                    </article>
                </div>
            </div>
            </section>
            <Footer/>
        </main>

    )
}
 
export default BlogPost