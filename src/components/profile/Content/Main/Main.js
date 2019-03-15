import React from "react";

import { ProfileContentMainCover } from "components";

const Main = ({ user }) => {
  return (
    <div className="content-main">
      <ProfileContentMainCover user={user} />
    </div>
  );
};

export default Main;
