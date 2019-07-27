import React from "react";
import { Link } from 'gatsby';
import "../assets/allStyles.css"

const PostNav = ({ prev, next }) => {
  return (
    <div className="post-nav">
      {next && (
        <div className="arrow-link">
          <Link to={next.fields.slug}>
            <i className="far fa-arrow-alt-circle-left"></i>
            <span>Previous</span>
          </Link>
        </div>
      )}
      {prev && (
        <div className="arrow-link">
          <Link to={prev.fields.slug}>
            <i className="far fa-arrow-alt-circle-right"></i>
            <span>Next</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default PostNav;
