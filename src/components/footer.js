import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

import footerStyles from "../styles/footer.module.css"

const Footer = () => {
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

return (<footer className={footerStyles.footer}>
  <h2>
    <Link className={footerStyles.title} to="/">
      {data.site.siteMetadata.title}
    </Link>
  </h2>
</footer>)
}

export default Footer
