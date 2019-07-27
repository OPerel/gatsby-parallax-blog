import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PostNav from '../components/postNav';
import '../assets/allStyles.css';

export default ({ pageContext, data }) => {
  const { publicURL } = data.file;
  const { prev, next } = pageContext;
  return(
    <Layout>
      <div style={{ height: '10vh' }}></div>
      <div className="content-wrapper">
        <div className="content" style={{ backgroundAttachment: 'fixed' }}>
          <p
            style={{ padding: '0 2% 2%' }}
            dangerouslySetInnerHTML={{
            __html: pageContext.post.frontmatter.date
            }}
          />
          <div className="post-img" style={{ backgroundImage: `url(${publicURL})`}} />
          <div className="post-body" dangerouslySetInnerHTML={{ __html: pageContext.post.html }} />
          <PostNav prev={prev} next={next} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($title: String!) {
    file(name: {eq: $title}, relativeDirectory: {eq: "blog-img"}) {
      name
      publicURL
    }
  }
`
