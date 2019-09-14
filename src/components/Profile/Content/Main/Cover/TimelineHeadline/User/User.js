import React from "react";

import { Avatar as UserAvatar } from "components/UI";

// Context
import { UserContext } from "components/Contexts";

const User = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div className="headline-timeline-user">
          <UserAvatar imgSrc={user.basicInfo.picture.medium} className="avatar-lg" />
          <div className="details">
            <div className="fullname">
              {user.basicInfo.name.first} {user.basicInfo.name.last}
            </div>
            <div className="location">
              {user.basicInfo.location.city}, {user.basicInfo.location.state}
            </div>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default User;
