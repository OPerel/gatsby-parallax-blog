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
    <Layout>
      <div className="hero">
        <div>
          <Parallax y={[-200, 120]}>
            <h1>Welcome!</h1>
          </Parallax>
          <Parallax y={[-500, 500]}>
            <h3>This is my cool parallax blog.</h3>
          </Parallax>
        </div>
      </div>
      {/*<Parallax y={[80, -30]}>*/}
        <div className="content-wrapper">
          <div className="content">
            {
              edges.map(({ node }, idx) => {
                const image = images.filter(image => image.node.name === node.frontmatter.title);
                return (
                  <Parallax key={node.id} y={[70, -70]} styleOuter={{ borderBottom: idx < edges.length - 1 ? 'solid 0.5px' : null }}>
                    <PostLink
                      key={node.id}
                      postData={node}
                      image={image[0].node.childImageSharp.fixed}
                    />
                  </Parallax>
                )
              })
            }
          </div>
        </div>
      {/*</Parallax>*/}
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
