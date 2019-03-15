import React from "react";
import coverImg from "imgs/user-cover-img.jpg";

import { ProfileContentMainTimelineHeadline } from "components";

const Cover = ({ user }) => {
  return (
    <div className="cover">
      <div
        className="cover-img"
        style={{ backgroundImage: `url("${coverImg}")` }}
      />

      <ProfileContentMainTimelineHeadline user={user} />
    </div>
  );
};

export default Cover;
