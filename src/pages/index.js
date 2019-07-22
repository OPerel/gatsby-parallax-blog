import React from "react";
// import { Link } from "gatsby";

import { Parallax } from 'react-scroll-parallax';
import Layout from "../components/layout";
import PostLink from '../components/postLink';
import '../assets/allStyles.css';

const IndexPage = () => (
  <Layout>
    <Parallax y={[0, 0]} className="bg-container index-layout">
      <div className="hero">
        <Parallax y={[-500, 500]}>
          <span style={{margin: '10px'}}>Hello Parallax!</span>
        </Parallax>
        <Parallax y={[0, 0]}>
          <span style={{margin: '10px'}}>Hello Parallax!</span>
        </Parallax>
      </div>
      <div className="posts">
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
