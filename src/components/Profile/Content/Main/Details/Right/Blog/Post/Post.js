import React from "react";

const Post = ({ blogPost }) => {
  return (
    <li className="blog-post">
      <div className="topic">{blogPost.topic}</div>
      <div className="text">{blogPost.text}</div>
      <div className="created">
        {blogPost.createdAt}, at {blogPost.time || "ISPRAVI"}
      </div>
    </li>
  );
};

export default Post;
