import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Header from "./header";
import Footer from './footer';
import BgImage from 'gatsby-background-image';
import "../assets/allStyles.css"

const Layout = ({ children, pageTitle }) => {
  return (
    <StaticQuery
      query={graphql`{
        file(name: {eq: "bg1.gif"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`} render={data => {(
        <div style={{ position: 'relative' }}>
          <Header pageTitle={pageTitle} />
          <main className="bg-container">
            <BgImage fluid={{data.file.childImageSharp.fluid}}>
              {children}
            </BgImage>
            <div style={{position: 'sticky', bottom: '0'}}>
              <div className="tri" />
            </div>
          </main>
          <Footer />
        </div>
      )}}
    />
  )
}

export default Layout;
