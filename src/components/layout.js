import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  // GraphQL Query:
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Layout Component:
  return (
    <div className={container}>
      {/* GraphQL Result: */}
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact Me [not existed]
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
