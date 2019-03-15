import React from "react";
import {
  AsideNavigation,
  SidebarFriends,
  ProfileContentMain
} from "components";

const Content = () => {
  return (
    <div className="profile-content">
      <AsideNavigation />
      <ProfileContentMain />
      <SidebarFriends />
    </div>
  );
};

export default Content;
