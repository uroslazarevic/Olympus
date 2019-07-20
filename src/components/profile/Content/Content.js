import React from "react";

import { AsideNavigation, SidebarFriends, MainContent } from "components";

const Content = () => {
  return (
    <div className="profile-content">
      <AsideNavigation />
      <MainContent />
      <SidebarFriends />
    </div>
  );
};

export default Content;
