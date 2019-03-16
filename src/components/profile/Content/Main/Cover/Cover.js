import React from "react";
import coverImg from "imgs/user-cover-img.jpg";

import { ProfileContentMainCoverTimelineHeadline } from "components";

const Cover = ({ user }) => {
  return (
    <div className="cover">
      <div
        className="cover-img"
        style={{ backgroundImage: `url("${coverImg}")` }}
      />

      <ProfileContentMainCoverTimelineHeadline user={user} />
    </div>
  );
};

export default Cover;
