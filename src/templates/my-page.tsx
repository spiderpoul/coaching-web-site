import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout'

export default function MyPage({data: {allMarkdownRemark: {edges }}}) {
  return (
    <Layout>
      <h1></h1>
      {edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>Posted by {post.node.frontmatter.author}</small>
          <br />
          <Link to={post.node.fields.slug}>Read more</Link>
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date
            path
            title
            description
          }
        }
      }
    }
  }
`

