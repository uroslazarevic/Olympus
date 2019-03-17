import React from "react";

import { ProfileCover, ProfileDetails } from "components";

const Main = ({ user }) => {
  return (
    <div className="content-main">
      <ProfileCover user={user} />
      <ProfileDetails />
    </div>
  );
};

export default Main;
