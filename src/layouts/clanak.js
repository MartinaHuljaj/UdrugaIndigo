import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import styles from './style.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

 
const BlogPost = ({ pageContext }) => {
    const { text, title, coverImage, summary, next, prev } = pageContext

    return (
        
        <main className={styles.container}>
        <Header/>
        { <header className={!prev || !next ? styles.headerTwo : ''}>
            {prev && (<Link to={`/novosti/${prev.slug}`}><span>Previous</span></Link>)}
            <h2>
            {title}
            </h2>
            {next && (<Link to={`/novosti/${next.slug}`}><span>Next</span></Link>)}
        </header> }
        <Img fixed={coverImage.fixed} />
        <article>
        {renderRichText(text)}
        </article>
        <Footer/>
        </main>

    )
}
 
export default BlogPost