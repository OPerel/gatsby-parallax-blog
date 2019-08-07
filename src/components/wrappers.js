import React from 'react';
import styled from 'styled-components';

import contentBg from '../images/circuit-board.svg';

const Wrapper = styled.div`
  position: relative;
  width: 85%;
  margin: 8% auto 0;

  @media only screen and (min-width: 770px) {
    width: 65%;
  }
`

const Content = styled.div`
  padding: 20px 0 70px 0;
  background-color: #10202dab;
  color: #94ada8;
  background-image: url(${contentBg});
  background-attachment: ${props => props.page === `post` ? `fixed` : null}
`

const Wrappers = ({ children, page }) => (
  <Wrapper>
    <Content page={page}>
      {children}
    </Content>
  </Wrapper>
)

export default Wrappers;