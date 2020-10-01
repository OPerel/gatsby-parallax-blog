import React from "react";
import { graphql } from "gatsby";
import { Parallax } from 'react-scroll-parallax';
import Layout from "../components/layout";
import PostLink from '../components/postLink';
import Hero from '../components/hero';
import Wrappers from '../components/wrappers';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const images = data.allFile.edges;
  return (
    <Layout>
      <Hero />
      <Wrappers>
        {
          edges.map(({ node }) => {
            const image = images.filter(image => image.node.name === node.frontmatter.image);
            return (
              <Parallax key={node.id} y={[100, -140 ]}>
                <PostLink
                  key={node.id}
                  postData={node}
                  image={image[0].node.childImageSharp.fixed}
                />
              </Parallax>
            )
          })
        }
      </Wrappers>
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
          image
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
