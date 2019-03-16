import React from "react";

import { ProfileContentMainCover, ProfileContentMainDetails } from "components";

const Main = ({ user }) => {
  return (
    <div className="content-main">
      <ProfileContentMainCover user={user} />
      <ProfileContentMainDetails />
    </div>
  );
};

export default Main;
