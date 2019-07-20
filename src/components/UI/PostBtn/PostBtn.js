import React from "react";

const PostBtn = ({ icon, className, count }) => {
  return (
    <div className={`post-btn ${className}`}>
      <span className="post-btn-icon">{icon}</span>
      {count && <span className="post-btn-count">{count}</span>}
    </div>
  );
};

export default PostBtn;
