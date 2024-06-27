import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  const { copyright } = data.site.siteMetadata;
  return (
    <nav>
      <h1>{copyright}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Projects">Blogs</Link>
      </div>
    </nav>
  );
}
