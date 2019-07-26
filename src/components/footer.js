import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const Footer = () => (
  <footer>
    <p>My G-Blog</p>
    <p>
      © {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
  </footer>
)

export default Footer;
