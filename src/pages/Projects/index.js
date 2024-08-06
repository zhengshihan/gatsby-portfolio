import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../../Components/Layout";
import * as styles from "../../styles/projects.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Projects({ data }) {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  // State to manage the filter input
  const [filter, setFilter] = useState("");

  // Filter projects based on stack
  const filteredProjects = projects.filter((project) =>
    project.frontmatter.stack.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>My Projects</h2>
        <h3>These are my projects</h3>
        <div className={styles.filterContainer}>
          <input
            type="text"
            placeholder="Filter by stack"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.filterInput}
          />
        </div>
        <div className={styles.projects}>
          {filteredProjects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={getImage(project.frontmatter.thumb)}
                  alt={project.frontmatter.slug}
                />
                <h3>{project.frontmatter.title}</h3>
                <h3>{project.frontmatter.stack}</h3>
                <h3>{project.frontmatter.date}</h3>
              </div>
            </Link>
          ))}
        </div>
        <p className={styles.contact}>my email address is {contact}</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Projectspage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          title
          stack
          date(formatString: "YYYY-MM-DD")
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
        copyright
      }
    }
  }
`;
