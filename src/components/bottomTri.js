import React from 'react';
import styled from 'styled-components';

const TriWrap = styled.div`
  position: sticky;
  bottom: 0;
`

const Tri = styled.div`
  position: absolute;
  bottom: calc(-75px + 1px);
  left: 0;
  z-index: 2;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 120px 100vw 75px 0;
  border-color: transparent #101027 transparent transparent;
`

const BottomTri = () => (
  <TriWrap>
    <Tri />
  </TriWrap>
)

export default BottomTri;