import React from "react";
import { Link } from 'gatsby';
import "../assets/allStyles.css"

const Nav = () => (
  <nav>
    <Link to='/' activeStyle={{ textDecoration: 'underline' }}>Blog</Link>
    <Link to='/about' activeStyle={{ textDecoration: 'underline' }}>About Me</Link>
  </nav>
)


export default Nav;
