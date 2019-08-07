import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from './seo';
import Nav from './nav';
import logoImg from '../images/logo.svg';
 
const query = graphql`{
  site {
    siteMetadata {
      title
    }
  }
}`

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  transition: 0.4s;
  background-color: ${props => props.bg};
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Logo = styled.div`
  width: 100%;
  height: 80%;
  margin: 0 5%;
  background-image: url(${logoImg});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;

  @media only screen and (min-width: 770px) {
    width: 75px;
    height: 75px;
  }
`

class Header extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      scrollPos: 0
    }
  }

  updateScrollPos = () => {
    this.setState({ scrollPos: window.scrollY });
  }

  componentDidMount() {
    document.addEventListener('scroll', this.updateScrollPos);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.updateScrollPos);
  }

  render () {
    const { scrollPos } = this.state;
    return (
      <StaticQuery
        query={query}
        render={data => {
          return (
            <>
              <SEO pageTitle={this.props.pageTitle} />
              <HeaderWrap bg={scrollPos < 100 ? `transparent` : `#222222` }>
                <LeftSection>
                  <Logo />
                  <h1
                    dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.title }}
                    style={{
                      margin: 0,
                      fontSize: `1.1rem`
                    }}
                  />
                </LeftSection>
                <Nav />
              </HeaderWrap>
            </>
          )
        }}
      />
    )
  }
}

export default Header
