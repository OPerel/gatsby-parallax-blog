import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';
import "../assets/allStyles.css"

const PostNavDiv = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 50%;
  height: 10vh;
  margin: 8% auto;
`

const ArrowLink = styled.i`
  display: block !important;
  margin: 0 0 3% 0;
  font-size: 1.6rem;
  text-align: center;
`

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`

const PostNav = ({ prev, next }) => (
  <PostNavDiv>
    {next && (
      <div>
        <StyledLink to={next.fields.slug}>
          <ArrowLink className="far fa-arrow-alt-circle-left"></ArrowLink>
          <span>Previous</span>
        </StyledLink>
      </div>
    )}
    {prev && (
      <div>
        <StyledLink to={prev.fields.slug}>
          <ArrowLink className="far fa-arrow-alt-circle-right"></ArrowLink>
          <span>Next</span>
        </StyledLink>
      </div>
    )}
  </PostNavDiv>
)


export default PostNav;
