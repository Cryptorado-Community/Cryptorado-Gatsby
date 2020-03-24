import React from "react"
// import {Link, graphql, useStaticQuery} from "gatsby"

import Header from "header.js"
import Footer from "footer.js"

const Layout = (props) => {

return (
<div>
  <Header/>
  {props.children}
  <Footer/>
</div>
)
}

export default Layout
