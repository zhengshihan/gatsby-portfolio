import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../Components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
export default function Home({ data }) {
  console.log(data);
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Welcome to My Blog</h2>
          <h3>Discover the World</h3>
          <p>
            Hi, I'm Shihan Zheng, an aspiring software developer and amateur
            photographer.
          </p>
          <p>
            This blog is a mix of my journey through the world of coding and my
            passion for capturing meaningful moments. Whether it's a piece of
            code or a snapshot of nature, I'm here to share it with you.
          </p>
          <Link to="/Projects" className={styles.btn}>
            {" "}
            My Portfolio{" "}
          </Link>
        </div>
        <GatsbyImage image={image} alt="Banner" />
      </section>
    </Layout>
  );
}
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
