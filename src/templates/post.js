import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BgImage from 'gatsby-background-image';
import Layout from '../components/layout';
import Wrappers from '../components/wrappers';
import PostNav from '../components/postNav';

const PostDate = styled.p`
  padding: 0 2% 2%;
`

const StyledBgImg = styled(BgImage)`
  width: 100%;
  height: 40vh;
`

const PostBody = styled.div`
  width: 85%;
  margin: 5% auto;

  @media only screen and (min-width: 770px) {
    width: 75%;
  }
`

export default ({ pageContext, data }) => {
  const { fluid } = data.file.childImageSharp;
  const { prev, next } = pageContext;
  return(
    <Layout pageTitle={pageContext.post.frontmatter.title}>
      <div style={{ height: '10vh' }}></div>
      <Wrappers page='post'>
        <PostDate dangerouslySetInnerHTML={{ __html: pageContext.post.frontmatter.date }} />
        <StyledBgImg
          fluid={fluid}
          style={{ backgroundAttachment: 'fixed' }}
        />
        <PostBody dangerouslySetInnerHTML={{ __html: pageContext.post.html }} />
        <PostNav prev={prev} next={next} />
      </Wrappers>
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
