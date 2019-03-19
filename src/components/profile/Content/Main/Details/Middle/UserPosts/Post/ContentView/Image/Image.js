import React from "react";

const Image = ({ post }) => {
  console.log(post);

  return (
    <div className="image-content">
      <div className="post-description">{post.content}</div>
      <div className="image-item">
        <img
          className="shared-img"
          src={post.image.src}
          alt="post-image-content"
        />
      </div>
    </div>
  );
};

export default Image;
