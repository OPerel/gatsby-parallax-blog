import React from 'react';
import { graphql } from 'gatsby';
import BgImage from 'gatsby-background-image';
import Layout from '../components/layout';
import PostNav from '../components/postNav';
import '../assets/allStyles.css';

export default ({ pageContext, data }) => {
  const { fluid } = data.file.childImageSharp;
  const { prev, next } = pageContext;
  return(
    <Layout pageTitle={pageContext.post.frontmatter.title}>
      <div style={{ height: '10vh' }}></div>
      <div className="content-wrapper">
        <div className="content" style={{ backgroundAttachment: 'fixed' }}>
          <p
            style={{ padding: '0 2% 2%' }}
            dangerouslySetInnerHTML={{
            __html: pageContext.post.frontmatter.date
            }}
          />
          <BgImage
            fluid={fluid}
            className="post-img"
            style={{ backgroundAttachment: 'fixed' }}
          />
          <div className="post-body" dangerouslySetInnerHTML={{ __html: pageContext.post.html }} />
          <PostNav prev={prev} next={next} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($image: String!) {
    file(name: {eq: $image}, relativeDirectory: {eq: "blog-img"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
