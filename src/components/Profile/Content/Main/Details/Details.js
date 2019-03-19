import React from "react";

import {
  ProfileContentMainDetailsLeft,
  DetailsMiddle,
  DetailsRight
} from "components";

const Details = () => {
  return (
    <div className="profile-details">
      <ProfileContentMainDetailsLeft />
      <DetailsMiddle />
      <DetailsRight />
    </div>
  );
};

export default Details;
