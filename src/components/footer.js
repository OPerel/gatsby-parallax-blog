import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const Footer = () => (
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

export default Footer;
