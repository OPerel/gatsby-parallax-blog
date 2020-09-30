import React from "react";
import styled from 'styled-components';

import Header from "./header";
import Footer from './footer';
import BottomTri from './bottomTri';
import BgImg from '../images/bg1.webp';
import GlobalStyle from '../theme/allStyles';

const LayoutWrap = styled.div`
 
`

const Main = styled.main`
  position: relative;
  z-index: 2;
  margin-bottom: 44vh;
  background-image: url(${BgImg});
  background-size: contain;
  background-blend-mode: overlay;
  background-color: #00000035;

  ::before,
  ::after {
    background-blend-mode: overlay;
    background-color: #00000035;
  }

  @media only screen and (min-width: 770px) {
    background-blend-mode: overlay;
    background-color: #00000084;
  
    ::before,
    ::after {
      background-blend-mode: overlay;
      background-color: #00000084;
    }
  }
`

const Layout = ({ children, pageTitle }) => (
  <LayoutWrap>
    <GlobalStyle />
    <Header pageTitle={pageTitle} />
    <Main>
      <div id="header-indicator"></div>
      {children}
      <BottomTri />
    </Main>
    <Footer />
  </LayoutWrap>
)


export default Layout;
