const path = require(`path`) // highlight-line
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` || node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })


    const fileNode =
      node.parent && node.parent !== 'undefined' ? getNode(node.parent) : node
    createNodeField({
      node,
      name: `category`,
      value: fileNode.relativeDirectory
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions // highlight-line
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // highlight-start
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/md-holder.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      }
    })
  })

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/mdx-holder.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug
      }
    })
  })
}
