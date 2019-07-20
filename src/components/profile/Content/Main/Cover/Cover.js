import React from "react";
import coverImg from "imgs/user-cover-img.jpg";

import { TimelineHeadline } from "components";

const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-img" style={{ backgroundImage: `url("${coverImg}")` }} />
      <TimelineHeadline />
    </div>
  );
};

export default Cover;
