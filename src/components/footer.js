import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const query = graphql`{
  site {
    siteMetadata {
      title
      author
    }
  }
}`

const FooterWrap = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45vh;
  display: flex;
  align-items: center;
  background-color: #000026;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 85%;

  @media only screen and (min-width: 770px) {
    width: 65%;
  }
`

const FooterSection = styled.div`
  width: 50%;
  z-index: 4;
`

const FooterHeader = styled.h5`
  margin-bottom: 0.3rem;
  font-size: 1em;
`

const StyledLink = styled.a`
  display: block;
`

const LinkIcon = styled(FontAwesomeIcon)`
  margin: 0 5% 0 0;
  font-size: 1.3rem;
`

const FooterTri = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  border-style: solid;
  border-width: 38vh 100vw 0 0;
  border-color: transparent #461e1075 transparent transparent;
`

const Footer = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { siteMetadata } = data.site;
      return (
        <FooterWrap>
          <FooterContent>
            <FooterSection>
              <FooterHeader dangerouslySetInnerHTML={{ __html: siteMetadata.title }}/>
              <span style={{ fontSize: '0.85rem' }}>
                © {new Date().getFullYear()}, By
                <a
                  href="https://www.oriperelman.com"
                  target="_blank"
                  rel="noopener"
                > Ori Perelman
                </a>
              </span>
            </FooterSection>
            <FooterSection>
              <StyledLink href="mailto: oriperelman@gmail.com">
                <LinkIcon icon={faEnvelope} />
                <span>Drop a line.</span>
              </StyledLink>
              <StyledLink href={siteMetadata.author} target="_blank" rel="noopener noreferrer">
                <LinkIcon icon={faGithub} />
                <span>Source and other projects.</span>
              </StyledLink>
            </FooterSection>
          </FooterContent>
          <FooterTri />
        </FooterWrap>
      )
    }}
  />
)

export default Footer;
