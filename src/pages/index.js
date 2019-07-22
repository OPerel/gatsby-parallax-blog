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
        <Parallax y={[-400, 400]}>
          <h1>Hello Parallax!</h1>
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
