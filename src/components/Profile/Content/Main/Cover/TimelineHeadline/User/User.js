import React from "react";

import { Avatar as UserAvatar } from "components/UI";

// Context
import { UserContext } from "components/Contexts";

const User = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div className="headline-timeline-user">
          <UserAvatar imgSrc={`data:image/jpeg;base64,${user.me.profileSettings.avatar}`} className="avatar-lg" />
          <div className="details">
            <div className="fullname">{user.me.profileSettings.name}</div>
            <div className="location">
              {user.me.profileSettings.city}, {user.me.profileSettings.country}
            </div>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default User;
