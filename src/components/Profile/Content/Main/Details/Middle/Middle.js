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
            <UserPosts posts={user.mainInfo.posts} user={user.mainInfo} />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Middle;
