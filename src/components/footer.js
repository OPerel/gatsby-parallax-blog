import React from 'react';

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <div className="footer-info">
        <h5>Parallax Blog</h5>
        <span style={{ fontSize: '0.85rem' }}>© {new Date().getFullYear()}, By Ori Perelman</span>
      </div>
      <div className="contact">
        <a href="mailto: oriperelman@gmail.com">
          <i className="far fa-envelope"></i>
          <span>Drop a line.</span>
        </a>
        <a href="https://github.com/OPerel" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
          <span>Source and other projects.</span>
        </a>
      </div>
    </div>
    <div className="footer-tri" />
  </footer>
)

export default Footer;
