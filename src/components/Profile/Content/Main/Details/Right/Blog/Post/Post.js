import React from "react";

const Post = ({ post }) => {
  return (
    <li className="blog-post">
      <div className="topic">{post.topic}</div>
      <div className="text">{post.text}</div>
      <div className="created">
        {post.date}, at {post.time}
      </div>
    </li>
  );
};

export default Post;
