import React from "react";
import { graphql } from "gatsby";

import { Parallax } from 'react-scroll-parallax';
import Layout from "../components/layout";
import PostLink from '../components/postLink';
// import Footer from '../components/footer'
import '../assets/allStyles.css';

const IndexPage = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark;
  const images = data.allFile.edges;
  return (
    <Layout location={location}>
      <div className="hero">
        <Parallax y={[-500, 500]}>
          <span style={{margin: '10px'}}>Hello Parallax!</span>
        </Parallax>
        <Parallax y={[0, 0]}>
          <span style={{margin: '10px'}}>Hello Parallax!</span>
        </Parallax>
      </div>
      <div className="content-wrapper">
        <div className="content">
          {
            edges.map(({ node }) => {
              const image = images.filter(image => image.node.name === node.frontmatter.title);
              return (
                <PostLink
                  key={node.id}
                  postData={node}
                  image={image[0].node.childImageSharp.fixed}
                />
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`{
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        id
        frontmatter {
          author
          date
          title
        }
        fields {
          slug
        }
        excerpt(format: HTML)
      }
    }
  }
  allFile(filter: {relativeDirectory: {eq: "blog-img"}}) {
    edges {
      node {
        name
        childImageSharp {
          fixed(width: 180, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}`

export default IndexPage;
