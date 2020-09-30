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
  observer;

  constructor (props) {
    super (props);
    this.state = {
      headerBg: false
    };
  }

  updateHeaderBg = (entries) => {
    this.setState({ headerBg: entries[0].isIntersecting });
  }

  componentDidMount() {
    this.observer = new IntersectionObserver((entries, observer) => this.updateHeaderBg(entries), { 
      rootMargin: '0px',
      threshold: 0.1
    });
    this.observer.observe(document.querySelector('#header-indicator'));
  }

  componentWillUnmount() {
    this.observer.unobserve(document.querySelector('#header-indicator'));
  }

  render () {
    const { headerBg } = this.state;
    return (
      <StaticQuery
        query={query}
        render={data => {
          return (
            <>
              <SEO pageTitle={this.props.pageTitle} />
              <HeaderWrap bg={headerBg ? `transparent` : `#222222`}>
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
