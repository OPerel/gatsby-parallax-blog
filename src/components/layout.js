import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Header from "./header";
import Footer from './footer';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ParallaxProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Parallax
        y={[-75, 250]}
        styleOuter={{ position: 'relative', zIndex: '-2' }}
      >
        <Footer />
      </Parallax>
    </ParallaxProvider>
  )
}

export default Layout
