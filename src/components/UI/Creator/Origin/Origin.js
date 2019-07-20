import React from "react";

const PostOrigin = ({ shareType, sharedFrom }) => {
  if (shareType === "video") {
    return (
      <div className="post-origin">
        shared a <span className="source text-stress">{sharedFrom}</span>
      </div>
    );
  }
  if (shareType === "image") {
    return (
      <div className="post-origin">
        shared a <span className="source text-stress">{sharedFrom}</span>'s{" "}
        <span className="text-stress">photo</span>
      </div>
    );
  }
  return null;
};

export default PostOrigin;
