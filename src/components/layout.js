/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import Helmet from "react-helmet"
import Header from "./header"
import Footer from "../components/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <main>
        <Header />
        {children}

        <Footer data={data}>
          Backgrounds made in Cinema 4D,iOs app in Swift,site in React.
          <a href="mailto:karthik.nishanth06@gmail.com">Email us </a>to ask
          anything,© 2020
        </Footer>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
