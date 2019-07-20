import React from "react";

// Context
import { UserContext } from "components/Contexts";

// Components
import { Avatar as FreindAvatar } from "components/UI";
import { SidebarFriendsOptions } from "components";

class SidebarFriends extends React.Component {
  render() {
    const user = this.context;
    const friends = user.mainInfo.friends.list;

    if (friends) {
      return (
        <ul className="sidebar-friends">
          {friends.map(friends => {
            const { id, src, badgeColor } = friends;
            return (
              <li key={id} className="friend-item">
                <FreindAvatar
                  imgSrc={src}
                  badge={{
                    badgePosition: "small small-tl",
                    status: badgeColor
                  }}
                  className="friend-avatar"
                />
              </li>
            );
          })}
          <SidebarFriendsOptions />
        </ul>
      );
    }
    return (
      <ul className="sidebar-friends-list">
        <li className="friend-item">Loading...</li>
      </ul>
    );
  }
}

SidebarFriends.contextType = UserContext;

export default SidebarFriends;
