import React from "react";

const Image = ({ post }) => {
  return (
    <div className="image-content">
      <div className="post-description">{post.description}</div>
      <div className="image-item">
        <img className="shared-img" src={`data:image/jpeg;base64,${post.imageLink.base64}`} alt="post-img-content" />
      </div>
    </div>
  );
};

export default Image;
