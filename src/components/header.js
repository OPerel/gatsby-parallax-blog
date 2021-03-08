import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from './seo';
import Nav from './nav';
 
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
  padding: 3% 0;
  transition: 0.4s;
  background-color: ${props => props.bg};

  @media only screen and (min-width: 770px) {
    padding: 1.5% 0;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > h1 {
    margin: 0 0 0 10%;
    font-size: 1rem;

    @media only screen and (min-width: 770px) {
      font-size: 1.1rem;
    }
  }
`

class Header extends React.Component {
  observer;

  constructor (props) {
    super (props);
    this.state = {
      headerBg: true
    };
  }

  updateHeaderBg = (isIntersecting) => {
    this.setState({ headerBg: isIntersecting });
  }

  componentDidMount() {
    this.observer = new IntersectionObserver((entries, observer) => this.updateHeaderBg(entries[0].isIntersecting), { 
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
                  <h1 dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.title }} />
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
