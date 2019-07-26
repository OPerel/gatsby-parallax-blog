import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Parallax } from 'react-scroll-parallax';
import Header from "./header";
import Footer from './footer';
import "../assets/allStyles.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // console.log('layout', location);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="bg-container">
        {children}
        <div style={{position: 'sticky', bottom: '0'}}>
          <div className="tri" />
        </div>
      </main>
      <Parallax y={[-100, 221]}>
        <Footer location={location} />
      </Parallax>
    </>
  )
}

export default Layout
