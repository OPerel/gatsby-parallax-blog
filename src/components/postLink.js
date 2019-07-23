import React from "react";
import { Link } from "gatsby";

const PostLink = ({ postData }) => {
  const excerpt = postData.excerpt.replace(/ *<h2>.*?<\/h2> */g, "");
  return (
  <div className="post-link">
    <Link to='/'>
      <h3 dangerouslySetInnerHTML={{ __html: postData.frontmatter.title }}></h3>
      <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
    </Link>
  </div>
)
}

export default PostLink;
