import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SEO from './seo';
import Nav from './nav'

const query = graphql`{
  site {
    siteMetadata {
      title
    }
  }
}`

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
              <header
                style={{
                  background: scrollPos < 100 ? `transparent` : `#222222`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <div id='logo'></div>
                  <h1
                    dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.title }}
                    style={{ margin: 0 }}
                  />
                </div>
                <Nav />
              </header>
            </>
          )
        }}
      />
    )
  }
}

export default Header
