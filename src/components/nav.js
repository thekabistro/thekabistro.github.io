import { graphql, StaticQuery, Link } from 'gatsby'
import React, { useState } from 'react'
import './nav.css'

function organizedPagesByCategory(allMarkdownRemark) {
  const pagesByCategory = {}
  // Iterate over all articles
  allMarkdownRemark.edges.forEach(({ node }) => {
    const categoryKey = node.fields.category

    if (!pagesByCategory[categoryKey]) pagesByCategory[categoryKey] = []

    pagesByCategory[categoryKey].push(node)
  })

  return pagesByCategory
}

function NavItem(props) {
  const [isOpen, updateIsOpen] = useState(false)

  return (
    <div
      className="nav-item"
      onMouseOver={() => updateIsOpen(true)}
      onFocus={() => updateIsOpen(true)}
      onMouseLeave={() => updateIsOpen(true)}
      onBlur={() => updateIsOpen(true)}
      toggle={() => updateIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      <span className="title title-font">{props.title} </span>
      {/* {isOpen && props.children} */}
      {props.children}
    </div>
  )
}

function DropdownItem(props) {
  return (
    <div className="dropdown">
      <Link to={props.to}>{props.children}</Link>
    </div>
  )
}

const Nav = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                category
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const pagesByCategory = organizedPagesByCategory(data.allMarkdownRemark)
      console.log(pagesByCategory)
      return (
        <nav className="navbar">
          {Object.keys(pagesByCategory).map((category) => (
            <NavItem title={category}>
              {Object.keys(pagesByCategory[category]).map((key) => (
                <DropdownItem to={pagesByCategory[category][key].fields.slug}>
                  {pagesByCategory[category][key].frontmatter.title}
                </DropdownItem>
              ))}
            </NavItem>
          ))}
        </nav>
      )
    }}
  ></StaticQuery>
)



export default Nav
