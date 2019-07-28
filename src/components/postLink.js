import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image';
import '../assets/allStyles.css';

const PostLink = ({ postData, image }) => (
  <div className="post-link">
    <p dangerouslySetInnerHTML={{ __html: postData.frontmatter.date }}></p>
    <Link to={postData.fields.slug}>
      <div className="grid">
        <div dangerouslySetInnerHTML={{ __html: postData.excerpt }}>
        </div>
        <Img fixed={image} className="post-thumbnail" />
      </div>
    </Link>
  </div>
)

export default PostLink;
