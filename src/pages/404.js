import React from "react";
import { Link } from "gatsby";
import Layout from "../Components/Layout";

export default function notFound() {
  return (
    <Layout>
      <div>
        <h1>Page Not Found</h1>
        <p>
          Oops! It seems you've stumbled upon a page that doesn't exist. Whether
          you were looking for a technical tutorial or some of my latest
          photography, I apologize for the inconvenience. Please use the
          navigation menu to find your way back or head to the{" "}
          <Link to="/">homepage</Link> to explore my blog. Thank you for
          visiting!
        </p>
      </div>
    </Layout>
  );
}
