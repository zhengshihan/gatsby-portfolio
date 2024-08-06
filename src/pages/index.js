import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../Components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h3>Welcome to My Blog</h3>
          <h4>Explore the World of Code</h4>
          <p>
            Hi, I'm Shihan Zheng, a passionate software developer with a love
            for technology and innovation.
          </p>
          <p>
            This blog chronicles my adventures in the coding world and shares
            insights from my personal growth journey.
          </p>
          <Link to="/Projects" className={styles.btn}>
            {" "}
            My Portfolio{" "}
          </Link>
        </div>
        <GatsbyImage image={image} alt="Banner" className={styles.banner} />
      </section>
    </Layout>
  );
}
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "flower.png" }) {
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
