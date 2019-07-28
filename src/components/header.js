import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import SEO from './seo';

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
                  <h1 style={{ margin: 0 }}>
                    {data.site.siteMetadata.title}
                  </h1>
                </div>
                <nav>
                  <Link to='/' activeStyle={{ textDecoration: 'underline' }}>Blog</Link>
                  <Link to='/about' activeStyle={{ textDecoration: 'underline' }}>About Me</Link>
                </nav>
              </header>
            </>
          )
        }}
      />
    )
  }
}

export default Header
