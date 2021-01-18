import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import styles from './style.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

 
const BlogPost = ({ pageContext }) => {
    const { text, title, coverImage } = pageContext

    return (
        
        <main >
        <Header/>
        
        <Img fluid={coverImage.fluid} className={styles.image} />
        <h1>{title}</h1>
        
        <article>
        {renderRichText(text)}
        </article>
        <Footer/>
        </main>

    )
}
 
export default BlogPost