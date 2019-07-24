import React, { Component } from 'react';
import { Parallax, withController } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    parallaxController: PropTypes.object,
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.location.pathname);
    // console.log(prevProps.location.pathname);
    if (prevProps.location !== this.props.location) {
      this.props.parallaxController.update()
    }
  }

  render() {
    return (
      <footer>
        <Parallax y={["30px", "-100px"]}>
          <p>My G-Blog</p>
        </Parallax>
        <Parallax y={["30px", "-100px"]}>
          <p>
            © {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </Parallax>
      </footer>
    )
  }
}

export default withController(Footer)
