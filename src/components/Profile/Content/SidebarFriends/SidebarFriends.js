import React from "react";

// Context
import { UserContext } from "components/Contexts";

// Components
import { Avatar as FreindAvatar } from "components/UI";
import { SidebarFriendsOptions } from "components";

class SidebarFriends extends React.Component {
  startChat = (friendId) => {
    const { actions } = this.context;
    const userData = JSON.parse(localStorage.getItem("userData"));
    const room = `${userData.id}-${friendId}`;
    actions.onRoomJoin(room);
  };
  render() {
    const { friends } = this.context;

    if (friends) {
      return (
        <ul className="sidebar-friends">
          {friends.map((friend) => {
            const {
              id,
              profileSettings: { avatar },
            } = friend;
            return (
              <li onClick={() => this.startChat(id)} key={id} className="friend-item">
                <FreindAvatar
                  imgSrc={`data:image/jpeg;base64,${avatar}`}
                  badge={{
                    badgePosition: "small small-tl",
                    status: "bg-success",
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
