import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout.js"
import BlogCard from "../components/blogCard.js"

import blogStyles from "../styles/header.module.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql `
    query{
      allMarkdownRemark{
        nodes{
          id,
          timeToRead,
          frontmatter{
            title,
            date,
            author
          }
        }
      }
    }
  `)

  return (<div>
    <Layout>
      {data.allMarkdownRemark.nodes.map((node) => <BlogCard data={node} key={node.id}/>)}
    </Layout>
  </div>)
}

export default BlogPage
