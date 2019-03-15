import React from "react";
import {
  AsideNavigation,
  SidebarFriends,
  ProfileContentMain
} from "components";

const Content = ({ user }) => {
  return (
    <div className="profile-content">
      <AsideNavigation />
      <ProfileContentMain />
      <SidebarFriends friends={user.mainInfo.friends.list} />
    </div>
  );
};

export default Content;
