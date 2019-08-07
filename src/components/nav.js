import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavWrap = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 50%;
`

const StyledLink = styled(Link)`
  margin-right: 10%;
`

const Nav = () => (
  <NavWrap>
    <StyledLink
      to='/'
      activeStyle={{ textDecoration: 'underline' }}
    >
      Blog
    </StyledLink>
    <StyledLink
      to='/about'
      activeStyle={{ textDecoration: 'underline' }}
    >
      About Me
    </StyledLink>
  </NavWrap>
)


export default Nav;
