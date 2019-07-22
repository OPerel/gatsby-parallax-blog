import { Link, graphql, StaticQuery } from "gatsby";
import Img from 'gatsby-image';
import React from "react";
import SEO from './seo';

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
        query={graphql`{
          icon: file(relativePath:{eq: "favicon.png"}) {
            childImageSharp {
              fixed (width: 60, height: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }`}
        render={data => {
          return (
            <>
              <SEO title={this.props.siteTitle} />
              <header
                style={{
                  background: scrollPos < 150 ? `transparent` : `#222222`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <Img fixed={data.icon.childImageSharp.fixed} style={{ margin: '0 5%'}} />
                  <p style={{ margin: 0 }}>
                    {this.props.siteTitle}
                  </p>
                </div>
                <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/about'>About Me</Link>
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
