import React from 'react';
import { Link } from 'gatsby';
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
      <>
        <SEO title={this.props.siteTitle} />
        <header
          style={{
            background: scrollPos < 300 ? `transparent` : `#222222`
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div id='logo'></div>
            <h1 style={{ margin: 0 }}>
              {this.props.siteTitle}
            </h1>
          </div>
          <nav>
            <Link to='/' activeStyle={{ textDecoration: 'underline' }}>Blog</Link>
            <Link to='/about' activeStyle={{ textDecoration: 'underline' }}>About Me</Link>
          </nav>
        </header>
      </>
    )
  }
}

export default Header
