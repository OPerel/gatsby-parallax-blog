import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import '../assets/allStyles.css';

export default ({ pageContext, data, location }) => {
  return(
    <Layout location={location}>
      <div style={{ height: '10vh' }}></div>
      <div className="content-wrapper">
        <Img
          fluid={data.file.childImageSharp.fluid}
        />
        <div className="content">
          <div className="post-body">
            <p dangerouslySetInnerHTML={{ __html: pageContext.post.html }}></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($title: String!) {
    file(name: {eq: $title}, relativeDirectory: {eq: "blog-img"}) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
