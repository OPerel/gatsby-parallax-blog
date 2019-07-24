import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image';
import '../assets/allStyles.css';

const PostLink = ({ postData, image }) => {
  const excerpt = postData.excerpt.replace(/ *<h2>.*?<\/h2> */g, "");
  return (
  <div className="post-link">
    <Link to={postData.fields.slug}>
      <div className="grid">
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: postData.frontmatter.title }}></h3>
          <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
        </div>
        <Img fixed={image} className="post-thumbnail" />
      </div>
    </Link>
  </div>
)
}

export default PostLink;
