import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import Nav from './nav'
import './layout.css'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Link to="/" className="big-title">
          <h2>Kabir Kuriyan</h2>
        </Link>
        <Nav />
      </header>

      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
