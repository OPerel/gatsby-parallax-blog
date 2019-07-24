import React from "react";
import { graphql } from "gatsby";

import { Parallax } from 'react-scroll-parallax';
import Layout from "../components/layout";
import PostLink from '../components/postLink';
// import Footer from '../components/footer'
import '../assets/allStyles.css';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout loc='home'>
      <div className="hero">
        <Parallax y={[-500, 500]}>
          <span style={{margin: '10px'}}>Hello Parallax!</span>
        </Parallax>
        <Parallax y={[0, 0]}>
          <span style={{margin: '10px'}}>Hello Parallax!</span>
        </Parallax>
      </div>
      <div className="posts">
        {
          edges.map(post => {
            return (
              <PostLink
                key={post.node.id}
                postData={post.node}
              />
            )
          })
        }
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
        excerpt(format: HTML)
      }
    }
  }
}`

export default IndexPage;
