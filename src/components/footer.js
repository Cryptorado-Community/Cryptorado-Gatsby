import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

import footerStyles from "../styles/footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          author
        }
      }
    }
  `)

return (<footer className={footerStyles.footer}>
  <h2>
    <Link className={footerStyles.title} to="/">
      By: {data.site.siteMetadata.author}
    </Link>
  </h2>
</footer>)
}

export default Footer
