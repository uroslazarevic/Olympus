import React from "react";

const Image = ({ post }) => {
  return (
    <div className="image-content">
      <div className="post-description">{post.content}</div>
      <div className="image-item">
        <img
          className="shared-img"
          src={post.image.src}
          alt="post-img-content"
        />
      </div>
    </div>
  );
};

export default Image;
