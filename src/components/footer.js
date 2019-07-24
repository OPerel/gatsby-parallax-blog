import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import { withController } from "react-scroll-parallax"

class Footer extends Component {
  static propTypes = {
    parallaxController: PropTypes.object,
  }

  componentDidUpdate(prevProps) {
    console.log('prev', prevProps);
    console.log('this', this.props);
    console.log(this.props.loc);
    if (prevProps.loc !== this.props.loc) {
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
