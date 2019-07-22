import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Header from "./header";
import Footer from './footer';
import "../assets/allStyles.css"

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
      <main style={{ position: 'relative' }}>
        {children}
        <Parallax y={[0, 0]} className="tri"></Parallax>
      </main>
      <Parallax
        y={[-60, 165]}
        styleOuter={{ position: 'relative', zIndex: '-2' }}
      >
        <Footer />
      </Parallax>
    </ParallaxProvider>
  )
}

export default Layout
