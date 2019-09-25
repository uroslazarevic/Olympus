import React from "react";

import { Avatar as UserAvatar } from "components/UI";

// Context
import { UserContext } from "components/Contexts";

const User = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div className="headline-timeline-user">
          <UserAvatar imgSrc={`data:image/jpeg;base64,${user.mainInfo.avatar}`} className="avatar-lg" />
          <div className="details">
            <div className="fullname">{user.mainInfo.name}</div>
            <div className="location">
              {/* {user.basicInfo.location.city}, {user.basicInfo.location.state} */}
              {user.mainInfo.name === "Uros Lazarevic" ? "Lazarevac, Serbia" : "Belgrade, Serbia"}
            </div>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default User;
