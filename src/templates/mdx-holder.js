import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function MDTemplate({ data }) {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`
