/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`query {
    allContentfulMacke {
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
    allContentfulPsi {
      nodes {
        id
        text {
          raw
        }
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

      }
    }

    allContentfulBlogPost{
      nodes {
      
        text{raw}
        title
        slug
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
 
  const res = raw.data.allContentfulMacke.nodes
  const res2=raw.data.allContentfulPsi.nodes
  const res3=raw.data.allContentfulBlogPost.nodes 
 
  res.forEach((e, index, array) => actions.createPage({
    component: path.resolve(`./src/layouts/macke.js`),
    context: {
      ...e,
      next: index < array.length ? array[index + 1] : null,
      prev: index > 0 ? array[index - 1] : null
    },
    path: `macke/${e.slug}`,
    slug: `macke/${e.slug}`
  }))

  res2.forEach((e, index, array) => actions.createPage({
    component: path.resolve(`./src/layouts/psi.js`),
    context: {
      ...e,
      next: index < array.length ? array[index + 1] : null,
      prev: index > 0 ? array[index - 1] : null
    },
    path: `psi/${e.slug}`,
    slug: `psi/${e.slug}`
  }))

  res3.forEach((e, index, array) => actions.createPage({
    component: path.resolve(`./src/layouts/clanak.js`),
    context: {
      ...e,
      next: index < array.length ? array[index + 1] : null,
      prev: index > 0 ? array[index - 1] : null
    },
    path: `novosti/${e.slug}`,
    slug: `novosti/${e.slug}`
  }))
}


