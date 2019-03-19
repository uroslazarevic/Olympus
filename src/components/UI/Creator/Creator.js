import React from "react";

import { Origin } from "components/UI";

const Creator = ({ item, creatorClass }) => {
  return (
    <div className={`creator-block ${creatorClass}`}>
      <img className="creator-img" src={item.src} alt="post-creator" />
      <div className="info">
        <div className="creator">
          <div className="fullname">{item.fullname}</div>
          <div className="post-created">{item.created}</div>
        </div>
        {item.sharedFrom && (
          <Origin shareType={item.shareType} sharedFrom={item.sharedFrom} />
        )}
      </div>
    </div>
  );
};

export default Creator;
