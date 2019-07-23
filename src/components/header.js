import { Link, graphql, StaticQuery } from "gatsby";
// import Img from 'gatsby-image';
import React from "react";
import SEO from './seo';
// import bgImg from '../images/favicon.png'

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
                  <div id='logo'></div>
                  <p style={{ margin: 0 }}>
                    {this.props.siteTitle}
                  </p>
                </div>
                <nav>
                  <Link to='/' activeStyle={{ textDecoration: 'underline' }}>Home</Link>
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
