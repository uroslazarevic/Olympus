import React from "react";

import {
  ProfileContentMainDetailsLeft,
  ProfileContentMainDetailsMiddle,
  ProfileContentMainDetailsRight
} from "components";

const Details = () => {
  return (
    <div className="profile-details">
      <ProfileContentMainDetailsLeft />
      <ProfileContentMainDetailsMiddle />
      <ProfileContentMainDetailsRight />
    </div>
  );
};

export default Details;
