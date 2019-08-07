import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import Img from 'gatsby-image';

const PostLinkWrap = styled.div`
  width: 85%;
  margin: 5% auto;
`

const PostLinkDate = styled.p`
  margin-bottom: 10px;
`

const StyledLink = styled(Link)`
  color: #94ada8;

  :hover {
    color: #94ada8;
  }
`

const PostLinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 770px) {
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 2%;
    align-items: end;
    margin-bottom: 1rem;
  }
`

const PostLinkExcerpt = styled.div`
  & > h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  & > p {
    margin-bottom: 10px;
  }
`

const PostLinkImg = styled(Img)`
  grid-row-start: 1;
  margin-bottom: 5%;
  transition: 0.3s;

  @media only screen and (min-width: 770px) {
    grid-row-start: initial;
    margin: 0;
  }

  ${StyledLink}:hover & {
    filter: brightness(1.2);
  }
`

const PostLink = ({ postData, image }) => (
  <PostLinkWrap>
    <PostLinkDate dangerouslySetInnerHTML={{ __html: postData.frontmatter.date }}></PostLinkDate>
    <StyledLink to={postData.fields.slug}>
      <PostLinkGrid>
        <PostLinkExcerpt dangerouslySetInnerHTML={{ __html: postData.excerpt }} />
        <PostLinkImg fixed={image} className="post-thumbnail" />
      </PostLinkGrid>
    </StyledLink>
  </PostLinkWrap>
)

export default PostLink;
