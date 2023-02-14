import {  graphql, Link } from "gatsby"
import * as React from "react"
import Layout from '../Components/Layout'
import * as styles from "../styles/home.module.css"
import  { GatsbyImage, getImage }  from 'gatsby-plugin-image'
export default function Home({data}) {
  console.log(data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return  (
          <Layout>  
            <section className={styles.header}>
              <div>              
                <h2>aaaaaaaaaa</h2>  
                <h3>This is h3</h3>
                <p>this is a paragraph</p>
                <Link to='/Projects' className={styles.btn}> My Portfolio </Link>
              </div>
              <GatsbyImage image={image} alt="Banner" />
            </section>
          </Layout>
          
  ) 
}
export const query= graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          )
    }
  }
}`