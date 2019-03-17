import React from "react";
import coverImg from "imgs/user-cover-img.jpg";

import { TimelineHeadline } from "components";

const Cover = ({ user }) => {
  return (
    <div className="cover">
      <div
        className="cover-img"
        style={{ backgroundImage: `url("${coverImg}")` }}
      />

      <TimelineHeadline user={user} />
    </div>
  );
};

export default Cover;
