import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

import headerStyles from "../styles/header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title,
          siteUrl,
          description
        }
      }
    }
  `)

return (<header className={headerStyles.header}>
  <h1>
    <Link className={headerStyles.title} to="/">
      {data.site.siteMetadata.title}
    </Link>
  </h1>
</header>)
}

export default Header
