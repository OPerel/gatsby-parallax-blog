import React from "react";
import { graphql } from "gatsby";

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Layout from "../components/layout";
import PostLink from '../components/postLink';
import '../assets/allStyles.css';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
    <ParallaxProvider>
      <div className="index-layout">
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
      </div>
    </ParallaxProvider>
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
