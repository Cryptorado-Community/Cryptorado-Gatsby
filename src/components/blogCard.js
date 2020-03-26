import React from "react"
import {Link} from "gatsby"

import blogCardStyles from "../styles/blogCard.module.css"

const BlogCard = (props) => {
  // Props of form (from ~/pages/blog.js):
  // {
  //       id,
  //       timeToRead,
  //       frontmatter{
  //         title,
  //         date,
  //         author
  //       }
  //     }
  //   }
  // }

  return (<div className={blogCardStyles.container}>
    <h3>
      <Link className={blogCardStyles.title} to="/">
        {props.data.frontmatter.title}
      </Link>
    </h3>
    <h4>By: {props.data.frontmatter.author}, <em>{props.data.frontmatter.date}</em></h4>
    <h5>Read Time: {props.data.timeToRead} minuets</h5>
    <hr></hr>
  </div>)
}

export default BlogCard
