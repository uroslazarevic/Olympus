import React from "react";
import { AsideNavigation, SidebarFriends, MainContent } from "components";

const Content = ({ user }) => {
  return (
    <div className="profile-content">
      <AsideNavigation />
      <MainContent user={user} />
      <SidebarFriends friends={user.mainInfo.friends.list} />
    </div>
  );
};

export default Content;
