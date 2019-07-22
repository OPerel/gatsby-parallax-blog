import React from "react";
// import { Link } from "gatsby";

const PostLink = ({ postData }) => (
  <div
    style={{
      width: '75%',
      height: '100px',
      margin: '5% auto',
      padding: '40px',
      color: 'white',
      border: 'solid 1px white',
  }}>
    <h3 dangerouslySetInnerHTML={{ __html: postData.frontmatter.title }}></h3>
  </div>
)

export default PostLink;
