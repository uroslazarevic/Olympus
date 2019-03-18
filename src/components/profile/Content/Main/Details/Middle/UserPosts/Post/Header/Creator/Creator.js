import React from "react";

import { PostOrigin } from "components";

const Creator = ({ item }) => {
  return (
    <div className="post-creator">
      <img className="creator-img" src={item.src} alt="post-creator" />
      <div className="info">
        <div className="creator">
          <div className="fullname">{item.fullname}</div>
          <div className="post-created">{item.created}</div>
        </div>
        <PostOrigin shareType={item.shareType} sharedFrom={item.sharedFrom} />
      </div>
    </div>
  );
};

export default Creator;
