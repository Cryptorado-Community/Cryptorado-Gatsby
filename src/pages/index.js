import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout.js"

const IndexPage = () => {
  return (<div>
    <Layout>
      <p>
        Blog Page <Link to="/blog">Here</Link>
      </p>
    </Layout>
  </div>);
}

export default IndexPage
