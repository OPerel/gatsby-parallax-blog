import React from "react";
// import { Link } from "gatsby";

import { Parallax } from 'react-scroll-parallax';
import Layout from "../components/layout";
import PostLink from '../components/postLink';
import '../assets/allStyles.css';

const IndexPage = () => (
  <Layout>
    <Parallax y={[10, -10]} className="bg-container">
      <div className="hero">
        <Parallax y={[-420, 420]}>
          <h1>Hello Parallax!</h1>
        </Parallax>
      </div>
      <div style={{ width: '75%', margin: '10% auto' }}>
        <PostLink />
        <PostLink />
        <PostLink />
        <PostLink />
        <PostLink />
      </div>
    </Parallax>
  </Layout>
)

export default IndexPage;
