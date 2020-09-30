import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

const PostNavWrap = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 50%;
  height: 10vh;
  margin: 8% auto;
`

const ArrowLink = styled(FontAwesomeIcon)`
  display: block !important;
  margin: 0 auto;
  font-size: 1.6rem;
  text-align: center;
`

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`

const PostNav = ({ prev, next }) => (
  <PostNavWrap>
    {next && (
      <div>
        <StyledLink to={next.fields.slug}>
          <ArrowLink icon={faArrowAltCircleLeft} />
          <span>Previous</span>
        </StyledLink>
      </div>
    )}
    {prev && (
      <div>
        <StyledLink to={prev.fields.slug}>
          <ArrowLink icon={faArrowAltCircleRight} />
          <span>Next</span>
        </StyledLink>
      </div>
    )}
  </PostNavWrap>
)


export default PostNav;
