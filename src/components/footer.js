import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`{
  site {
    siteMetadata {
      title
      author
    }
  }
}`

const Footer = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { siteMetadata } = data.site;
      return (
        <footer>
          <div className="footer-wrapper">
            <div className="footer-info">
              <h5 dangerouslySetInnerHTML={{ __html: siteMetadata.title }}/>
              <span style={{ fontSize: '0.85rem' }}>© {new Date().getFullYear()}, By Ori Perelman</span>
            </div>
            <div className="contact">
              <a href="mailto: oriperelman@gmail.com">
                <i className="far fa-envelope"></i>
                <span>Drop a line.</span>
              </a>
              <a href={siteMetadata.author} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span>Source and other projects.</span>
              </a>
            </div>
          </div>
          <div className="footer-tri" />
        </footer>
      )
    }}
  />
)

export default Footer;
