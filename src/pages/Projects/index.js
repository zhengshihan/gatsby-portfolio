import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../Components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Projects({data}) {
  console.log(data)
  const projects = data.projects.nodes
  const contact =data.contact.siteMetadata.contact
  return (
      <Layout>
        <div className={styles.portfolio}>
          <h2>My portfolio</h2>
          <h3>This is my portfolio</h3>
          <div className={styles.projects}>
            {projects.map(project =>(
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage image={getImage(project.frontmatter.thumb)} alt={project.frontmatter.slug}   />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))}
            
          </div>
          <p>my email address is {contact}</p>
        </div>
      </Layout>
    
  )
}
export const query= graphql`
query Projectspage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}`