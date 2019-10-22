import React from "react";
// Context
import { UserContext } from "components/Contexts";

import { UserPosts } from "components";

const Middle = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        return (
          <div className="middle">
            <UserPosts posts={user.profileData.authorPosts} user={user.me} />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Middle;
